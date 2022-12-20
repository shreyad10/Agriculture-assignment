const propertyModel = require( '../models/PropertyModels/propertyModel')
const createProperty = async function(req,res){
   try {
    let data = req.body
    let {ownerName, totalArea, availableArea, usedArea} = data

    let property = await propertyModel.create(data)
    res.status(201).send({status:true, data: property})
   } catch (error) {
    res.status(500).send({status:false, error: error.message})
   }
}

module.exports = {createProperty}