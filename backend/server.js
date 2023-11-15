const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const  connectDB = require('./config/db')
const port = process.env.PORT || 8000
const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`server started on ${port}`))
