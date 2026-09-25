import { CalendarOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, MoreOutlined, SearchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Card, DatePicker, Dropdown, Input, Progress, Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { RecruiterReport } from "../../superadmin.interface";

const { RangePicker } = DatePicker;

const recruiters: RecruiterReport[] = [
    {
        key: 1,
        name: "Neha Sharma",
        email: "neha@technova.com",
        company: "TechNova Solutions",
        jobs: 24,
        applications: 486,
        hired: 38,
        joinedDate: "10 Sep 2026",
        status: "Active",
    },
    {
        key: 2,
        name: "Rahul Verma",
        email: "rahul@innotech.com",
        company: "InnoTech Pvt Ltd",
        jobs: 18,
        applications: 352,
        hired: 29,
        joinedDate: "09 Sep 2026",
        status: "Active",
    },
    {
        key: 3,
        name: "Ankit Jain",
        email: "ankit@creativelabs.com",
        company: "Creative Labs",
        jobs: 15,
        applications: 298,
        hired: 24,
        joinedDate: "08 Sep 2026",
        status: "Active",
    },
    {
        key: 4,
        name: "Pooja Mehta",
        email: "pooja@webcore.com",
        company: "WebCore Technologies",
        jobs: 21,
        applications: 421,
        hired: 35,
        joinedDate: "07 Sep 2026",
        status: "Active",
    },
    {
        key: 5,
        name: "Amit Sharma",
        email: "amit@cloudworks.com",
        company: "CloudWorks",
        jobs: 12,
        applications: 246,
        hired: 18,
        joinedDate: "06 Sep 2026",
        status: "Inactive",
    },
    {
        key: 6,
        name: "Riya Gupta",
        email: "riya@startuphub.com",
        company: "StartupHub",
        jobs: 17,
        applications: 315,
        hired: 27,
        joinedDate: "05 Sep 2026",
        status: "Active",
    },
    {
        key: 7,
        name: "Mohit Singh",
        email: "mohit@fintech.com",
        company: "FinTech Solutions",
        jobs: 14,
        applications: 287,
        hired: 22,
        joinedDate: "04 Sep 2026",
        status: "Active",
    },
    {
        key: 8,
        name: "Sneha Kapoor",
        email: "sneha@appworks.com",
        company: "AppWorks",
        jobs: 10,
        applications: 194,
        hired: 15,
        joinedDate: "03 Sep 2026",
        status: "Inactive",
    },
];

const getStatusTag = (status: RecruiterReport["status"]) => {
    const styles = {
        Active: {
            color: "#16A34A",
            background: "#F0FDF4",
        },
        Inactive: {
            color: "#64748B",
            background: "#F1F5F9",
        },
    };

    return (
        <Tag
            bordered={false}
            className="!m-0 !rounded-full !px-3 !py-1"
            style={styles[status]}
        >
            {status}
        </Tag>
    );
};

const columns: ColumnsType<RecruiterReport> = [
    {
        title: "Recruiter",
        dataIndex: "name",
        key: "name",
        render: (name, record) => (
            <div className="flex items-center gap-3">
                <Avatar
                    size={40}
                    className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                >
                    {name.charAt(0)}
                </Avatar>

                <div>
                    <div className="font-medium text-[#0F172A]">{name}</div>
                    <div className="text-xs text-[#94A3B8]">{record.company}</div>
                </div>
            </div>
        ),
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (email) => (
            <span className="text-[#475569]">{email}</span>
        ),
    },
    {
        title: "Jobs",
        dataIndex: "jobs",
        key: "jobs",
        render: (jobs) => (
            <span className="font-medium text-[#0F172A]">{jobs}</span>
        ),
    },
    {
        title: "Applications",
        dataIndex: "applications",
        key: "applications",
        render: (applications) => (
            <span className="font-medium text-[#0F172A]">
                {applications.toLocaleString()}
            </span>
        ),
    },
    {
        title: "Hired",
        dataIndex: "hired",
        key: "hired",
        render: (hired) => (
            <span className="font-medium text-[#16A34A]">{hired}</span>
        ),
    },
    {
        title: "Joined Date",
        dataIndex: "joinedDate",
        key: "joinedDate",
        render: (date) => (
            <span className="text-[#475569]">{date}</span>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: getStatusTag,
    },
    {
        title: "Actions",
        key: "actions",
        align: "right",
        render: (_, record) => (
            <Dropdown
                trigger={["click"]}
                menu={{
                    items: [
                        {
                            key: "view",
                            icon: <EyeOutlined />,
                            label: "View Recruiter",
                        },
                        {
                            key: "edit",
                            icon: <EditOutlined />,
                            label: "Edit Recruiter",
                        },
                        {
                            key: "jobs",
                            label: "View Jobs",
                        },
                        {
                            key: "applications",
                            label: "View Applications",
                        },
                        {
                            type: "divider",
                            key: "divider",
                        },
                        {
                            key: "delete",
                            danger: true,
                            icon: <DeleteOutlined />,
                            label: "Delete",
                        },
                    ],
                }}
            >
                <Tooltip title="Actions">
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!text-[#64748B] hover:!bg-[#F8FAFC]"
                    />
                </Tooltip>
            </Dropdown>
        ),
    },
];

const RecruitersReport = () => {
    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
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

                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
                        <button className="rounded-bl-xl border-b-2 border-[#0052CC] px-4 py-2 text-sm font-semibold text-[#0052CC]">
                            Overview
                        </button>

                        <button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
                            Status
                        </button>

                        <button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
                            Performance
                        </button>

                        <button className="rounded-br-xl border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
                            Recent Recruiters
                        </button>
                    </div>

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
                    dataSource={recruiters}
                    rowKey="key"
                    showHeader={recruiters.length > 0}
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

export default RecruitersReport;