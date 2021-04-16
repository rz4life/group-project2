const reviewController = require('../controllers/reviewController')

const express = require('express')
const reviewRoutes = express.Router()


reviewRoutes.post('/:businessId', reviewController.createReview)










module.exports = reviewRoutes;