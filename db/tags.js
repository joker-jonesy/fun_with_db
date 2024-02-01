const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllTags() {
    try {
        return await prisma.tags.findMany();
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getAllTags
}