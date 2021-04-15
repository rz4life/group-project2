const express = require('express')
const app = express()
const axios = require('axios')
const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.use(require('cors')())

const models = require('./models')






const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})