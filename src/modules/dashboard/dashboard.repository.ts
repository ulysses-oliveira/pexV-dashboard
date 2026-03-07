import { prisma } from '../../config/prisma'

export async function getSummary() {
  const totalRevenue = await prisma.sale.aggregate({
    _sum: {
      totalAmount: true,
    },
  })

  const totalSales = await prisma.sale.count()

  return {
    totalRevenue: totalRevenue._sum.totalAmount || 0,
    totalSales,
  }
}

export async function getSalesByDay() {
  const sales = await prisma.sale.groupBy({
    by: ['createdAt'],
    _sum: {
      totalAmount: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  return sales.map(sale => ({
    date: sale.createdAt.toISOString().split('T')[0],
    total: sale._sum.totalAmount || 0,
  }))
}

export async function getSalesByFlavor() {
  const result = await prisma.saleItem.groupBy({
    by: ['flavorId'],
    _sum: {
      quantity: true,
    },
  })

  const flavors = await prisma.flavor.findMany()

  return result.map(item => {
    const flavor = flavors.find(f => f.id === item.flavorId)

    return {
      name: flavor?.name || 'Desconhecido',
      quantity: item._sum.quantity || 0,
    }
  })
}