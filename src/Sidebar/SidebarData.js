import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as AiChat from "react-icons/ai";
export const SidebarData = [{
        title: "MyProfile",
        path: "/MyProfile",
        icons: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "Message",
        path: "/Message",
        icons: < AiChat.AiFillMessage / > ,
        cName: "nav-text",
    },

    {
        title: "Notifications",
        path: "/Notifications",
        icons: < IoIcons.IoIosNotifications / > ,
        cName: "nav-text",
    },
    {
        title: "Payment",
        path: "/Payment",
        icons: < MdIcons.MdPayment / > ,
        cName: "nav-text",
    },
    {
        title: "Post",
        path: "/Post",
        icons: < MdIcons.MdSystemUpdateAlt / > ,
        cName: "nav-text",
    },
    {
        title: "Log Out",
        path: "/Logout",
        icons: < FiIcons.FiLogOut / > ,
        cName: "nav-text",
    },
];