const express = require("express")
const getCars = require("../controllers/getCars")
const errorHandlerMiddleware = require("../middleware/error-handler")

const router = express.Router()

router.route("/").get((req, res) => res.send("Get Main Page"))
router.route("/getCars").get(getCars)

module.exports = router
