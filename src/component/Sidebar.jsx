import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
}from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaUsersCog } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"GENERAL",
            icon:<FaTh/>
        },
        {
            path:"/transaction",
            name:"TRANSACTION",
            icon:<MdPayment />
        },
        {
            path:"/print",
            name:"PRINT",
            icon:<IoMdPrint />
        },
        {
            path:"/taxes & gst",
            name:"TAXES & GST ",
            icon:<FaMoneyBillAlt/>
        },
        {
            path:"/user management",
            name:"USER MANAGEMENT",
            icon:<FaUserAlt/>
        },
        {
            path:"/transaction message",
            name:"TRANSACTION MESSAGE",
            icon:<FaCommentAlt/>
        },
        {
            path:"/party",
            name:"PARTY",
            icon:<GiPartyPopper />

        },
        {
            path:"/item",
            name:"ITEM",
            icon:<FaUsersCog />
            
        },
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "270px" : "60px"}} className="sidebar">
               <div className="top_section">
               <p style={{display: isOpen ? "block" : "none"}} className="logo">Setting</p>
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className="search">
                   <IoIosSearch onClick={toggle}/>
                       {/* <FaBars onClick={toggle}/> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;