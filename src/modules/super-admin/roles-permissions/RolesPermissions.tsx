import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Table, Tag, Tooltip, } from "antd"; import type { MenuProps } from "antd";
import type { RolePermission } from "../superadmin.interface";


const RolesPermissions = () => {
    const roles: RolePermission[] = [
        {
            key: 1,
            role: "Super Admin",
            description: "Full platform access and system management",
            users: 1,
            permissions: 50,
            status: "Active",
        },
        {
            key: 2,
            role: "Admin",
            description: "Manage platform operations and users",
            users: 3,
            permissions: 40,
            status: "Active",
        },
        {
            key: 3,
            role: "Recruiter",
            description: "Manage jobs, candidates and applications",
            users: 18,
            permissions: 25,
            status: "Active",
        },
        {
            key: 4,
            role: "Candidate",
            description: "Search jobs and manage job applications",
            users: 125,
            permissions: 15,
            status: "Active",
        }
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
            label: "View",
        },
        {
            key: "edit",
            icon: <EditOutlined />,
            label: "Edit",
        },
        {
            key: "permissions",
            label: "Manage Permissions",
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
            title: "Role",
            dataIndex: "role",
            key: "role",
            width: 220,
            render: (role: string) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {role.charAt(0)}
                    </Avatar>

                    <div>
                        <div className="font-medium text-[#0F172A]">
                            {role}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            ellipsis: true,
        },
        {
            title: "Users",
            dataIndex: "users",
            key: "users",
            width: 100,
        },
        {
            title: "Permissions",
            dataIndex: "permissions",
            key: "permissions",
            width: 120,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: RolePermission["status"]) => (
                <Tag
                    color={status === "Active" ? "success" : "default"}
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
            render: (_: unknown, record: RolePermission) => (
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
                        placeholder="Search roles"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Role
                    </Button>
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
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={roles}
                    rowKey="key"
                    showHeader={roles.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="table"
                />
            </div>
        </div>
    );
};

export default RolesPermissions;