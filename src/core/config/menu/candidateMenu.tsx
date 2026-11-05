import { DashboardOutlined, SearchOutlined, FileDoneOutlined, SettingOutlined, IdcardOutlined, CustomerServiceOutlined, MessageOutlined, FileTextOutlined, ProfileOutlined, } from "@ant-design/icons";

import type { MenuItem } from "../../../shared/interfaces";

export const CANDIDATE_MENU_ITEMS: MenuItem[] = [
    // Dashboard
    {
        key: "/candidate/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        label: "Dashboard",
    },

    // Find Jobs - Tabs inside page
    {
        key: "/candidate/jobs",
        icon: <SearchOutlined style={{ fontSize: 18 }} />,
        label: "Find Jobs",
    },

    // Applications - Tabs inside page
    {
        key: "/candidate/applications",
        icon: <FileDoneOutlined style={{ fontSize: 18 }} />,
        label: "Applications",
    },

    // Resume - Tabs inside page
    {
        key: "/candidate/resume",
        icon: <FileTextOutlined style={{ fontSize: 18 }} />,
        label: "Resume",
    },

    // Profile
    {
        key: "/candidate/profile",
        icon: <IdcardOutlined style={{ fontSize: 18 }} />,
        label: "Profile",
    },

    // Messages
    {
        key: "/candidate/messages",
        icon: <MessageOutlined style={{ fontSize: 18 }} />,
        label: "Messages",
    },

    // Career Resources
    {
        key: "/candidate/career-resources",
        icon: <ProfileOutlined style={{ fontSize: 18 }} />,
        label: "Career Resources",
    },

    // Support
    {
        key: "/candidate/support",
        icon: <CustomerServiceOutlined style={{ fontSize: 18 }} />,
        label: "Support",
    },

    // Settings
    {
        key: "/candidate/settings",
        icon: <SettingOutlined style={{ fontSize: 18 }} />,
        label: "Settings",
    },
];