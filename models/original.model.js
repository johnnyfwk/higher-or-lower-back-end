const database = require("../database/connection");

function getAllOriginalScores() {
    const queryString = `
        SELECT *
        FROM original
        ORDER BY score DESC;
    `
    return database
        .query(queryString)
        .then((response) => {
            return response.rows;
        })
}

function getSingleOriginalScoreById(originalId) {
    if (isNaN(originalId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid score ID."});
    }

    const queryString = `
        SELECT *
        FROM original
        WHERE original_id = $1;
    `
    const queryValue = [originalId];
    
    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Score ID does not exist."});
            }
            return response.rows[0];
        })
}

function addSingleOriginalScore(score) {
    const queryString = `
        INSERT INTO original
            (name, score, country)
        VALUES
            ($1, $2, $3)
        RETURNING *;
    `

    const queryValues = [score.name, score.score, score.country];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            return response.rows[0];
        })
}

function updateSingleOriginalScoreById(originalId, score) {
    if (isNaN(originalId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid score ID."});
    }

    const queryString = `
        UPDATE original
        SET
            score = $1,
            country = $2
        WHERE original_id = $3
        RETURNING *;
    `
    const queryValues = [score.score, score.country, originalId];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Score ID does not exist."});
            }
            return response.rows[0];
        })
}

function deleteSingleOriginalScoreById(originalId) {
    if (isNaN(originalId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid score ID."});
    }

    const queryString = `
        DELETE FROM original
        WHERE original_id = $1
        RETURNING *;
    `
    const queryValue = [originalId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "Score ID does not exist."});
            }
            return response.rows[0];
        })
}

module.exports = {
    getAllOriginalScores,
    getSingleOriginalScoreById,
    addSingleOriginalScore,
    updateSingleOriginalScoreById,
    deleteSingleOriginalScoreById
}