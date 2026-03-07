import { prisma } from '../../config/prisma'

export interface CreateSaleInput {
  paymentMethod?: string
  items: {
    flavorId: string
    quantity: number
    price: number
  }[]
}

export async function createSale(data: CreateSaleInput) {
  return prisma.sale.create({
    data: {
      totalAmount: data.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      paymentMethod: data.paymentMethod,
      items: {
        create: data.items.map(item => ({
          flavorId: item.flavorId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: {
        include: {
          flavor: true,
        },
      },
    },
  })
}

export async function listSales() {
  return prisma.sale.findMany({
    include: {
      items: {
        include: {
          flavor: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}