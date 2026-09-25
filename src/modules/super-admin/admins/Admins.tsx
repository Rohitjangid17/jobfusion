import { DeleteOutlined, DownloadOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, SearchOutlined, EditOutlined, KeyOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Admin } from "../superadmin.interface";

const Admins = () => {
    const data: Admin[] = [
        {
            key: 1,
            name: "Rahul Sharma",
            email: "rahul.sharma@gmail.com",
            phone: "+91 98765 43210",
            role: "Admin",
            lastLogin: "10 Sep 2026",
            status: "Active",
        },
        {
            key: 2,
            name: "Priya Verma",
            email: "priya.verma@gmail.com",
            phone: "+91 98765 12345",
            role: "Admin",
            lastLogin: "09 Sep 2026",
            status: "Active",
        },
        {
            key: 3,
            name: "Amit Kumar",
            email: "amit.kumar@gmail.com",
            phone: "+91 99887 66554",
            role: "Moderator",
            lastLogin: "08 Sep 2026",
            status: "Active",
        },
        {
            key: 4,
            name: "Neha Gupta",
            email: "neha.gupta@gmail.com",
            phone: "+91 98761 22334",
            role: "Admin",
            lastLogin: "07 Sep 2026",
            status: "Inactive",
        },
        {
            key: 5,
            name: "Vikram Singh",
            email: "vikram.singh@gmail.com",
            phone: "+91 98765 77889",
            role: "Moderator",
            lastLogin: "05 Sep 2026",
            status: "Active",
        },
    ];

    const exportItems: MenuProps["items"] = [
        {
            key: "csv",
            icon: <FileExcelOutlined />,
            label: "CSV",
        },
        {
            key: "pdf",
            icon: <FilePdfOutlined />,
            label: "PDF",
        },
    ];

    const actionItems = (record: Admin): MenuProps["items"] => [
        {
            key: "view",
            icon: <EyeOutlined />,
            label: "View",
        },
        {
            key: "edit",
            icon: <EditOutlined />,
            label: "Edit",
        },
        {
            key: "password",
            icon: <KeyOutlined />,
            label: "Reset Password",
        },
        {
            key: "status",
            icon: <UserSwitchOutlined />,
            label: record.status === "Active" ? "Deactivate" : "Activate",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
        },
    ];

    const exportAdminCsv = () => {
        console.log("Export Admins CSV");
    };

    const exportAdminPdf = () => {
        console.log("Export Admins PDF");
    };

    const columns = [
        {
            title: "Admin",
            dataIndex: "name",
            key: "name",
            render: (name: string, record: Admin) => (
                <div className="flex items-center gap-3">
                    <Avatar className="!bg-[#E8F0FF] !text-[#0052CC]">
                        {name.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={name}>
                            <span className="block max-w-[170px] cursor-pointer truncate font-medium text-[#0F172A]">
                                {name}
                            </span>
                        </Tooltip>

                        <Tooltip title={record.phone}>
                            <span className="block max-w-[170px] truncate text-xs text-slate-400">
                                {record.phone}
                            </span>
                        </Tooltip>
                    </div>
                </div>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (email: string) => (
                <Tooltip title={email}>
                    <span className="block max-w-[220px] cursor-pointer truncate">
                        {email}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (role: Admin["role"]) => {
                const roleColor: Record<Admin["role"], string> = {
                    Admin: "blue",
                    Moderator: "purple",
                };

                return (
                    <Tag
                        color={roleColor[role]}
                        className="!rounded-full"
                    >
                        {role}
                    </Tag>
                );
            },
        },
        {
            title: "Last Login",
            dataIndex: "lastLogin",
            key: "lastLogin",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: Admin["status"]) => (
                <Tag
                    color={status === "Active" ? "green" : "default"}
                    className="!rounded-full"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            align: "center" as const,
            width: 80,
            render: (_: unknown, record: Admin) => (
                <Dropdown
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                        items: actionItems(record),
                        onClick: ({ key }) => {
                            if (key === "view") {
                                console.log("View", record);
                            } else if (key === "edit") {
                                console.log("Edit", record);
                            } else if (key === "password") {
                                console.log("Reset Password", record);
                            } else if (key === "status") {
                                console.log("Change Status", record);
                            } else if (key === "delete") {
                                console.log("Delete", record);
                            }
                        },
                    }}
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!border-none !shadow-none"
                    />
                </Dropdown>
            ),
        },
    ];

    return (
        <>
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search admins"
                        prefix={
                            <SearchOutlined className="text-slate-400" />
                        }
                        className="w-auto !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        allowClear
                    />

                    <Select
                        placeholder="Role"
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        allowClear
                        options={[
                            {
                                label: "Admin",
                                value: "admin",
                            },
                            {
                                label: "Moderator",
                                value: "moderator",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        size="middle"
                        allowClear
                        options={[
                            {
                                label: "Active",
                                value: "active",
                            },
                            {
                                label: "Inactive",
                                value: "inactive",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Admin
                    </Button>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: exportItems,
                            onClick: ({ key }) =>
                                key === "csv"
                                    ? exportAdminCsv()
                                    : exportAdminPdf(),
                        }}
                    >
                        <Button
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={data}
                    showHeader={data.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                    }}
                    className="table"
                />
            </div>
        </>
    );
};

export default Admins;