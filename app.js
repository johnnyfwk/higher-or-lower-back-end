const express = require("express");
const app = express();
const cors = require("cors");

const {
    getOriginalScores,
    getOriginalScoreById,
    addOriginalScore,
    updateOriginalScoreById,
    deleteOriginalScoreById
} = require("./controllers/original.controller");

const {
    handle404Errors,
    handleCustomErrors,
    handle500Errors
} = require("./controllers/errors.controller");

app.use(cors());

app.use(express.json());

app.get("/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original", getOriginalScores);
app.get("/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original/:original_id", getOriginalScoreById);
app.post("/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original", addOriginalScore);
app.patch("/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original/:original_id", updateOriginalScoreById);
app.delete("/W2eR9tY4uI7oP1aS8dF3gH6jK5lQ0/original/:original_id", deleteOriginalScoreById);

app.all("*", handle404Errors);

app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;