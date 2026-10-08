import { DashboardOutlined, SolutionOutlined, UserOutlined, FileDoneOutlined, CalendarOutlined, MessageOutlined, BarChartOutlined, FundProjectionScreenOutlined, PieChartOutlined, TeamOutlined, RiseOutlined, BankOutlined, IdcardOutlined, CustomerServiceOutlined, SettingOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";

export const RECRUITER_MENU_ITEMS: MenuItem[] = [
    // Dashboard
    {
        key: "/recruiter/dashboard",
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        label: "Dashboard",
    },

    // Jobs
    {
        key: "/recruiter/jobs",
        icon: <SolutionOutlined style={{ fontSize: 18 }} />,
        label: "Jobs",
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

    // Reports
    {
        key: "/recruiter/reports",
        icon: <BarChartOutlined style={{ fontSize: 18 }} />,
        label: "Reports",
        children: [
            {
                key: "/recruiter/reports/job-performance",
                icon: <FundProjectionScreenOutlined />,
                label: "Job Performance",
            },
            {
                key: "/recruiter/reports/application-analytics",
                icon: <PieChartOutlined />,
                label: "Application Analytics",
            },
            {
                key: "/recruiter/reports/candidate-analytics",
                icon: <TeamOutlined />,
                label: "Candidate Analytics",
            },
            {
                key: "/recruiter/reports/hiring-analytics",
                icon: <RiseOutlined />,
                label: "Hiring Analytics",
            },
            {
                key: "/recruiter/reports/interview-analytics",
                icon: <CalendarOutlined />,
                label: "Interview Analytics",
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