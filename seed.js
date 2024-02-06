const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const sets = [
    {
        name: "OGEL",
        price: 10
    },
    {
        name: "LEGOS",
        price: 100
    },
]

const generateData = async () => {
    await prisma.sets.createMany({
        data: sets
    })
}

generateData();
