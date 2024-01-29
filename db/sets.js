const client = require("./client");

async function getAllSets() {
    try {
        const {rows} = await client.query(`SELECT * FROM sets;`);
        return rows;
    } catch (err) {
        throw err;
    }
}

async function getSetById(id) {
    try {
        const {rows: [set]} = await client.query(`
            SELECT * FROM sets WHERE id =$1;
        `, [id])

        return set;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllSets,
    getSetById
}