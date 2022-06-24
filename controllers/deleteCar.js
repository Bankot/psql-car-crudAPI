const db = require("../db/dbConnect")
const badRequestError = require("../errors/badRequestError")

const deleteCar = async (req, res, next) => {
	//if authenticated
	const carId = req.body.id
		? req.body.id
		: next(new badRequestError("Not enough parameters!"))

	db.query(`DELETE FROM cars WHERE id = ${carId}`, (err, result) => {
		if (err) next(new badRequestError(err.message))

		const resultMessage = result.rowCount
			? `Succesfuly deleted a car with id: ${carId}`
			: `Couldnt delete car with id: ${carId}. Are you sure it's correct id?`
		res.send(resultMessage)
	})
}
module.exports = deleteCar
