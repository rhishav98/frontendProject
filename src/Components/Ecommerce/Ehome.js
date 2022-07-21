import React from "react";
import Header from "../Ecommerce/Header";
import { Switch, Route } from "react-router-dom";
import Ecards from "../Ecommerce/Ecards";
import EcardDetails from "../Ecommerce/EcardDetails";
const Eshop = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/ecards" component={Ecards} />
          <Route exact path="/ecarddetails" component={EcardDetails} />
        </Switch>
      </div>
    </>
  );
};

export default Eshop;
