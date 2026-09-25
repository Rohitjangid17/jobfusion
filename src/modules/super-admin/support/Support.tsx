import { DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined, SearchOutlined, UserSwitchOutlined, DownloadOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, type MenuProps, } from "antd";
import type { SupportTicket } from "../superadmin.interface";

const supportTickets: SupportTicket[] = [
    {
        key: 1,
        ticketId: "TKT-1001",
        subject: "Unable to login",
        user: "Rohit Sharma",
        email: "rohit.sharma@example.com",
        category: "Account",
        priority: "High",
        createdDate: "10 Sep 2026",
        status: "Open",
    },
    {
        key: 2,
        ticketId: "TKT-1002",
        subject: "Job application issue",
        user: "Priya Mehta",
        email: "priya.mehta@example.com",
        category: "Applications",
        priority: "Medium",
        createdDate: "09 Sep 2026",
        status: "In Progress",
    },
    {
        key: 3,
        ticketId: "TKT-1003",
        subject: "Unable to post a job",
        user: "Amit Verma",
        email: "amit.verma@example.com",
        category: "Jobs",
        priority: "Urgent",
        createdDate: "09 Sep 2026",
        status: "Open",
    },
    {
        key: 4,
        ticketId: "TKT-1004",
        subject: "Profile update problem",
        user: "Anjali Sharma",
        email: "anjali.sharma@example.com",
        category: "Account",
        priority: "Low",
        createdDate: "08 Sep 2026",
        status: "Resolved",
    },
    {
        key: 5,
        ticketId: "TKT-1005",
        subject: "Company verification pending",
        user: "Vikas Gupta",
        email: "vikas.gupta@example.com",
        category: "Company",
        priority: "High",
        createdDate: "08 Sep 2026",
        status: "In Progress",
    },
    {
        key: 6,
        ticketId: "TKT-1006",
        subject: "Technical issue on dashboard",
        user: "Simran Kaur",
        email: "simran.kaur@example.com",
        category: "Technical",
        priority: "High",
        createdDate: "07 Sep 2026",
        status: "Open",
    },
    {
        key: 7,
        ticketId: "TKT-1007",
        subject: "Resume upload failed",
        user: "Karan Joshi",
        email: "karan.joshi@example.com",
        category: "Technical",
        priority: "Medium",
        createdDate: "06 Sep 2026",
        status: "Resolved",
    },
    {
        key: 8,
        ticketId: "TKT-1008",
        subject: "Recruiter account issue",
        user: "Neha Agarwal",
        email: "neha.agarwal@example.com",
        category: "Recruiter",
        priority: "Urgent",
        createdDate: "06 Sep 2026",
        status: "Open",
    },
    {
        key: 9,
        ticketId: "TKT-1009",
        subject: "Application status not updated",
        user: "Pooja Singh",
        email: "pooja.singh@example.com",
        category: "Applications",
        priority: "Medium",
        createdDate: "05 Sep 2026",
        status: "Closed",
    },
    {
        key: 10,
        ticketId: "TKT-1010",
        subject: "Account verification issue",
        user: "Rahul Yadav",
        email: "rahul.yadav@example.com",
        category: "Account",
        priority: "Low",
        createdDate: "05 Sep 2026",
        status: "Closed",
    },
];

const getStatusTag = (status: SupportTicket["status"]) => {
    const statusStyles: Record<
        SupportTicket["status"],
        { color: string; bg: string }
    > = {
        Open: {
            color: "#DC2626",
            bg: "#FEF2F2",
        },
        "In Progress": {
            color: "#D97706",
            bg: "#FFFBEB",
        },
        Resolved: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Closed: {
            color: "#64748B",
            bg: "#F1F5F9",
        },
    };

    const style = statusStyles[status];

    return (
        <Tag
            bordered={false}
            className="!m-0 !rounded-full !px-3 !py-1 !text-xs !font-medium"
            style={{
                color: style.color,
                backgroundColor: style.bg,
            }}
        >
            {status}
        </Tag>
    );
};

const getPriorityTag = (priority: SupportTicket["priority"]) => {
    const priorityStyles: Record<
        SupportTicket["priority"],
        { color: string; bg: string }
    > = {
        Low: {
            color: "#64748B",
            bg: "#F1F5F9",
        },
        Medium: {
            color: "#2563EB",
            bg: "#EFF6FF",
        },
        High: {
            color: "#D97706",
            bg: "#FFFBEB",
        },
        Urgent: {
            color: "#DC2626",
            bg: "#FEF2F2",
        },
    };

    const style = priorityStyles[priority];

    return (
        <Tag
            bordered={false}
            className="!m-0 !rounded-full !px-3 !py-1 !text-xs !font-medium"
            style={{
                color: style.color,
                backgroundColor: style.bg,
            }}
        >
            {priority}
        </Tag>
    );
};

