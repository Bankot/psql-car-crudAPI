const queryCreator = (query) => {
	const { orderBy, model, desc } = query
	const arrOfOrderOptions = ["PRICE", "HORSEPOWER"]
	if ((orderBy && arrOfOrderOptions.includes(orderBy.toUpperCase())) || model) {
		let result = ""

		if (model) result = `WHERE Model LIKE '%${model}%' `
		if (orderBy) result += `ORDER BY ${orderBy} `
		if (desc !== undefined) result += ` DESC `
		// return query
		return result
	}
}
module.exports = queryCreator
