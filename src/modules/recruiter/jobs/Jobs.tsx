import { CheckCircleOutlined, CopyOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, FileTextOutlined, MoreOutlined, PlusOutlined, SearchOutlined, StopOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Job } from "../recruiter.interface";

const jobs: Job[] = [
    {
        key: 1,
        title: "Senior Frontend Developer",
        company: "TechNova Solutions",
        location: "Bengaluru",
        type: "Full Time",
        workMode: "Hybrid",
        applications: 86,
        postedDate: "10 Sep 2026",
        expiryDate: "10 Oct 2026",
        status: "Active",
    },
    {
        key: 2,
        title: "React.js Developer",
        company: "TechNova Solutions",
        location: "Pune",
        type: "Full Time",
        workMode: "Remote",
        applications: 64,
        postedDate: "09 Sep 2026",
        expiryDate: "09 Oct 2026",
        status: "Active",
    },
    {
        key: 3,
        title: "UI/UX Designer",
        company: "TechNova Solutions",
        location: "Mumbai",
        type: "Full Time",
        workMode: "On-site",
        applications: 48,
        postedDate: "08 Sep 2026",
        expiryDate: "08 Oct 2026",
        status: "Active",
    },
    {
        key: 4,
        title: "Angular Developer",
        company: "TechNova Solutions",
        location: "Hyderabad",
        type: "Contract",
        workMode: "Hybrid",
        applications: 37,
        postedDate: "07 Sep 2026",
        expiryDate: "07 Oct 2026",
        status: "Active",
    },
    {
        key: 5,
        title: "Software Engineer Intern",
        company: "TechNova Solutions",
        location: "Jaipur",
        type: "Internship",
        workMode: "On-site",
        applications: 92,
        postedDate: "-",
        expiryDate: "-",
        status: "Draft",
    },
    {
        key: 6,
        title: "Backend Developer",
        company: "TechNova Solutions",
        location: "New Delhi",
        type: "Full Time",
        workMode: "Remote",
        applications: 31,
        postedDate: "05 Aug 2026",
        expiryDate: "05 Sep 2026",
        status: "Expired",
    },
    {
        key: 7,
        title: "Product Manager",
        company: "TechNova Solutions",
        location: "Bengaluru",
        type: "Full Time",
        workMode: "Hybrid",
        applications: 25,
        postedDate: "04 Aug 2026",
        expiryDate: "04 Sep 2026",
        status: "Closed",
    },
    {
        key: 8,
        title: "Mobile App Developer",
        company: "TechNova Solutions",
        location: "Chennai",
        type: "Part Time",
        workMode: "Remote",
        applications: 19,
        postedDate: "03 Aug 2026",
        expiryDate: "03 Sep 2026",
        status: "Closed",
    },
];

const getStatusTag = (status: Job["status"]) => {
    switch (status) {
        case "Active":
            return (
                <Tag
                    color="success"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Active
                </Tag>
            );

        case "Draft":
            return (
                <Tag
                    color="default"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Draft
                </Tag>
            );

        case "Closed":
            return (
                <Tag
                    color="error"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Closed
                </Tag>
            );

        case "Expired":
            return (
                <Tag
                    color="warning"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Expired
                </Tag>
            );
    }
};

const columns: ColumnsType<Job> = [
    {
        title: "Job",
        key: "job",
        width: 280,
        render: (_: unknown, record: Job) => (
            <div className="flex items-center gap-3">
                <Avatar
                    size={40}
                    icon={<FileTextOutlined />}
                    className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                />

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
        width: 150,
        render: (location: string, record: Job) => (
            <div>
                <div className="text-[#334155]">{location}</div>
                <div className="text-xs text-[#94A3B8]">
                    {record.workMode}
                </div>
            </div>
        ),
    },
    {
        title: "Job Type",
        dataIndex: "type",
        key: "type",
        width: 130,
    },
    {
        title: "Applications",
        dataIndex: "applications",
        key: "applications",
        width: 120,
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
        width: 130,
    },
    {
        title: "Expiry Date",
        dataIndex: "expiryDate",
        key: "expiryDate",
        width: 130,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 110,
        render: (status: Job["status"]) => getStatusTag(status),
    },
    {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 80,
        render: (_: unknown, record: Job) => (
            <Dropdown
                trigger={["click"]}
                menu={{
                    items: [
                        {
                            key: "view",
                            icon: <EyeOutlined />,
                            label: "View Job",
                        },
                        {
                            key: "edit",
                            icon: <EditOutlined />,
                            label: "Edit Job",
                        },
                        {
                            key: "duplicate",
                            icon: <CopyOutlined />,
                            label: "Duplicate Job",
                        },
                        {
                            type: "divider",
                        },
                        ...(record.status === "Active"
                            ? [
                                {
                                    key: "close",
                                    icon: <StopOutlined />,
                                    label: "Close Job",
                                },
                            ]
                            : record.status === "Closed" ||
                                record.status === "Expired"
                                ? [
                                    {
                                        key: "reopen",
                                        icon: <CheckCircleOutlined />,
                                        label: "Reopen Job",
                                    },
                                ]
                                : []),
                        ...(record.status === "Draft"
                            ? [
                                {
                                    key: "publish",
                                    icon: <CheckCircleOutlined />,
                                    label: "Publish Job",
                                },
                            ]
                            : []),
                        {
                            key: "delete",
                            icon: <DeleteOutlined />,
                            label: "Delete Job",
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

const Jobs = () => {
    // export job csv file
    const exportJobCsv = () => {

    }

    // export job pdf file
    const exportJobPdf = () => {

    }

    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search jobs..."
                        className="!w-[260px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Job Type"
                        allowClear
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            {
                                value: "Full Time",
                                label: "Full Time",
                            },
                            {
                                value: "Part Time",
                                label: "Part Time",
                            },
                            {
                                value: "Contract",
                                label: "Contract",
                            },
                            {
                                value: "Internship",
                                label: "Internship",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Work Mode"
                        allowClear
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            {
                                value: "On-site",
                                label: "On-site",
                            },
                            {
                                value: "Remote",
                                label: "Remote",
                            },
                            {
                                value: "Hybrid",
                                label: "Hybrid",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Location"
                        allowClear
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            {
                                value: "Bengaluru",
                                label: "Bengaluru",
                            },
                            {
                                value: "Pune",
                                label: "Pune",
                            },
                            {
                                value: "Mumbai",
                                label: "Mumbai",
                            },
                            {
                                value: "Hyderabad",
                                label: "Hyderabad",
                            },
                            {
                                value: "Jaipur",
                                label: "Jaipur",
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
                                        <span className="font-medium text-sm text-[#6B7280]">
                                            Downlaods
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
                                    ? exportJobCsv()
                                    : exportJobPdf(),
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
                            All Jobs
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Active
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Draft
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Closed
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Expired
                        </button>
                    </div>
                </div>

                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                >
                    Create Job
                </Button>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={jobs}
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

export default Jobs;
