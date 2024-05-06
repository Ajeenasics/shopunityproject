const mongoose = require("mongoose");

const customerschema = mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  customeremail: {
    type: String,
    required: true,
  },
  customercontact: {
    type: String,
    required: true,
  },
  customerpassword: {
    type: String,
    required: true,
  },
  customeraddress:{
    type:String,
    required:true
  },
  customerpincode:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("customers", customerschema);
