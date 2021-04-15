const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()




businessRoutes.post('/:userId/:typeId', businessController.createBusiness) //create business
businessRoutes.get('/', businessController.findAllBusiness) // find All business
businessRoutes.get('/:businessId', businessController.findOneBusiness) // find one business











module.exports = businessRoutes;