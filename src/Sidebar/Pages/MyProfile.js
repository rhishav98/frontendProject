import React, { useState } from "react";
import Axios from "axios";
import Sidenav from "../SideNav";

const MyProfile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [centre, setCentre] = useState("");
  const [course, setCourse] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [currentwork, setCurrentwork] = useState("");
  const [courseyear, setCourseyear] = useState("");
  const [photo, setPhoto] = useState("");

  const displayinfo = (e) => {
    Axios.post("http://localhost:5000/userupdatedetails", {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      centre: centre,
      course: course,
      linkedin: linkedin,
      address: address,
      occupation: occupation,
      currentwork: currentwork,
      courseyear: courseyear,
      photo: photo,
    }).then((result) => {
      if (result != null) {
        window.location.reload();
      }
    });
  };
  return (
    <>
      <Sidenav />

      <div className="container">
        <form>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Centre/Department</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Centre/Department"
                onChange={(e) => {
                  setCentre(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Course</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Course"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Contact</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Contact"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Linkedin</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Linkedin"
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Address</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="City"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">State</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="State"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Occupation</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Contact No"
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Currentwork</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Currently Work At"
                onChange={(e) => {
                  setCurrentwork(e.target.value);
                }}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Course Time</label>
              <input
                type="text"
                className="form-control"
                id="start"
                placeholder="eg : 2001-2003"
                onChange={(e) => {
                  setCourseyear(e.target.value);
                }}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                id="start"
                placeholder="Profile Picture"
                onChange={(e) => {
                  setPhoto(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={displayinfo}
          >
            Submit form
          </button>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
