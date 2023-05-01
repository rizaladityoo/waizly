const role = require("../models/role")
const logger = require('../config/logger');

const getAllRole = async(req, res) => {
    try {
        const getAllRole = await role.findAll({})
        res.json(getAllRole)
    } catch (error) {
        logger.error("Unable to getAllRole:", error.message)
        res.status(400).send(error)
    }
}
const createRole = async(req, res) => {
    try{
        const {name} = req.body
        const result = await role.create({
            name: name,
          });
        res.json(result)
    }catch(error){
        logger.error("Unable to createRole:", error)
        res.status(400).send(error)
    }
}
const editRole = async(req,res)=>{
    try {
        const{ name } = req.body
        const id = req.params.id
        await role.update({
            name
        })
        res.json("updated")
    } catch (error) {
        logger.error("Unable to editRole:", error.message)
        res.status(400).send(error)
    }
}
const deleteRole = async(req,res)=>{
    try {
        const id = req.params.id
        await role.destroy({
            where: {id: id}
        })
        res.json("delete success")
    } catch (error) {
        logger.error("Unable to deleteRole:", error.message)
        res.status(400).send(error)
    }
}

module.exports = {getAllRole,createRole,editRole,deleteRole};
