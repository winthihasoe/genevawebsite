import React from "react";
import "../../css/app.css";
import { SidebarDataForTrainingOfficer } from "@/Components/SidebarDataForTrainingOfficer";
import { Link, usePage } from "@inertiajs/inertia-react";

function SidebarForTrainingOfficer() {
    return (
        <div className="sidebar hidden sm:-my-px sm:ml-10 sm:flex">
            <ul className="sidebarList">
                {SidebarDataForTrainingOfficer.map((val, key) => {
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

export default SidebarForTrainingOfficer;
