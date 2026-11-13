
import { Layout, Menu, Dropdown, Avatar, Badge, Button } from "antd";
import { BellOutlined, DownOutlined, LogoutOutlined, UpOutlined, UserOutlined, } from "@ant-design/icons";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { MenuItem } from "../../shared/interfaces";

const { Header, Sider, Content } = Layout;

interface DashboardLayoutProps {
    menuItems: MenuItem[];
    children: ReactNode;
}

const DashboardLayout = ({ menuItems, children }: DashboardLayoutProps) => {
    const [pageTitle, setPageTitle] = useState<string>("");
    const [canScrollUp, setCanScrollUp] = useState<boolean>(false);
    const [canScrollDown, setCanScrollDown] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Menu scroll reference
    const menuRef = useRef<HTMLDivElement>(null);

    // Scroll menu on button click

    const updateScrollButtons = () => {
        const container = menuRef.current;

        if (!container) return;

        setCanScrollUp(container.scrollTop > 0);

        setCanScrollDown(
            container.scrollTop + container.clientHeight < container.scrollHeight - 1
        );
    };

    const handleMenuScroll = (direction: "up" | "down") => {
        const menuContainer = menuRef.current;

        if (!menuContainer) return;

        menuContainer.scrollBy({
            top: direction === "up" ? -200 : 200,
            behavior: "smooth",
        });
    };

    const profileItems = [
        {
            key: "profile",
            label: <Link to="/admin/profile">My Profile</Link>,
        },
        {
            key: "account",
            label: <Link to="/admin/settings">Account Settings</Link>,
        },
        {
            type: "divider" as const,
        },
        {
            key: "logout",
            danger: true,
            icon: <LogoutOutlined />,
            label: "Logout",
        },
    ];

    useEffect(() => {
        const container = menuRef.current;
        if (!container) return;

        updateScrollButtons();

        const observer = new ResizeObserver(updateScrollButtons);
        observer.observe(container);

        const menu = container.querySelector(".ant-menu");
        if (menu) {
            observer.observe(menu);
        }
        return () => observer.disconnect();
    }, [menuItems]);

    useEffect(() => {
        const currentMenu = [
            ...menuItems,
            ...menuItems.flatMap((item) => item.children ?? []),
        ].find((item) => item.key === location.pathname);

        setPageTitle(currentMenu?.label ?? "Dashboard");
    }, [location.pathname, menuItems]);

    const handleProfileClick = () => {
        console.log("profile clicked!");
    };

    return (
        <Layout className="h-screen bg-gradient-to-tr from-[#eef2f7] via-[#f4f7fa] to-[#dce6f5] p-5 gap-5">

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
                            disabled={!canScrollUp}
                            icon={<UpOutlined className="!text-sm" />}
                            onClick={() => handleMenuScroll("up")}
                            className="!text-[#00163D] !bg-white !shadow-md hover:!shadow-lg hover:!bg-white transition-all duration-200"
                        />
                    </div>

                    {/* Scrollable Menu */}
                    <div
                        ref={menuRef}
                        className="sidebar-menu-scroll flex-1 min-h-0"
                        onScroll={updateScrollButtons}
                        onWheel={(e) => e.preventDefault()}
                        onMouseDown={(e) => e.preventDefault()}
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
                            disabled={!canScrollDown}
                            icon={<DownOutlined className="!text-sm" />}
                            onClick={() => handleMenuScroll("down")}
                            className="!text-[#00163D] !bg-white !shadow-md hover:!shadow-lg hover:!bg-white transition-all duration-200"
                        />
                    </div>
                </div>
            </Sider>

            <Layout className="bg-transparent gap-4">
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
                                                        New recruiter registered
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
                                                        New job requires approval
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
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[#D1D6DC] bg-white text-[#475569] shadow-none transition hover:bg-[#F8FAFC]"
                                >
                                    <Badge count={3} size="small" offset={[-2, 2]}>
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
                                            Admin User
                                        </p>
                                        <p className="mb-0 text-xs text-[#64748B]">
                                            Administrator
                                        </p>
                                    </div>

                                    <DownOutlined className="hidden text-[10px] text-[#64748B] lg:block" />
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                </Header>

                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
