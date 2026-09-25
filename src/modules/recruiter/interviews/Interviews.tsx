import { CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MessageOutlined, MoreOutlined, SearchOutlined, UserOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip, } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Interview } from "../recruiter.interface";

const interviews: Interview[] = [
    {
        key: 1,
        candidate: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        job: "Senior Frontend Developer",
        interviewDate: "18 Sep 2026",
        interviewTime: "10:00 AM",
        interviewer: "Neha Sharma",
        type: "Video Call",
        status: "Upcoming",
    },
    {
        key: 2,
        candidate: "Priya Mehta",
        email: "priya.mehta@gmail.com",
        job: "React.js Developer",
        interviewDate: "18 Sep 2026",
        interviewTime: "11:30 AM",
        interviewer: "Rahul Verma",
        type: "Video Call",
        status: "Upcoming",
    },
    {
        key: 3,
        candidate: "Rohan Gupta",
        email: "rohan.gupta@gmail.com",
        job: "UI/UX Designer",
        interviewDate: "18 Sep 2026",
        interviewTime: "02:00 PM",
        interviewer: "Ankit Jain",
        type: "In Person",
        status: "Upcoming",
    },
    {
        key: 4,
        candidate: "Simran Kaur",
        email: "simran.kaur@gmail.com",
        job: "Angular Developer",
        interviewDate: "17 Sep 2026",
        interviewTime: "10:30 AM",
        interviewer: "Pooja Mehta",
        type: "Video Call",
        status: "Completed",
    },
    {
        key: 5,
        candidate: "Vikas Yadav",
        email: "vikas.yadav@gmail.com",
        job: "Software Engineer Intern",
        interviewDate: "17 Sep 2026",
        interviewTime: "03:00 PM",
        interviewer: "Amit Sharma",
        type: "Phone Call",
        status: "Completed",
    },
    {
        key: 6,
        candidate: "Anjali Sharma",
        email: "anjali.sharma@gmail.com",
        job: "Backend Developer",
        interviewDate: "16 Sep 2026",
        interviewTime: "11:00 AM",
        interviewer: "Riya Gupta",
        type: "Video Call",
        status: "Cancelled",
    },
    {
        key: 7,
        candidate: "Karan Joshi",
        email: "karan.joshi@gmail.com",
        job: "Product Manager",
        interviewDate: "20 Sep 2026",
        interviewTime: "04:00 PM",
        interviewer: "Mohit Singh",
        type: "Video Call",
        status: "Rescheduled",
    },
    {
        key: 8,
        candidate: "Pooja Agarwal",
        email: "pooja.agarwal@gmail.com",
        job: "Mobile App Developer",
        interviewDate: "21 Sep 2026",
        interviewTime: "12:00 PM",
        interviewer: "Sneha Kapoor",
        type: "In Person",
        status: "Upcoming",
    },
];

const getStatusTag = (status: Interview["status"]) => {
    switch (status) {
        case "Upcoming":
            return (
                <Tag
                    color="processing"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Upcoming
                </Tag>
            );

        case "Completed":
            return (
                <Tag
                    color="success"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Completed
                </Tag>
            );

        case "Cancelled":
            return (
                <Tag
                    color="error"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Cancelled
                </Tag>
            );

        case "Rescheduled":
            return (
                <Tag
                    color="warning"
                    className="!m-0 !rounded-full !px-3 !py-0.5"
                >
                    Rescheduled
                </Tag>
            );
    }
};

