import { useState } from "react";
import { EditOutlined, EnvironmentOutlined, GlobalOutlined, MailOutlined, PhoneOutlined, SaveOutlined, ShopOutlined, } from "@ant-design/icons";
import { Avatar, Button, Card, Input } from "antd";

const CompanyProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Header Action */}
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
                    {isEditing ? "Save Changes" : "Edit Company"}
                </Button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {/* Company Summary */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="flex flex-col items-center text-center">
                            <Avatar
                                size={88}
                                icon={<ShopOutlined />}
                                className="!bg-[#E8F1FF] !text-3xl !text-[#0052CC]"
                            />

                            <h2 className="mt-4 text-lg font-semibold text-[#0F172A]">
                                JobFusion Technologies
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Technology & Software
                            </p>

                            <div className="mt-6 w-full border-t border-[#EAECF0] pt-5">
                                <div className="flex items-center gap-3 text-left">
                                    <MailOutlined className="text-[#667085]" />

                                    <p className="truncate text-sm text-[#475467]">
                                        hr@jobfusion.com
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

                                <div className="mt-5 flex items-center gap-3 text-left">
                                    <GlobalOutlined className="text-[#667085]" />

                                    <p className="truncate text-sm text-[#475467]">
                                        www.jobfusion.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Company Information */}
                    <Card
                        bordered={false}
                        className="lg:col-span-2 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-6">
                            <h2 className="text-base font-semibold text-[#0F172A]">
                                Company Information
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Manage your company's basic information
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Company Name
                                </label>

                                <Input
                                    defaultValue="JobFusion Technologies"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Industry
                                </label>

                                <Input
                                    defaultValue="Technology & Software"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Company Size
                                </label>

                                <Input
                                    defaultValue="51 - 200 Employees"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Founded Year
                                </label>

                                <Input
                                    defaultValue="2020"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Company Website
                                </label>

                                <Input
                                    prefix={
                                        <GlobalOutlined className="text-[#98A2B3]" />
                                    }
                                    defaultValue="https://www.jobfusion.com"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Contact Information */}
                    <Card
                        bordered={false}
                        className="lg:col-span-3 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-6">
                            <h2 className="text-base font-semibold text-[#0F172A]">
                                Contact Information
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Manage your company's contact and location
                                details
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Contact Email
                                </label>

                                <Input
                                    prefix={
                                        <MailOutlined className="text-[#98A2B3]" />
                                    }
                                    defaultValue="hr@jobfusion.com"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Contact Phone
                                </label>

                                <Input
                                    prefix={
                                        <PhoneOutlined className="text-[#98A2B3]" />
                                    }
                                    defaultValue="+91 98765 43210"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Address
                                </label>

                                <Input
                                    prefix={
                                        <EnvironmentOutlined className="text-[#98A2B3]" />
                                    }
                                    defaultValue="Malviya Nagar"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    City
                                </label>

                                <Input
                                    defaultValue="Jaipur"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    State
                                </label>

                                <Input
                                    defaultValue="Rajasthan"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#344054]">
                                    Country
                                </label>

                                <Input
                                    defaultValue="India"
                                    disabled={!isEditing}
                                    className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* About Company */}
                    <Card
                        bordered={false}
                        className="lg:col-span-3 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-5">
                            <h2 className="text-base font-semibold text-[#0F172A]">
                                About Company
                            </h2>

                            <p className="mt-1 text-sm text-[#98A2B3]">
                                Tell candidates about your company
                            </p>
                        </div>

                        <Input.TextArea
                            defaultValue="JobFusion Technologies is a technology-driven organization focused on building modern digital products and solutions. We bring together talented professionals to create scalable, user-friendly and innovative products."
                            disabled={!isEditing}
                            rows={5}
                            className="!rounded-xl !border-[#D1D6DC] !shadow-none"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;