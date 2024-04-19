import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";
function Sidebar({bgColor, color}) {
  return (
    <>
    <div className="side_bar_container" style={{backgroundColor:`${bgColor}`, color: `${color}`}}>
        <div className="top_container">
            <div className="items" ><FaHome className='icons'/>Home</div>
            <div className="items"><IoIosNotifications className='icons'/>Notification</div>
            <div className="items"><FaShoppingCart className='icons'/>Shop</div>
            <div className="items"><BiSolidConversation className='icons'/>Conversation</div>
            <div className="items"><IoWalletSharp className='icons'/>Wallet</div>
            <div className="items"><MdSubscriptions className='icons'/>Subscription</div>
            <div className="items"><CgProfile className='icons'/>My Profile</div>
        </div>
        <div className="bottom_container items"><RiLogoutBoxRFill className='icons'/>Log Out</div>
    </div>
    </>
  )
}

export default Sidebar