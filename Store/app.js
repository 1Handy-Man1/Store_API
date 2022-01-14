const express = require('express')
const app = express();
const product = require('./routes/task')
const connectDB = require('./db/connect')
const { connect } = require('./routes/task')
require('dotenv').config()

app.use(express.json())
app.use('api/v1/product', product)
app.use(express.static('public'))

const port = 5000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listing on port ${port}`))
    } catch(error){console.log(error)}
}
start()