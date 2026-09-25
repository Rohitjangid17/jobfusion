import { CheckCircleOutlined, DeleteOutlined, DownloadOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MessageOutlined, MoreOutlined, SearchOutlined, StarOutlined, UserOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Application } from "../recruiter.interface";

const applications: Application[] = [
    {
        key: 1,
        candidate: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        job: "Senior Frontend Developer",
        experience: "3 Years",
        location: "Bengaluru",
        appliedDate: "10 Sep 2026",
        status: "New",
        source: "LinkedIn",
    },
    {
        key: 2,
        candidate: "Priya Mehta",
        email: "priya.mehta@gmail.com",
        job: "React.js Developer",
        experience: "2.5 Years",
        location: "Pune",
        appliedDate: "09 Sep 2026",
        status: "Shortlisted",
        source: "Naukri",
    },
    {
        key: 3,
        candidate: "Rohan Gupta",
        email: "rohan.gupta@gmail.com",
        job: "UI/UX Designer",
        experience: "4 Years",
        location: "Mumbai",
        appliedDate: "08 Sep 2026",
        status: "Interview",
        source: "Indeed",
    },
    {
        key: 4,
        candidate: "Simran Kaur",
        email: "simran.kaur@gmail.com",
        job: "Angular Developer",
        experience: "3.5 Years",
        location: "Hyderabad",
        appliedDate: "07 Sep 2026",
        status: "Selected",
        source: "LinkedIn",
    },
    {
        key: 5,
        candidate: "Vikas Yadav",
        email: "vikas.yadav@gmail.com",
        job: "Software Engineer Intern",
        experience: "1 Year",
        location: "Jaipur",
        appliedDate: "06 Sep 2026",
        status: "New",
        source: "Direct",
    },
    {
        key: 6,
        candidate: "Anjali Sharma",
        email: "anjali.sharma@gmail.com",
        job: "Backend Developer",
        experience: "5 Years",
        location: "New Delhi",
        appliedDate: "05 Sep 2026",
        status: "Rejected",
        source: "Naukri",
    },
    {
        key: 7,
        candidate: "Karan Joshi",
        email: "karan.joshi@gmail.com",
        job: "Product Manager",
        experience: "4 Years",
        location: "Bengaluru",
        appliedDate: "04 Sep 2026",
        status: "Shortlisted",
        source: "Referral",
    },
    {
        key: 8,
        candidate: "Pooja Agarwal",
        email: "pooja.agarwal@gmail.com",
        job: "Mobile App Developer",
        experience: "3 Years",
        location: "Chennai",
        appliedDate: "03 Sep 2026",
        status: "Interview",
        source: "Indeed",
    },
];

const getStatusTag = (status: Application["status"]) => {
    switch (status) {
        case "New":
            return (
                <Tag
                    color="processing"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    New
                </Tag>
            );

        case "Shortlisted":
            return (
                <Tag
                    color="warning"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Shortlisted
                </Tag>
            );

        case "Interview":
            return (
                <Tag
                    color="purple"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Interview
                </Tag>
            );

        case "Selected":
            return (
                <Tag
                    color="success"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Selected
                </Tag>
            );

        case "Rejected":
            return (
                <Tag
                    color="error"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Rejected
                </Tag>
            );
    }
};

