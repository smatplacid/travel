var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.status(200).send("API funktioniert. Ich bin expressJS!");
});

module.exports = router;