exports.up = function (knex) {
    return knex.schema.createTable("blog_post", (table) => {
        table.increments();
        table.string("title").notNullable();
        table.string("body").notNullable();
        table.timestamp("created_at");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("blog_post");
};
