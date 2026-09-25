import { EnvironmentOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, DownloadOutlined, MessageOutlined, MoreOutlined, SearchOutlined, StarFilled, StarOutlined, UserAddOutlined, PlusOutlined, } from "@ant-design/icons"; 
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Candidate } from "../recruiter.interface";

const candidates: Candidate[] = [
    {
        key: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        experience: "3 Years",
        location: "Bengaluru",
        skills: ["React", "TypeScript", "Next.js"],
        appliedJobs: 4,
        status: "Available",
        lastActive: "Today",
        saved: true,
        shortlisted: true,
    },
    {
        key: 2,
        name: "Priya Mehta",
        email: "priya.mehta@gmail.com",
        experience: "2.5 Years",
        location: "Pune",
        skills: ["Angular", "TypeScript", "RxJS"],
        appliedJobs: 3,
        status: "Interviewing",
        lastActive: "Today",
        saved: true,
        shortlisted: false,
    },
    {
        key: 3,
        name: "Rohan Gupta",
        email: "rohan.gupta@gmail.com",
        experience: "4 Years",
        location: "Mumbai",
        skills: ["React", "Redux", "Node.js"],
        appliedJobs: 6,
        status: "Available",
        lastActive: "Yesterday",
        saved: false,
        shortlisted: true,
    },
    {
        key: 4,
        name: "Simran Kaur",
        email: "simran.kaur@gmail.com",
        experience: "3.5 Years",
        location: "Hyderabad",
        skills: ["Angular", "JavaScript", "Material UI"],
        appliedJobs: 2,
        status: "Available",
        lastActive: "Yesterday",
        saved: true,
        shortlisted: true,
    },
    {
        key: 5,
        name: "Vikas Yadav",
        email: "vikas.yadav@gmail.com",
        experience: "1 Year",
        location: "Jaipur",
        skills: ["React", "JavaScript", "Tailwind"],
        appliedJobs: 2,
        status: "Available",
        lastActive: "2 days ago",
        saved: false,
        shortlisted: false,
    },
    {
        key: 6,
        name: "Anjali Sharma",
        email: "anjali.sharma@gmail.com",
        experience: "5 Years",
        location: "New Delhi",
        skills: ["React", "Next.js", "Node.js"],
        appliedJobs: 8,
        status: "Hired",
        lastActive: "3 days ago",
        saved: true,
        shortlisted: true,
    },
    {
        key: 7,
        name: "Karan Joshi",
        email: "karan.joshi@gmail.com",
        experience: "2 Years",
        location: "Bengaluru",
        skills: ["Vue.js", "JavaScript", "CSS"],
        appliedJobs: 3,
        status: "Not Available",
        lastActive: "5 days ago",
        saved: false,
        shortlisted: false,
    },
    {
        key: 8,
        name: "Pooja Agarwal",
        email: "pooja.agarwal@gmail.com",
        experience: "3 Years",
        location: "Chennai",
        skills: ["React Native", "React", "Firebase"],
        appliedJobs: 5,
        status: "Available",
        lastActive: "1 week ago",
        saved: true,
        shortlisted: false,
    },
];

const getStatusTag = (status: Candidate["status"]) => {
    const statusMap = {
        Available: { color: "success", label: "Available" },
        Interviewing: { color: "processing", label: "Interviewing" },
        Hired: { color: "default", label: "Hired" },
        "Not Available": { color: "error", label: "Not Available" },
    };

    const item = statusMap[status];

    return (
        <Tag color={item.color} className="!rounded-full">
            {item.label}
        </Tag>
    );
};

