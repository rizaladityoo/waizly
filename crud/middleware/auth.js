const jwt = require('jsonwebtoken')
const auth = (req,res,next) => {
    try {
        console.log(req.headers.authorization)
        let token = req.headers.authorization
        if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token, process.env.TOKEN_SECRET)
            req.roleId = user.roleId
            req.email = user.email
        }else{
            res.status(401).json({message: "Unauthorized User 1"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unauthorized User"})
    }
}
module.exports = auth