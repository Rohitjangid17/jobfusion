import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Recruiter } from "../superadmin.interface";

const Recruiters = () => {
    const recruiters: Recruiter[] = [
        {
            key: 1,
            name: "Rahul Sharma",
            email: "rahul@technova.com",
            phone: "+91 98765 43210",
            company: "TechNova Solutions",
            jobs: 12,
            applications: 186,
            joinedDate: "12 Aug 2026",
            status: "Active",
        },
        {
            key: 2,
            name: "Priya Mehta",
            email: "priya@growthlabs.com",
            phone: "+91 98234 56789",
            company: "GrowthLabs Pvt. Ltd.",
            jobs: 8,
            applications: 124,
            joinedDate: "05 Aug 2026",
            status: "Active",
        },
        {
            key: 3,
            name: "Amit Verma",
            email: "amit@finedge.com",
            phone: "+91 97654 32109",
            company: "FinEdge Technologies",
            jobs: 15,
            applications: 245,
            joinedDate: "28 Jul 2026",
            status: "Active",
        },
        {
            key: 4,
            name: "Neha Singh",
            email: "neha@startuphub.com",
            phone: "+91 99887 66554",
            company: "StartupHub",
            jobs: 5,
            applications: 72,
            joinedDate: "20 Jul 2026",
            status: "Inactive",
        },
        {
            key: 5,
            name: "Vikas Jain",
            email: "vikas@educore.com",
            phone: "+91 98989 11223",
            company: "EduCore Systems",
            jobs: 7,
            applications: 98,
            joinedDate: "15 Jul 2026",
            status: "Active",
        },
        {
            key: 6,
            name: "Ankit Gupta",
            email: "ankit@buildright.com",
            phone: "+91 98111 22334",
            company: "BuildRight Infra",
            jobs: 4,
            applications: 51,
            joinedDate: "02 Jul 2026",
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
            key: "company",
            label: "View Company",
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
            title: "Recruiter",
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
            title: "Email / Phone",
            key: "contact",
            width: 220,
            render: (_: unknown, record: Recruiter) => (
                <div>
                    <div className="truncate text-sm text-[#0F172A]">
                        {record.email}
                    </div>
                    <div className="text-xs text-[#667085]">
                        {record.phone}
                    </div>
                </div>
            ),
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
            width: 200,
        },
        {
            title: "Jobs",
            dataIndex: "jobs",
            key: "jobs",
            width: 90,
        },
        {
            title: "Applications",
            dataIndex: "applications",
            key: "applications",
            width: 120,
        },
        {
            title: "Joined Date",
            dataIndex: "joinedDate",
            key: "joinedDate",
            width: 130,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: Recruiter["status"]) => (
                <Tag
                    color={status === "Active" ? "success" : "default"}
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
            render: (_: unknown, record: Recruiter) => (
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
                        placeholder="Search recruiters"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[140px]"
                        options={[
                            { label: "All Status", value: "all" },
                            { label: "Active", value: "Active" },
                            { label: "Inactive", value: "Inactive" },
                        ]}
                    />

                    <Select
                        placeholder="Company"
                        className="!w-[200px]"
                        options={[
                            {
                                label: "All Companies",
                                value: "all",
                            },
                            {
                                label: "TechNova Solutions",
                                value: "TechNova Solutions",
                            },
                            {
                                label: "GrowthLabs Pvt. Ltd.",
                                value: "GrowthLabs Pvt. Ltd.",
                            },
                            {
                                label: "FinEdge Technologies",
                                value: "FinEdge Technologies",
                            },
                            {
                                label: "StartupHub",
                                value: "StartupHub",
                            },
                            {
                                label: "EduCore Systems",
                                value: "EduCore Systems",
                            },
                            {
                                label: "BuildRight Infra",
                                value: "BuildRight Infra",
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
                        Add Recruiter
                    </Button>
                    <Dropdown
                        menu={{ items: exportItems }}
                        trigger={["click"]}
                    >
                        <Button className="!bg-white !text-[#0F172A] !rounded-full !px-4 !py-2 !shadow-none !border !border-solid !border-[#D1D6DC]" title="Export"
                            icon={<DownloadOutlined />}>
                        </Button>
                    </Dropdown>
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={recruiters}
                    rowKey="key"
                    showHeader={recruiters.length > 0}
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

export default Recruiters;