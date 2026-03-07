import { FastifyInstance } from 'fastify'
import {
  summaryController,
  salesByDayController,
  salesByFlavorController,
} from './dashboard.controller'

export async function dashboardRoutes(app: FastifyInstance) {
  app.get('/summary', summaryController)
  app.get('/sales-by-day', salesByDayController)
  app.get('/sales-by-flavor', salesByFlavorController)
}