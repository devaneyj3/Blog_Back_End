// Update with your config settings.
require("dotenv").config();

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./dev.sqlite3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
    },

    testing: {
        client: "sqlite3",
        connection: {
            filename: "./test.sqlite3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        migrations: {
            directory: "./data/migrations",
        },
    },
};
