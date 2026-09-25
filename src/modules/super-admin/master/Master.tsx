import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { MasterData } from "../superadmin.interface";

const Master = () => {
    const masterData: MasterData[] = [
        {
            key: 1,
            name: "Information Technology",
            code: "IT",
            type: "Industry",
            description: "Technology and software related industries",
            status: "Active",
        },
        {
            key: 2,
            name: "Frontend Development",
            code: "FRONTEND",
            type: "Job Category",
            description: "Frontend and UI development roles",
            status: "Active",
        },
        {
            key: 3,
            name: "Full Time",
            code: "FULL_TIME",
            type: "Job Type",
            description: "Full-time employment positions",
            status: "Active",
        },
        {
            key: 4,
            name: "React.js",
            code: "REACT",
            type: "Skill",
            description: "React.js frontend development skill",
            status: "Active",
        },
        {
            key: 5,
            name: "2 - 5 Years",
            code: "EXP_2_5",
            type: "Experience Level",
            description: "Candidates with 2 to 5 years of experience",
            status: "Active",
        },
        {
            key: 6,
            name: "Bachelor's Degree",
            code: "BACHELOR",
            type: "Education Level",
            description: "Undergraduate degree qualification",
            status: "Active",
        },
        {
            key: 7,
            name: "Engineering",
            code: "ENGINEERING",
            type: "Department",
            description: "Engineering and technical department",
            status: "Active",
        },
        {
            key: 8,
            name: "Shortlisted",
            code: "SHORTLISTED",
            type: "Application Status",
            description: "Application shortlisted by recruiter",
            status: "Active",
        },
        {
            key: 9,
            name: "Technical Hiring",
            code: "TECH_HIRING",
            type: "Recruiter Department",
            description: "Recruiters handling technical hiring",
            status: "Active",
        },
        {
            key: 10,
            name: "Enterprise",
            code: "ENTERPRISE",
            type: "Company Plan",
            description: "Enterprise company subscription plan",
            status: "Inactive",
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
            key: "toggle-status",
            label: "Activate / Deactivate",
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
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 220,
            render: (name: string) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {name.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={name}>
                            <div className="truncate font-medium text-[#0F172A]">
                                {name}
                            </div>
                        </Tooltip>
                    </div>
                </div>
            ),
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
            width: 150,
            render: (code: string) => (
                <span className="font-mono text-sm text-[#475569]">
                    {code}
                </span>
            ),
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: 180,
            render: (type: MasterData["type"]) => (
                <Tag
                    color="processing"
                    className="!rounded-full !px-3"
                >
                    {type}
                </Tag>
            ),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            width: 300,
            render: (description: string) => (
                <Tooltip title={description}>
                    <div className="max-w-[280px] truncate text-[#64748B]">
                        {description}
                    </div>
                </Tooltip>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: MasterData["status"]) => (
                <Tag
                    color={
                        status === "Active"
                            ? "success"
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
            render: (_: unknown, record: MasterData) => (
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
                        placeholder="Search master data"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Master Type"
                        className="!w-[180px]"
                        options={[
                            {
                                label: "All Types",
                                value: "all",
                            },
                            {
                                label: "Job Category",
                                value: "Job Category",
                            },
                            {
                                label: "Job Type",
                                value: "Job Type",
                            },
                            {
                                label: "Industry",
                                value: "Industry",
                            },
                            {
                                label: "Skill",
                                value: "Skill",
                            },
                            {
                                label: "Experience Level",
                                value: "Experience Level",
                            },
                            {
                                label: "Education Level",
                                value: "Education Level",
                            },
                            {
                                label: "Department",
                                value: "Department",
                            },
                            {
                                label: "Application Status",
                                value: "Application Status",
                            },
                            {
                                label: "Recruiter Department",
                                value: "Recruiter Department",
                            },
                            {
                                label: "Company Plan",
                                value: "Company Plan",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[140px]"
                        options={[
                            {
                                label: "All Status",
                                value: "all",
                            },
                            {
                                label: "Active",
                                value: "Active",
                            },
                            {
                                label: "Inactive",
                                value: "Inactive",
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
                        Add Master Data
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
                    dataSource={masterData}
                    rowKey="key"
                    showHeader={masterData.length > 0}
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

export default Master;