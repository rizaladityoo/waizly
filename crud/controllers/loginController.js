const User = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async(req,res)=> {
    const { username, password} = req.body
    try {
        const user = await User.findOne({
            where: {
              username: username,
            },
          });

          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }

          const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
          );

          if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!",
            });
          }
      
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        res.json({ accessToken: accessToken });
    } catch (error) {
        logger.error("Login error:", err)
    }
}

module.exports = {login}

