import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import type { Blog } from "../admin.interface";

const blogs: Blog[] = [
    {
        key: "1",
        title: "10 Tips for Better Job Interviews",
        category: "Career",
        author: "Admin",
        publishedDate: "10 Sep 2026",
        status: "Published",
    },
    {
        key: "2",
        title: "How to Write a Professional Resume",
        category: "Resume",
        author: "Admin",
        publishedDate: "08 Sep 2026",
        status: "Published",
    },
    {
        key: "3",
        title: "Top Frontend Skills Employers Look For",
        category: "Career",
        author: "Admin",
        publishedDate: "05 Sep 2026",
        status: "Published",
    },
    {
        key: "4",
        title: "React vs Angular: Which One to Learn?",
        category: "Technology",
        author: "Admin",
        publishedDate: "02 Sep 2026",
        status: "Draft",
    },
    {
        key: "5",
        title: "How to Prepare for a Technical Interview",
        category: "Interview",
        author: "Admin",
        publishedDate: "28 Aug 2026",
        status: "Published",
    },
    {
        key: "6",
        title: "Building a Strong LinkedIn Profile",
        category: "Career",
        author: "Admin",
        publishedDate: "25 Aug 2026",
        status: "Published",
    },
    {
        key: "7",
        title: "Most In-Demand Tech Jobs in 2026",
        category: "Jobs",
        author: "Admin",
        publishedDate: "20 Aug 2026",
        status: "Archived",
    },
    {
        key: "8",
        title: "Tips for Your First Job Search",
        category: "Career",
        author: "Admin",
        publishedDate: "18 Aug 2026",
        status: "Draft",
    },
];

const Blogs = () => {
    const actionMenu = (record: Blog): MenuProps => ({
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
        ],
        onClick: ({ key }) => {
            console.log(`${key} blog:`, record);
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

    const columns: ColumnsType<Blog> = [
        {
            title: "Blog",
            dataIndex: "title",
            key: "title",
            width: 320,
            render: (title: string) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {title.charAt(0)}
                    </Avatar>

                    <Tooltip title={title}>
                        <span className="block max-w-[180px] truncate cursor-pointer font-medium">
                            {title}
                        </span>
                    </Tooltip>
                </div>
            ),
        },

        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 160,
            render: (category: string) => (
                <Tag className="!m-0 !rounded-md !border-[#D1D6DC] !bg-[#F8FAFC] !px-2 !text-[#475467]">
                    {category}
                </Tag>
            ),
        },

        {
            title: "Author",
            dataIndex: "author",
            key: "author",
            width: 150,
            render: (author: string) => (
                <span className="text-sm text-[#475467]">
                    {author}
                </span>
            ),
        },

        {
            title: "Published Date",
            dataIndex: "publishedDate",
            key: "publishedDate",
            width: 160,
            render: (date: string) => (
                <span className="text-sm text-[#475467]">
                    {date}
                </span>
            ),
        },

        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 130,
            render: (status: Blog["status"]) => {
                const color =
                    status === "Published"
                        ? "success"
                        : status === "Draft"
                            ? "warning"
                            : "default";

                return (
                    <Tag
                        color={color}
                        className="!rounded-full !px-3"
                    >
                        {status}
                    </Tag>
                );
            },
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
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        prefix={
                            <SearchOutlined className="text-[#98A2B3]" />
                        }
                        placeholder="Search blogs"
                        allowClear
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Category"
                        allowClear
                        className="!w-[160px]"
                        options={[
                            {
                                label: "Career",
                                value: "Career",
                            },
                            {
                                label: "Resume",
                                value: "Resume",
                            },
                            {
                                label: "Interview",
                                value: "Interview",
                            },
                            {
                                label: "Technology",
                                value: "Technology",
                            },
                            {
                                label: "Jobs",
                                value: "Jobs",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="!w-[140px]"
                        options={[
                            {
                                label: "Draft",
                                value: "Draft",
                            },
                            {
                                label: "Published",
                                value: "Published",
                            },
                            {
                                label: "Archived",
                                value: "Archived",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                    >
                        Add Blog
                    </Button>

                    <Dropdown
                        menu={exportMenu}
                        trigger={["click"]}
                    >
                        <Button
                            icon={<DownloadOutlined />}
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                        >
                        </Button>
                    </Dropdown>
                </div>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={blogs}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 319px)",
                    }}
                    pagination={{
                        pageSize: 10,
                        position: ["bottomRight"],
                        showSizeChanger: false,
                    }}
                    className="blogs-table"
                />
            </div>
        </div>
    );
};

export default Blogs;