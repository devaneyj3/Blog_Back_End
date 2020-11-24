const db = require("../data/db_config");

const getAllFields = (table) => {
    return db(table);
};
module.exports = {
    getAllFields,
};
