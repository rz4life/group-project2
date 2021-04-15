const reviewController = require('../controllers/reviewController')

const express = require('express')
const reviewRoutes = express.Router()


reviewRoutes.post('/', reviewController.createReview)










module.exports = reviewRoutes;