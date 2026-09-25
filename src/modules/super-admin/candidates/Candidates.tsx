import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Candidate } from "../superadmin.interface";

const Candidates = () => {
    const candidates: Candidate[] = [
        {
            key: 1,
            name: "Aarav Sharma",
            email: "aarav.sharma@gmail.com",
            phone: "+91 98765 43210",
            experience: "3 Years",
            applications: 12,
            joinedDate: "18 Aug 2026",
            status: "Active",
        },
        {
            key: 2,
            name: "Priya Verma",
            email: "priya.verma@gmail.com",
            phone: "+91 98234 56789",
            experience: "2 Years",
            applications: 8,
            joinedDate: "15 Aug 2026",
            status: "Active",
        },
        {
            key: 3,
            name: "Rohan Mehta",
            email: "rohan.mehta@gmail.com",
            phone: "+91 97654 32109",
            experience: "5 Years",
            applications: 18,
            joinedDate: "10 Aug 2026",
            status: "Active",
        },
        {
            key: 4,
            name: "Neha Singh",
            email: "neha.singh@gmail.com",
            phone: "+91 99887 66554",
            experience: "1 Year",
            applications: 5,
            joinedDate: "05 Aug 2026",
            status: "Inactive",
        },
        {
            key: 5,
            name: "Vikas Jain",
            email: "vikas.jain@gmail.com",
            phone: "+91 98989 11223",
            experience: "4 Years",
            applications: 15,
            joinedDate: "28 Jul 2026",
            status: "Active",
        },
        {
            key: 6,
            name: "Ankit Gupta",
            email: "ankit.gupta@gmail.com",
            phone: "+91 98111 22334",
            experience: "2 Years",
            applications: 9,
            joinedDate: "20 Jul 2026",
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
            title: "Candidate",
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
            render: (_: unknown, record: Candidate) => (
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
            title: "Experience",
            dataIndex: "experience",
            key: "experience",
            width: 120,
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
            render: (status: Candidate["status"]) => (
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
            render: (_: unknown, record: Candidate) => (
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
                        placeholder="Search candidates"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
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

                    <Select
                        placeholder="Experience"
                        className="!w-[160px]"
                        options={[
                            {
                                label: "All Experience",
                                value: "all",
                            },
                            {
                                label: "Fresher",
                                value: "Fresher",
                            },
                            {
                                label: "0–2 Years",
                                value: "0-2",
                            },
                            {
                                label: "2–5 Years",
                                value: "2-5",
                            },
                            {
                                label: "5+ Years",
                                value: "5+",
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
                        Add Candidate
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
                    dataSource={candidates}
                    rowKey="key"
                    showHeader={candidates.length > 0}
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

export default Candidates;