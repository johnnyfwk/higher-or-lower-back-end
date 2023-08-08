const {
    getAllOriginalScores,
    getSingleOriginalScoreById,
    addSingleOriginalScore,
    updateSingleOriginalScoreById,
    deleteSingleOriginalScoreById
} = require("../models/original.model");

function getOriginalScores(request, response, next) {
    getAllOriginalScores()
        .then((scores) => {
            response.status(200).send({scores});
        })
        .catch((error) => {
            next(error);
        })
}

function getOriginalScoreById(request, response, next) {
    getSingleOriginalScoreById(request.params.original_id)
        .then((score) => {
            response.status(200).send({score});
        })
        .catch((error) => {
            next(error);
        })
}

function addOriginalScore(request, response, next) {
    addSingleOriginalScore(request.body)
        .then((score) => {
            response.status(201).send({score});
        })
        .catch((error) => {
            next(error);
        })
}
function updateOriginalScoreById(request, response, next) {
    updateSingleOriginalScoreById(request.params.original_id, request.body)
        .then((score) => {
            response.status(200).send({score});
        })
        .catch((error) => {
            next(error);
        })
}

function deleteOriginalScoreById(request, response, next) {
    deleteSingleOriginalScoreById(request.params.original_id)
        .then((score) => {
            response.status(204).send({msg: "Score has been deleted."});
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getOriginalScores,
    getOriginalScoreById,
    addOriginalScore,
    updateOriginalScoreById,
    deleteOriginalScoreById
}