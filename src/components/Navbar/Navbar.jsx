import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    // อ้างอิง ul ที่เป็น nav-menu กับ menuRef เพื่อเอามาเปลี่ยน Style
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            {/* ปุ่มเปิดเมนูสำหรับ mobile */}
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            {/* เอา ul อันนี้อ้างอิงกับ menuRef */}
            <ul ref = {menuRef} className="nav-menu">
                {/* ปุ่มปิดเมนูสำหรับ mobile */}
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li>
                    <AnchorLink className = "anchor-link" href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu==="home"?<img src={underline}/>:<></>}
                </li>
                <li>
                    {/* offset : คือระยะห่างด้านบนให้กำหนดว่าจะเอาห่างเท่าไร */}
                    <AnchorLink className = "anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About Me</p>
                    </AnchorLink>
                    {menu==="about"?<img src={underline}/>:<></>}
                </li>
                <li>
                    <AnchorLink className = "anchor-link" offset={50} href="#services">
                        <p onClick={() => setMenu("services")}>Service</p>
                    </AnchorLink>
                    {menu==="services"?<img src={underline}/>:<></>}
                </li>
                <li>
                    <AnchorLink className = "anchor-link" offset={50} href="#work">
                        <p onClick={() => setMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu==="work"?<img src={underline}/>:<></>}
                </li>
                <li>
                    <AnchorLink className = "anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu==="contact"?<img src={underline}/>:<></>}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className = "anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
            </div>
        </div>
    )
}

export default Navbar