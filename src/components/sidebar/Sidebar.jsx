import "./sidebar.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
                src="https://wallpaperaccess.com/full/1204217.jpg"
                alt=""
            />
            <p>
                Hi we are Kunal Sheth and Zeel Shah of DEPSTAR-CSE with ID-20DCS121 & 20DCS120 and this is our project for 
                Software Group Project Subject and we have created this website using MERN stack.
            </p>
        </div>
        <div className="siderItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c) =>(
                <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            ))}
         </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <a href="https://www.facebook.com/"><i className="sidebarIcon fa-brands fa-facebook" ></i></a>
                <a href="https://www.instagram.com/"><i className="sidebarIcon fa-brands fa-instagram"></i></a>
                <a href="https://www.twitter.com/"><i className="sidebarIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.pinterest.com/"><i className="sidebarIcon fa-brands fa-pinterest-p"></i></a>
            </div>
        </div>
    </div>
  )
}