const columns: ColumnsType<Interview> = [
    {
        title: "Candidate",
        key: "candidate",
        width: 270,
        render: (_: unknown, record: Interview) => (
            <div className="flex items-center gap-3">
                <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    className="!h-10 !w-10 !min-w-10 !flex-shrink-0 !bg-[#E8F0FF] !text-[#0052CC]"
                />

                <div className="min-w-0">
                    <div className="truncate font-medium text-[#0F172A]">
                        {record.candidate}
                    </div>

                    <div className="truncate text-xs text-[#64748B]">
                        {record.email}
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Job",
        key: "job",
        width: 230,
        render: (_: unknown, record: Interview) => (
            <div className="truncate font-medium text-[#334155]">
                {record.job}
            </div>
        ),
    },
    {
        title: "Interview Date & Time",
        key: "interviewDate",
        width: 190,
        render: (_: unknown, record: Interview) => (
            <div>
                <div className="font-medium text-[#334155]">
                    {record.interviewDate}
                </div>

                <div className="text-xs text-[#94A3B8]">
                    {record.interviewTime}
                </div>
            </div>
        ),
    },
    {
        title: "Interviewer",
        dataIndex: "interviewer",
        key: "interviewer",
        width: 160,
    },
    {
        title: "Interview Type",
        dataIndex: "type",
        key: "type",
        width: 140,
        render: (type: Interview["type"]) => (
            <div className="flex items-center gap-2 text-[#475569]">
                <CalendarOutlined />
                <span>{type}</span>
            </div>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 130,
        render: (status: Interview["status"]) =>
            getStatusTag(status),
    },
    {
        title: "Actions",
        key: "actions",
        fixed: "right",
        width: 80,
        render: (_: unknown, record: Interview) => (
            <Dropdown
                trigger={["click"]}
                menu={{
                    items: [
                        {
                            key: "view",
                            icon: <EyeOutlined />,
                            label: "View Interview",
                        },
                        {
                            key: "candidate",
                            icon: <UserOutlined />,
                            label: "View Candidate",
                        },
                        ...(record.status === "Upcoming" ||
                            record.status === "Rescheduled"
                            ? [
                                {
                                    key: "edit",
                                    icon: <EditOutlined />,
                                    label: "Reschedule Interview",
                                },
                                {
                                    key: "message",
                                    icon: <MessageOutlined />,
                                    label: "Message Candidate",
                                },
                            ]
                            : []),
                        ...(record.status === "Upcoming" ||
                            record.status === "Rescheduled"
                            ? [
                                {
                                    key: "complete",
                                    icon: <CheckCircleOutlined />,
                                    label: "Mark as Completed",
                                },
                                {
                                    key: "cancel",
                                    icon: <CloseCircleOutlined />,
                                    label: "Cancel Interview",
                                    danger: true,
                                },
                            ]
                            : []),
                        ...(record.status === "Completed" ||
                            record.status === "Cancelled"
                            ? [
                                {
                                    key: "delete",
                                    icon: <DeleteOutlined />,
                                    label: "Delete Interview",
                                    danger: true,
                                },
                            ]
                            : []),
                    ],
                }}
            >
                <Tooltip title="Actions">
                    <Button
                        type="text"
                        icon={<MoreOutlined />}
                        className="!rounded-full !text-[#475569]"
                    />
                </Tooltip>
            </Dropdown>
        ),
    },
];

const Interviews = () => {
    // export interview csv file
    const exportInterviewCsv = () => { };

    // export interview pdf file
    const exportInterviewPdf = () => { };

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Filters + Export */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search interviews..."
                        className="!w-[260px] !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />

                    <Select
                        placeholder="Job"
                        allowClear
                        className="w-40 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            {
                                value: "Senior Frontend Developer",
                                label: "Senior Frontend Developer",
                            },
                            {
                                value: "React.js Developer",
                                label: "React.js Developer",
                            },
                            {
                                value: "UI/UX Designer",
                                label: "UI/UX Designer",
                            },
                            {
                                value: "Angular Developer",
                                label: "Angular Developer",
                            },
                            {
                                value: "Backend Developer",
                                label: "Backend Developer",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Status"
                        allowClear
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            {
                                value: "Upcoming",
                                label: "Upcoming",
                            },
                            {
                                value: "Completed",
                                label: "Completed",
                            },
                            {
                                value: "Cancelled",
                                label: "Cancelled",
                            },
                            {
                                value: "Rescheduled",
                                label: "Rescheduled",
                            },
                        ]}
                    />

                    <Select
                        placeholder="Date"
                        allowClear
                        className="w-32 !rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        options={[
                            {
                                value: "today",
                                label: "Today",
                            },
                            {
                                value: "tomorrow",
                                label: "Tomorrow",
                            },
                            {
                                value: "7days",
                                label: "Next 7 Days",
                            },
                            {
                                value: "30days",
                                label: "Next 30 Days",
                            },
                        ]}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Dropdown
                        trigger={["click"]}
                        overlayClassName="[&_.ant-dropdown-menu]:!w-32"
                        menu={{
                            items: [
                                {
                                    key: "title",
                                    label: (
                                        <span className="text-sm font-medium text-[#6B7280]">
                                            Downloads
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
                            onClick: ({ key }) =>
                                key === "csv"
                                    ? exportInterviewCsv()
                                    : key === "pdf"
                                        ? exportInterviewPdf()
                                        : undefined,
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

            {/* Tabs */}
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
                            Upcoming
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Today
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Completed
                        </button>

                        <button className="px-5 py-3 text-sm text-[#64748B]">
                            Cancelled
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 rounded-2xl bg-white p-4 shadow-[0px_4px_32px_0px_#98A2B31F]">
                <Table
                    columns={columns}
                    dataSource={interviews}
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

export default Interviews;