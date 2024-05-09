const {response} = require('express')
const aSchema = require('../modals/animalSchema')

exports.createAnimal = (req,res) => {
    let ani = new aSchema(req.body)

    ani.save(req.body).then(response =>{
        res.json({
            message : response,
            success:true 
        })
        }).catch(err => {
            res.json({
                error:err,
                success :false
            })
    })    
}


exports.getAllAnimals = (req, res) => {
    aSchema.find().then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}

exports.UpdateAnimalById = (req, res) => {
    console.log(req.body)
    aSchema.findByIdAndUpdate(req.params.animalid,req.body, {new: true}).then(response => {
        res.send({
            response

        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}


exports.DeleteAnimalById = (req, res) => {
    aSchema.findByIdAndDelete(req.params.animalid, {new:true}).then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}