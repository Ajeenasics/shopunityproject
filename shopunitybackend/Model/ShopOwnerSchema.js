const mongoose=require('mongoose')

const shopownerschema=mongoose.Schema({
    shopname:{
        type:String,
        required:true
    },
    shopownername:{
        type:String,
        required:true
    },
    shopownercontact:{
        type:String,
        required:true
    },
    shopowneremail:{
        type:String,
        required:true
    },
    shopowneraddress:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("shopowners",shopownerschema)