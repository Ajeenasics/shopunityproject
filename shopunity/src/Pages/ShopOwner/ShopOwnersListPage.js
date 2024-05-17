import React,{useState,useEffect} from 'react'
import Table from "react-bootstrap/Table";
import axiosInstance from '../../APIS/axiosinstatnce';
import Sidebar from '../Admin/Sidebar';

function ShopOwnersListPage() {

  const [ShopOwner, SetShopOwner] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("/get_all_shopowners")
      .then((res) => {
        console.log("res", res);

        let allShopOwners = res?.data?.data || [];
        const filterShopowner = allShopOwners.filter(
          (ShopOwner) => ShopOwner?.status == "accepted"
        );
        console.log(filterShopowner, "data");
        SetShopOwner(filterShopowner);
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
          {ShopOwner.length === 0 && (
            <h1 className="mt-5"> No ShopOwner Found</h1>
          )}
          {ShopOwner.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">All ShopOwner List</h3>
              <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th>shopname</th>
                    <th>shopownername</th>
                    <th>Name</th>
                    <th>shopowneraddress</th>
                    <th>Experience Year</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {ShopOwner.map((ShopOwner, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="parentimage"
                            alt="img"
                            src={
                              ShopOwner.profilePicture
                                ? BASE_URL + ShopOwner.profilePicture.originalname
                                : img
                            }
                          ></img>
                        </td>
                        <td>{ShopOwner.name}</td>
                        <td>{ShopOwner.email}</td>
                        <td>{ShopOwner.shopowneraddress}</td>
                        <td>{ShopOwner.age}</td>
                        <td>{ShopOwner.contact}</td>
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

  );
}

export default ShopOwnersListPage;
