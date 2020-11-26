const notFound = (res) => {
    res.status(404).send("No entries found");
};

const dbError = (res) => {
    res.status(500).send("There is a problem with the database");
};
module.exports = {
    notFound,
    dbError,
};
