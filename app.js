const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors =require('cors')
const todo_routes=require('./api/routes/todo_routes')

mongoose.connect( 'mongodb+srv://aziz:aziz@cluster0.xawtq.mongodb.net/testgalactech?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },
  async (err, cl) => {

    if (err) {
      console.log('error de connection=' + err)
      throw err
    } else {
      console.log('connection to database')
    }
 
    var whitelist = ['http://localhost:3000',"https://frontendtest-galactech.vercel.app"]
    var corsOptions = {
      credentials: true, 
      origin: function(origin, callback) {
  
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(null, false)
        }
      }
    }
    
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/todo', todo_routes)
    app.use((req, res) => {
      res.status(404).json({ error: 'page not found' })
    })
  }
)
module.exports = app
