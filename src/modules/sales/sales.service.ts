import {
  CreateSaleInput, createSale, listSales
} from './sales.repository'

export async function createSaleService(data: CreateSaleInput) {
  if (!data.items || data.items.length === 0) {
    throw new Error('A venda precisa ter pelo menos um item')
  }

  return createSale(data)
}

export async function listSalesService() {
  return listSales()
}