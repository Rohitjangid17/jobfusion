import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, PlusOutlined, SearchOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip } from "antd";
import type { MenuProps } from "antd";
import type { Candidate } from "../admin.interface";

const Candidates = () => {
    const data: Candidate[] = [
        {
            key: 1,
            name: "Aman Sharma",
            email: "aman.sharma@gmail.com",
            phone: "+91 98765 43210",
            experience: "3 Years",
            appliedJobs: 5,
            status: "Active",
        },
        {
            key: 2,
            name: "Priya Verma",
            email: "priya.verma@gmail.com",
            phone: "+91 98765 12345",
            experience: "2 Years",
            appliedJobs: 4,
            status: "Shortlisted",
        },
        {
            key: 3,
            name: "Rahul Mehta",
            email: "rahul.mehta@gmail.com",
            phone: "+91 99887 66554",
            experience: "5 Years",
            appliedJobs: 8,
            status: "Interview",
        },
        {
            key: 4,
            name: "Neha Gupta",
            email: "neha.gupta@gmail.com",
            phone: "+91 98765 77889",
            experience: "1 Year",
            appliedJobs: 3,
            status: "Active",
        },
        {
            key: 5,
            name: "Vikram Singh",
            email: "vikram.singh@gmail.com",
            phone: "+91 98765 44556",
            experience: "4 Years",
            appliedJobs: 6,
            status: "Rejected",
        },
        {
            key: 6,
            name: "Anjali Mehta",
            email: "anjali.mehta@gmail.com",
            phone: "+91 98765 99887",
            experience: "2 Years",
            appliedJobs: 4,
            status: "Shortlisted",
        },
        {
            key: 7,
            name: "Rohit Kumar",
            email: "rohit.kumar@gmail.com",
            phone: "+91 98765 33445",
            experience: "6 Years",
            appliedJobs: 9,
            status: "Interview",
        },
        {
            key: 8,
            name: "Sneha Reddy",
            email: "sneha.reddy@gmail.com",
            phone: "+91 98765 55667",
            experience: "3 Years",
            appliedJobs: 5,
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

    const exportCandidateCsv = () => {
        console.log("Export Candidates CSV");
    };

    const exportCandidatePdf = () => {
        console.log("Export Candidates PDF");
    };

    const columns = [
        {
            title: "Candidate",
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
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Experience",
            dataIndex: "experience",
            key: "experience",
        },
        {
            title: "Applied Jobs",
            dataIndex: "appliedJobs",
            key: "appliedJobs",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: Candidate["status"]) => {
                const statusColor: Record<Candidate["status"], string> = {
                    Active: "green",
                    Shortlisted: "blue",
                    Interview: "purple",
                    Rejected: "red",
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
            render: (_: unknown, record: Candidate) => (
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
                        placeholder="Search candidates"
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
                            { label: "Shortlisted", value: "shortlisted" },
                            { label: "Interview", value: "interview" },
                            { label: "Rejected", value: "rejected" },
                        ]}
                    />

                    <Select
                        placeholder="Experience"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        size="middle"
                        allowClear
                        options={[
                            { label: "0-2 Years", value: "0-2" },
                            { label: "2-5 Years", value: "2-5" },
                            { label: "5+ Years", value: "5+" },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        className="!bg-[#0052CC] !text-white !rounded-[20px] !px-4 !py-2 !shadow-none"
                        icon={<PlusOutlined />}
                    >
                        Add Candidate
                    </Button>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: exportItems,
                            onClick: ({ key }) =>
                                key === "csv"
                                    ? exportCandidateCsv()
                                    : exportCandidatePdf(),
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

export default Candidates;