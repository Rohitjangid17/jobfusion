
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
    Layout,
    Menu,
    Dropdown,
    Avatar,
    Badge,
    Button,
    Select,
} from "antd";

import {
    BellOutlined,
    DownOutlined,
    LogoutOutlined,
    UpOutlined,
    UserOutlined,
    GlobalOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
} from "@ant-design/icons";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { MenuItem } from "../../shared/interfaces";

const { Header, Sider, Content } = Layout;

interface DashboardLayoutProps {
    menuItems: MenuItem[];
    children: ReactNode;
}

const languageOptions = [
    { value: "en", label: "English", flag: "US" },
    { value: "hi", label: "हिन्दी", flag: "IN" },
    { value: "fr", label: "Français", flag: "FR" },
    { value: "de", label: "Deutsch", flag: "DE" },
    { value: "es", label: "Español", flag: "ES" },
    { value: "ar", label: "العربية", flag: "SA" },
];

const DashboardLayout = ({
    menuItems,
    children,
}: DashboardLayoutProps) => {
    const { t, i18n } = useTranslation();

    const [pageTitle, setPageTitle] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(
        Boolean(document.fullscreenElement)
    );

    const navigate = useNavigate();
    const location = useLocation();

    const menuRef = useRef<HTMLDivElement>(null);

    // Sidebar menu scrolling
    const handleMenuScroll = (direction: "up" | "down") => {
        const menuContainer = menuRef.current;

        if (!menuContainer) return;

        menuContainer.scrollBy({
            top: direction === "up" ? -200 : 200,
            behavior: "smooth",
        });
    };

    // Update page title
    useEffect(() => {
        const currentMenu = [
            ...menuItems,
            ...menuItems.flatMap((item) => item.children ?? []),
        ].find((item) => item.key === location.pathname);

        setPageTitle(currentMenu?.label ?? t("dashboard"));
    }, [location.pathname, menuItems, t]);

    // Track fullscreen state, including when user presses Escape
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(Boolean(document.fullscreenElement));
        };

        document.addEventListener(
            "fullscreenchange",
            handleFullscreenChange
        );

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    // Toggle fullscreen
    const handleFullscreenToggle = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.error("Fullscreen toggle failed:", error);
        }
    };

    // Change application language
    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    const profileItems = [
        {
            key: "profile",
            label: (
                <Link to="/admin/profile">
                    {t("myProfile")}
                </Link>
            ),
        },
        {
            key: "account",
            label: (
                <Link to="/admin/settings">
                    {t("accountSettings")}
                </Link>
            ),
        },
        {
            type: "divider" as const,
        },
        {
            key: "logout",
            danger: true,
            icon: <LogoutOutlined />,
            label: t("logout"),
        },
    ];

    const handleProfileClick = () => {
        console.log("profile clicked!");
    };

    return (
        <Layout className="h-screen bg-gradient-to-tr from-[#eef2f7] via-[#f4f7fa] to-[#dce6f5] p-5 gap-5">

            {/* Sidebar */}
            <Sider
                collapsible
                collapsed
                trigger={null}
                width={72}
                collapsedWidth={72}
                theme="light"
                className="shadow-sm overflow-hidden rounded-[20px] sidebar-sider"
            >
                <div className="flex h-full min-h-0 flex-col overflow-hidden">

                    {/* Logo */}
                    <div className="h-16 shrink-0 flex items-center justify-center border-b">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-10 h-10 object-contain"
                        />
                    </div>

                    {/* Scroll Up Button */}
                    <div className="shrink-0 flex justify-center pt-2">
                        <Button
                            type="text"
                            shape="circle"
                            icon={<UpOutlined className="!text-sm" />}
                            onClick={() => handleMenuScroll("up")}
                            className="!text-[#00163D] !bg-white !shadow-md hover:!shadow-lg hover:!bg-white transition-all duration-200"
                        />
                    </div>

                    {/* Scrollable Menu */}
                    <div
                        ref={menuRef}
                        className="sidebar-menu-scroll flex-1 min-h-0"
                    >
                        <Menu
                            mode="inline"
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                            onClick={({ key }) => navigate(key)}
                            className="sidebar"
                        />
                    </div>

                    {/* Scroll Down Button */}
                    <div className="shrink-0 flex justify-center pb-2">
                        <Button
                            type="text"
                            shape="circle"
                            icon={<DownOutlined className="!text-sm" />}
                            onClick={() => handleMenuScroll("down")}
                            className="!text-[#00163D] !bg-white !shadow-md hover:!shadow-lg hover:!bg-white transition-all duration-200"
                        />
                    </div>

                </div>
            </Sider>

            {/* Main Layout */}
            <Layout className="bg-transparent gap-4">

                {/* Header */}
                <Header className="!h-[72px] !bg-transparent !px-0 !py-3">
                    <div className="flex h-full w-full items-center justify-between gap-4">

                        {/* Page Title */}
                        <div className="min-w-0">
                            <h1 className="truncate text-xl font-semibold text-[#0F172A] sm:text-2xl">
                                {pageTitle}
                            </h1>
                        </div>

                        {/* Header Actions */}
                        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                            {/* Language Selector */}
                            <Select
                                value={i18n.language?.split("-")[0] || "en"}
                                onChange={handleLanguageChange}
                                options={languageOptions}
                                suffixIcon={<GlobalOutlined />}
                                popupMatchSelectWidth={false}
                                className="!rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                                size="large"
                                variant="outlined"
                                style={{ width: 125 }}
                                aria-label={t("language")}
                            />

                            {/* Fullscreen Toggle */}
                            <Button
                                type="default"
                                shape="circle"
                                size="large"
                                title={
                                    isFullscreen
                                        ? t("exitFullscreen")
                                        : t("fullscreen")
                                }
                                aria-label={
                                    isFullscreen
                                        ? t("exitFullscreen")
                                        : t("fullscreen")
                                }
                                icon={
                                    isFullscreen
                                        ? <FullscreenExitOutlined />
                                        : <FullscreenOutlined />
                                }
                                onClick={handleFullscreenToggle}
                                className="!h-10 !w-10 !border-[#D1D6DC] !bg-white !text-[#475569] hover:!bg-[#F8FAFC]"
                            />

                            {/* Notifications */}
                            <Dropdown
                                trigger={["click"]}
                                placement="bottomRight"
                                menu={{
                                    items: [
                                        {
                                            key: "notification-1",
                                            label: (
                                                <div className="w-[260px]">
                                                    <p className="mb-1 font-medium text-[#0F172A]">
                                                        {t("newRecruiter")}
                                                    </p>
                                                    <span className="text-xs text-[#64748B]">
                                                        5 minutes ago
                                                    </span>
                                                </div>
                                            ),
                                        },
                                        {
                                            key: "notification-2",
                                            label: (
                                                <div className="w-[260px]">
                                                    <p className="mb-1 font-medium text-[#0F172A]">
                                                        {t("newJobApproval")}
                                                    </p>
                                                    <span className="text-xs text-[#64748B]">
                                                        20 minutes ago
                                                    </span>
                                                </div>
                                            ),
                                        },
                                    ],
                                }}
                            >
                                <button
                                    type="button"
                                    aria-label={t("notifications")}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[#D1D6DC] bg-white text-[#475569] shadow-none transition hover:bg-[#F8FAFC]"
                                >
                                    <Badge
                                        count={3}
                                        size="small"
                                        offset={[-2, 2]}
                                    >
                                        <BellOutlined className="text-lg" />
                                    </Badge>
                                </button>
                            </Dropdown>

                            {/* Profile */}
                            <Dropdown
                                trigger={["click"]}
                                placement="bottomRight"
                                menu={{
                                    items: profileItems,
                                    onClick: handleProfileClick,
                                }}
                            >
                                <button
                                    type="button"
                                    className="flex items-center gap-2 rounded-full border-0 bg-transparent p-1 transition hover:bg-white"
                                >
                                    <Avatar
                                        size={40}
                                        icon={<UserOutlined />}
                                        className="!bg-[#0052CC] !text-white"
                                    />

                                    <div className="hidden text-left lg:block">
                                        <p className="mb-0 text-sm font-medium text-[#0F172A]">
                                            {t("adminUser")}
                                        </p>
                                        <p className="mb-0 text-xs text-[#64748B]">
                                            {t("administrator")}
                                        </p>
                                    </div>

                                    <DownOutlined className="hidden text-[10px] text-[#64748B] lg:block" />
                                </button>
                            </Dropdown>

                        </div>
                    </div>
                </Header>

                {/* Page Content */}
                <Content>{children}</Content>

            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
