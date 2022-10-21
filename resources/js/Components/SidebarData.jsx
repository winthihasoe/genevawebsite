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
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';



export const SidebarData = [
    {
        title: "Dashboard",
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
        title: "Elder Case",
        icon: <AccessibleIcon />,
        link: "/admin/elder-cases",
    },
    {
        title: "Child Case",
        icon: <ChildCareIcon />,
        link: "/admin/child-cases",
    },
    {
        title: "Users",
        icon: <PermContactCalendarRoundedIcon />,
        link: "/admin/users",
    },
    {
        title: "Elder Training",
        icon: <DashboardCustomizeIcon />,
        link: "/admin/elder-training",
    },
    {
        title: "Child Training",
        icon: <AutoAwesomeMosaicIcon />,
        link: "/admin/child-training",
    },
    {
        title: "Report",
        icon: <SummarizeIcon />,
        link: "/admin/reports",
    },
];
