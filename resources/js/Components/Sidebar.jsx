import React from "react";
import "../../css/app.css";
import { SidebarData } from "@/Components/SidebarData";
import { Link, usePage } from "@inertiajs/inertia-react";

function Sidebar() {
    return (
        <div className="sidebar hidden sm:-my-px sm:ml-10 sm:flex">
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <Link href={val.link} key={key}>
                            <li
                                
                                className="row"
                                id={
                                    window.location.pathname == val.link
                                        ? "active"
                                        : ""
                                }
                            >
                                {" "}
                                
                                <div id="icon">{val.icon}</div>{" "}
                                <div id="title">{val.title}</div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
