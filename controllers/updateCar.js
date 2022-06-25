const db = require("../db/dbConnect")
const badRequestError = require("../errors/badRequestError")

const updateCar = async (req, res, next) => {
	const { id, model, price, hp } = req.body
	//if authenticated

	if (id && model && price && hp) {
		db.query(
			`UPDATE cars SET Model = '${model}',  Price = ${price},
			HorsePower = ${hp}
			WHERE id = ${id};`,
			(err, result) => {
				if (err) return next(new badRequestError(err.message))
				const resultMessage = result.rowCount
					? `Succesfuly edited car ${model}`
					: `Something went wrong!`
				res.send(resultMessage)
			}
		)
	} else {
		res.send(
			"Please provide all needed informations: id, car model, price and horsepower"
		)
	}
}

module.exports = updateCar
