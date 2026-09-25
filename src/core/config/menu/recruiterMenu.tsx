import { DashboardOutlined, UserOutlined, BankOutlined, ProfileOutlined, FileDoneOutlined, BarChartOutlined, SettingOutlined, IdcardOutlined, CustomerServiceOutlined, MessageOutlined, CalendarOutlined, SolutionOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";

export const RECRUITER_MENU_ITEMS: MenuItem[] = [
    {
        key: "/recruiter/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        label: "Dashboard",
    },

    // Jobs
    {
        key: "/recruiter/jobs",
        icon: <ProfileOutlined style={{ fontSize: 18 }} />,
        label: "Jobs"
    },

    // Candidates
    {
        key: "/recruiter/candidates",
        icon: <UserOutlined style={{ fontSize: 18 }} />,
        label: "Candidates",
    },

    // Applications
    {
        key: "/recruiter/applications",
        icon: <FileDoneOutlined style={{ fontSize: 18 }} />,
        label: "Applications",
    },

    // Interviews
    {
        key: "/recruiter/interviews",
        icon: <CalendarOutlined style={{ fontSize: 18 }} />,
        label: "Interviews",
    },

    // Messages
    {
        key: "/recruiter/messages",
        icon: <MessageOutlined style={{ fontSize: 18 }} />,
        label: "Messages",
    },

    // Notifications
    // {
    //     key: "/recruiter/notifications",
    //     icon: <BellOutlined style={{ fontSize: 18 }} />,
    //     label: "Notifications",
    // },

    // Reports
    {
        key: "/recruiter/reports",
        icon: <BarChartOutlined style={{ fontSize: 18 }} />,
        label: "Reports",
        children: [
            {
                key: "/recruiter/reports/jobs",
                icon: <ProfileOutlined />,
                label: "Jobs",
            },
            {
                key: "/recruiter/reports/applications",
                icon: <FileDoneOutlined />,
                label: "Applications",
            },
            {
                key: "/recruiter/reports/hiring",
                icon: <SolutionOutlined />,
                label: "Hiring",
            },
        ],
    },

    // Company
    {
        key: "/recruiter/company-profile",
        icon: <BankOutlined style={{ fontSize: 18 }} />,
        label: "Company Profile",
    },

    // Profile
    {
        key: "/recruiter/profile",
        icon: <IdcardOutlined style={{ fontSize: 18 }} />,
        label: "Profile",
    },

    // Support
    {
        key: "/recruiter/support",
        icon: <CustomerServiceOutlined style={{ fontSize: 18 }} />,
        label: "Support",
    },

    // Settings
    {
        key: "/recruiter/settings",
        icon: <SettingOutlined style={{ fontSize: 18 }} />,
        label: "Settings",
    },
];