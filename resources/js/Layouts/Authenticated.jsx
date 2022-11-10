import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import "../../css/app.css";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({ auth, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen app">
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="shrink-0 flex items-center flex">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                            </Link>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-1500"
                                            >
                                                {auth.user.name}
 
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route("editProfileFromAdmin")} as="button" method="get">Profile</Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("caregivers")}
                            active={route().current("caregivers")}
                        >
                            Caregivers
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("createCaregiver")}
                            active={route().current("createCaregiver")}
                        >
                            Add Caregiver
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("showElderSkill")}
                            active={route().current("showElderSkill")}
                        >
                            Elder Care skill
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("showChildSkill")}
                            active={route().current("showChildSkill")}
                        >
                            Child Care skill
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-2 space-y-1">
                        <ResponsiveNavLink
                            href={route("allBooking")}
                            active={route().current("allBooking")}
                        >
                            Bookings
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                <Link href={route('editProfileFromAdmin')} as="button">
                                    {auth.user.name}
                                </Link>
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="main-content-container">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}
