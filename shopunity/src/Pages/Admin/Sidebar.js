import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    navigate("/admin");
  };
  return (
    <div>
      {" "}
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="active mt-5">
              <Link to="/admin_dashboard">Dashboard</Link>

              <Link to="/rp_list">List</Link>

              <Link to="/shopownerslist">Shop Owners List</Link>

              <Link to="/shopownerspendinglist">Shop Owners pending List</Link>

              <Link to="/wholesaledealerslist">wholesale dealers List</Link>

              <Link to="/wholesaledealerspendinglist">Wholesale Dealers Pending List</Link>
            </li>
            <li>
              <Link to="/tutorials_list">Customers List</Link>
            </li>
            <li>
              <Link to="/blog_list">Delivery Agent</Link>
              <Link>
                <div onClick={handleLogout}>Logout</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
