import { useState } from "react";
import { DeleteOutlined, DownloadOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MessageOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons";
import { Button, Dropdown, Input, Modal, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { SupportTicket } from "../recruiter.interface";

const SUPPORT_TICKETS: SupportTicket[] = [
    {
        key: 1,
        ticketId: "TKT-1001",
        subject: "Unable to publish a job",
        category: "Jobs",
        priority: "High",
        createdDate: "10 Sep 2026",
        lastUpdated: "10 Sep 2026",
        status: "Open",
    },
    {
        key: 2,
        ticketId: "TKT-1002",
        subject: "Candidate application not visible",
        category: "Applications",
        priority: "Medium",
        createdDate: "09 Sep 2026",
        lastUpdated: "10 Sep 2026",
        status: "In Progress",
    },
    {
        key: 3,
        ticketId: "TKT-1003",
        subject: "Need help updating company profile",
        category: "Account",
        priority: "Low",
        createdDate: "08 Sep 2026",
        lastUpdated: "09 Sep 2026",
        status: "Resolved",
    },
    {
        key: 4,
        ticketId: "TKT-1004",
        subject: "Dashboard data is not loading",
        category: "Technical",
        priority: "High",
        createdDate: "07 Sep 2026",
        lastUpdated: "08 Sep 2026",
        status: "In Progress",
    },
    {
        key: 5,
        ticketId: "TKT-1005",
        subject: "Subscription invoice issue",
        category: "Billing",
        priority: "Medium",
        createdDate: "05 Sep 2026",
        lastUpdated: "06 Sep 2026",
        status: "Closed",
    },
    {
        key: 6,
        ticketId: "TKT-1006",
        subject: "Interview notification not received",
        category: "Interviews",
        priority: "Low",
        createdDate: "04 Sep 2026",
        lastUpdated: "05 Sep 2026",
        status: "Resolved",
    },
    {
        key: 7,
        ticketId: "TKT-1007",
        subject: "Unable to shortlist candidate",
        category: "Applications",
        priority: "High",
        createdDate: "03 Sep 2026",
        lastUpdated: "04 Sep 2026",
        status: "Open",
    },
    {
        key: 8,
        ticketId: "TKT-1008",
        subject: "Company details update request",
        category: "Account",
        priority: "Low",
        createdDate: "02 Sep 2026",
        lastUpdated: "03 Sep 2026",
        status: "Closed",
    },
];

const Support = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<string>();
    const [status, setStatus] = useState<string>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getStatusTag = (value: SupportTicket["status"]) => {
        const config = {
            Open: {
                color: "processing",
                label: "Open",
            },
            "In Progress": {
                color: "warning",
                label: "In Progress",
            },
            Resolved: {
                color: "success",
                label: "Resolved",
            },
            Closed: {
                color: "default",
                label: "Closed",
            },
        };

        const item = config[value];

        return (
            <Tag
                color={item.color}
                className="!rounded-full !px-3 !py-1"
            >
                {item.label}
            </Tag>
        );
    };

    const getPriorityTag = (value: SupportTicket["priority"]) => {
        const config = {
            Low: "default",
            Medium: "warning",
            High: "error",
        } as const;

        return (
            <Tag
                color={config[value]}
                className="!rounded-full !px-3 !py-1"
            >
                {value}
            </Tag>
        );
    };

    const filteredTickets = SUPPORT_TICKETS.filter((ticket) => {
        const matchesSearch =
            !search ||
            ticket.subject
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            ticket.ticketId
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            !category || ticket.category === category;

        const matchesStatus =
            !status || ticket.status === status;

        const matchesTab =
            activeTab === "all" ||
            (activeTab === "open" &&
                ticket.status === "Open") ||
            (activeTab === "in-progress" &&
                ticket.status === "In Progress") ||
            (activeTab === "resolved" &&
                ticket.status === "Resolved") ||
            (activeTab === "closed" &&
                ticket.status === "Closed");

        return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus &&
            matchesTab
        );
    });

    const exportTicketCsv = () => {
        console.log("Export tickets CSV");
    };

    const exportTicketPdf = () => {
        console.log("Export tickets PDF");
    };

    const columns: ColumnsType<SupportTicket> = [
        {
            title: "Ticket",
            dataIndex: "ticketId",
            key: "ticketId",
            width: 130,
            render: (ticketId: string, record) => (
                <div>
                    <div className="font-semibold text-[#0F172A]">
                        {ticketId}
                    </div>

                    <div className="mt-1 max-w-[280px] truncate text-sm text-[#64748B]">
                        {record.subject}
                    </div>
                </div>
            ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 140,
            render: (value: SupportTicket["category"]) => (
                <span className="text-sm text-[#334155]">
                    {value}
                </span>
            ),
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            width: 120,
            render: (value: SupportTicket["priority"]) =>
                getPriorityTag(value),
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            width: 140,
            render: (value: string) => (
                <span className="text-sm text-[#475569]">
                    {value}
                </span>
            ),
        },
        {
            title: "Last Updated",
            dataIndex: "lastUpdated",
            key: "lastUpdated",
            width: 140,
            render: (value: string) => (
                <span className="text-sm text-[#475569]">
                    {value}
                </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 140,
            render: (value: SupportTicket["status"]) =>
                getStatusTag(value),
        },
        {
            title: "Actions",
            key: "actions",
            fixed: "right",
            width: 80,
            render: (_, record) => (
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: [
                            {
                                key: "view",
                                icon: <EyeOutlined />,
                                label: "View Ticket",
                            },
                            {
                                key: "reply",
                                icon: <MessageOutlined />,
                                label: "Reply",
                            },
                            {
                                type: "divider",
                            },
                            ...(record.status === "Open" ||
                                record.status === "In Progress"
                                ? [
                                    {
                                        key: "close",
                                        icon: <DeleteOutlined />,
                                        label: "Close Ticket",
                                    },
                                ]
                                : []),
                        ],
                    }}
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={
                                <MoreOutlined className="text-[#64748B]" />
                            }
                        />
                    </Tooltip>
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Filters + Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search tickets"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-auto !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                    />

                    <Select
                        allowClear
                        placeholder="Category"
                        value={category}
                        onChange={setCategory}
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            {
                                value: "Account",
                                label: "Account",
                            },
                            {
                                value: "Jobs",
                                label: "Jobs",
                            },
                            {
                                value: "Applications",
                                label: "Applications",
                            },
                            {
                                value: "Interviews",
                                label: "Interviews",
                            },
                            {
                                value: "Technical",
                                label: "Technical",
                            },
                            {
                                value: "Billing",
                                label: "Billing",
                            },
                        ]}
                    />

                    <Select
                        allowClear
                        placeholder="Status"
                        value={status}
                        onChange={setStatus}
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            {
                                value: "Open",
                                label: "Open",
                            },
                            {
                                value: "In Progress",
                                label: "In Progress",
                            },
                            {
                                value: "Resolved",
                                label: "Resolved",
                            },
                            {
                                value: "Closed",
                                label: "Closed",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Dropdown
                        trigger={["click"]}
                        overlayClassName="[&_.ant-dropdown-menu]:!w-32"
                        menu={{
                            items: [
                                {
                                    key: "title",
                                    label: (
                                        <span className="text-sm font-medium text-[#6B7280]">
                                            Downloads
                                        </span>
                                    ),
                                    disabled: true,
                                },
                                {
                                    type: "divider",
                                },
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
                            ],
                            onClick: ({ key }) =>
                                key === "csv"
                                    ? exportTicketCsv()
                                    : exportTicketPdf(),
                        }}
                    >
                        <Button
                            className="!bg-white !text-[#0F172A] !rounded-full !px-4 !py-2 !shadow-none !border !border-solid !border-[#D1D6DC]"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white">
                    {[
                        {
                            key: "all",
                            label: "All Tickets",
                        },
                        {
                            key: "open",
                            label: "Open",
                        },
                        {
                            key: "in-progress",
                            label: "In Progress",
                        },
                        {
                            key: "resolved",
                            label: "Resolved",
                        },
                        {
                            key: "closed",
                            label: "Closed",
                        },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveTab(tab.key)}
                            className={
                                activeTab === tab.key
                                    ? "border-b-2 border-[#0052CC] px-5 py-3 text-sm font-semibold text-[#0052CC]"
                                    : "px-5 py-3 text-sm text-[#64748B]"
                            }
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setIsModalOpen(true)}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !shadow-none"
                    >
                        Create Ticket
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={filteredTickets}
                    showHeader={filteredTickets.length > 0}
                    scroll={{ y: "calc(100vh - 392px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                    }}
                    className="table"
                />
            </div>

            {/* Create Ticket Modal */}
            <Modal
                title="Create Support Ticket"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                width={560}
                footer={[
                    <Button
                        key="cancel"
                        onClick={() => setIsModalOpen(false)}
                        className="!rounded-xl"
                    >
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => setIsModalOpen(false)}
                        className="!rounded-xl !bg-[#0052CC] !shadow-none"
                    >
                        Submit Ticket
                    </Button>,
                ]}
            >
                <div className="space-y-4 py-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#334155]">Subject</label>
                        <Input
                            placeholder="Enter ticket subject"
                            className="w-full !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#334155]">Category</label>

                        <Select
                            placeholder="Select category"
                            className="w-full !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                            options={[
                                {
                                    value: "Account",
                                    label: "Account",
                                },
                                {
                                    value: "Jobs",
                                    label: "Jobs",
                                },
                                {
                                    value: "Applications",
                                    label: "Applications",
                                },
                                {
                                    value: "Interviews",
                                    label: "Interviews",
                                },
                                {
                                    value: "Technical",
                                    label: "Technical",
                                },
                                {
                                    value: "Billing",
                                    label: "Billing",
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#334155]">Priority</label>
                        <Select
                            placeholder="Select priority"
                            className="w-full !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                            options={[
                                {
                                    value: "Low",
                                    label: "Low",
                                },
                                {
                                    value: "Medium",
                                    label: "Medium",
                                },
                                {
                                    value: "High",
                                    label: "High",
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#334155]">Description</label>

                        <Input.TextArea
                            rows={5}
                            placeholder="Describe your issue..."
                            className="w-full !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Support;