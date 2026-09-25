import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip } from "antd";
import type { Recruiter } from "../admin.interface";

const Recruiters = () => {
    const columns = [
        {
            title: "Recruiter",
            dataIndex: "name",
            key: "name",
            render: (name: string) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {name.charAt(0)}
                    </Avatar>

                    <Tooltip title={name}>
                        <span className="block max-w-[180px] truncate cursor-pointer font-medium">
                            {name}
                        </span>
                    </Tooltip>
                </div>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (email: string) => (
                <Tooltip title={email}>
                    <span className="block max-w-[220px] truncate cursor-pointer">
                        {email}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Department",
            dataIndex: "department",
        },
        {
            title: "Jobs",
            dataIndex: "jobs",
        },
        {
            title: "Candidates",
            dataIndex: "candidates",
        },
        {
            title: "Status",
            render: () => <Tag color="green">Active</Tag>,
        },
        {
            title: "Actions",
            key: "actions",
            align: "center" as const,
            width: 80,
            render: (_: unknown, record: Recruiter) => (
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: actionItems,
                        onClick: ({ key }) =>
                            key === "view"
                                ? console.log("View", record)
                                : key === "edit"
                                    ? console.log("Edit", record)
                                    : key === "status"
                                        ? console.log("Change Status", record)
                                        : console.log("Delete", record),
                    }}
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!border-none !shadow-none"
                    />
                </Dropdown>
            ),
        }
    ];

    const data: Recruiter[] = [
        {
            key: 1,
            name: "Rahul Sharma",
            email: "rahul.sharma@jobfusion.com",
            department: "Human Resources",
            jobs: 15,
            candidates: 96,
        },
        {
            key: 2,
            name: "Priya Verma",
            email: "priya.verma@jobfusion.com",
            department: "Information Technology",
            jobs: 12,
            candidates: 84,
        },
        {
            key: 3,
            name: "Amit Kumar",
            email: "amit.kumar@jobfusion.com",
            department: "Sales",
            jobs: 9,
            candidates: 57,
        },
        {
            key: 4,
            name: "Neha Gupta",
            email: "neha.gupta@jobfusion.com",
            department: "Marketing",
            jobs: 11,
            candidates: 73,
        },
        {
            key: 5,
            name: "Rohit Singh",
            email: "rohit.singh@jobfusion.com",
            department: "Finance",
            jobs: 7,
            candidates: 41,
        },
        {
            key: 6,
            name: "Anjali Mehta",
            email: "anjali.mehta@jobfusion.com",
            department: "Human Resources",
            jobs: 13,
            candidates: 89,
        },
        {
            key: 7,
            name: "Vikram Patel",
            email: "vikram.patel@jobfusion.com",
            department: "Operations",
            jobs: 10,
            candidates: 65,
        },
        {
            key: 8,
            name: "Sneha Reddy",
            email: "sneha.reddy@jobfusion.com",
            department: "Information Technology",
            jobs: 14,
            candidates: 91,
        },
    ]

    const exportItems = [
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

    const actionItems = [
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
        },
    ];

    // export recruiter csv
    const exportRecruiterCsv = () => {
        console.log("Export CSV")
    }

    // export recruiter pdf
    const exportRecruiterPdf = () => {
        console.log("Export PDF")
    }

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search recruiters"
                        prefix={<SearchOutlined className="text-slate-400" />}
                        className="w-auto !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="medium"
                        allowClear
                    />
                    <Select
                        placeholder="Status"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="medium"
                        allowClear
                        options={[
                            { label: "All", value: "all" },
                            { label: "Active", value: "active" },
                            { label: "Inactive", value: "inactive" },
                        ]}
                    />
                    <Select
                        placeholder="Department"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="medium"
                        allowClear
                        options={[
                            { label: "HR", value: "hr" },
                            { label: "IT", value: "it" },
                            { label: "Sales", value: "sales" },
                        ]}
                    />
                    <Select
                        placeholder="Experience"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="medium"
                        allowClear
                        options={[
                            { label: "0-2 Years", value: "0-2" },
                            { label: "2-5 Years", value: "2-5" },
                            { label: "5+ Years", value: "5+" },
                        ]}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Button className="!bg-[#0052CC] !text-white !rounded-[20px] !px-4 !py-2 !shadow-none" icon={<PlusOutlined />}>
                        Add Recruiter
                    </Button>
                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: exportItems, onClick: ({ key }) => key === "csv" ? exportRecruiterCsv() : exportRecruiterPdf()
                        }}>
                        <Button className="!bg-white !text-[#0F172A] !rounded-full !px-4 !py-2 !shadow-none !border !border-solid !border-[#D1D6DC]" title="Export"
                            icon={<DownloadOutlined />}>
                        </Button>
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
    )
}

export default Recruiters;