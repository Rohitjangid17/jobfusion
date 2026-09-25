import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, LoginOutlined, LogoutOutlined, MoreOutlined, PlusOutlined, SearchOutlined, StopOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { AuditLog } from "../superadmin.interface";

const AuditLogs = () => {
    const auditLogs: AuditLog[] = [
        {
            key: 1,
            user: "Rohit Sharma",
            email: "rohit.sharma@example.com",
            action: "Created",
            module: "Companies",
            description: 'Created company "TechNova Solutions"',
            ipAddress: "192.168.1.12",
            dateTime: "10 Sep 2026, 10:42 AM",
            status: "Success",
        },
        {
            key: 2,
            user: "Neha Sharma",
            email: "neha.sharma@example.com",
            action: "Updated",
            module: "Jobs",
            description: 'Updated job "React.js Developer"',
            ipAddress: "192.168.1.18",
            dateTime: "10 Sep 2026, 10:25 AM",
            status: "Success",
        },
        {
            key: 3,
            user: "Rahul Verma",
            email: "rahul.verma@example.com",
            action: "Deleted",
            module: "Recruiters",
            description: "Deleted recruiter account",
            ipAddress: "192.168.1.21",
            dateTime: "10 Sep 2026, 09:58 AM",
            status: "Success",
        },
        {
            key: 4,
            user: "Amit Sharma",
            email: "amit.sharma@example.com",
            action: "Login",
            module: "Authentication",
            description: "Successful admin login",
            ipAddress: "192.168.1.32",
            dateTime: "10 Sep 2026, 09:40 AM",
            status: "Success",
        },
        {
            key: 5,
            user: "Priya Mehta",
            email: "priya.mehta@example.com",
            action: "Status Changed",
            module: "Candidates",
            description: 'Changed candidate status to "Shortlisted"',
            ipAddress: "192.168.1.45",
            dateTime: "10 Sep 2026, 09:21 AM",
            status: "Success",
        },
        {
            key: 6,
            user: "Ankit Jain",
            email: "ankit.jain@example.com",
            action: "Updated",
            module: "Companies",
            description: 'Updated company "Innovate Labs"',
            ipAddress: "192.168.1.52",
            dateTime: "09 Sep 2026, 06:42 PM",
            status: "Success",
        },
        {
            key: 7,
            user: "Pooja Mehta",
            email: "pooja.mehta@example.com",
            action: "Created",
            module: "Jobs",
            description: 'Created job "Angular Developer"',
            ipAddress: "192.168.1.61",
            dateTime: "09 Sep 2026, 05:35 PM",
            status: "Success",
        },
        {
            key: 8,
            user: "Vikas Yadav",
            email: "vikas.yadav@example.com",
            action: "Login",
            module: "Authentication",
            description: "Failed login attempt",
            ipAddress: "192.168.1.72",
            dateTime: "09 Sep 2026, 04:18 PM",
            status: "Failed",
        },
        {
            key: 9,
            user: "Anjali Sharma",
            email: "anjali.sharma@example.com",
            action: "Deleted",
            module: "Blogs",
            description: 'Deleted blog "Frontend Trends 2026"',
            ipAddress: "192.168.1.84",
            dateTime: "09 Sep 2026, 03:52 PM",
            status: "Success",
        },
        {
            key: 10,
            user: "Karan Joshi",
            email: "karan.joshi@example.com",
            action: "Logout",
            module: "Authentication",
            description: "User logged out successfully",
            ipAddress: "192.168.1.95",
            dateTime: "09 Sep 2026, 03:20 PM",
            status: "Success",
        },
    ];

    const exportItems: MenuProps["items"] = [
        {
            key: "csv",
            icon: <FileExcelOutlined />,
            label: "Export CSV",
        },
        {
            key: "pdf",
            icon: <FilePdfOutlined />,
            label: "Export PDF",
        },
    ];

    const actionItems = (): MenuProps["items"] => [
        {
            key: "view",
            icon: <EyeOutlined />,
            label: "View Details",
        },
        {
            key: "user",
            label: "View User",
        },
        {
            key: "module",
            label: "View Module",
        },
        {
            type: "divider",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
        },
    ];

    const columns = [
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            width: 240,
            render: (user: string, record: AuditLog) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {user.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={user}>
                            <div className="truncate font-medium text-[#0F172A]">
                                {user}
                            </div>
                        </Tooltip>

                        <Tooltip title={record.email}>
                            <div className="truncate text-xs text-[#64748B]">
                                {record.email}
                            </div>
                        </Tooltip>
                    </div>
                </div>
            ),
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            width: 150,
            render: (action: AuditLog["action"]) => {
                const actionConfig = {
                    Created: {
                        color: "success",
                        icon: <PlusOutlined />,
                    },
                    Updated: {
                        color: "processing",
                        icon: <EditOutlined />,
                    },
                    Deleted: {
                        color: "error",
                        icon: <DeleteOutlined />,
                    },
                    Login: {
                        color: "purple",
                        icon: <LoginOutlined />,
                    },
                    Logout: {
                        color: "default",
                        icon: <LogoutOutlined />,
                    },
                    "Status Changed": {
                        color: "warning",
                        icon: <StopOutlined />,
                    },
                } as const;

                const config = actionConfig[action];

                return (
                    <Tag
                        color={config.color}
                        icon={config.icon}
                        className="!m-0 !rounded-full !px-3"
                    >
                        {action}
                    </Tag>
                );
            },
        },
        {
            title: "Module",
            dataIndex: "module",
            key: "module",
            width: 150,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            width: 320,
            render: (description: string) => (
                <Tooltip title={description}>
                    <div className="max-w-[290px] truncate text-[#475569]">
                        {description}
                    </div>
                </Tooltip>
            ),
        },
        {
            title: "IP Address",
            dataIndex: "ipAddress",
            key: "ipAddress",
            width: 150,
        },
        {
            title: "Date & Time",
            dataIndex: "dateTime",
            key: "dateTime",
            width: 190,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: AuditLog["status"]) => (
                <Tag
                    color={status === "Success" ? "success" : "error"}
                    className="!rounded-full !px-3"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 90,
            fixed: "right" as const,
            render: (_: unknown, record: AuditLog) => (
                <Dropdown
                    menu={{
                        items: actionItems(),
                        onClick: ({ key }) => {
                            console.log(key, record);
                        },
                    }}
                    trigger={["click"]}
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                            className="!h-8 !w-8 !rounded-lg"
                        />
                    </Tooltip>
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                    <Input
                        placeholder="Search audit logs"
                        prefix={
                            <SearchOutlined className="text-slate-400" />
                        }
                        className="w-auto !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        allowClear
                    />

                    <Select
                        placeholder="Action"
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        options={[
                            {
                                label: "All Actions",
                                value: "all",
                            },
                            {
                                label: "Created",
                                value: "Created",
                            },
                            {
                                label: "Updated",
                                value: "Updated",
                            },
                            {
                                label: "Deleted",
                                value: "Deleted",
                            },
                            {
                                label: "Login",
                                value: "Login",
                            },
                            {
                                label: "Logout",
                                value: "Logout",
                            },
                            {
                                label: "Status Changed",
                                value: "Status Changed",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Module"
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        options={[
                            {
                                label: "All Modules",
                                value: "all",
                            },
                            {
                                label: "Companies",
                                value: "Companies",
                            },
                            {
                                label: "Recruiters",
                                value: "Recruiters",
                            },
                            {
                                label: "Candidates",
                                value: "Candidates",
                            },
                            {
                                label: "Jobs",
                                value: "Jobs",
                            },
                            {
                                label: "Applications",
                                value: "Applications",
                            },
                            {
                                label: "Authentication",
                                value: "Authentication",
                            },
                            {
                                label: "Blogs",
                                value: "Blogs",
                            },
                            {
                                label: "Settings",
                                value: "Settings",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        options={[
                            {
                                label: "All Status",
                                value: "all",
                            },
                            {
                                label: "Success",
                                value: "Success",
                            },
                            {
                                label: "Failed",
                                value: "Failed",
                            },
                        ]}
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    <Dropdown
                        menu={{ items: exportItems }}
                        trigger={["click"]}
                    >
                        <Button
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={auditLogs}
                    showHeader={auditLogs.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                    }}
                    className="table"
                />
            </div>
        </div>
    );
};

export default AuditLogs;