import { DashboardOutlined, UserOutlined, TeamOutlined, BankOutlined, ProfileOutlined, FileDoneOutlined, AppstoreOutlined, EnvironmentOutlined, BarChartOutlined, SettingOutlined, IdcardOutlined, CustomerServiceOutlined, ReadOutlined, SolutionOutlined, SafetyOutlined, AuditOutlined, KeyOutlined, } from "@ant-design/icons";

import type { MenuItem } from "../../../shared/interfaces";

export const SUPER_ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        key: "/superadmin/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        label: "Dashboard",
    },

    // User Management
    {
        key: "/superadmin/admins",
        icon: <SafetyOutlined style={{ fontSize: 18 }} />,
        label: "Admins",
    },

    // Roles & Permissions
    {
        key: "/superadmin/roles-permissions",
        icon: <KeyOutlined style={{ fontSize: 18 }} />,
        label: "Roles & Permissions",
    },

    // Companies
    {
        key: "/superadmin/companies",
        icon: <BankOutlined style={{ fontSize: 18 }} />,
        label: "Companies",
    },

    // Recruiters
    {
        key: "/superadmin/recruiters",
        icon: <TeamOutlined style={{ fontSize: 18 }} />,
        label: "Recruiters",
    },

    // Candidates
    {
        key: "/superadmin/candidates",
        icon: <UserOutlined style={{ fontSize: 18 }} />,
        label: "Candidates",
    },

    // Jobs
    {
        key: "/superadmin/jobs",
        icon: <ProfileOutlined style={{ fontSize: 18 }} />,
        label: "Jobs",
    },

    // Applications
    {
        key: "/superadmin/applications",
        icon: <FileDoneOutlined style={{ fontSize: 18 }} />,
        label: "Applications",
    },

    // Master Data
    {
        key: "/superadmin/master",
        icon: <AppstoreOutlined style={{ fontSize: 18 }} />,
        label: "Master Data",
    },

    // Locations
    {
        key: "/superadmin/locations",
        icon: <EnvironmentOutlined style={{ fontSize: 18 }} />,
        label: "Locations",
    },

    // Blogs
    {
        key: "/superadmin/blogs",
        icon: <ReadOutlined style={{ fontSize: 18 }} />,
        label: "Blogs",
    },

    // Support
    {
        key: "/superadmin/support",
        icon: <CustomerServiceOutlined style={{ fontSize: 18 }} />,
        label: "Support",
    },

    // Notifications
    // {
    //     key: "/superadmin/notifications",
    //     icon: <BellOutlined style={{ fontSize: 18 }} />,
    //     label: "Notifications",
    // },

    // Reports
    {
        key: "/superadmin/reports",
        icon: <BarChartOutlined style={{ fontSize: 18 }} />,
        label: "Reports",
        children: [
            {
                key: "/superadmin/reports/jobs",
                icon: <ProfileOutlined />,
                label: "Jobs Report",
            },
            {
                key: "/superadmin/reports/candidates",
                icon: <UserOutlined />,
                label: "Candidates Report",
            },
            {
                key: "/superadmin/reports/applications",
                icon: <FileDoneOutlined />,
                label: "Applications Report",
            },
            {
                key: "/superadmin/reports/recruiters",
                icon: <TeamOutlined />,
                label: "Recruiters Report",
            },
            {
                key: "/superadmin/reports/companies",
                icon: <BankOutlined />,
                label: "Companies Report",
            },
            {
                key: "/superadmin/reports/hiring",
                icon: <SolutionOutlined />,
                label: "Hiring Report",
            },
            {
                key: "/superadmin/reports/job-category-location",
                icon: <EnvironmentOutlined />,
                label: "Job Category & Location Report",
            },
        ],
    },

    // Audit Logs
    {
        key: "/superadmin/audit-logs",
        icon: <AuditOutlined style={{ fontSize: 18 }} />,
        label: "Audit Logs",
    },

    // Profile
    {
        key: "/superadmin/profile",
        icon: <IdcardOutlined style={{ fontSize: 18 }} />,
        label: "Profile",
    },

    // Settings
    {
        key: "/superadmin/settings",
        icon: <SettingOutlined style={{ fontSize: 18 }} />,
        label: "System Settings",
    },
];