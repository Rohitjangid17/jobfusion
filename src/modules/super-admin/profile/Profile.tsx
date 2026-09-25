import { EditOutlined, LockOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, SaveOutlined, UserOutlined, } from "@ant-design/icons";
import { Avatar, Button, Card, Input, Tag } from "antd";
import { useState } from "react";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex h-full flex-col gap-4">
            <div className="flex flex-wrap items-center justify-end gap-3">
                <Button
                    type={isEditing ? "primary" : "default"}
                    icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
                    onClick={() => setIsEditing(!isEditing)}
                    className={
                        isEditing
                            ? "!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
                            : "!rounded-[20px] !border !border-solid !border-[#D1D6DC] !bg-white !px-4 !py-2 !text-[#0F172A] !shadow-none"
                    }
                >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="flex flex-col items-center text-center">
                            <Avatar
                                size={88}
                                icon={<UserOutlined />}
                                className="!bg-[#E8F1FF] !text-3xl !text-[#0052CC]"
                            />

                            <h2 className="mt-4 text-lg font-semibold text-[#0F172A]">
                                Super Admin
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Super Administrator
                            </p>

                            <Tag
                                color="success"
                                className="!mt-3 !rounded-full !px-3"
                            >
                                Active
                            </Tag>

                            <div className="mt-6 w-full border-t border-[#EAECF0] pt-5">
                                <div className="flex items-center gap-3 text-left">
                                    <MailOutlined className="text-[#667085]" />

                                    <p className="truncate text-sm text-[#475467]">
                                        superadmin@jobfusion.com
                                    </p>
                                </div>

                                <div className="mt-5 flex items-center gap-3 text-left">
                                    <PhoneOutlined className="text-[#667085]" />

                                    <p className="text-sm text-[#475467]">
                                        +91 98765 43210
                                    </p>
                                </div>

                                <div className="mt-5 flex items-center gap-3 text-left">
                                    <EnvironmentOutlined className="text-[#667085]" />

                                    <p className="text-sm text-[#475467]">
                                        Jaipur, Rajasthan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card
                        bordered={false}
                        className="lg:col-span-2 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-6">
                            <h2 className="text-base font-semibold text-[#0F172A]">
                                Personal Information
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Update your personal details
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    First Name
                                </label>

                                <Input
                                    value="Super"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Last Name
                                </label>

                                <Input
                                    value="Admin"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Email Address
                                </label>

                                <Input
                                    prefix={
                                        <MailOutlined className="text-[#98A2B3]" />
                                    }
                                    value="superadmin@jobfusion.com"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Phone Number
                                </label>

                                <Input
                                    prefix={
                                        <PhoneOutlined className="text-[#98A2B3]" />
                                    }
                                    value="+91 98765 43210"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Location
                                </label>

                                <Input
                                    prefix={
                                        <EnvironmentOutlined className="text-[#98A2B3]" />
                                    }
                                    value="Jaipur, Rajasthan, India"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>
                        </div>
                    </Card>

                    <Card
                        bordered={false}
                        className="lg:col-span-3 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-5">
                            <h2 className="text-base font-semibold text-[#0F172A]">
                                Security
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Manage your account security
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#EAECF0] p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC]">
                                    <LockOutlined className="text-[#475467]" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-[#344054]">
                                        Password
                                    </p>

                                    <p className="mt-0.5 text-xs text-[#98A2B3]">
                                        Last updated 30 days ago
                                    </p>
                                </div>
                            </div>

                            <Button
                                icon={<LockOutlined />}
                                className="!rounded-xl !border-[#D1D6DC] !shadow-none"
                            >
                                Change Password
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;