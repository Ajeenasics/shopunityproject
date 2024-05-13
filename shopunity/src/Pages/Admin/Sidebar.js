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

              <Link to="/rp_pendinglist">Shop Owners pending List</Link>

              <Link to="/counsiler_list">Customers List</Link>

              <Link to="/counsiler_accepted">wholesale dealers List</Link>

              <Link to="/parent_list">Parents List</Link>
            </li>
            <li>
              <Link to="/tutorials_list">Tutorials</Link>
            </li>
            <li>
              <Link to="/blog_list">Blogs</Link>
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
