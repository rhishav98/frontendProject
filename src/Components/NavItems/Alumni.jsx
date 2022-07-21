import React from "react";
import Navbars from "./Navbars";
import img from "../photos/demo3.jpg";
// import { Form, FormControl, Button, Navbar } from "react-bootstrap";
// import { useState } from "react";
// import Axios from "axios";

const Alumni = () => {
  // const [alumniList, setAlumniList] = useState([]);

  // Axios.get("http://localhost:8001/alumnis").then((response) => {
  //   setAlumniList(response.data);
  //   console.log("clicked");
  // });
  // // const getInfo = () => {

  // };
  return (
    <>
      <Navbars />
      <section className="bg-light mt-5" id="tourist">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center mt-4 text-secondary">Our Alumnis</h3>
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
                <p className="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  nesciunt, reiciendis sit nostrum voluptate dolorum eius
                  corporis assumenda, quibusdam voluptatum earum possimus neque
                  officia soluta vero recusandae perspiciatis rerum. Quaerat.{" "}
                </p>
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
                <p className="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  nesciunt, reiciendis sit nostrum voluptate dolorum eius
                  corporis assumenda, quibusdam voluptatum earum possimus neque
                  officia soluta vero recusandae perspiciatis rerum. Quaerat.{" "}
                </p>
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
                <p className="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  nesciunt, reiciendis sit nostrum voluptate dolorum eius
                  corporis assumenda, quibusdam voluptatum earum possimus neque
                  officia soluta vero recusandae perspiciatis rerum. Quaerat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;
