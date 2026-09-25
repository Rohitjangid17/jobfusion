import { DownloadOutlined, EnvironmentOutlined, MoreOutlined, } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Dropdown, Table, Tag, Tabs, Tooltip, } from "antd";
import type { HiringReport as HiringReportItem } from "../../superadmin.interface";

const hiringReports: HiringReportItem[] = [
    {
        key: 1,
        candidate: "Aarav Sharma",
        job: "Senior Frontend Developer",
        company: "TechNova Solutions",
        location: "Bengaluru",
        recruiter: "Neha Sharma",
        hiredDate: "10 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 2,
        candidate: "Priya Mehta",
        job: "React.js Developer",
        company: "Innovate Labs",
        location: "Pune",
        recruiter: "Rahul Verma",
        hiredDate: "09 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 3,
        candidate: "Rohan Gupta",
        job: "UI/UX Designer",
        company: "DesignHub",
        location: "Mumbai",
        recruiter: "Ankit Jain",
        hiredDate: "08 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 4,
        candidate: "Simran Kaur",
        job: "Angular Developer",
        company: "CloudWorks",
        location: "Hyderabad",
        recruiter: "Pooja Mehta",
        hiredDate: "07 Sep 2026",
        type: "Contract",
        status: "Hired",
    },
    {
        key: 5,
        candidate: "Vikas Yadav",
        job: "Software Engineer",
        company: "StartupX",
        location: "Jaipur",
        recruiter: "Amit Sharma",
        hiredDate: "06 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 6,
        candidate: "Anjali Sharma",
        job: "Backend Developer",
        company: "DataCore Technologies",
        location: "New Delhi",
        recruiter: "Riya Gupta",
        hiredDate: "05 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 7,
        candidate: "Karan Joshi",
        job: "Product Manager",
        company: "GrowthLabs",
        location: "Bengaluru",
        recruiter: "Mohit Singh",
        hiredDate: "04 Sep 2026",
        type: "Full Time",
        status: "Hired",
    },
    {
        key: 8,
        candidate: "Pooja Agarwal",
        job: "Mobile App Developer",
        company: "AppWorks",
        location: "Chennai",
        recruiter: "Sneha Kapoor",
        hiredDate: "03 Sep 2026",
        type: "Part Time",
        status: "Hired",
    },
];

const getStatusTag = (status: HiringReportItem["status"]) => {
    const styles: Record<
        HiringReportItem["status"],
        { color: string; bg: string }
    > = {
        Hired: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Pending: {
            color: "#D97706",
            bg: "#FFFBEB",
        },
        Rejected: {
            color: "#DC2626",
            bg: "#FEF2F2",
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

const HiringReport = () => {
    const columns = [
        {
            title: "Candidate",
            key: "candidate",
            width: 270,
            render: (_: unknown, record: HiringReportItem) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {record.candidate.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <div className="truncate font-medium text-[#0F172A]">
                            {record.candidate}
                        </div>

                        <div className="truncate text-xs text-[#64748B]">
                            {record.job}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Company",
            key: "company",
            width: 200,
            render: (_: unknown, record: HiringReportItem) => (
                <div className="min-w-0">
                    <div className="truncate font-medium text-[#0F172A]">
                        {record.company}
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#64748B]">
                        <EnvironmentOutlined />
                        {record.location}
                    </div>
                </div>
            ),
        },
        {
            title: "Recruiter",
            dataIndex: "recruiter",
            key: "recruiter",
            width: 150,
        },
        {
            title: "Job Type",
            dataIndex: "type",
            key: "type",
            width: 130,
        },
        {
            title: "Hired Date",
            dataIndex: "hiredDate",
            key: "hiredDate",
            width: 140,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: HiringReportItem["status"]) =>
                getStatusTag(status),
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
                                key: "view-candidate",
                                label: "View Candidate",
                            },
                            {
                                key: "view-job",
                                label: "View Job",
                            },
                            {
                                key: "view-company",
                                label: "View Company",
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
                    <div
                        className="
                            flex items-center overflow-hidden rounded-2xl
                            border border-[#E5E7EB] bg-white
                            [&_.ant-tabs-nav]:!m-0
                            [&_.ant-tabs-nav]:!border-0
                            [&_.ant-tabs-nav]:!p-0
                            [&_.ant-tabs-tab]:!m-0
                            [&_.ant-tabs-tab]:!px-5
                            [&_.ant-tabs-tab]:!py-2
                            [&_.ant-tabs-tab-active]:!border-b-2
                            [&_.ant-tabs-tab-active]:!border-[#0052CC]
                            [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!font-semibold
                            [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-[#0052CC]
                            [&_.ant-tabs-tab-active:first-child]:!rounded-bl-2xl
                            [&_.ant-tabs-tab-active:last-child]:!rounded-br-2xl
                        "
                    >
                        <Tabs
                            defaultActiveKey="overview"
                            items={[
                                {
                                    key: "overview",
                                    label: "Overview",
                                },
                                {
                                    key: "status",
                                    label: "Status",
                                },
                                {
                                    key: "job-type",
                                    label: "Job Type",
                                },
                                {
                                    key: "recent",
                                    label: "Recent Hires",
                                },
                            ]}
                        />
                    </div>

                    <Button
                        className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        title="Export"
                        icon={<DownloadOutlined />}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={hiringReports}
                    rowKey="key"
                    showHeader={hiringReports.length > 0}
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

export default HiringReport;