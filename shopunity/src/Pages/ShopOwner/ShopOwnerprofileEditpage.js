import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";
import { Link } from "react-router-dom";

function ShopOwnerprofileEditpage() {
  const [data, setData] = useState({
    shopname: "",
    shopownername: "",
    shopownercontact: "",
    shopowneremail: "",
    shopowneraddress: "",
    shopregistrationnumber: " ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(states);
  };

  const shopownerid = localStorage.getItem("shopowner");
  console.log(shopownerid);
  useEffect(() => {
    axiosInstance
      .get("/get_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = () => {
    axiosInstance
      .post("/edit_a_shopowner/" + shopownerid)
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-5">
      {" "}
      <div className="shopownerprofile pt-5 ">
        <div className="pt-5">
          <div className="container border p-5 rounded">
            <div className="row">
              <div className="col">
                <label className="mt-4">Shop Name: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder={data.shopname}
                  name="shopname"
                  onChange={handleInputChange}
                ></input>
                <label className="mt-4">shopowneremail: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder={data.shopowneremail}
                  name="shopowneremail"
                  onChange={handleInputChange}
                ></input>

                <label className="mt-4">shopregistrationnumber: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none "
                  placeholder={data.shopregistrationnumber}
                  name="shopregistrationnumber"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="col">
                {" "}
                <label className="mt-4">Shop Owner Name: </label>
                <input
                  className="shopownerprofilinput form-control bg-transparent border-none"
                  placeholder={data.shopownername}
                  name="shopownername"
                  onChange={handleInputChange}
                  style={{ color: "white" }}
                ></input>
                <label className="mt-4">shopownercontact: </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder={data.shopownercontact}
                  name="shopownercontact"
                  onChange={handleInputChange}
                ></input>
                <label className="mt-4">Shop owner address : </label>
                <input
                  className="shopownerprofilinput form-control text-light bg-transparent border-none"
                  placeholder={data.shopowneraddress}
                  name="shopowneraddress"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="btn btn-light mt-4" onClick={handleEdit}>
                {" "}
                Edit{" "}
              </div>
              <Link to="/shopownerprofile">
                <div className="btn btn-secondary mt-4"> Cancel </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopOwnerprofileEditpage;
