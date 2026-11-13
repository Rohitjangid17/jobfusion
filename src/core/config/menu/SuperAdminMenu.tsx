import { AppstoreOutlined, UserSwitchOutlined, SafetyCertificateOutlined, BankOutlined, TeamOutlined, IdcardOutlined, FileTextOutlined, SolutionOutlined, DatabaseOutlined, GlobalOutlined, ReadOutlined, CustomerServiceOutlined, FundOutlined, HistoryOutlined, UserOutlined, SettingOutlined, BarChartOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";
import { SIDEBAR_ICON_FONT_SIZE } from "../../../shared/constant";

export const SUPER_ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        key: "/superadmin/dashboard",
        icon: <AppstoreOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Dashboard",
    },
    {
        key: "/superadmin/admins",
        icon: <UserSwitchOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Admins",
    },
    {
        key: "/superadmin/roles-permissions",
        icon: <SafetyCertificateOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Roles & Permissions",
    },
    {
        key: "/superadmin/companies",
        icon: <BankOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Companies",
    },
    {
        key: "/superadmin/recruiters",
        icon: <TeamOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Recruiters",
    },
    {
        key: "/superadmin/candidates",
        icon: <IdcardOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Candidates",
    },
    {
        key: "/superadmin/jobs",
        icon: <FileTextOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Jobs",
    },
    {
        key: "/superadmin/applications",
        icon: <SolutionOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Applications",
    },
    {
        key: "/superadmin/master",
        icon: <DatabaseOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Master Data",
    },
    {
        key: "/superadmin/locations",
        icon: <GlobalOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Locations",
    },
    {
        key: "/superadmin/blogs",
        icon: <ReadOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Blogs",
    },
    {
        key: "/superadmin/support",
        icon: <CustomerServiceOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Support",
    },
    {
        key: "/superadmin/reports",
        icon: <FundOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Reports",
        children: [
            {
                key: "/superadmin/reports/jobs",
                icon: <FileTextOutlined />,
                label: "Jobs Report",
            },
            {
                key: "/superadmin/reports/candidates",
                icon: <IdcardOutlined />,
                label: "Candidates Report",
            },
            {
                key: "/superadmin/reports/applications",
                icon: <SolutionOutlined />,
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
                icon: <BarChartOutlined />,
                label: "Hiring Report",
            },
            {
                key: "/superadmin/reports/job-category-location",
                icon: <GlobalOutlined />,
                label: "Job Category & Location Report",
            },
        ],
    },
    {
        key: "/superadmin/audit-logs",
        icon: <HistoryOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Audit Logs",
    },
    {
        key: "/superadmin/profile",
        icon: <UserOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Profile",
    },
    {
        key: "/superadmin/settings",
        icon: <SettingOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "System Settings",
    },
];