const Support = () => {
    const exportItems: MenuProps["items"] = [
        {
            key: "csv",
            label: "Export CSV",
        },
        {
            key: "pdf",
            label: "Export PDF",
        },
    ];

    const actionItems = (record: SupportTicket): MenuProps["items"] => [
        {
            key: "view",
            icon: <EyeOutlined />,
            label: "View Ticket",
            onClick: () => console.log("View", record),
        },
        {
            key: "reply",
            icon: <EditOutlined />,
            label: "Reply",
            onClick: () => console.log("Reply", record),
        },
        {
            key: "assign",
            icon: <UserSwitchOutlined />,
            label: "Assign",
            onClick: () => console.log("Assign", record),
        },
        {
            type: "divider",
        },
        {
            key: "status",
            label: "Change Status",
            onClick: () => console.log("Change Status", record),
        },
        {
            key: "priority",
            label: "Change Priority",
            onClick: () => console.log("Change Priority", record),
        },
        {
            type: "divider",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            danger: true,
            label: "Delete",
            onClick: () => console.log("Delete", record),
        },
    ];

    const columns = [
        {
            title: "Ticket",
            key: "ticket",
            width: 280,
            render: (_: unknown, record: SupportTicket) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        <span className="text-sm font-semibold">
                            {record.ticketId.replace("TKT-", "")}
                        </span>
                    </Avatar>

                    <div className="min-w-0">
                        <div className="truncate font-medium text-[#0F172A]">
                            {record.subject}
                        </div>

                        <div className="text-xs text-[#64748B]">
                            #{record.ticketId}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "User",
            key: "user",
            width: 230,
            render: (_: unknown, record: SupportTicket) => (
                <div>
                    <div className="font-medium text-[#0F172A]">
                        {record.user}
                    </div>

                    <div className="text-xs text-[#64748B]">
                        {record.email}
                    </div>
                </div>
            ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 150,
            render: (category: string) => (
                <span className="text-[#334155]">{category}</span>
            ),
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            width: 130,
            render: (priority: SupportTicket["priority"]) =>
                getPriorityTag(priority),
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            width: 150,
            render: (date: string) => (
                <span className="text-[#475569]">{date}</span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 140,
            render: (status: SupportTicket["status"]) =>
                getStatusTag(status),
        },
        {
            title: "Actions",
            key: "actions",
            width: 80,
            fixed: "right" as const,
            render: (_: unknown, record: SupportTicket) => (
                <Dropdown
                    menu={{
                        items: actionItems(record),
                    }}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                            className="!flex !h-9 !w-9 !items-center !justify-center !rounded-lg !text-[#475569] hover:!bg-[#F1F5F9]"
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
                        placeholder="Search tickets..."
                        prefix={
                            <SearchOutlined className="!text-[#94A3B8]" />
                        }
                        className="!w-[260px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[150px]"
                        options={[
                            { label: "Open", value: "Open" },
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

                    <Select
                        placeholder="Priority"
                        allowClear
                        className="!w-[150px]"
                        options={[
                            { label: "Low", value: "Low" },
                            { label: "Medium", value: "Medium" },
                            { label: "High", value: "High" },
                            { label: "Urgent", value: "Urgent" },
                        ]}
                    />

                    <Select
                        placeholder="Category"
                        allowClear
                        className="!w-[160px]"
                        options={[
                            { label: "Account", value: "Account" },
                            { label: "Jobs", value: "Jobs" },
                            {
                                label: "Applications",
                                value: "Applications",
                            },
                            {
                                label: "Recruiter",
                                value: "Recruiter",
                            },
                            {
                                label: "Company",
                                value: "Company",
                            },
                            {
                                label: "Technical",
                                value: "Technical",
                            },
                            {
                                label: "Payment",
                                value: "Payment",
                            },
                            { label: "Other", value: "Other" },
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
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    rowKey="key"
                    columns={columns}
                    dataSource={supportTickets}
                    scroll={{
                        x: 1100,
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="[&_.ant-table-thead>tr>th]:!bg-white [&_.ant-table-thead>tr>th]:!text-[#475569] [&_.ant-table-tbody>tr>td]:!border-b-[#F1F5F9]"
                />
            </div>
        </div>
    );
};

export default Support;