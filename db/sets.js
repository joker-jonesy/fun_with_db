const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllSets() {
    try {
        return await prisma.sets.findMany();
    } catch (err) {
        throw err;
    }
}

async function getSetById(id) {
    try {
        return await prisma.sets.findFirst({
            where:{
                id:Number(id)
            }
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllSets,
    getSetById
}