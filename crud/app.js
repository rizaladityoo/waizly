const express = require("express")
// const expressWinston = require('express-winston')

const app = express()
const dotenv = require('dotenv').config();
const logger = require('./config/logger');

const db  = require("./config/db")
const userRouter = require('./routes/userRouter')
const loginRouter = require('./routes/loginRouter')

app.get('/', (req,res) => {throw new Error('Error')})

app.use(express.urlencoded({ extended: true}))
app.use(userRouter)
app.use(loginRouter)
app.use(function(err, req, res, next) {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});

db.authenticate().then(() => 
    logger.info('Connected to DB'),
).catch(err => {
    logger.error("Unable to connect to the database: ", err)
})

app.listen(process.env.PORT, ()=> logger.info('running at port 3000'))