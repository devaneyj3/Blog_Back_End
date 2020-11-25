const db = require("../data/db_config");

const getAllFields = (table) => {
    return db(table);
};
const getFieldById = (table, id) => {
    return db(table).where({ id });
};
const postData = async (table, req) => {
    console.log(req.body);
    return await db(table).insert(req.body);
};
const clearDB = (table) => {
    return db(table).truncate();
};
module.exports = {
    getAllFields,
    clearDB,
    postData,
    getFieldById,
};
