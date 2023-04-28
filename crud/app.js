const express = require("express")
const app = express()
const dotenv = require('dotenv').config();
const logger = require('./config/logger');

const db  = require("./config/db")
const userRouter = require('./routes/userRouter')
const loginRouter = require('./routes/loginRouter')

app.get('/', (req,res) => res.send("this is response"))

app.use(express.urlencoded({ extended: true}))
app.use(userRouter)
app.use(loginRouter)

db.authenticate().then(() => 
    logger.info('Connected to DB')
).catch(err => {
    logger.error("Unable to connect to the database:", err)
})

app.listen(process.env.PORT, ()=> logger.info('running at port 3000'))