const shopownerschema = require("../Model/ShopOwnerSchema");

const shopeOwnerRegister = (req, res) => {
  const shopowner = new shopownerschema({
    shopname: req.body.shopname,
    shopownername: req.body.shopownername,
    shopownercontact: req.body.shopownercontact,
    shopowneremail: req.body.shopowneremail,
    shopowneraddress: req.body.shopowneraddress,
    shopregistrationnumber:req.body.shopregistrationnumber,
    shoplisence:req.body.shoplisence,
    shopownerpassword: req.body.shopownerpassword,
  });
  shopowner
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Register Successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Please type valid data",
        data: err,
      });
    });
};

const ShopeOwnerLogin = async (req, res) => {
  try {
    const { shopowneremail, shopownerpassword } = req.body;
    console.log(req.body);
    const shopowner = await shopownerschema.findOne({
      shopowneremail: shopowneremail,
    });
    console.log(shopowner.shopownerpassword);
    if (shopowner) {
      if (shopowner.shopownerpassword == shopownerpassword) {
        const token = jwt.sign(
          {
            shopowneremail: shopowner.shopowneremail,
            shopownerpassword: shopowner.shopownerpassword,
          },
          "secret_key",
          { expiresIn: 86400 }
        );
        return res
          .status(200)
          .json({ message: "Login successful", token, id: customer._id });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: "shop owner does not exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: "shop owner does not exist" });
  }
};

const getAllShopOwners = (req, res) => {
  shopownerschema
    .find({})
    .then((result) => {
      res.json({
        status: 200,
        data: result,
        message: "find",
      });
    })
    .catch((err) => {
      res.json({ status: 500, message: "not find", data: err });
    });
};

const getAshopowner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  shopownerschema
    .findById(shopownerid)
    .then((result) => {
      res.json({
        status: 200,
        message: "find",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "not find",
        data: err,
      });
    });
};

const EditAShopOwner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  shopownerschema
    .findByIdAndUpdate(shopownerid, {
      shopname: req.body.shopname,
      shopownername: req.body.shopownername,
      shopownercontact: req.body.shopownercontact,
      shopowneremail: req.body.shopowneremail,
      shopowneraddress: req.body.shopowneraddress,
      shopownerpassword: req.body.shopownerpassword,
    })
    .then((result) => {
      res.json({
        status: 200,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "Failed to Update",
      });
    });
};

const DeleteAShopOwner = (req, res) => {
  const shopownerid = req.params.shopownerid;
  shopownerschema
    .findByIdAndDelete(shopownerid)
    .then((result) => {
      res.json({
        status: 200,
        message: "deleted sucesfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        message: "not deleted",
      });
    });
};

module.exports = {
  shopeOwnerRegister,
  ShopeOwnerLogin,
  getAllShopOwners,
  EditAShopOwner,
  getAshopowner,
  DeleteAShopOwner,
};
