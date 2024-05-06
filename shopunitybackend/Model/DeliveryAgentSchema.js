const mongoose=require('mongoose')

const deliveryagentschema=mongoose.Schema({
agentname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},contact:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
vehicletype:{
    type:String,
    required:true
},
lisenseNumber:{
    type:String,
    required:true
},
deliveryareas:{
    type:String,
    required:true
}
})

module.exports=mongoose.model("deliveryagents",deliveryagentschema)