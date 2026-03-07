import { prisma } from "../src/config/prisma"

async function main() {
  // Limpar banco
  await prisma.saleItem.deleteMany()
  await prisma.sale.deleteMany()
  await prisma.flavor.deleteMany()

  // Criar sabores
  const morango = await prisma.flavor.create({
    data: { name: 'Morango', cost: 2 }
  })

  const chocolate = await prisma.flavor.create({
    data: { name: 'Chocolate', cost: 2.5 }
  })

  const coco = await prisma.flavor.create({
    data: { name: 'Coco', cost: 1.8 }
  })

  const flavors = [morango, chocolate, coco]

  // Criar vendas aleatórias
  for (let i = 0; i < 30; i++) {
    const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)]
    const quantity = Math.floor(Math.random() * 5) + 1
    const price = 5

    await prisma.sale.create({
      data: {
        totalAmount: quantity * price,
        paymentMethod: Math.random() > 0.5 ? 'PIX' : 'Cartão',
        createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 15),
        items: {
          create: {
            flavorId: randomFlavor.id,
            quantity,
            price
          }
        }
      }
    })
  }

  console.log('✅ Seed finalizado com sucesso!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })