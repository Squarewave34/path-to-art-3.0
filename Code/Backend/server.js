// 1
const express = require('express')

// 4
require('dotenv').config()

// 5
const mongoose = require('mongoose')

// 2
const app = express(express.json())

// app.get('/', (req, res)=>{
//     res.json({mssg: 'it works'})
// })

// 6
mongoose.connect(process.env.MONGO_URI)
// the next steps are not necessary but extra protection never hurts
    .then(()=>{
        // 3 then location fixed after 6
        app.listen(3000, ()=>{
            console.log(`connected to Mongo and listening on port 3000`)
        })
    })
    .catch((error)=>{
        console.log(`Error at server.js connecting to database: ${error}`)
    })