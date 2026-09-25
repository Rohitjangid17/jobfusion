import { DownloadOutlined, MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Dropdown, Table, Tag, Tooltip, } from "antd";
import type { ApplicationReport } from "../../superadmin.interface";

const applicationReports: ApplicationReport[] = [
    {
        key: 1,
        candidate: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        job: "Senior Frontend Developer",
        company: "TechNova Solutions",
        recruiter: "Neha Sharma",
        appliedDate: "10 Sep 2026",
        status: "Shortlisted",
    },
    {
        key: 2,
        candidate: "Priya Mehta",
        email: "priya.mehta@example.com",
        job: "React.js Developer",
        company: "InnoTech Pvt Ltd",
        recruiter: "Rahul Verma",
        appliedDate: "09 Sep 2026",
        status: "Interview",
    },
    {
        key: 3,
        candidate: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        job: "UI/UX Designer",
        company: "Creative Labs",
        recruiter: "Ankit Jain",
        appliedDate: "08 Sep 2026",
        status: "Applied",
    },
    {
        key: 4,
        candidate: "Simran Kaur",
        email: "simran.kaur@example.com",
        job: "Angular Developer",
        company: "WebCore Technologies",
        recruiter: "Pooja Mehta",
        appliedDate: "07 Sep 2026",
        status: "Selected",
    },
    {
        key: 5,
        candidate: "Vikas Yadav",
        email: "vikas.yadav@example.com",
        job: "Backend Developer",
        company: "CloudWorks",
        recruiter: "Amit Sharma",
        appliedDate: "06 Sep 2026",
        status: "Rejected",
    },
    {
        key: 6,
        candidate: "Anjali Sharma",
        email: "anjali.sharma@example.com",
        job: "Software Engineer Intern",
        company: "StartupHub",
        recruiter: "Riya Gupta",
        appliedDate: "05 Sep 2026",
        status: "Applied",
    },
    {
        key: 7,
        candidate: "Karan Joshi",
        email: "karan.joshi@example.com",
        job: "Product Manager",
        company: "FinTech Solutions",
        recruiter: "Mohit Singh",
        appliedDate: "04 Sep 2026",
        status: "Shortlisted",
    },
    {
        key: 8,
        candidate: "Pooja Agarwal",
        email: "pooja.agarwal@example.com",
        job: "Mobile App Developer",
        company: "AppWorks",
        recruiter: "Sneha Kapoor",
        appliedDate: "03 Sep 2026",
        status: "Interview",
    },
];

const getStatusTag = (status: ApplicationReport["status"]) => {
    const styles: Record<ApplicationReport["status"], { color: string; bg: string }> = {
        Applied: {
            color: "#2563EB",
            bg: "#EFF6FF",
        },
        Shortlisted: {
            color: "#D97706",
            bg: "#FFFBEB",
        },
        Interview: {
            color: "#7C3AED",
            bg: "#F5F3FF",
        },
        Selected: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Rejected: {
            color: "#DC2626",
            bg: "#FEF2F2",
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

const ApplicationsReport = () => {
    const columns = [
        {
            title: "Candidate",
            key: "candidate",
            width: 240,
            render: (_: unknown, record: ApplicationReport) => (
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
                            {record.email}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Job",
            key: "job",
            width: 230,
            render: (_: unknown, record: ApplicationReport) => (
                <div className="min-w-0">
                    <div className="truncate font-medium text-[#0F172A]">
                        {record.job}
                    </div>

                    <div className="truncate text-xs text-[#64748B]">
                        {record.company}
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
            title: "Applied Date",
            dataIndex: "appliedDate",
            key: "appliedDate",
            width: 150,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 130,
            render: (status: ApplicationReport["status"]) =>
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
                                label: "View Application",
                            },
                            {
                                key: "candidate",
                                label: "View Candidate",
                            },
                            {
                                key: "job",
                                label: "View Job",
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
        <div className="flex h-full flex-col gap-4 overflow-x-hidden overflow-y-auto">
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
                            Recent Applications
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

            {/* Recent Applications */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={applicationReports}
                    rowKey="key"
                    showHeader={applicationReports.length > 0}
                    scroll={{ y: "calc(100vh - 328px)" }}
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

export default ApplicationsReport;