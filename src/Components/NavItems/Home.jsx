import React from "react";
import { NavLink } from "react-router-dom";
import "../css/HomeStyle.css";
import Footer from "./Footer";
import Navbars from "./Navbars";
import img from "../photos/demo3.jpg";

const Home = () => {
  return (
    <>
      <Navbars />
      <div className="home container-fluid">
        <div className="text">
          <section>
            <h2>Welcome to Alumni Connect</h2>
            <h1> Connect With Your Friends</h1>
            of <br />
            <p id="du">
              <b>"Dibrugarh University"</b>
            </p>
            <NavLink to="/login" className="btn">
              Get Started
            </NavLink>
          </section>
        </div>
      </div>
      <div className="container-fluid">
        <section className="bg-light mt-5" id="tourist">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 mb-4">
                {/* <h3 className="text-center mt-4 text-secondary">Our Alumnis</h3> */}
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src={img}
                      alt=""
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold-dark grey-text mt-4">
                    John Doe
                  </h4>
                  <h4 className="font-weight-bold blue-text my-3">
                    Software Developer
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src={img}
                      alt=""
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold-dark grey-text mt-4">
                    John Doe
                  </h4>
                  <h4 className="font-weight-bold blue-text my-3">
                    Software Developer
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src={img}
                      alt=""
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold-dark grey-text mt-4">
                    John Doe
                  </h4>
                  <h4 className="font-weight-bold blue-text my-3">
                    Software Developer
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
