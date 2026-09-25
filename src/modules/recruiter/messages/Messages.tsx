import { FileTextOutlined, InboxOutlined, MoreOutlined, PaperClipOutlined, SearchOutlined, SendOutlined, UserOutlined, } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, Tag, Tooltip, } from "antd";

interface Conversation {
    key: number;
    name: string;
    role: string;
    lastMessage: string;
    time: string;
    unread: number;
    online: boolean;
}

const conversations: Conversation[] = [
    {
        key: 1,
        name: "Aarav Sharma",
        role: "Senior Frontend Developer",
        lastMessage: "Sure, I am available for the interview.",
        time: "10:42 AM",
        unread: 2,
        online: true,
    },
    {
        key: 2,
        name: "Priya Mehta",
        role: "React.js Developer",
        lastMessage: "Thank you for the update.",
        time: "09:35 AM",
        unread: 0,
        online: true,
    },
    {
        key: 3,
        name: "Rohan Gupta",
        role: "UI/UX Designer",
        lastMessage: "Can we reschedule the interview?",
        time: "Yesterday",
        unread: 1,
        online: false,
    },
    {
        key: 4,
        name: "Simran Kaur",
        role: "Angular Developer",
        lastMessage: "I have shared the required documents.",
        time: "Yesterday",
        unread: 0,
        online: false,
    },
    {
        key: 5,
        name: "Vikas Yadav",
        role: "Software Engineer Intern",
        lastMessage: "I am interested in this opportunity.",
        time: "12 Sep",
        unread: 0,
        online: false,
    },
];

