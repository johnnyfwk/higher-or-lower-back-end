const database = require("./connection");
const { original } = require("./data/index");
const format = require("pg-format");

// Drop all tables
function dropTableOriginal() {
    return database
        .query("DROP TABLE IF EXISTS original;")
}
// Drop all tables


// Create all tables
function createTableOriginal() {
    const queryString = `
        CREATE TABLE IF NOT EXISTS original (
            original_id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            score INT NOT NULL,
            country TEXT NOT NULL
        );
    `
    return database
        .query(queryString)
}
// Create all tables


// Seed all tables
function seedTableOriginal(original) {
    const queryValues = original.map((player) => {
        const originalArray = [player.name, player.score, player.country];
        return originalArray;
    })

    const queryStringAndValues = format(`
        INSERT INTO original
            (name, score, country)
        VALUES
            %L
        RETURNING *;
    `, queryValues);

    return database
        .query(queryStringAndValues)
}
// Seed all tables


function dropCreateAndSeedAllTables() {
    return dropTableOriginal() 
        .then(() => {
            return createTableOriginal();
        })
        .then(() => {
            return seedTableOriginal(original);
        })
        .then(() => {
            database.end();
        })
}

dropCreateAndSeedAllTables();