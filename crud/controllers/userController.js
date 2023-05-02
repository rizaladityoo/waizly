const user = require("../models/user")
const bcrypt = require('bcrypt')
const logger = require('../config/logger');

const getAllUser = async(req, res) => {
    try {
        const getAllUser = await user.findAll({})
        res.json(getAllUser)
    } catch (error) {
        logger.error("Unable to getAllUser:", error)
        res.status(400).send(error)
    }
}
const createUser = async(req, res) => {
    
    try{
        const { email, password, roleid} = req.body
        const result = await user.create({
            // username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
            roleId: 1,
          });
        res.json(result)
    }catch(error){
        logger.error("Unable to createUser:", error)
        res.status(400).send(error)
    }
}
const editUser = async(req,res)=>{
    try {
        const{ email, password } = req.body
        const id = req.params.id
        await user.update({
            email, password
        })
        res.json("updated")
    } catch (error) {
        logger.error("Unable to editUser:", error)
        res.status(400).send(error)
    }
}
const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        await user.destroy({
            where: {id: id}
        })
        res.json("delete success")
    } catch (error) {
        logger.error("Unable to deleteUser:", error)
        res.status(400).send(error)
    }
}

module.exports = {getAllUser,createUser,editUser,deleteUser};
