const { publicAction } = require('../actions')
const Result = require('../utils/result')

exports.createEntry = async (req, res, next) => {
    try {
		let result = new Result()
		await publicAction.createEntry(result, req.body)
		return res.status(result.status).send(result)
	} catch (error) {
		next(error)
	}
}

exports.getEntry = async (req, res, next) => {
	try {
		let result = new Result()
		await publicAction.getEntry(result, req.params.id)
		return res.status(result.status).send(result)
	} catch (error) {
		next(error)
	}
}

exports.getSessions = async (req, res, next) => {
	try {
		let result = new Result()
		await publicAction.getSessions(result)
		return res.status(result.status).send(result)
	} catch (error) {
		next(error)
	}
}
