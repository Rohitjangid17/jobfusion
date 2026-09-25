import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Button, Dropdown, Input, Select, Table, Tag, Tooltip } from "antd";
import type { MenuProps } from "antd";
import type { Job } from "../admin.interface";

const Jobs = () => {
    const data: Job[] = [
        {
            key: 1,
            title: "Senior Frontend Developer",
            company: "TechNova Solutions",
            location: "Jaipur, Rajasthan",
            employmentType: "Full Time",
            applications: 86,
            postedDate: "08 Sep 2026",
            status: "Active",
        },
        {
            key: 2,
            title: "React.js Developer",
            company: "GrowthLabs Pvt. Ltd.",
            location: "Remote",
            employmentType: "Full Time",
            applications: 64,
            postedDate: "06 Sep 2026",
            status: "Active",
        },
        {
            key: 3,
            title: "UI/UX Designer",
            company: "FinEdge Technologies",
            location: "Mumbai, Maharashtra",
            employmentType: "Full Time",
            applications: 42,
            postedDate: "04 Sep 2026",
            status: "Active",
        },
        {
            key: 4,
            title: "Backend Developer",
            company: "CloudWorks India",
            location: "Bangalore, Karnataka",
            employmentType: "Contract",
            applications: 35,
            postedDate: "02 Sep 2026",
            status: "Paused",
        },
        {
            key: 5,
            title: "HR Executive",
            company: "Bright Future Pvt. Ltd.",
            location: "Delhi, India",
            employmentType: "Full Time",
            applications: 28,
            postedDate: "30 Aug 2026",
            status: "Active",
        },
        {
            key: 6,
            title: "Marketing Intern",
            company: "InnovateX",
            location: "Pune, Maharashtra",
            employmentType: "Internship",
            applications: 51,
            postedDate: "28 Aug 2026",
            status: "Closed",
        },
        {
            key: 7,
            title: "Angular Developer",
            company: "NextGen Solutions",
            location: "Hyderabad, Telangana",
            employmentType: "Full Time",
            applications: 47,
            postedDate: "25 Aug 2026",
            status: "Draft",
        },
        {
            key: 8,
            title: "Product Manager",
            company: "Alpha Enterprises",
            location: "Gurgaon, Haryana",
            employmentType: "Full Time",
            applications: 73,
            postedDate: "22 Aug 2026",
            status: "Active",
        },
    ];

    const exportItems: MenuProps["items"] = [
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
    ];

    const actionItems: MenuProps["items"] = [
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
            key: "status",
            icon: <UserSwitchOutlined />,
            label: "Change Status",
        },
        {
            key: "delete",
            icon: <DeleteOutlined />,
            label: "Delete",
            danger: true,
        },
    ];

    const exportJobCsv = () => {
        console.log("Export Jobs CSV");
    };

    const exportJobPdf = () => {
        console.log("Export Jobs PDF");
    };

    const columns = [
        {
            title: "Job",
            dataIndex: "title",
            key: "title",
            render: (title: string, record: Job) => (
                <div className="flex items-center gap-3">
                    <div className="min-w-0">
                        <Tooltip title={title}>
                            <span className="block max-w-[220px] truncate cursor-pointer font-medium text-[#0F172A]">
                                {title}
                            </span>
                        </Tooltip>

                        <Tooltip title={record.company}>
                            <span className="block max-w-[220px] truncate text-xs text-slate-400">
                                {record.company}
                            </span>
                        </Tooltip>
                    </div>
                </div>
            ),
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (location: string) => (
                <Tooltip title={location}>
                    <span className="block max-w-[160px] truncate cursor-pointer">
                        {location}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Employment Type",
            dataIndex: "employmentType",
            key: "employmentType",
        },
        {
            title: "Applications",
            dataIndex: "applications",
            key: "applications",
        },
        {
            title: "Posted Date",
            dataIndex: "postedDate",
            key: "postedDate",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: Job["status"]) => {
                const statusColor: Record<Job["status"], string> = {
                    Active: "green",
                    Draft: "default",
                    Closed: "red",
                    Paused: "orange",
                };

                return (
                    <Tag
                        color={statusColor[status]}
                        className="!rounded-full"
                    >
                        {status}
                    </Tag>
                );
            },
        },
        {
            title: "Actions",
            key: "actions",
            align: "center" as const,
            width: 80,
            render: (_: unknown, record: Job) => (
                <Dropdown
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                        items: actionItems,
                        onClick: ({ key }) => {
                            if (key === "view") {
                                console.log("View", record);
                            } else if (key === "edit") {
                                console.log("Edit", record);
                            } else if (key === "status") {
                                console.log("Change Status", record);
                            } else if (key === "delete") {
                                console.log("Delete", record);
                            }
                        },
                    }}
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!border-none !shadow-none"
                    />
                </Dropdown>
            ),
        },
    ];

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search jobs"
                        prefix={
                            <SearchOutlined className="text-slate-400" />
                        }
                        className="w-auto !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                    />

                    <Select
                        placeholder="Status"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                        options={[
                            { label: "All", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Draft", value: "draft" },
                            { label: "Paused", value: "paused" },
                            { label: "Closed", value: "closed" },
                        ]}
                    />

                    <Select
                        placeholder="Job Type"
                        className="w-36 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                        options={[
                            { label: "Full Time", value: "full-time" },
                            { label: "Part Time", value: "part-time" },
                            { label: "Contract", value: "contract" },
                            { label: "Internship", value: "internship" },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        className="!bg-[#0052CC] !text-white !rounded-[20px] !px-4 !py-2 !shadow-none"
                        icon={<PlusOutlined />}
                    >
                        Add Job
                    </Button>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: exportItems,
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

            <div className="bg-white rounded-2xl p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={data}
                    showHeader={data.length > 0}
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                    }}
                    className="table"
                />
            </div>
        </>
    );
};

export default Jobs;