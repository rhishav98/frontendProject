import React from "react";
import Navbars from "./Navbars";
import "../css/More.css";
const More = () => {
  return (
    <>
      <Navbars />
      <div className="visit container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <h5>Alumni Assist</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-centre">
                <h3>To be a Student Co-ordinator </h3>
                <p>
                  <h6>* only for Current Student</h6>
                </p>
              </th>

              <td>
                <h4>Click here</h4>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" className="text-centre">
                <h3>Send Query</h3>
                <p></p>
              </th>

              <td>
                <h4>Click here</h4>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-centre">
                <h3>Campus Visit </h3>
                <p>
                  <h6>*for Alumni</h6>
                </p>
              </th>

              <td>
                <h4>Click here</h4>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" className="text-centre">
                <h3>Share Achivement </h3>
              </th>

              <td>
                <h4>Click here</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default More;
