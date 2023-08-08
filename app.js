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

app.get("/api/original/scores", getOriginalScores);
app.get("/api/original/scores/:original_id", getOriginalScoreById);
app.post("/api/original/scores", addOriginalScore);
app.patch("/api/original/scores/:original_id", updateOriginalScoreById);
app.delete("/api/original/scores/:original_id", deleteOriginalScoreById);

app.all("*", handle404Errors);

app.use(handleCustomErrors);
app.use(handle500Errors);

module.exports = app;