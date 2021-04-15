const businessController = require('../controllers/businessController')

const express = require('express')
const businessRoutes = express.Router()




businessRoutes.post('/', businessController.createBusiness) //create business
businessRoutes.get('/business', businessController.findAllBusiness) // find All business
businessRoutes.get('/business/:businessId', businessController.findOneBusiness) // find one business











module.exports = businessRoutes;