import { DeleteOutlined, EditOutlined, EyeOutlined, FileTextOutlined, MoreOutlined, PlusOutlined, SearchOutlined, DownloadOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, type MenuProps, type TableColumnsType, } from "antd";
import type { Blog } from "../superadmin.interface";

const blogs: Blog[] = [
    {
        key: 1,
        title: "How to Build a Successful Tech Career",
        category: "Career Advice",
        author: "Admin User",
        publishedDate: "10 Sep 2026",
        status: "Published",
    },
    {
        key: 2,
        title: "Top React.js Skills Employers Look For",
        category: "Technology",
        author: "Admin User",
        publishedDate: "08 Sep 2026",
        status: "Published",
    },
    {
        key: 3,
        title: "How to Write a Better Resume",
        category: "Career Advice",
        author: "Super Admin",
        publishedDate: "05 Sep 2026",
        status: "Draft",
    },
    {
        key: 4,
        title: "Best Practices for Remote Hiring",
        category: "Recruitment",
        author: "Admin User",
        publishedDate: "01 Sep 2026",
        status: "Published",
    },
    {
        key: 5,
        title: "Frontend Developer Interview Guide",
        category: "Interview",
        author: "Super Admin",
        publishedDate: "28 Aug 2026",
        status: "Archived",
    },
    {
        key: 6,
        title: "How Companies Can Improve Hiring",
        category: "Recruitment",
        author: "Admin User",
        publishedDate: "25 Aug 2026",
        status: "Published",
    },
    {
        key: 7,
        title: "JavaScript Interview Questions",
        category: "Technology",
        author: "Admin User",
        publishedDate: "20 Aug 2026",
        status: "Draft",
    },
    {
        key: 8,
        title: "Guide to Preparing for Technical Interviews",
        category: "Interview",
        author: "Super Admin",
        publishedDate: "18 Aug 2026",
        status: "Published",
    },
];

const exportItems: MenuProps["items"] = [
    {
        key: "csv",
        label: "Export as CSV",
    },
    {
        key: "excel",
        label: "Export as Excel",
    },
    {
        key: "pdf",
        label: "Export as PDF",
    },
];

const getStatusTag = (status: Blog["status"]) => {
    if (status === "Published") {
        return (
            <Tag className="!rounded-full !border-[#BBF7D0] !bg-[#F0FDF4] !px-3 !py-1 !text-[#15803D]">
                Published
            </Tag>
        );
    }

    if (status === "Draft") {
        return (
            <Tag className="!rounded-full !border-[#FED7AA] !bg-[#FFF7ED] !px-3 !py-1 !text-[#C2410C]">
                Draft
            </Tag>
        );
    }

    return (
        <Tag className="!rounded-full !border-[#D1D5DB] !bg-[#F9FAFB] !px-3 !py-1 !text-[#6B7280]">
            Archived
        </Tag>
    );
};

const columns: TableColumnsType<Blog> = [
    {
        title: "Blog",
        key: "blog",
        width: 360,
        render: (_, record) => (
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

                    <div className="text-xs text-[#64748B]">
                        Blog #{record.key.toString().padStart(4, "0")}
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
        render: (category: string) => (
            <span className="text-[#334155]">{category}</span>
        ),
    },
    {
        title: "Author",
        dataIndex: "author",
        key: "author",
        render: (author: string) => (
            <span className="text-[#334155]">{author}</span>
        ),
    },
    {
        title: "Published Date",
        dataIndex: "publishedDate",
        key: "publishedDate",
        render: (date: string) => (
            <span className="text-[#475569]">{date}</span>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status: Blog["status"]) => getStatusTag(status),
    },
    {
        title: "Actions",
        key: "actions",
        width: 90,
        align: "center",
        render: (_, record) => {
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
                    key: "publish",
                    label:
                        record.status === "Published"
                            ? "Unpublish"
                            : "Publish",
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

            return (
                <Dropdown
                    menu={{
                        items: actionItems,
                    }}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Tooltip title="Actions">
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                            className="!text-[#475569]"
                        />
                    </Tooltip>
                </Dropdown>
            );
        },
    },
];

const Blogs = () => {
    return (
        <div className="flex h-full flex-col gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search blogs"
                        className="!w-[260px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        allowClear
                        placeholder="Category"
                        className="!w-[180px]"
                        options={[
                            {
                                label: "Career Advice",
                                value: "Career Advice",
                            },
                            {
                                label: "Technology",
                                value: "Technology",
                            },
                            {
                                label: "Recruitment",
                                value: "Recruitment",
                            },
                            {
                                label: "Interview",
                                value: "Interview",
                            },
                        ]}
                    />

                    <Select
                        allowClear
                        placeholder="Status"
                        className="!w-[160px]"
                        options={[
                            {
                                label: "Published",
                                value: "Published",
                            },
                            {
                                label: "Draft",
                                value: "Draft",
                            },
                            {
                                label: "Archived",
                                value: "Archived",
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
                        Add Blog
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
                <Table<Blog>
                    rowKey="key"
                    columns={columns}
                    dataSource={blogs}
                    scroll={{
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                />
            </div>
        </div>
    );
};

export default Blogs;