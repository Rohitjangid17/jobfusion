import { DashboardOutlined, UserOutlined, TeamOutlined, BankOutlined, ProfileOutlined, FileDoneOutlined, AppstoreOutlined, EnvironmentOutlined, BellOutlined, BarChartOutlined, SettingOutlined, IdcardOutlined, CustomerServiceOutlined, ReadOutlined, SolutionOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";

export const ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        key: "/admin/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        label: "Dashboard",
    },

    // Companies
    {
        key: "/admin/companies",
        icon: <BankOutlined style={{ fontSize: 18 }} />,
        label: "Companies",
    },

    // Recruiters
    {
        key: "/admin/recruiters",
        icon: <TeamOutlined style={{ fontSize: 18 }} />,
        label: "Recruiters",
    },

    // Candidates
    {
        key: "/admin/candidates",
        icon: <UserOutlined style={{ fontSize: 18 }} />,
        label: "Candidates",
    },

    // Jobs
    {
        key: "/admin/jobs",
        icon: <ProfileOutlined style={{ fontSize: 18 }} />,
        label: "Jobs",
    },

    // Applications
    {
        key: "/admin/applications",
        icon: <FileDoneOutlined style={{ fontSize: 18 }} />,
        label: "Applications",
    },

    // Master Data
    {
        key: "/admin/master",
        icon: <AppstoreOutlined style={{ fontSize: 18 }} />,
        label: "Master Data",
    },

    // Locations
    {
        key: "/admin/locations",
        icon: <EnvironmentOutlined style={{ fontSize: 18 }} />,
        label: "Locations",
    },

    // Blogs
    {
        key: "/admin/blogs",
        icon: <ReadOutlined style={{ fontSize: 18 }} />,
        label: "Blogs",
    },

    // Support
    {
        key: "/admin/support",
        icon: <CustomerServiceOutlined style={{ fontSize: 18 }} />,
        label: "Support",
    },

    // Notifications
    {
        key: "/admin/notifications",
        icon: <BellOutlined style={{ fontSize: 18 }} />,
        label: "Notifications",
    },

    // Reports
    {
        key: "/admin/reports",
        icon: <BarChartOutlined style={{ fontSize: 18 }} />,
        label: "Reports",
        children: [
            {
                key: "/admin/reports/jobs",
                icon: <ProfileOutlined />,
                label: "Jobs",
            },
            {
                key: "/admin/reports/candidates",
                icon: <UserOutlined />,
                label: "Candidates",
            },
            {
                key: "/admin/reports/applications",
                icon: <FileDoneOutlined />,
                label: "Applications",
            },
            {
                key: "/admin/reports/recruiters",
                icon: <TeamOutlined />,
                label: "Recruiters",
            },
            {
                key: "/admin/reports/companies",
                icon: <BankOutlined />,
                label: "Companies",
            },
            {
                key: "/admin/reports/hiring",
                icon: <SolutionOutlined />,
                label: "Hiring",
            },
            {
                key: "/admin/reports/job-category-location",
                icon: <EnvironmentOutlined />,
                label: "Job Category & Location",
            },
        ],
    },

    // Profile
    {
        key: "/admin/profile",
        icon: <IdcardOutlined style={{ fontSize: 18 }} />,
        label: "Profile",
    },

    // Settings
    {
        key: "/admin/settings",
        icon: <SettingOutlined style={{ fontSize: 18 }} />,
        label: "Settings",
    },
];
