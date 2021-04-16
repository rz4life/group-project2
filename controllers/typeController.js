const models = require('../models')

const typeController = {}

typeController.getAll = async (req, res) => {
    try {
        let types = await models.type.findAll()
        res.json({types})
    } catch (error) {
        res.json({error})
    }
}









module.exports = typeController;