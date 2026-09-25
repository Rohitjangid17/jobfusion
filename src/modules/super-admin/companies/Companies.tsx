import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Company } from "../superadmin.interface";

const Companies = () => {
    const companies: Company[] = [
        {
            key: 1,
            name: "TechNova Solutions",
            email: "hr@technova.com",
            industry: "Information Technology",
            employees: 120,
            jobs: 18,
            plan: "Enterprise",
            status: "Active",
        },
        {
            key: 2,
            name: "GrowthLabs Pvt. Ltd.",
            email: "careers@growthlabs.com",
            industry: "Software",
            employees: 75,
            jobs: 12,
            plan: "Growth",
            status: "Active",
        },
        {
            key: 3,
            name: "FinEdge Technologies",
            email: "hr@finedge.com",
            industry: "FinTech",
            employees: 210,
            jobs: 24,
            plan: "Enterprise",
            status: "Active",
        },
        {
            key: 4,
            name: "StartupHub",
            email: "jobs@startuphub.com",
            industry: "Technology",
            employees: 35,
            jobs: 6,
            plan: "Starter",
            status: "Trial",
        },
        {
            key: 5,
            name: "EduCore Systems",
            email: "hr@educore.com",
            industry: "Education",
            employees: 90,
            jobs: 10,
            plan: "Growth",
            status: "Active",
        },
        {
            key: 6,
            name: "BuildRight Infra",
            email: "careers@buildright.com",
            industry: "Construction",
            employees: 180,
            jobs: 15,
            plan: "Enterprise",
            status: "Suspended",
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
            key: "jobs",
            label: "View Jobs",
        },
        {
            key: "users",
            label: "View Users",
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
            title: "Company",
            dataIndex: "name",
            key: "name",
            width: 240,
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
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: 220,
        },
        {
            title: "Industry",
            dataIndex: "industry",
            key: "industry",
            width: 180,
        },
        {
            title: "Employees",
            dataIndex: "employees",
            key: "employees",
            width: 120,
        },
        {
            title: "Jobs",
            dataIndex: "jobs",
            key: "jobs",
            width: 90,
        },
        {
            title: "Plan",
            dataIndex: "plan",
            key: "plan",
            width: 120,
            render: (plan: Company["plan"]) => (
                <Tag
                    color={
                        plan === "Enterprise"
                            ? "purple"
                            : plan === "Growth"
                                ? "processing"
                                : plan === "Starter"
                                    ? "warning"
                                    : "default"
                    }
                    className="!rounded-full !px-3"
                >
                    {plan}
                </Tag>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status: Company["status"]) => (
                <Tag
                    color={
                        status === "Active"
                            ? "success"
                            : status === "Trial"
                                ? "processing"
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
            render: (_: unknown, record: Company) => (
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
                        placeholder="Search companies"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[140px]"
                        options={[
                            { label: "All Status", value: "all" },
                            { label: "Active", value: "Active" },
                            { label: "Trial", value: "Trial" },
                            { label: "Suspended", value: "Suspended" },
                        ]}
                    />

                    <Select
                        placeholder="Plan"
                        className="!w-[140px]"
                        options={[
                            { label: "All Plans", value: "all" },
                            { label: "Free", value: "Free" },
                            { label: "Starter", value: "Starter" },
                            { label: "Growth", value: "Growth" },
                            { label: "Enterprise", value: "Enterprise" },
                        ]}
                    />

                    <Select
                        placeholder="Industry"
                        className="!w-[180px]"
                        options={[
                            {
                                label: "All Industries",
                                value: "all",
                            },
                            {
                                label: "Information Technology",
                                value: "Information Technology",
                            },
                            {
                                label: "Software",
                                value: "Software",
                            },
                            {
                                label: "FinTech",
                                value: "FinTech",
                            },
                            {
                                label: "Education",
                                value: "Education",
                            },
                            {
                                label: "Construction",
                                value: "Construction",
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
                        Add Company
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
                    dataSource={companies}
                    rowKey="key"
                    showHeader={companies.length > 0}
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

export default Companies;