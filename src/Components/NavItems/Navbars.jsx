import React from "react";
import { NavLink } from "react-router-dom";
import "./UserIndex.css";

const Navbars = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <NavLink className="navbar-brand" to="#">
                <h3>Alumni Connect</h3>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/About"
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/More"
                    >
                      More
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Alumni"
                    >
                      Alumni
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/NewsRoom"
                    >
                      News Room
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Gallery"
                    >
                      Gallery
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Eshop"
                    >
                      Eshop
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbars;