const candidateColumns: ColumnsType<Candidate> = [
    {
        title: "Candidate",
        key: "candidate",
        width: 250,
        render: (_, record) => (
            <div className="flex items-center gap-3">
                <Avatar
                    size={40}
                    className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                >
                    {record.name.charAt(0)}
                </Avatar>

                <div className="min-w-0">
                    <div className="truncate font-medium text-[#0F172A]">
                        {record.name}
                    </div>

                    <div className="truncate text-xs text-[#64748B]">
                        {record.email}
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Experience",
        dataIndex: "experience",
        key: "experience",
    },
    {
        title: "Location",
        key: "location",
        render: (_, record) => (
            <div className="flex items-center gap-2 text-[#475569]">
                <EnvironmentOutlined />
                <div>
                    <div>{record.location}</div>
                </div>
            </div>
        ),
    },
    {
        title: "Skills",
        key: "skills",
        width: 260,
        render: (_, record) => (
            <div className="flex flex-wrap gap-1">
                {record.skills.slice(0, 3).map((skill) => (
                    <Tag
                        key={skill}
                        className="!m-0 !rounded-full !border-[#E2E8F0] !bg-[#F8FAFC] !text-[#475569]"
                    >
                        {skill}
                    </Tag>
                ))}
            </div>
        ),
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
        render: (status: Candidate["status"]) => getStatusTag(status),
    },
    {
        title: "Last Active",
        dataIndex: "lastActive",
        key: "lastActive",
    },
    {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 80,
        render: (_, record) => (
            <Dropdown
                trigger={["click"]}
                menu={{
                    items: [
                        {
                            key: "view",
                            icon: <EyeOutlined />,
                            label: "View Profile",
                        },
                        {
                            key: "message",
                            icon: <MessageOutlined />,
                            label: "Message",
                        },
                        {
                            key: "save",
                            icon: record.saved ? (
                                <StarFilled />
                            ) : (
                                <StarOutlined />
                            ),
                            label: record.saved
                                ? "Remove from Saved"
                                : "Save Candidate",
                        },
                        {
                            key: "shortlist",
                            icon: <UserAddOutlined />,
                            label: record.shortlisted
                                ? "Remove from Shortlisted"
                                : "Shortlist Candidate",
                        },
                    ],
                }}
            >
                <Tooltip title="Actions">
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!text-[#475569]"
                    />
                </Tooltip>
            </Dropdown>
        ),
    },
];

const Candidates = () => {
    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search candidates"
                        className="!w-[220px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        allowClear
                        placeholder="Experience"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            { label: "0 - 1 Year", value: "0-1" },
                            { label: "1 - 3 Years", value: "1-3" },
                            { label: "3 - 5 Years", value: "3-5" },
                            { label: "5+ Years", value: "5+" },
                        ]}
                    />

                    <Select
                        allowClear
                        placeholder="Location"
                        className="w-32 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
                        options={[
                            { label: "Bengaluru", value: "Bengaluru" },
                            { label: "Pune", value: "Pune" },
                            { label: "Mumbai", value: "Mumbai" },
                            { label: "Hyderabad", value: "Hyderabad" },
                            { label: "Jaipur", value: "Jaipur" },
                            { label: "New Delhi", value: "New Delhi" },
                        ]}
                    />

                    <Input
                        allowClear
                        placeholder="Skills"
                        className="!w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Dropdown
                        trigger={["click"]}
                        overlayClassName="[&_.ant-dropdown-menu]:!w-40"
                        menu={{
                            items: [
                                {
                                    key: "title",
                                    label: (
                                        <span className="font-medium text-sm text-[#6B7280]">
                                            Downlaods
                                        </span>
                                    ),
                                    disabled: true,
                                },
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
                            ],
                        }}
                    >
                        <Button
                            className="!rounded-full !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                            title="Export"
                            icon={<DownloadOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                    className="
                    flex w-fit items-center overflow-hidden rounded-2xl
                    border border-[#E5E7EB] bg-white
                    [&_.ant-tabs-nav]:!m-0
                    [&_.ant-tabs-nav]:!border-0
                    [&_.ant-tabs-nav]:!p-0
                    [&_.ant-tabs-tab]:!m-0
                    [&_.ant-tabs-tab]:!px-5
                    [&_.ant-tabs-tab]:!py-3
                    [&_.ant-tabs-tab-active]:!border-b-2
                    [&_.ant-tabs-tab-active]:!border-[#0052CC]
                    [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!font-semibold
                    [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-[#0052CC]
                "
                >
                    <div className="flex">
                        <button className="border-b-2 border-[#0052CC] px-5 py-3 text-sm font-semibold text-[#0052CC]">
                            All Candidates
                        </button>
                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Saved Candidates
                        </button>
                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Shortlisted Candidates
                        </button>
                    </div>
                </div>

                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                >
                    Create Candidate
                </Button>
            </div>

            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={candidateColumns}
                    dataSource={candidates}
                    rowKey="key"
                    scroll={{
                        y: "calc(100vh - 392px)",
                    }}
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