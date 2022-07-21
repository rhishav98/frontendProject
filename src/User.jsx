import React from "react";
import Home from "./Components/NavItems/Home";
import { Switch, Route } from "react-router-dom";
import NewsRoom from "./Components/NavItems/NewsRoom";
import About from "./Components/NavItems/About";
import Contact from "./Components/NavItems/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Eshop from "./Components/NavItems/Eshop";
import Gallery from "./Components/NavItems/Gallery";
import Login from "./Components/Forms/Login";
import Registration from "./Components/Forms/Registration";

import SideNav from "./Sidebar/SideNav";
import MyProfile from "./Sidebar/Pages/MyProfile";
import Notifications from "./Sidebar/Pages/Notifications";
import Payment from "./Sidebar/Pages/Payment";
import Post from "./Sidebar/Pages/Post";
import Logout from "./Sidebar/Pages/Logout";
import Alumni from "./Components/NavItems/Alumni";
import Ecards from "./Components/Ecommerce/Ecards";
import More from "./Components/NavItems/More";
import Buynow from "./Components/Ecart/Buynow";

const User = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/home" component={Home} />{" "}
        <Route exact path="/about" component={About} />{" "}
        <Route exact path="/contact" component={Contact} />{" "}
        <Route exact path="/alumni" component={Alumni} />{" "}
        <Route exact path="/newsroom" component={NewsRoom} />{" "}
        <Route exact path="/gallery" component={Gallery} />{" "}
        <Route exact path="/eshop" component={Eshop} />{" "}
        <Route exact path="/more" component={More} />{" "}
        <Route exact path="/login" component={Login} />{" "}
        <Route exact path="/logout" component={Logout} />{" "}
        <Route exact path="/registration" component={Registration} />{" "}
        <Route exact path="/sidenav" component={SideNav} />{" "}
        <Route exact path="/myprofile" component={MyProfile} />{" "}
        <Route path="/notifications" component={Notifications} />{" "}
        <Route path="/payment" component={Payment} />{" "}
        <Route exact path="/post" component={Post} />{" "}
        <Route exact path="/ecards" component={Ecards} />{" "}
        <Route exact path="/buynow" component={Buynow} />{" "}
      </Switch>{" "}
    </>
  );
};

export default User;
