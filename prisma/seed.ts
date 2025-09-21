import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@arbat.app" },
    update: {},
    create: { email: "test@arbat.app", name: "Test User" },
  });

  await prisma.listing.createMany({
    data: [
      {
        title: "iPhone 13, 128 ГБ",
        description: "Состояние отличное, без сколов.",
        price: 459900,
        category: "Электроника",
        city: "Краснодар",
        images: ["https://picsum.photos/seed/iphone13/800/600"] as any,
        userId: user.id,
      },
      {
        title: "Аренда студии 25 м²",
        description: "Центр, новый дом.",
        price: 2500000,
        category: "Недвижимость",
        city: "Краснодар",
        images: ["https://picsum.photos/seed/studio/800/600"] as any,
        userId: user.id,
      },
    ],
  });
}

main().finally(() => prisma.$disconnect());
