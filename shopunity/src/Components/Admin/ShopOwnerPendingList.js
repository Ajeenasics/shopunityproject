import React from "react";
import AdminMainNav from "../../Pages/Navs/AdminMainNav";
import Sidebar from "../../Pages/Admin/Sidebar";
import Footer from "../../Pages/Footer";
import ShopOwnerPendingListPage from "../../Pages/ShopOwner/ShopOwnerPendingListPage";
function ShopOwnerPendingList() {
  return (
    <div>
      <AdminMainNav />

      <ShopOwnerPendingListPage />

      <Footer />
    </div>
  );
}

export default ShopOwnerPendingList;
