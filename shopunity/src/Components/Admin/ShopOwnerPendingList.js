import React from "react";
import AdminMainNav from "../../Pages/Navs/AdminMainNav";
import Sidebar from "../../Pages/Admin/Sidebar";
import Footer from "../../Pages/Footer";
import ShopOwnerPendingListPage from "../../Pages/ShopOwner/ShopOwnerPendingListPage";
function ShopOwnerPendingList() {
  return (
    <div>
      <AdminMainNav />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          < ShopOwnerPendingListPage/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopOwnerPendingList;
