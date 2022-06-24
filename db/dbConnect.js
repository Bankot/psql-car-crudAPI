const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
	user: "express",
	host: `localhost`,
	database: "psql_car_crudapi",
	password: `2341`,
	port: 5432,
})

module.exports = {
	query: (text, params) => pool.query(text, params),
}
