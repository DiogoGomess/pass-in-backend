import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: '20a28195-15d5-40d4-8162-de4351476da5',
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para developers",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log("Database seeded|");
    prisma.$disconnect();
})