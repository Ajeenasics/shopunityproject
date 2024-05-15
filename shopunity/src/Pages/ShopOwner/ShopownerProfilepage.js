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
        <div className="shopownerprofilepage">
        <div className="row container d-flex justify-content-center">
          <div className="">
            <div className=" user-card-full">
            <div className="shopownerprofilepagediv">
              <div className="row   shopownerprofilepagediv1">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="">
                    <img className="" src={`http://localhost:8002/${data.shoplisence}`} style={{width:"100%",height:"300px"}}></img> 
                    </div>
                    <h6 className="f-w-600">Hembo Tingor</h6>
                    <p>Web Designer</p>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">98979989898</h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Recent</p>
                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Most Viewed</p>
                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                      <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </div>
    </div>
  );
}

export default ShopownerProfilepage;



