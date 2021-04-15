const models = require('../models')

const reviewController = {}

reviewController.createReview = async (req, res) => {
    try {
      const review  = await models.review.create({
        headline: req.body.headline,
        content: req.body.content,  
        rating: req.body.rating,
        businessId: req.body.businessId,
        userId: `${req.body.userId}`
      })
      res.json({message: 'New review is created ', review})
    } catch (error) {
        res.status(400)
        res.json({error: 'Review can not be crated'})
      }
    }


module.exports = reviewController;