const express = require("express")
const app = express()
const dotenv = require('dotenv').config();

const db  = require("./config/db")
const userRouter = require('./routes/userRouter')
const loginRouter = require('./routes/loginRouter')

app.get('/', (req,res) => res.send("this is response"))

app.use(express.urlencoded({ extended: true}))
app.use(userRouter)
app.use(loginRouter)

db.authenticate().then(() => 
    console.log("Connected to DB")
).catch(err => {
    console.error("Unable to connect to the database:", err)
})

app.listen(process.env.PORT, ()=> console.log("running at port 3000"))