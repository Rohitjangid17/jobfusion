import { AppstoreOutlined, FileTextOutlined, IdcardOutlined, SolutionOutlined, CalendarOutlined, MessageOutlined, FundOutlined, FundProjectionScreenOutlined, PieChartOutlined, TeamOutlined, RiseOutlined, BankOutlined, UserOutlined, CustomerServiceOutlined, SettingOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";
import { SIDEBAR_ICON_FONT_SIZE } from "../../../shared/constant";

export const RECRUITER_MENU_ITEMS: MenuItem[] = [
    // Dashboard
    {
        key: "/recruiter/dashboard",
        icon: <AppstoreOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Dashboard",
    },

    // Jobs
    {
        key: "/recruiter/jobs",
        icon: <FileTextOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Jobs",
    },

    // Candidates
    {
        key: "/recruiter/candidates",
        icon: <IdcardOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Candidates",
    },

    // Applications
    {
        key: "/recruiter/applications",
        icon: <SolutionOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Applications",
    },

    // Interviews
    {
        key: "/recruiter/interviews",
        icon: <CalendarOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Interviews",
    },

    // Messages
    {
        key: "/recruiter/messages",
        icon: <MessageOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Messages",
    },

    // Reports
    {
        key: "/recruiter/reports",
        icon: <FundOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
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
        icon: <BankOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Company Profile",
    },

    // Profile
    {
        key: "/recruiter/profile",
        icon: <UserOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Profile",
    },

    // Support
    {
        key: "/recruiter/support",
        icon: <CustomerServiceOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Support",
    },

    // Settings
    {
        key: "/recruiter/settings",
        icon: <SettingOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Settings",
    },
];
