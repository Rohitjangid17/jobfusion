import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons";
import { Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import type { MasterData } from "../admin.interface";

const masterData: MasterData[] = [
    {
        key: "1",
        name: "Full Time",
        code: "FULL_TIME",
        type: "Job Type",
        description: "Full-time employment",
        status: "Active",
    },
    {
        key: "2",
        name: "Part Time",
        code: "PART_TIME",
        type: "Job Type",
        description: "Part-time employment",
        status: "Active",
    },
    {
        key: "3",
        name: "Contract",
        code: "CONTRACT",
        type: "Job Type",
        description: "Contract-based employment",
        status: "Active",
    },
    {
        key: "4",
        name: "Internship",
        code: "INTERNSHIP",
        type: "Job Type",
        description: "Internship position",
        status: "Active",
    },
    {
        key: "5",
        name: "React.js",
        code: "REACT_JS",
        type: "Skill",
        description: "React.js frontend skill",
        status: "Active",
    },
    {
        key: "6",
        name: "Angular",
        code: "ANGULAR",
        type: "Skill",
        description: "Angular frontend skill",
        status: "Active",
    },
    {
        key: "7",
        name: "JavaScript",
        code: "JAVASCRIPT",
        type: "Skill",
        description: "JavaScript programming skill",
        status: "Active",
    },
    {
        key: "8",
        name: "TypeScript",
        code: "TYPESCRIPT",
        type: "Skill",
        description: "TypeScript programming skill",
        status: "Inactive",
    },
    {
        key: "9",
        name: "IT & Software",
        code: "IT_SOFTWARE",
        type: "Industry",
        description: "Information technology industry",
        status: "Active",
    },
    {
        key: "10",
        name: "Finance",
        code: "FINANCE",
        type: "Industry",
        description: "Banking and finance industry",
        status: "Active",
    },
];

const Master = () => {
    const actionMenu = (record: MasterData): MenuProps => ({
        items: [
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
                label: record.status === "Active" ? "Deactivate" : "Activate",
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
        ],
        onClick: ({ key }) => {
            console.log(`${key} master data:`, record);
        },
    });

    const exportMenu: MenuProps = {
        items: [
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
        ],
        onClick: ({ key }) => {
            console.log(`Export ${key}`);
        },
    };

    const columns: ColumnsType<MasterData> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 180,
            render: (name: string) => (
                <Tooltip title={name}>
                    <span className="block max-w-[160px] truncate font-medium text-[#0F172A]">
                        {name}
                    </span>
                </Tooltip>
            ),
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
            width: 160,
            render: (code: string) => (
                <span className="text-sm text-[#475467]">{code}</span>
            ),
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: 160,
            render: (type: string) => (
                <Tag className="!m-0 !rounded-md !border-[#D1D6DC] !bg-[#F8FAFC] !px-2 !text-[#475467]">
                    {type}
                </Tag>
            ),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            width: 280,
            render: (description: string) => (
                <Tooltip title={description}>
                    <span className="block max-w-[250px] truncate text-sm text-[#667085]">
                        {description}
                    </span>
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
            width: 80,
            fixed: "right",
            render: (_, record) => (
                <Dropdown
                    menu={actionMenu(record)}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!flex !items-center !justify-center !rounded-lg"
                    />
                </Dropdown>
            ),
        },
    ];

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Left Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        prefix={<SearchOutlined className="text-[#98A2B3]" />}
                        placeholder="Search master data"
                        allowClear
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Master Type"
                        allowClear
                        className="!w-[160px]"
                        options={[
                            { label: "Job Type", value: "Job Type" },
                            { label: "Skill", value: "Skill" },
                            { label: "Industry", value: "Industry" },
                            { label: "Department", value: "Department" },
                            { label: "Experience", value: "Experience" },
                            { label: "Education", value: "Education" },
                            { label: "Location", value: "Location" },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[130px]"
                        options={[
                            { label: "Active", value: "Active" },
                            { label: "Inactive", value: "Inactive" },
                        ]}
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Master Data
                    </Button>

                    <Dropdown menu={exportMenu} trigger={["click"]}>
                        <Button
                            icon={<DownloadOutlined />}
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        >
                        </Button>
                    </Dropdown>
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={masterData}
                    rowKey="key"
                    scroll={{ y: "calc(100vh - 319px)" }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="master-data-table"
                />
            </div>
        </div>
    );
};

export default Master;