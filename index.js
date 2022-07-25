const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database');
const { viaAuthRoute } = require('./constants');
const userRouter = require('./routes/user');

// require('dotenv').config();

const app=express();
app.use(express.json())
app.use(cors())
app.use(viaAuthRoute)
app.use(userRouter);

connectDatabase().then(()=>{
    app.listen(3001,()=>{
        console.log(`server running at port 3001`)
    })
})
