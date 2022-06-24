const db = require("../db/dbConnect")
const badRequestError = require("../errors/badRequestError")
const updateCar = require("./updateCar")

const createCar = async (req, res, next) => {
	const { model, price, hp } = req.body
	//if authenticated
	db.query(
		`INSERT INTO cars (Model, Price, HorsePower) VALUES( '${model}' , ${price}, ${hp} );`,
		(err, result) => {
			if (err) return next(new badRequestError(err.message))
			const resultMessage = result.rowCount
				? `Succesfuly added car ${model}`
				: `Something went wrong!`
			res.send(resultMessage)
		}
	)
}

module.exports = updateCar
