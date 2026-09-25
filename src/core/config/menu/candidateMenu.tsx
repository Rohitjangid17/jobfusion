import { DashboardOutlined, ProfileOutlined, FileDoneOutlined, SettingOutlined, IdcardOutlined, CustomerServiceOutlined, MessageOutlined, CalendarOutlined, FileTextOutlined, HeartOutlined, SearchOutlined, CheckCircleOutlined, SolutionOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";

export const CANDIDATE_MENU_ITEMS: MenuItem[] = [
    {
        key: "/candidate/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 20 }} />,
        label: "Dashboard",
    },

    // Find Jobs
    {
        key: "/candidate/jobs",
        icon: <SearchOutlined style={{ fontSize: 18 }} />,
        label: "Find Jobs",
        children: [
            {
                key: "/candidate/jobs/recommended",
                icon: <SolutionOutlined />,
                label: "Recommended Jobs",
            },
            {
                key: "/candidate/jobs/search",
                icon: <SearchOutlined />,
                label: "Search Jobs",
            },
            {
                key: "/candidate/jobs/saved",
                icon: <HeartOutlined />,
                label: "Saved Jobs",
            },
        ],
    },

    // Applications
    {
        key: "/candidate/applications",
        icon: <FileDoneOutlined style={{ fontSize: 18 }} />,
        label: "Applications",
        children: [
            {
                key: "/candidate/applications/applied",
                icon: <FileDoneOutlined />,
                label: "Applied Jobs",
            },
            {
                key: "/candidate/applications/shortlisted",
                icon: <CheckCircleOutlined />,
                label: "Shortlisted",
            },
            {
                key: "/candidate/applications/interviews",
                icon: <CalendarOutlined />,
                label: "Interviews",
            },
            {
                key: "/candidate/applications/offers",
                icon: <SolutionOutlined />,
                label: "Offers",
            },
        ],
    },

    // Resume
    {
        key: "/candidate/resume",
        icon: <FileTextOutlined style={{ fontSize: 18 }} />,
        label: "Resume",
        children: [
            {
                key: "/candidate/resume/my-resume",
                icon: <FileTextOutlined />,
                label: "My Resume",
            },
            {
                key: "/candidate/resume/builder",
                icon: <SolutionOutlined />,
                label: "Resume Builder",
            },
        ],
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

    // Notifications
    // {
    //     key: "/candidate/notifications",
    //     icon: <BellOutlined style={{ fontSize: 18 }} />,
    //     label: "Notifications",
    // },

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