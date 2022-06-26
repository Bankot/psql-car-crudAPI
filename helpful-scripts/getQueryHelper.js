// I know its not scalable at all, gonna work on it!

const queryCreator = (query, orderOptions) => {
	const { orderBy, model, desc } = query

	if ((orderBy && orderOptions.includes(orderBy.toUpperCase())) || model) {
		let result = ""

		if (model) result = `WHERE Model iLIKE '%${model}%' `
		if (orderBy) result += `ORDER BY ${orderBy} `
		if (desc !== undefined) result += ` DESC `
		// return query
		console.log(result)
		return result
	}
}
module.exports = queryCreator
