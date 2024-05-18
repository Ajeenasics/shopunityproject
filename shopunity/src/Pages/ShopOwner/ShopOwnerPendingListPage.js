import React,{useState,useEffect} from 'react'
import Table from "react-bootstrap/Table";
import axiosInstance from '../../APIS/axiosinstatnce';
import Sidebar from '../Admin/Sidebar';

function ShopOwnerPendingListPage() {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);
  

  function getData() {
    
      axiosInstance.get("/get_all_shopowners")
      .then((res) => {
        console.log(res, "data");
        let allShopowners = res?.data?.data || [];
        const filterPendingReqs = allShopowners.filter(
          (shopowner) => shopowner?.status == "pending"
        );
        console.log(filterPendingReqs, "data");
        setData(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }


  function handleReject(id) {
    console.log(id);
    axiosInstance
      .post("rejectshopowner/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Shopowner Registration Request Rejected";
          alert(msg);
          getData();
        } else {
          console.log("err on reject request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleAccept(id) {
    console.log("id", id);
    axiosInstance
      .post("acceptshopowner/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Shopowner Registration Request Accepted";
          alert(msg);
          getData();
        } else {
          console.log("err on accept request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }


  return (
    <div>
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div style={{ maxWidth: "77%" }} className="container">
        {data.length === 0 && (
          <h1 className="mt-5"> No Shop Owner Requests Found</h1>
        )}
        {data.length > 0 && (
          <div>
            <h3 className="mt-5 ms-3">All Shop Owner Requests</h3>
            <Table
              striped
              bordered
              hover
              className="mt-5 ms-3"
              style={{ width: "100%" }}
            >
              <thead style={{ height: "50px" }}>
                <tr>
                  <th>No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Experience Year</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                  <th>Accept</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ShopOwner, index) => {
                  return (
                    <tr key={index} className="mt-4">
                      <td>{index + 1}</td>
                      <td>
                        <img
                          className="parentimage"
                          src={""}
                        ></img>
                      </td>
                      <td>{ShopOwner.name}</td>
                      <td>{ShopOwner.email}</td>
                      <td>{ShopOwner.experienceYear}</td>
                      <td>{ShopOwner.age}</td>
                      <td>{ShopOwner.contact}</td>
                      <td>
                        <button
                          className="btn btn-success rp-request-handls-btn"
                          onClick={() => {
                            handleAccept(ShopOwner._id);
                          }}
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger rp-request-handls-btn"
                          onClick={() => {
                            handleReject(ShopOwner._id);
                          }}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default ShopOwnerPendingListPage