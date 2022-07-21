import React from "react";
import Card from "./CardModel";
import CardData from "./CardData";
import Navbars from "./Navbars";
const Gallery = () => {
  return (
    <>
      <Navbars />
      <h1> Ours Alumni </h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CardData.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
