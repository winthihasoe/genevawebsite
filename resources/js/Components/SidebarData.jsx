import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AccessibleIcon from "@mui/icons-material/Accessible";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SignLanguageRoundedIcon from '@mui/icons-material/SignLanguageRounded';
import BabyChangingStationRoundedIcon from '@mui/icons-material/BabyChangingStationRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import { usePage } from "@inertiajs/inertia-react";



export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/admin/dashboard",
    },
    {
        title: "Caregivers",
        icon: <GroupsIcon />,
        link: "/admin/caregivers",
    },
    {
        title: "Add Caregiver",
        icon: <GroupAddIcon />,
        link: "/admin/create-caregiver",
    },
    {
        title: "Elder Skill",
        icon: <SignLanguageRoundedIcon />,
        link: "/admin/add-elder-skills",
    },
    {
        title: "Child Skill",
        icon: <BabyChangingStationRoundedIcon />,
        link: "/admin/add-child-skills",
    },
    {
        title: "Bookings",
        icon: <BookRoundedIcon />,
        link: "/admin/all-bookings",
    },
    {
        title: "Report",
        icon: <SummarizeIcon />,
        link: "/admin/reports",
    },
    {
        title: "Elder Case",
        icon: <AccessibleIcon />,
        link: "/admin/elder_case",
    },
    {
        title: "Child Case",
        icon: <ChildCareIcon />,
        link: "/admin/child_case",
    },
    {
        title: "Users",
        icon: <PermContactCalendarRoundedIcon />,
        link: "/admin/users",
    },
];
