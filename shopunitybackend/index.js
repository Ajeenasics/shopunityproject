const express =require("express")
const app=express()
const port=8002
const bodyparser=require("body-parser")
const cors=require("cors")
const db=require("./DBConnection")

app.use(cors())
app.use(bodyparser.json())

const route=require('./Routes/route')
app.use('/',route)

app.listen(port,()=>{
    console.log(
    `${port} port is created`
    );
})