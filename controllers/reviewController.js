const models = require('../models')

const reviewController = {}

reviewController.createReview = async (req, res) => {
    try {
      const business = await models.business.findOne({
        where: {
            id:req.params.businessId
        }
    })

    const review  = await models.review.create({
      headline: req.body.headline,
      content: req.body.content,  
      rating: req.body.rating,
      businessId: `${req.body.businessId}`,
      userId: `${req.body.userId}`
    })

    const user = await models.user.findOne({
      where:{
        id:req.body.userId
      }
    })

      res.json({message:'Review created!', business, review, user})
    } catch (error) {
        res.status(400)
        res.json({error: 'Review can not be crated'})
      }
    }


module.exports = reviewController;