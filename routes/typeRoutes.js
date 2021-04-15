const typeController = require('../controllers/typeController')

const express = require('express')
const typeRoutes = express.Router()




typeRoutes.get('/', typeController.getAll) //signup








module.exports = typeRoutes;