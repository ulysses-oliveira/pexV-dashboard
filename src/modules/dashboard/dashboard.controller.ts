import { FastifyReply, FastifyRequest } from 'fastify'
import {
  getSummaryService,
  getSalesByDayService,
  getSalesByFlavorService,
} from './dashboard.service'

export async function summaryController(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSummaryService()
  return reply.send(data)
}

export async function salesByDayController(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSalesByDayService()
  return reply.send(data)
}

export async function salesByFlavorController(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSalesByFlavorService()
  return reply.send(data)
}