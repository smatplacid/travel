var express = require("express");
var TranslateRouter = express.Router();

TranslateRouter.get("/", function (req, res, next) {
    res.status(200).send("Hier die Übersetzung.");
});

module.exports = TranslateRouter;