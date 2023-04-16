const User = require("../models/User")
const bcrypt = require('bcrypt')

const getAllUser = async(req, res) => {
    try {
        const getAllUser = await User.findAll({})
        res.json(getAllUser)
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}
const createUser = async(req, res) => {
    try{
        const { username, email, password} = req.body
        const user = await User.create({
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
          });
        // const newUser = new User({
        //     username, email, password
        // })
        // await newUser.save()
        res.json(user)
    }catch(error){
        console.error(error.message)
        res.status(400).send(error)
    }
}
const editUser = async(req,res)=>{
    try {
        const{ email, password } = req.body
        const id = req.params.id
        await User.update({
            username, email, password
        })
        res.json("updated")
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}
const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        await User.destroy({
            where: {id: id}
        })
        res.json("delete success")
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

module.exports = {getAllUser,createUser,editUser,deleteUser};
