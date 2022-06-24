const express = require("express")
const deleteCar = require("../controllers/deleteCar")
const getCars = require("../controllers/getCars")
const createCar = require("../controllers/createCar")
const updateCar = require("../controllers/updateCar")

const router = express.Router()

router
	.route("/cars")
	.get(getCars)
	.delete(deleteCar)
	.post(createCar)
	.patch(updateCar)

module.exports = router
