const mongoose = require('mongoose')

const animalSchema=new mongoose.Schema({
      animalName:{
        type:String,
        required : true 
      },
      gender :{
        type : String,
        required : true 
      },
      colour:{
        type: String,
        required : true
      }
})

const animal=mongoose.model('Animal',animalSchema)
module.exports = animal;