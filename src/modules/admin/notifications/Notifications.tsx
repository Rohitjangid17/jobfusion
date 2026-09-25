import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons";
import { Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import type { Notification } from "../admin.interface";

const notifications: Notification[] = [
    {
        key: "1",
        title: "Welcome to JobFusion",
        message: "Welcome to the JobFusion platform.",
        recipient: "All",
        type: "System",
        sentDate: "10 Sep 2026",
        status: "Sent",
    },
    {
        key: "2",
        title: "New Jobs Available",
        message: "New job opportunities matching your profile are available.",
        recipient: "Candidates",
        type: "Job",
        sentDate: "09 Sep 2026",
        status: "Sent",
    },
    {
        key: "3",
        title: "Application Status Updated",
        message: "Your job application status has been updated.",
        recipient: "Candidates",
        type: "Application",
        sentDate: "08 Sep 2026",
        status: "Sent",
    },
    {
        key: "4",
        title: "Complete Your Company Profile",
        message: "Please complete your company profile.",
        recipient: "Companies",
        type: "Account",
        sentDate: "08 Sep 2026",
        status: "Scheduled",
    },
    {
        key: "5",
        title: "New Candidate Application",
        message: "You have received a new candidate application.",
        recipient: "Recruiters",
        type: "Application",
        sentDate: "07 Sep 2026",
        status: "Sent",
    },
    {
        key: "6",
        title: "Platform Maintenance",
        message: "JobFusion will be under maintenance.",
        recipient: "All",
        type: "System",
        sentDate: "06 Sep 2026",
        status: "Scheduled",
    },
    {
        key: "7",
        title: "Profile Verification Required",
        message: "Please verify your profile information.",
        recipient: "Candidates",
        type: "Account",
        sentDate: "05 Sep 2026",
        status: "Draft",
    },
    {
        key: "8",
        title: "Job Approval Required",
        message: "A new job is waiting for approval.",
        recipient: "Recruiters",
        type: "Job",
        sentDate: "04 Sep 2026",
        status: "Sent",
    },
];

const Notifications = () => {
    const actionMenu = (record: Notification): MenuProps => ({
        items: [
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
                key: "duplicate",
                label: "Duplicate",
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
        ],
        onClick: ({ key }) => {
            console.log(`${key} notification:`, record);
        },
    });

    const exportMenu: MenuProps = {
        items: [
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
        ],
        onClick: ({ key }) => {
            console.log(`Export ${key}`);
        },
    };

    const columns: ColumnsType<Notification> = [
        {
            title: "Notification",
            key: "notification",
            width: 360,
            render: (_, record) => (
                <div className="min-w-0">
                    <Tooltip title={record.title}>
                        <div className="max-w-[300px] truncate font-medium text-[#0F172A]">
                            {record.title}
                        </div>
                    </Tooltip>

                    <Tooltip title={record.message}>
                        <div className="mt-1 max-w-[300px] truncate text-xs text-[#98A2B3]">
                            {record.message}
                        </div>
                    </Tooltip>
                </div>
            ),
        },

        {
            title: "Recipient",
            dataIndex: "recipient",
            key: "recipient",
            width: 170,
            render: (recipient: string) => (
                <Tag className="!m-0 !rounded-md !border-[#D1D6DC] !bg-[#F8FAFC] !px-2 !text-[#475467]">
                    {recipient}
                </Tag>
            ),
        },

        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: 150,
            render: (type: string) => (
                <span className="text-sm text-[#475467]">{type}</span>
            ),
        },

        {
            title: "Sent / Scheduled",
            dataIndex: "sentDate",
            key: "sentDate",
            width: 170,
            render: (date: string) => (
                <span className="text-sm text-[#475467]">{date}</span>
            ),
        },

        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 130,
            render: (status: Notification["status"]) => {
                const color =
                    status === "Sent"
                        ? "success"
                        : status === "Scheduled"
                            ? "processing"
                            : "default";

                return (
                    <Tag color={color} className="!rounded-full !px-3">
                        {status}
                    </Tag>
                );
            },
        },

        {
            title: "Actions",
            key: "actions",
            width: 80,
            fixed: "right",
            render: (_, record) => (
                <Dropdown
                    menu={actionMenu(record)}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!flex !items-center !justify-center !rounded-lg"
                    />
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        prefix={
                            <SearchOutlined className="text-[#98A2B3]" />
                        }
                        placeholder="Search notifications"
                        allowClear
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Recipient"
                        allowClear
                        className="!w-[160px]"
                        options={[
                            {
                                label: "All",
                                value: "All",
                            },
                            {
                                label: "Candidates",
                                value: "Candidates",
                            },
                            {
                                label: "Recruiters",
                                value: "Recruiters",
                            },
                            {
                                label: "Companies",
                                value: "Companies",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Type"
                        allowClear
                        className="!w-[150px]"
                        options={[
                            {
                                label: "System",
                                value: "System",
                            },
                            {
                                label: "Job",
                                value: "Job",
                            },
                            {
                                label: "Application",
                                value: "Application",
                            },
                            {
                                label: "Account",
                                value: "Account",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[140px]"
                        options={[
                            {
                                label: "Sent",
                                value: "Sent",
                            },
                            {
                                label: "Scheduled",
                                value: "Scheduled",
                            },
                            {
                                label: "Draft",
                                value: "Draft",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Notification
                    </Button>

                    <Dropdown
                        menu={exportMenu}
                        trigger={["click"]}
                    >
                        <Button
                            icon={<DownloadOutlined />}
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        >
                            Export
                        </Button>
                    </Dropdown>
                </div>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={notifications}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="notifications-table"
                />
            </div>
        </div>
    );
};

export default Notifications;