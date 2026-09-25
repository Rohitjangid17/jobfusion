import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Job } from "../superadmin.interface";

const Jobs = () => {
    const jobs: Job[] = [
        {
            key: 1,
            title: "Senior Frontend Developer",
            company: "TechNova Solutions",
            location: "Jaipur, Rajasthan",
            employmentType: "Full Time",
            applications: 42,
            postedDate: "10 Sep 2026",
            status: "Active",
        },
        {
            key: 2,
            title: "React.js Developer",
            company: "GrowthLabs Pvt. Ltd.",
            location: "Mumbai, Maharashtra",
            employmentType: "Full Time",
            applications: 28,
            postedDate: "08 Sep 2026",
            status: "Active",
        },
        {
            key: 3,
            title: "UI/UX Designer",
            company: "FinEdge Technologies",
            location: "Bengaluru, Karnataka",
            employmentType: "Full Time",
            applications: 35,
            postedDate: "06 Sep 2026",
            status: "Active",
        },
        {
            key: 4,
            title: "Angular Developer",
            company: "StartupHub",
            location: "Pune, Maharashtra",
            employmentType: "Contract",
            applications: 18,
            postedDate: "05 Sep 2026",
            status: "Paused",
        },
        {
            key: 5,
            title: "Backend Developer",
            company: "EduCore Systems",
            location: "Hyderabad, Telangana",
            employmentType: "Full Time",
            applications: 31,
            postedDate: "03 Sep 2026",
            status: "Active",
        },
        {
            key: 6,
            title: "Software Engineer Intern",
            company: "BuildRight Infra",
            location: "New Delhi, India",
            employmentType: "Internship",
            applications: 56,
            postedDate: "01 Sep 2026",
            status: "Closed",
        },
        {
            key: 7,
            title: "Product Manager",
            company: "TechNova Solutions",
            location: "Jaipur, Rajasthan",
            employmentType: "Full Time",
            applications: 22,
            postedDate: "30 Aug 2026",
            status: "Draft",
        },
        {
            key: 8,
            title: "Mobile App Developer",
            company: "GrowthLabs Pvt. Ltd.",
            location: "Remote",
            employmentType: "Part Time",
            applications: 19,
            postedDate: "28 Aug 2026",
            status: "Active",
        },
    ];

    const exportItems: MenuProps["items"] = [
        {
            key: "csv",
            icon: <FileExcelOutlined />,
            label: "Export CSV",
        },
        {
            key: "pdf",
            icon: <FilePdfOutlined />,
            label: "Export PDF",
        },
    ];

    const actionItems = (): MenuProps["items"] => [
        {
            key: "view",
            icon: <EyeOutlined />,
            label: "View",
        },
        {
            key: "edit",
            icon: <EditOutlined />,
            label: "Edit",
        },
        {
            key: "applications",
            label: "View Applications",
        },
        {
            key: "change-status",
            label: "Change Status",
        },
        {
            type: "divider",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
        },
    ];

    const columns = [
        {
            title: "Job",
            dataIndex: "title",
            key: "title",
            width: 250,
            render: (title: string, record: Job) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {title.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={title}>
                            <div className="truncate font-medium text-[#0F172A]">
                                {title}
                            </div>
                        </Tooltip>

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
            width: 180,
        },
        {
            title: "Employment Type",
            dataIndex: "employmentType",
            key: "employmentType",
            width: 160,
            render: (type: Job["employmentType"]) => (
                <Tag className="!rounded-full !px-3">
                    {type}
                </Tag>
            ),
        },
        {
            title: "Applications",
            dataIndex: "applications",
            key: "applications",
            width: 120,
        },
        {
            title: "Posted Date",
            dataIndex: "postedDate",
            key: "postedDate",
            width: 130,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: Job["status"]) => (
                <Tag
                    color={
                        status === "Active"
                            ? "success"
                            : status === "Draft"
                                ? "default"
                                : status === "Paused"
                                    ? "warning"
                                    : "error"
                    }
                    className="!rounded-full !px-3"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 90,
            fixed: "right" as const,
            render: (_: unknown, record: Job) => (
                <Dropdown
                    menu={{
                        items: actionItems(),
                        onClick: ({ key }) => {
                            console.log(key, record);
                        },
                    }}
                    trigger={["click"]}
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                            className="!h-8 !w-8 !rounded-lg"
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
                        placeholder="Search jobs"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[140px]"
                        options={[
                            { label: "All Status", value: "all" },
                            { label: "Active", value: "Active" },
                            { label: "Draft", value: "Draft" },
                            { label: "Paused", value: "Paused" },
                            { label: "Closed", value: "Closed" },
                        ]}
                    />

                    <Select
                        placeholder="Job Type"
                        className="!w-[160px]"
                        options={[
                            { label: "All Job Types", value: "all" },
                            {
                                label: "Full Time",
                                value: "Full Time",
                            },
                            {
                                label: "Part Time",
                                value: "Part Time",
                            },
                            {
                                label: "Contract",
                                value: "Contract",
                            },
                            {
                                label: "Internship",
                                value: "Internship",
                            },
                        ]}
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Job
                    </Button>

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
                    columns={columns}
                    dataSource={jobs}
                    rowKey="key"
                    showHeader={jobs.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
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