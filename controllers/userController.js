const models = require('../models')

const userController = {}

//signup
userController.createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      res.json({message: 'New user created', user})
    } catch (error) {
        res.status(400)
        res.json({error: 'Email is already used by someone'})
      }
    }


 //login

 userController.login = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where:{
          email: req.body.email,
          password: req.body.password
        }
      })
      // console.log(user)
      if(user.password === req.body.password){
        res.json({message: 'login successful', user: user})
      }else{
        res.status(401)
        res.json({error:'incorrect password'})
      }
  
    } catch (error) {
      res.status(400)
      res.json({error: 'login failed'})
    }
  }




module.exports = userController;