import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { MenuProps } from "antd";
import type { Application } from "../superadmin.interface";

const Applications = () => {
    const applications: Application[] = [
        {
            key: 1,
            candidate: "Aarav Sharma",
            email: "aarav.sharma@gmail.com",
            job: "Senior Frontend Developer",
            company: "TechNova Solutions",
            recruiter: "Neha Verma",
            appliedDate: "10 Sep 2026",
            status: "Shortlisted",
        },
        {
            key: 2,
            candidate: "Priya Mehta",
            email: "priya.mehta@gmail.com",
            job: "React.js Developer",
            company: "GrowthLabs Pvt. Ltd.",
            recruiter: "Rahul Singh",
            appliedDate: "09 Sep 2026",
            status: "Interview",
        },
        {
            key: 3,
            candidate: "Rohan Gupta",
            email: "rohan.gupta@gmail.com",
            job: "UI/UX Designer",
            company: "FinEdge Technologies",
            recruiter: "Ankit Sharma",
            appliedDate: "08 Sep 2026",
            status: "Applied",
        },
        {
            key: 4,
            candidate: "Simran Kaur",
            email: "simran.kaur@gmail.com",
            job: "Angular Developer",
            company: "StartupHub",
            recruiter: "Neha Verma",
            appliedDate: "07 Sep 2026",
            status: "Rejected",
        },
        {
            key: 5,
            candidate: "Vikas Yadav",
            email: "vikas.yadav@gmail.com",
            job: "Backend Developer",
            company: "EduCore Systems",
            recruiter: "Rahul Singh",
            appliedDate: "06 Sep 2026",
            status: "Selected",
        },
        {
            key: 6,
            candidate: "Anjali Sharma",
            email: "anjali.sharma@gmail.com",
            job: "Software Engineer Intern",
            company: "BuildRight Infra",
            recruiter: "Ankit Sharma",
            appliedDate: "05 Sep 2026",
            status: "Interview",
        },
        {
            key: 7,
            candidate: "Karan Joshi",
            email: "karan.joshi@gmail.com",
            job: "Product Manager",
            company: "TechNova Solutions",
            recruiter: "Neha Verma",
            appliedDate: "04 Sep 2026",
            status: "Applied",
        },
        {
            key: 8,
            candidate: "Pooja Agarwal",
            email: "pooja.agarwal@gmail.com",
            job: "Mobile App Developer",
            company: "GrowthLabs Pvt. Ltd.",
            recruiter: "Rahul Singh",
            appliedDate: "03 Sep 2026",
            status: "Shortlisted",
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
            key: "change-status",
            icon: <EditOutlined />,
            label: "Change Status",
        },
        {
            key: "candidate",
            label: "View Candidate",
        },
        {
            key: "job",
            label: "View Job",
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
            dataIndex: "candidate",
            key: "candidate",
            width: 230,
            render: (candidate: string, record: Application) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        size={40}
                        className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                    >
                        {candidate.charAt(0)}
                    </Avatar>

                    <div className="min-w-0">
                        <Tooltip title={candidate}>
                            <div className="truncate font-medium text-[#0F172A]">
                                {candidate}
                            </div>
                        </Tooltip>

                        <div className="truncate text-xs text-[#64748B]">
                            {record.email}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Job",
            dataIndex: "job",
            key: "job",
            width: 230,
            render: (job: string, record: Application) => (
                <div className="min-w-0">
                    <Tooltip title={job}>
                        <div className="truncate font-medium text-[#0F172A]">
                            {job}
                        </div>
                    </Tooltip>

                    <div className="truncate text-xs text-[#64748B]">
                        {record.company}
                    </div>
                </div>
            ),
        },
        {
            title: "Recruiter",
            dataIndex: "recruiter",
            key: "recruiter",
            width: 150,
        },
        {
            title: "Applied Date",
            dataIndex: "appliedDate",
            key: "appliedDate",
            width: 130,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 130,
            render: (status: Application["status"]) => (
                <Tag
                    color={
                        status === "Applied"
                            ? "default"
                            : status === "Shortlisted"
                                ? "processing"
                                : status === "Interview"
                                    ? "warning"
                                    : status === "Selected"
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
            render: (_: unknown, record: Application) => (
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
                        placeholder="Search applications"
                        className="!w-[240px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Status"
                        className="!w-[150px]"
                        options={[
                            {
                                label: "All Status",
                                value: "all",
                            },
                            {
                                label: "Applied",
                                value: "Applied",
                            },
                            {
                                label: "Shortlisted",
                                value: "Shortlisted",
                            },
                            {
                                label: "Interview",
                                value: "Interview",
                            },
                            {
                                label: "Selected",
                                value: "Selected",
                            },
                            {
                                label: "Rejected",
                                value: "Rejected",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Company"
                        className="!w-[180px]"
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
                    dataSource={applications}
                    rowKey="key"
                    showHeader={applications.length > 0}
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

export default Applications;