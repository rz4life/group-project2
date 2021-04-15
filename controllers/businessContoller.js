const models = require('../models')

const businessController = {}


businessController.createBusiness = async (req, res) => {
    try {
      const business = await models.business.findOrCreate({

        name: req.body.name,
        address: req.body.address,
        businessType: req.body.businessType,
        description: req.body.description

      })
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

    } catch (error) {
      res.json(error)  
    }
}










module.exports = businessController;