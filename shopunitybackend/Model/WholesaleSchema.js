const mongoose=require('mongoose')

const wholesaledealerschema=mongoose.Schema({
    companyname:{
        type:String,
        required:true
    },
    lisencenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("wholesaledealers",wholesaledealerschema)