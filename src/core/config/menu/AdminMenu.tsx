import { AppstoreOutlined, BankOutlined, TeamOutlined, IdcardOutlined, FileTextOutlined, SolutionOutlined, DatabaseOutlined, GlobalOutlined, ReadOutlined, CustomerServiceOutlined, FundOutlined, UserOutlined, SettingOutlined, BarChartOutlined, } from "@ant-design/icons";
import type { MenuItem } from "../../../shared/interfaces";
import { SIDEBAR_ICON_FONT_SIZE } from "../../../shared/constant";

export const ADMIN_MENU_ITEMS: MenuItem[] = [
    {
        key: "/admin/dashboard",
        icon: <AppstoreOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Dashboard",
    },
    {
        key: "/admin/companies",
        icon: <BankOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Companies",
    },
    {
        key: "/admin/recruiters",
        icon: <TeamOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Recruiters",
    },
    {
        key: "/admin/candidates",
        icon: <IdcardOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Candidates",
    },
    {
        key: "/admin/jobs",
        icon: <FileTextOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Jobs",
    },
    {
        key: "/admin/applications",
        icon: <SolutionOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Applications",
    },
    {
        key: "/admin/master",
        icon: <DatabaseOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Master Data",
    },
    {
        key: "/admin/locations",
        icon: <GlobalOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Locations",
    },
    {
        key: "/admin/blogs",
        icon: <ReadOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Blogs",
    },
    {
        key: "/admin/support",
        icon: <CustomerServiceOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Support",
    },
    {
        key: "/admin/reports",
        icon: <FundOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Reports",
        children: [
            {
                key: "/admin/reports/jobs",
                icon: <FileTextOutlined />,
                label: "Jobs Report",
            },
            {
                key: "/admin/reports/candidates",
                icon: <IdcardOutlined />,
                label: "Candidates Report",
            },
            {
                key: "/admin/reports/applications",
                icon: <SolutionOutlined />,
                label: "Applications Report",
            },
            {
                key: "/admin/reports/recruiters",
                icon: <TeamOutlined />,
                label: "Recruiters Report",
            },
            {
                key: "/admin/reports/companies",
                icon: <BankOutlined />,
                label: "Companies Report",
            },
            {
                key: "/admin/reports/hiring",
                icon: <BarChartOutlined />,
                label: "Hiring Report",
            },
            {
                key: "/admin/reports/job-category-location",
                icon: <GlobalOutlined />,
                label: "Job Category & Location Report",
            },
        ],
    },
    {
        key: "/admin/profile",
        icon: <UserOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "Profile",
    },
    {
        key: "/admin/settings",
        icon: <SettingOutlined style={SIDEBAR_ICON_FONT_SIZE} />,
        label: "System Settings",
    },
];
