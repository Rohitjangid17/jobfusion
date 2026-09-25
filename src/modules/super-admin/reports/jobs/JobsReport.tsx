import { DownloadOutlined, EnvironmentOutlined, MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Dropdown, Table, Tag, Tooltip, } from "antd";
import type { JobReport } from "../../superadmin.interface";

const jobReports: JobReport[] = [
    {
        key: 1,
        title: "Senior Frontend Developer",
        company: "TechNova Solutions",
        location: "Bengaluru",
        type: "Full Time",
        applications: 86,
        postedDate: "10 Sep 2026",
        status: "Active",
    },
    {
        key: 2,
        title: "React.js Developer",
        company: "Innovate Labs",
        location: "Pune",
        type: "Full Time",
        applications: 64,
        postedDate: "09 Sep 2026",
        status: "Active",
    },
    {
        key: 3,
        title: "UI/UX Designer",
        company: "DesignHub",
        location: "Mumbai",
        type: "Full Time",
        applications: 48,
        postedDate: "08 Sep 2026",
        status: "Active",
    },
    {
        key: 4,
        title: "Angular Developer",
        company: "CloudWorks",
        location: "Hyderabad",
        type: "Contract",
        applications: 37,
        postedDate: "07 Sep 2026",
        status: "Active",
    },
    {
        key: 5,
        title: "Software Engineer Intern",
        company: "StartupX",
        location: "Jaipur",
        type: "Internship",
        applications: 92,
        postedDate: "06 Sep 2026",
        status: "Active",
    },
    {
        key: 6,
        title: "Backend Developer",
        company: "DataCore Technologies",
        location: "New Delhi",
        type: "Full Time",
        applications: 31,
        postedDate: "05 Sep 2026",
        status: "Paused",
    },
    {
        key: 7,
        title: "Product Manager",
        company: "GrowthLabs",
        location: "Bengaluru",
        type: "Full Time",
        applications: 25,
        postedDate: "04 Sep 2026",
        status: "Draft",
    },
    {
        key: 8,
        title: "Mobile App Developer",
        company: "AppWorks",
        location: "Chennai",
        type: "Part Time",
        applications: 19,
        postedDate: "03 Sep 2026",
        status: "Closed",
    },
];

const getStatusTag = (status: JobReport["status"]) => {
    const styles: Record<
        JobReport["status"],
        { color: string; bg: string }
    > = {
        Active: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Draft: {
            color: "#64748B",
            bg: "#F1F5F9",
        },
        Closed: {
            color: "#DC2626",
            bg: "#FEF2F2",
        },
        Paused: {
            color: "#D97706",
            bg: "#FFFBEB",
        },
    };

    return (
        <Tag
            bordered={false}
            className="!m-0 !rounded-full !px-3 !py-1 !text-xs !font-medium"
            style={{
                color: styles[status].color,
                backgroundColor: styles[status].bg,
            }}
        >
            {status}
        </Tag>
    );
};

const JobsReport = () => {
    const columns = [
        {
            title: "Job",
            key: "job",
            width: 300,
            render: (_: unknown, record: JobReport) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {record.title.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <div className="truncate font-medium text-[#0F172A]">
                            {record.title}
                        </div>

                        <div className="truncate text-xs text-[#64748B]">
                            {record.company}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            width: 160,
            render: (location: string) => (
                <div className="flex items-center gap-2 text-[#475569]">
                    <EnvironmentOutlined />
                    {location}
                </div>
            ),
        },
        {
            title: "Job Type",
            dataIndex: "type",
            key: "type",
            width: 140,
        },
        {
            title: "Applications",
            dataIndex: "applications",
            key: "applications",
            width: 130,
            render: (applications: number) => (
                <span className="font-medium text-[#0F172A]">
                    {applications}
                </span>
            ),
        },
        {
            title: "Posted Date",
            dataIndex: "postedDate",
            key: "postedDate",
            width: 150,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: JobReport["status"]) => getStatusTag(status),
        },
        {
            title: "",
            key: "actions",
            width: 60,
            fixed: "right" as const,
            render: () => (
                <Dropdown
                    menu={{
                        items: [
                            {
                                key: "view",
                                label: "View Job",
                            },
                            {
                                key: "applications",
                                label: "View Applications",
                            },
                        ],
                    }}
                    trigger={["click"]}
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
                            Job Type
                        </button>

                        <button
                            className="rounded-br-xl border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]"
                        >
                            Recent Jobs
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
                    dataSource={jobReports}
                    rowKey="key"
                    showHeader={jobReports.length > 0}
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

export default JobsReport;
