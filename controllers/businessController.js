const models = require('../models')

const businessController = {}


businessController.createBusiness = async (req, res) => {
    try {
      const business = await models.business.create({

        name: req.body.name,
        address: req.body.address,
        businessType: req.body.businessType,
        description: req.body.description,
        typeId: req.params.typeId,
        userId: req.params.userId

      })
      console.log(business)

      if (business){

        const user = await models.user.findOne({
            where:{
                id: req.params.userId
            }
          })
          console.log (user)

      let type = await models.type.findOne({
        where:{
          id: req.params.typeId
        }
      })
      console.log (type)
      await business.setUser(user)
      await business.setType(type)
     }
      res.json({message: 'New business created', business})
    } catch (error) {
        res.status(400)
        res.json({error: 'Could not create business'})
      }
}

businessController.findAllBusiness = async (req, res) => {

    try {
        
        const business = await models.business.findAll()

        res.json({message: "All business", business})

    } catch (error) {
        res.json(error)
        
    }
}


businessController.findOneBusiness = async (req, res) => {
  try {
      
     const business = await models.business.findOne({

      where: {
          id: req.params.businessId
      }
     }) 

     const user = await business.getUser()

    console.log (user)
     res.json({message: "single business", business, user})

  } catch (error) {
    res.json(error)  
  }
}

businessController.findReviewsUsers = async (req, res) => {
  try {
      
     const business = await models.business.findOne({

      where: {
          id: req.params.businessId
      }
     }) 


     let reviews = await business.getReviews({order:[['id', 'DESC']],include:models.user})
     //get all reviews + get all users
     //review id should be in a descending order so that newest review can go to the very top

     res.json({business, reviews})

  } catch (error) {
    res.json(error)  
  }
}











module.exports = businessController;