const columns: ColumnsType<Application> = [
    {
        title: "Candidate",
        key: "candidate",
        width: 280,
        render: (_: unknown, record: Application) => (
            <div className="flex items-center gap-3">
                <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                />

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
        width: 220,
        render: (_: unknown, record: Application) => (
            <div>
                <div className="truncate font-medium text-[#334155]">
                    {record.job}
                </div>

                <div className="text-xs text-[#94A3B8]">
                    {record.location}
                </div>
            </div>
        ),
    },
    {
        title: "Experience",
        dataIndex: "experience",
        key: "experience",
        width: 120,
    },
    {
        title: "Applied Date",
        dataIndex: "appliedDate",
        key: "appliedDate",
        width: 130,
    },
    {
        title: "Source",
        dataIndex: "source",
        key: "source",
        width: 120,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 130,
        render: (status: Application["status"]) =>
            getStatusTag(status),
    },
    {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 80,
        render: (_: unknown, record: Application) => (
            <Dropdown
                trigger={["click"]}
                menu={{
                    items: [
                        {
                            key: "view",
                            icon: <EyeOutlined />,
                            label: "View Application",
                        },
                        {
                            key: "candidate",
                            icon: <UserOutlined />,
                            label: "View Candidate",
                        },
                        {
                            key: "message",
                            icon: <MessageOutlined />,
                            label: "Message Candidate",
                        },
                        {
                            key: "shortlist",
                            icon: <StarOutlined />,
                            label:
                                record.status === "Shortlisted"
                                    ? "Remove from Shortlisted"
                                    : "Shortlist Candidate",
                        },
                        {
                            type: "divider",
                        },
                        ...(record.status === "New"
                            ? [
                                {
                                    key: "shortlist",
                                    icon: <StarOutlined />,
                                    label: "Shortlist",
                                },
                            ]
                            : []),
                        ...(record.status === "Shortlisted"
                            ? [
                                {
                                    key: "interview",
                                    icon: <CheckCircleOutlined />,
                                    label: "Schedule Interview",
                                },
                            ]
                            : []),
                        ...(record.status === "Interview"
                            ? [
                                {
                                    key: "select",
                                    icon: <CheckCircleOutlined />,
                                    label: "Select Candidate",
                                },
                            ]
                            : []),
                        {
                            key: "delete",
                            icon: <DeleteOutlined />,
                            label: "Delete Application",
                            danger: true,
                        },
                    ],
                }}
            >
                <Tooltip title="Actions">
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!rounded-full !text-[#475569]"
                    />
                </Tooltip>
            </Dropdown>
        ),
    },
];

const Applications = () => {
    // export application csv file
    const exportApplicationCsv = () => { };

    // export application pdf file
    const exportApplicationPdf = () => { };

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Filters + Export */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search applications..."
                        className="!w-[260px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Job"
                        allowClear
                        className="w-40 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            {
                                value: "Senior Frontend Developer",
                                label: "Senior Frontend Developer",
                            },
                            {
                                value: "React.js Developer",
                                label: "React.js Developer",
                            },
                            {
                                value: "UI/UX Designer",
                                label: "UI/UX Designer",
                            },
                            {
                                value: "Angular Developer",
                                label: "Angular Developer",
                            },
                            {
                                value: "Backend Developer",
                                label: "Backend Developer",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            { value: "New", label: "New" },
                            {
                                value: "Shortlisted",
                                label: "Shortlisted",
                            },
                            {
                                value: "Interview",
                                label: "Interview",
                            },
                            {
                                value: "Selected",
                                label: "Selected",
                            },
                            {
                                value: "Rejected",
                                label: "Rejected",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Date"
                        allowClear
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            {
                                value: "today",
                                label: "Today",
                            },
                            {
                                value: "7days",
                                label: "Last 7 Days",
                            },
                            {
                                value: "30days",
                                label: "Last 30 Days",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
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
                                    ? exportApplicationCsv()
                                    : key === "pdf"
                                        ? exportApplicationPdf()
                                        : undefined,
                        }}
                    >
                        <Button
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                    className="
                    flex w-fit items-center overflow-hidden rounded-2xl
                    border border-[#E5E7EB] bg-white
                    [&_.ant-tabs-nav]:!m-0
                    [&_.ant-tabs-nav]:!border-0
                    [&_.ant-tabs-nav]:!p-0
                    [&_.ant-tabs-tab]:!m-0
                    [&_.ant-tabs-tab]:!px-5
                    [&_.ant-tabs-tab]:!py-3
                    [&_.ant-tabs-tab-active]:!border-b-2
                    [&_.ant-tabs-tab-active]:!border-[#0052CC]
                    [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!font-semibold
                    [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-[#0052CC]
                "
                >
                    <div className="flex">
                        <button className="border-b-2 border-[#0052CC] px-5 py-3 text-sm font-semibold text-[#0052CC]">
                            All Applications
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            New
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Shortlisted
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Interview
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Selected
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Rejected
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={applications}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 392px)",
                    }}
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

export default Applications;