import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons"; 
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import type { SupportTicket } from "../admin.interface";

const supportTickets: SupportTicket[] = [
    {
        key: "1",
        ticketId: "SUP-1001",
        subject: "Unable to apply for a job",
        user: "Rahul Sharma",
        email: "rahul@example.com",
        category: "Job Application",
        priority: "High",
        createdDate: "10 Sep 2026",
        status: "Open",
    },
    {
        key: "2",
        ticketId: "SUP-1002",
        subject: "Unable to update profile",
        user: "Priya Singh",
        email: "priya@example.com",
        category: "Account",
        priority: "Medium",
        createdDate: "09 Sep 2026",
        status: "In Progress",
    },
    {
        key: "3",
        ticketId: "SUP-1003",
        subject: "Company verification issue",
        user: "Tech Solutions",
        email: "hr@techsolutions.com",
        category: "Company",
        priority: "High",
        createdDate: "08 Sep 2026",
        status: "Open",
    },
    {
        key: "4",
        ticketId: "SUP-1004",
        subject: "Resume upload failed",
        user: "Amit Kumar",
        email: "amit@example.com",
        category: "Profile",
        priority: "Medium",
        createdDate: "07 Sep 2026",
        status: "Resolved",
    },
    {
        key: "5",
        ticketId: "SUP-1005",
        subject: "Incorrect job information",
        user: "Neha Verma",
        email: "neha@example.com",
        category: "Jobs",
        priority: "Low",
        createdDate: "06 Sep 2026",
        status: "Closed",
    },
    {
        key: "6",
        ticketId: "SUP-1006",
        subject: "Account login problem",
        user: "Vikas Meena",
        email: "vikas@example.com",
        category: "Account",
        priority: "Urgent",
        createdDate: "05 Sep 2026",
        status: "In Progress",
    },
    {
        key: "7",
        ticketId: "SUP-1007",
        subject: "Recruiter dashboard issue",
        user: "Ankit Jain",
        email: "ankit@company.com",
        category: "Recruiter",
        priority: "High",
        createdDate: "04 Sep 2026",
        status: "Open",
    },
    {
        key: "8",
        ticketId: "SUP-1008",
        subject: "Email notification not received",
        user: "Pooja Gupta",
        email: "pooja@example.com",
        category: "Notifications",
        priority: "Low",
        createdDate: "03 Sep 2026",
        status: "Resolved",
    },
];

const Support = () => {
    const actionMenu = (record: SupportTicket): MenuProps => ({
        items: [
            {
                key: "view",
                icon: <EyeOutlined />,
                label: "View Ticket",
            },
            {
                key: "edit",
                icon: <EditOutlined />,
                label: "Update Ticket",
            },
            {
                key: "status",
                label: "Change Status",
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
            console.log(`${key} support ticket:`, record);
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

    const columns: ColumnsType<SupportTicket> = [
        {
            title: "Ticket",
            key: "ticket",
            width: 330,
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!bg-[#E8F1FF] !text-[#0052CC]"
                    >
                        {record.user.charAt(0).toUpperCase()}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={record.subject}>
                            <div className="max-w-[240px] truncate font-medium text-[#0F172A]">
                                {record.subject}
                            </div>
                        </Tooltip>

                        <div className="mt-0.5 text-xs text-[#98A2B3]">
                            {record.ticketId}
                        </div>
                    </div>
                </div>
            ),
        },

        {
            title: "User",
            key: "user",
            width: 210,
            render: (_, record) => (
                <div className="min-w-0">
                    <Tooltip title={record.user}>
                        <div className="max-w-[180px] truncate text-sm font-medium text-[#475467]">
                            {record.user}
                        </div>
                    </Tooltip>

                    <Tooltip title={record.email}>
                        <div className="max-w-[180px] truncate text-xs text-[#98A2B3]">
                            {record.email}
                        </div>
                    </Tooltip>
                </div>
            ),
        },

        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 160,
            render: (category: string) => (
                <Tag className="!m-0 !rounded-md !border-[#D1D6DC] !bg-[#F8FAFC] !px-2 !text-[#475467]">
                    {category}
                </Tag>
            ),
        },

        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            width: 120,
            render: (priority: SupportTicket["priority"]) => {
                const color =
                    priority === "Urgent"
                        ? "red"
                        : priority === "High"
                            ? "orange"
                            : priority === "Medium"
                                ? "blue"
                                : "default";

                return (
                    <Tag color={color} className="!rounded-full !px-3">
                        {priority}
                    </Tag>
                );
            },
        },

        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            width: 150,
            render: (date: string) => (
                <span className="text-sm text-[#475467]">
                    {date}
                </span>
            ),
        },

        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 140,
            render: (status: SupportTicket["status"]) => {
                const color =
                    status === "Open"
                        ? "warning"
                        : status === "In Progress"
                            ? "processing"
                            : status === "Resolved"
                                ? "success"
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
                        placeholder="Search tickets"
                        allowClear
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Category"
                        allowClear
                        className="!w-[160px]"
                        options={[
                            {
                                label: "Account",
                                value: "Account",
                            },
                            {
                                label: "Job Application",
                                value: "Job Application",
                            },
                            {
                                label: "Company",
                                value: "Company",
                            },
                            {
                                label: "Profile",
                                value: "Profile",
                            },
                            {
                                label: "Jobs",
                                value: "Jobs",
                            },
                            {
                                label: "Recruiter",
                                value: "Recruiter",
                            },
                            {
                                label: "Notifications",
                                value: "Notifications",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Priority"
                        allowClear
                        className="!w-[140px]"
                        options={[
                            {
                                label: "Low",
                                value: "Low",
                            },
                            {
                                label: "Medium",
                                value: "Medium",
                            },
                            {
                                label: "High",
                                value: "High",
                            },
                            {
                                label: "Urgent",
                                value: "Urgent",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[140px]"
                        options={[
                            {
                                label: "Open",
                                value: "Open",
                            },
                            {
                                label: "In Progress",
                                value: "In Progress",
                            },
                            {
                                label: "Resolved",
                                value: "Resolved",
                            },
                            {
                                label: "Closed",
                                value: "Closed",
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
                        Add Ticket
                    </Button>

                    <Dropdown
                        menu={exportMenu}
                        trigger={["click"]}
                    >
                        <Button
                            icon={<DownloadOutlined />}
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        >
                        </Button>
                    </Dropdown>
                </div>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={supportTickets}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="support-table"
                />
            </div>
        </div>
    );
};

export default Support;