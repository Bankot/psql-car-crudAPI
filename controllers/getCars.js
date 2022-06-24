const db = require("../db/dbConnect")
const notFoundError = require("../errors/notFoundError")

const getCars = async (req, res, next) => {
	await db.query("SELECT * FROM cars", (err, result) => {
		if (err) {
			next(new notFoundError("Bad request!"))
		} else {
			res.header("Content-Type", "application/json")
			res.send(JSON.stringify(result.rows, null, 4))
		}
	})
}

module.exports = getCars
