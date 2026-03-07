import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createSaleService,
  listSalesService,
} from './sales.service'
import { CreateSaleInput } from './sales.repository'

export async function createSaleController(
  request: FastifyRequest<{ Body: CreateSaleInput }>,
  reply: FastifyReply
) {
  try {
    const sale = await createSaleService(request.body)

    return reply.status(201).send(sale)
  } catch (error: any) {
    return reply.status(400).send({
      message: error.message,
    })
  }
}

export async function listSalesController(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const sales = await listSalesService()
  return reply.send(sales)
}