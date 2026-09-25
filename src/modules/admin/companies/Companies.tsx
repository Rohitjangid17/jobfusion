import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip } from "antd";
import type { MenuProps } from "antd";
import type { Company } from "../admin.interface";
import { companyList } from "./mockCompanies";

const Companies = () => {
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

    const exportCompanyCsv = () => {
        console.log("Export Companies CSV");
    };

    const exportCompanyPdf = () => {
        console.log("Export Companies PDF");
    };

    const columns = [
        {
            title: "Company",
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
            title: "Industry",
            dataIndex: "industry",
            key: "industry",
        },
        {
            title: "Employees",
            dataIndex: "employees",
            key: "employees",
        },
        {
            title: "Jobs",
            dataIndex: "jobs",
            key: "jobs",
        },
        {
            title: "Plan",
            dataIndex: "plan",
            key: "plan",
            render: (plan: Company["plan"]) => {
                const planColors: Record<Company["plan"], string> = {
                    Free: "default",
                    Starter: "blue",
                    Growth: "purple",
                    Enterprise: "gold",
                };

                return (
                    <Tag color={planColors[plan]} className="!rounded-full">
                        {plan}
                    </Tag>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: Company["status"]) => (
                <Tag
                    color={
                        status === "Active"
                            ? "green"
                            : status === "Trial"
                                ? "blue"
                                : "red"
                    }
                    className="!rounded-full"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            align: "center" as const,
            width: 80,
            render: (_: unknown, record: Company) => (
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
                {/* Filters */}
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search companies"
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
                            { label: "Trial", value: "trial" },
                            { label: "Suspended", value: "suspended" },
                        ]}
                    />

                    <Select
                        placeholder="Plan"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                        options={[
                            { label: "Free", value: "free" },
                            { label: "Starter", value: "starter" },
                            { label: "Growth", value: "growth" },
                            { label: "Enterprise", value: "enterprise" },
                        ]}
                    />

                    <Select
                        placeholder="Industry"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                        options={[
                            { label: "IT", value: "it" },
                            { label: "Finance", value: "finance" },
                            { label: "Education", value: "education" },
                            { label: "Manufacturing", value: "manufacturing" },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        className="!bg-[#0052CC] !text-white !rounded-[20px] !px-4 !py-2 !shadow-none"
                        icon={<PlusOutlined />}
                    >
                        Add Company
                    </Button>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: exportItems,
                            onClick: ({ key }) =>
                                key === "csv"
                                    ? exportCompanyCsv()
                                    : exportCompanyPdf(),
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
                    dataSource={companyList}
                    showHeader={companyList.length > 0}
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

export default Companies;