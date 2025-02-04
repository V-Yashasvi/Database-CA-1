const mongoose=require('mongoose')
const items=require('./itemsSchema')

const restrauntSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    city:{
        type:Location,
        required: true
    },
    items:{
        type:[items]
    }
})

module.exports=mongoose.model('Restraunt', restrauntSchema)