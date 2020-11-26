const db = require("../data/db_config");

const getAllFields = (table) => {
    return db(table);
};
const getFieldById = (table, id) => {
    return db(table).where({ id });
};
const postData = async (table, req) => {
    return await db(table).insert(req.body);
};

const updateData = async (table, obj, id) => {
    return await db(table).update(obj).where({ id });
};
const clearDB = (table) => {
    return db(table).truncate();
};
module.exports = {
    getAllFields,
    clearDB,
    postData,
    getFieldById,
    updateData,
};
