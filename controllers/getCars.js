const db = require("../db/dbConnect")
const notFoundError = require("../errors/notFoundError")
const queryCreator = require("../helpful-scripts/getQueryHelper")

/*/ accepted query params: orderBy: <'price', 'horsepower'>,
by default ordered ASCENDING, to order it DESCENDING use param desc=true
can be grouped just by model name, if you pass param model = <'model name'>
sample call : .../api/cars?orderBy=price&model=Passat&desc=true
/*/

const getCars = async (req, res, next) => {
	const paramQuery = queryCreator(req.query, ["PRICE", "HORSEPOWER"])
	await db.query(`SELECT * FROM cars ${paramQuery}`, (err, result) => {
		if (err) {
			next(new notFoundError(err.message))
		} else {
			res.header("Content-Type", "application/json")
			res.send(JSON.stringify(result.rows, null, 4))
		}
	})
}

module.exports = getCars
