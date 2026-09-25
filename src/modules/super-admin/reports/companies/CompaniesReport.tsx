import { DownloadOutlined, MoreOutlined, } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Dropdown, Table, Tag, Tooltip, } from "antd";
import type { CompanyReport } from "../../superadmin.interface";

const companyReports: CompanyReport[] = [
    {
        key: 1,
        name: "TechNova Solutions",
        industry: "Information Technology",
        location: "Bengaluru",
        plan: "Enterprise",
        jobs: 86,
        recruiters: 12,
        employees: 450,
        joinedDate: "10 Sep 2026",
        status: "Active",
    },
    {
        key: 2,
        name: "Innovate Labs",
        industry: "Software Development",
        location: "Pune",
        plan: "Growth",
        jobs: 64,
        recruiters: 8,
        employees: 280,
        joinedDate: "09 Sep 2026",
        status: "Active",
    },
    {
        key: 3,
        name: "DesignHub",
        industry: "Design & Creative",
        location: "Mumbai",
        plan: "Starter",
        jobs: 48,
        recruiters: 6,
        employees: 120,
        joinedDate: "08 Sep 2026",
        status: "Active",
    },
    {
        key: 4,
        name: "CloudWorks",
        industry: "Cloud & IT Services",
        location: "Hyderabad",
        plan: "Growth",
        jobs: 37,
        recruiters: 5,
        employees: 210,
        joinedDate: "07 Sep 2026",
        status: "Active",
    },
    {
        key: 5,
        name: "StartupX",
        industry: "Technology",
        location: "Jaipur",
        plan: "Free",
        jobs: 24,
        recruiters: 3,
        employees: 65,
        joinedDate: "06 Sep 2026",
        status: "Trial",
    },
    {
        key: 6,
        name: "DataCore Technologies",
        industry: "Data & Analytics",
        location: "New Delhi",
        plan: "Enterprise",
        jobs: 31,
        recruiters: 7,
        employees: 340,
        joinedDate: "05 Sep 2026",
        status: "Active",
    },
    {
        key: 7,
        name: "GrowthLabs",
        industry: "FinTech",
        location: "Bengaluru",
        plan: "Starter",
        jobs: 18,
        recruiters: 4,
        employees: 95,
        joinedDate: "04 Sep 2026",
        status: "Suspended",
    },
    {
        key: 8,
        name: "AppWorks",
        industry: "Mobile Development",
        location: "Chennai",
        plan: "Growth",
        jobs: 22,
        recruiters: 5,
        employees: 180,
        joinedDate: "03 Sep 2026",
        status: "Active",
    },
];

const getStatusTag = (status: CompanyReport["status"]) => {
    const styles: Record<
        CompanyReport["status"],
        { color: string; bg: string }
    > = {
        Active: {
            color: "#16A34A",
            bg: "#F0FDF4",
        },
        Trial: {
            color: "#2563EB",
            bg: "#EFF6FF",
        },
        Suspended: {
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

const getPlanTag = (plan: CompanyReport["plan"]) => {
    const styles: Record<
        CompanyReport["plan"],
        { color: string; bg: string }
    > = {
        Free: {
            color: "#64748B",
            bg: "#F1F5F9",
        },
        Starter: {
            color: "#2563EB",
            bg: "#EFF6FF",
        },
        Growth: {
            color: "#7C3AED",
            bg: "#F5F3FF",
        },
        Enterprise: {
            color: "#0F766E",
            bg: "#F0FDFA",
        },
    };

    return (
        <Tag
            bordered={false}
            className="!m-0 !rounded-full !px-3 !py-1 !text-xs !font-medium"
            style={{
                color: styles[plan].color,
                backgroundColor: styles[plan].bg,
            }}
        >
            {plan}
        </Tag>
    );
};

const CompaniesReport = () => {
    const columns = [
        {
            title: "Company",
            key: "company",
            width: 280,
            render: (_: unknown, record: CompanyReport) => (
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
                            {record.industry}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            width: 140,
        },
        {
            title: "Plan",
            dataIndex: "plan",
            key: "plan",
            width: 130,
            render: (plan: CompanyReport["plan"]) =>
                getPlanTag(plan),
        },
        {
            title: "Jobs",
            dataIndex: "jobs",
            key: "jobs",
            width: 100,
            render: (jobs: number) => (
                <span className="font-medium text-[#0F172A]">
                    {jobs}
                </span>
            ),
        },
        {
            title: "Recruiters",
            dataIndex: "recruiters",
            key: "recruiters",
            width: 120,
            render: (recruiters: number) => (
                <span className="font-medium text-[#0F172A]">
                    {recruiters}
                </span>
            ),
        },
        {
            title: "Employees",
            dataIndex: "employees",
            key: "employees",
            width: 120,
        },
        {
            title: "Joined Date",
            dataIndex: "joinedDate",
            key: "joinedDate",
            width: 140,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: CompanyReport["status"]) =>
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
                                key: "view",
                                label: "View Company",
                            },
                            {
                                key: "jobs",
                                label: "View Jobs",
                            },
                            {
                                key: "recruiters",
                                label: "View Recruiters",
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
                {/* Left Side */}
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

                {/* Right Side */}
                <div className="flex flex-wrap items-center gap-3">
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
                            Plan
                        </button>

                        <button
                            className="rounded-br-xl border-b-2 border-transparent px-4 py-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]"
                        >
                            Recent Companies
                        </button>
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
                    dataSource={companyReports}
                    rowKey="key"
                    showHeader={companyReports.length > 0}
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

export default CompaniesReport;