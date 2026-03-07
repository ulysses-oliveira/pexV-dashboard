import { FastifyInstance } from 'fastify'
import { createSaleController, listSalesController } from './sales.controller'

export async function salesRoutes(app: FastifyInstance) {
  app.post('/', createSaleController)
  app.get('/', listSalesController)
}