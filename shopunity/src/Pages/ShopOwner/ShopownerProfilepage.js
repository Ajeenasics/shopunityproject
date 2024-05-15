import React, { useEffect, useState } from "react";
import axiosInstance from "../../APIS/axiosinstatnce";

function ShopownerProfilepage() {
  const [data, setData] = useState({});

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

  return (
    <div className="shopownerprofile pt-5 mt-5">
      <div>
        <div className="container border p-5 rounded">
        <img src={`http://localhost:8002/${data.shoplisence}`} style={{width:"50%",height:"150px"}}></img> 

          <div className="row">

            <div className="col">

              <label className="mt-4">Shop Name: </label>
              <input
                className="shopownerprofilinput form-control text-light bg-transparent border-none"
                placeholder={data.shopname}
              ></input>
              <label className="mt-4">shopowneremail: </label>
              <input
                className="shopownerprofilinput form-control text-light bg-transparent border-none"
                placeholder={data.shopowneremail}
              ></input>

              <label className="mt-4">shopregistrationnumber: </label>
              <input
                className="shopownerprofilinput form-control text-light bg-transparent border-none "
                placeholder={data.shopregistrationnumber}
              ></input>
            </div>
            <div className="col">
              {" "}
              <label className="mt-4">Shop Owner Name: </label>
              <input
                className="shopownerprofilinput form-control bg-transparent border-none"
                placeholder={data.shopownername}
                style={{ color: "white" }}
              ></input>
              <label className="mt-4">shopownercontact: </label>
              <input
                className="shopownerprofilinput form-control text-light bg-transparent border-none"
                placeholder={data.shopownercontact}
              ></input>
              <label className="mt-4">Shop owner address : </label>
              <input
                className="shopownerprofilinput form-control text-light bg-transparent border-none"
                placeholder={data.shopowneraddress}
              ></input>
            </div>
            <div className="btn btn-light mt-4"> Edit </div>
            <div className="btn btn-secondary mt-4"> Cancel </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopownerProfilepage;

{
}
