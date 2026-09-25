import { DownloadOutlined, MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Dropdown, Table, Tag, Tooltip, } from "antd";
import type { CandidateReport } from "../../superadmin.interface";

const candidateReports: CandidateReport[] = [
    {
        key: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        experience: "2 Years",
        applications: 8,
        joinedDate: "10 Sep 2026",
        status: "Active",
    },
    {
        key: 2,
        name: "Priya Mehta",
        email: "priya.mehta@example.com",
        experience: "3 Years",
        applications: 12,
        joinedDate: "09 Sep 2026",
        status: "Active",
    },
    {
        key: 3,
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        experience: "1 Year",
        applications: 5,
        joinedDate: "08 Sep 2026",
        status: "Active",
    },
    {
        key: 4,
        name: "Simran Kaur",
        email: "simran.kaur@example.com",
        experience: "4 Years",
        applications: 15,
        joinedDate: "07 Sep 2026",
        status: "Active",
    },
    {
        key: 5,
        name: "Vikas Yadav",
        email: "vikas.yadav@example.com",
        experience: "5 Years",
        applications: 18,
        joinedDate: "06 Sep 2026",
        status: "Active",
    },
    {
        key: 6,
        name: "Anjali Sharma",
        email: "anjali.sharma@example.com",
        experience: "Fresher",
        applications: 4,
        joinedDate: "05 Sep 2026",
        status: "Inactive",
    },
    {
        key: 7,
        name: "Karan Joshi",
        email: "karan.joshi@example.com",
        experience: "2 Years",
        applications: 9,
        joinedDate: "04 Sep 2026",
        status: "Active",
    },
    {
        key: 8,
        name: "Pooja Agarwal",
        email: "pooja.agarwal@example.com",
        experience: "6 Years",
        applications: 14,
        joinedDate: "03 Sep 2026",
        status: "Active",
    },
];

const getStatusTag = (status: CandidateReport["status"]) => {
    const styles: Record<
        CandidateReport["status"],
        { color: string; bg: string }
    > = {
        Active: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Inactive: {
            color: "#64748B",
            bg: "#F1F5F9",
        },
    };

    const style = styles[status];

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

const CandidatesReport = () => {
    const columns = [
        {
            title: "Candidate",
            key: "candidate",
            width: 280,
            render: (_: unknown, record: CandidateReport) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {record.name.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <div className="truncate font-medium text-[#0F172A]">
                            {record.name}
                        </div>

                        <div className="truncate text-xs text-[#64748B]">
                            {record.email}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Experience",
            dataIndex: "experience",
            key: "experience",
            width: 150,
        },
        {
            title: "Applications",
            dataIndex: "applications",
            key: "applications",
            width: 140,
            render: (applications: number) => (
                <span className="font-medium text-[#0F172A]">
                    {applications}
                </span>
            ),
        },
        {
            title: "Joined Date",
            dataIndex: "joinedDate",
            key: "joinedDate",
            width: 150,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: CandidateReport["status"]) =>
                getStatusTag(status),
        },
        {
            title: "",
            key: "actions",
            width: 60,
            fixed: "right" as const,
            render: () => (
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: [
                            {
                                key: "view",
                                label: "View Candidate",
                            },
                            {
                                key: "applications",
                                label: "View Applications",
                            },
                        ],
                    }}
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
        <div className="flex h-full flex-col gap-4 overflow-auto">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Left Side - Date Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <DatePicker
                        placeholder="From Date"
                        suffixIcon={null}
                        className="!min-w-[180px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <DatePicker
                        placeholder="To Date"
                        suffixIcon={null}
                        className="!min-w-[180px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Button
                        type="primary"
                        className="!rounded-full !bg-[#0052CC] !px-5 !py-2 !shadow-none"
                    >
                        Search
                    </Button>
                </div>

                {/* Right Side - Tabs & Export */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Modern Tabs */}
                    <div className="flex items-center overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
                        <button
                            className="rounded-bl-xl border-b-2 border-[#0052CC] px-4 py-2 text-sm font-semibold text-[#0052CC]"
                        >
                            Overview
                        </button>

                        <button
                            className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]"
                        >
                            Status
                        </button>

                        <button
                            className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]"
                        >
                            Experiance
                        </button>

                        <button
                            className="rounded-br-xl border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]"
                        >
                            Recent Candidates
                        </button>
                    </div>

                    {/* Export */}
                    <Button
                        className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        title="Export"
                        icon={<DownloadOutlined />}
                    />
                </div>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={candidateReports}
                    rowKey="key"
                    showHeader={candidateReports.length > 0}
                    scroll={{ y: "calc(100vh - 329px)" }}
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

export default CandidatesReport;