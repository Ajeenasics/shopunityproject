const express=require("express")
const Route=express.Router()


const wholesale=require('../Controller/wholesaleDealerController')

Route.post('/wholesaleRegister',wholesale.WholesaleDealerRegister)

module.exports=Route