import { AppstoreOutlined, SearchOutlined, SolutionOutlined, SettingOutlined, CustomerServiceOutlined, MessageOutlined, FileTextOutlined, ReadOutlined, UserOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";
import { SIDEBAR_ICON_FONT_SIZE } from "../../../shared/constant";

export const CANDIDATE_MENU_ITEMS: MenuItem[] = [
    // Dashboard
    {
        key: "/candidate/dashboard",
        icon: <AppstoreOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Dashboard",
    },

    // Find Jobs
    {
        key: "/candidate/jobs",
        icon: <SearchOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Find Jobs",
    },

    // Applications
    {
        key: "/candidate/applications",
        icon: <SolutionOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Applications",
    },

    // Resume
    {
        key: "/candidate/resume",
        icon: <FileTextOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Resume",
    },

    // Profile
    {
        key: "/candidate/profile",
        icon: <UserOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Profile",
    },

    // Messages
    {
        key: "/candidate/messages",
        icon: <MessageOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Messages",
    },

    // Career Resources
    {
        key: "/candidate/career-resources",
        icon: <ReadOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Career Resources",
    },

    // Support
    {
        key: "/candidate/support",
        icon: <CustomerServiceOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Support",
    },

    // Settings
    {
        key: "/candidate/settings",
        icon: <SettingOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Settings",
    },
];