const Messages = () => {
    return (
        <div className="flex h-full min-h-0 gap-4">
            {/* Conversations */}
            <div className="flex w-[340px] min-w-[340px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_4px_32px_0px_#98A2B31F]">
                {/* Search */}
                <div className="border-b border-[#E5E7EB] p-4">
                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined className="text-[#94A3B8]" />
                        }
                        placeholder="Search conversations..."
                        className="!rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                    />
                </div>

                {/* Conversation List */}
                <div className="min-h-0 flex-1 overflow-auto">
                    {conversations.map((conversation, index) => (
                        <div
                            key={conversation.key}
                            className={`flex cursor-pointer gap-3 border-b border-[#F1F5F9] px-4 py-3 transition hover:bg-[#F8FAFC] ${index === 0 ? "bg-[#F1F6FF]" : ""
                                }`}
                        >
                            <Badge
                                dot
                                color={
                                    conversation.online
                                        ? "#22C55E"
                                        : "#CBD5E1"
                                }
                                offset={[-3, 34]}
                            >
                                <Avatar
                                    size={42}
                                    icon={<UserOutlined />}
                                    className="!bg-[#E8F0FF] !text-[#0052CC]"
                                />
                            </Badge>

                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="truncate font-medium text-[#0F172A]">
                                        {conversation.name}
                                    </span>

                                    <span className="shrink-0 text-xs text-[#94A3B8]">
                                        {conversation.time}
                                    </span>
                                </div>

                                <div className="mt-0.5 truncate text-xs text-[#64748B]">
                                    {conversation.role}
                                </div>

                                <div className="mt-1 flex items-center justify-between gap-2">
                                    <span className="truncate text-sm text-[#64748B]">
                                        {conversation.lastMessage}
                                    </span>

                                    {conversation.unread > 0 && (
                                        <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-[#0052CC] px-1.5 text-[11px] font-medium text-white">
                                            {conversation.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_4px_32px_0px_#98A2B31F]">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-4">
                    <div className="flex items-center gap-3">
                        <Badge
                            dot
                            color="#22C55E"
                            offset={[-3, 34]}
                        >
                            <Avatar
                                size={42}
                                icon={<UserOutlined />}
                                className="!bg-[#E8F0FF] !text-[#0052CC]"
                            />
                        </Badge>

                        <div>
                            <div className="font-semibold text-[#0F172A]">
                                Aarav Sharma
                            </div>

                            <div className="flex items-center gap-2 text-xs text-[#64748B]">
                                <span>Senior Frontend Developer</span>

                                <span>•</span>

                                <span className="text-[#22C55E]">
                                    Online
                                </span>
                            </div>
                        </div>
                    </div>

                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: [
                                {
                                    key: "candidate",
                                    icon: <UserOutlined />,
                                    label: "View Candidate",
                                },
                                {
                                    key: "application",
                                    icon: <FileTextOutlined />,
                                    label: "View Application",
                                },
                                {
                                    key: "archive",
                                    icon: <InboxOutlined />,
                                    label: "Archive Conversation",
                                },
                            ],
                        }}
                    >
                        <Tooltip title="More">
                            <Button
                                type="text"
                                icon={<MoreOutlined />}
                                className="!rounded-full !text-[#475569]"
                            />
                        </Tooltip>
                    </Dropdown>
                </div>

                {/* Job Context */}
                <div className="border-b border-[#E5E7EB] bg-[#F8FAFC] px-5 py-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-xs text-[#64748B]">
                                Application for
                            </div>

                            <div className="mt-0.5 font-medium text-[#0F172A]">
                                Senior Frontend Developer
                            </div>
                        </div>

                        <Tag
                            color="processing"
                            className="!m-0 !rounded-full !px-3"
                        >
                            Interview
                        </Tag>
                    </div>
                </div>

                {/* Messages */}
                <div className="min-h-0 flex-1 overflow-auto bg-[#FAFBFC] px-5 py-5">
                    <div className="mb-5 text-center">
                        <span className="rounded-full bg-[#E2E8F0] px-3 py-1 text-xs text-[#64748B]">
                            Today
                        </span>
                    </div>

                    {/* Candidate */}
                    <div className="mb-4 flex max-w-[70%] items-end gap-2">
                        <Avatar
                            size={32}
                            icon={<UserOutlined />}
                            className="!bg-[#E8F0FF] !text-[#0052CC]"
                        />

                        <div>
                            <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                                <p className="m-0 text-sm leading-6 text-[#334155]">
                                    Hi, thank you for reaching out regarding
                                    the Senior Frontend Developer position.
                                </p>
                            </div>

                            <div className="mt-1 px-1 text-[11px] text-[#94A3B8]">
                                10:28 AM
                            </div>
                        </div>
                    </div>

                    {/* Recruiter */}
                    <div className="mb-4 ml-auto flex max-w-[70%] flex-col items-end">
                        <div className="rounded-2xl rounded-br-md bg-[#0052CC] px-4 py-3">
                            <p className="m-0 text-sm leading-6 text-white">
                                Hi Aarav, we would like to schedule your
                                technical interview for tomorrow at 10:00 AM.
                            </p>
                        </div>

                        <div className="mt-1 px-1 text-[11px] text-[#94A3B8]">
                            10:35 AM
                        </div>
                    </div>

                    {/* Candidate */}
                    <div className="mb-4 flex max-w-[70%] items-end gap-2">
                        <Avatar
                            size={32}
                            icon={<UserOutlined />}
                            className="!bg-[#E8F0FF] !text-[#0052CC]"
                        />

                        <div>
                            <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                                <p className="m-0 text-sm leading-6 text-[#334155]">
                                    Sure, I am available for the interview.
                                </p>
                            </div>

                            <div className="mt-1 px-1 text-[11px] text-[#94A3B8]">
                                10:42 AM
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Input */}
                <div className="border-t border-[#E5E7EB] bg-white p-4">
                    <div className="flex items-end gap-3">
                        <Tooltip title="Attach file">
                            <Button
                                type="text"
                                icon={<PaperClipOutlined />}
                                className="!h-10 !w-10 !rounded-full !text-[#64748B]"
                            />
                        </Tooltip>

                        <Input.TextArea
                            autoSize={{ minRows: 1, maxRows: 4 }}
                            placeholder="Type a message..."
                            className="!rounded-xl !border !border-solid !border-[#D1D6DC] !shadow-none"
                        />

                        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            className="!h-10 !rounded-full !bg-[#0052CC] !px-5 !shadow-none"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;