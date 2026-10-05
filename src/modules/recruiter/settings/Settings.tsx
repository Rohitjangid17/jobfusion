import { useState } from "react";
import { BellOutlined, CalendarOutlined, CheckOutlined, LockOutlined, MailOutlined, SaveOutlined, SettingOutlined, UserOutlined, } from "@ant-design/icons";
import { Button, Card, Divider, Input, Select, Switch, } from "antd";

const Settings = () => {
    const [settings, setSettings] = useState({
        firstName: "Rahul",
        lastName: "Sharma",
        email: "rahul.sharma@technova.com",
        phone: "+91 98765 43210",
        timezone: "Asia/Kolkata",

        defaultJobType: "Full Time",
        defaultWorkMode: "Hybrid",
        autoExpireJobs: true,

        newApplications: true,
        applicationStatus: true,
        shortlistedCandidates: true,

        interviewReminders: true,
        interviewRescheduled: true,
        interviewCancelled: true,

        loginAlerts: true,
        candidateContact: true,
        profileVisibility: true,
    });

    const updateSetting = <K extends keyof typeof settings>(
        key: K,
        value: (typeof settings)[K],
    ) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSave = () => {
        console.log("Recruiter settings saved:", settings);
    };

    return (
        <div className="flex h-full flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-end">
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={handleSave}
                    className="!rounded-xl !bg-[#0052CC] !px-4 !shadow-none"
                >
                    Save Changes
                </Button>
            </div>

            {/* Settings Content */}
            <div className="min-h-0 flex-1 overflow-auto pr-1">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

                    {/* Account & Profile */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <UserOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Account & Profile
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Manage your personal account information
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    First Name
                                </label>
                                <Input
                                    value={settings.firstName}
                                    onChange={(e) =>
                                        updateSetting("firstName", e.target.value)
                                    }
                                    className="!rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    Last Name
                                </label>
                                <Input
                                    value={settings.lastName}
                                    onChange={(e) =>
                                        updateSetting("lastName", e.target.value)
                                    }
                                    className="!rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    Email
                                </label>
                                <Input
                                    prefix={<MailOutlined />}
                                    value={settings.email}
                                    onChange={(e) =>
                                        updateSetting("email", e.target.value)
                                    }
                                    className="!rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    Phone
                                </label>
                                <Input
                                    value={settings.phone}
                                    onChange={(e) =>
                                        updateSetting("phone", e.target.value)
                                    }
                                    className="!rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="mb-2 block text-sm font-medium text-[#334155]">
                                Timezone
                            </label>

                            <Select
                                value={settings.timezone}
                                onChange={(value) =>
                                    updateSetting("timezone", value)
                                }
                                className="!w-full"
                                options={[
                                    {
                                        value: "Asia/Kolkata",
                                        label: "India Standard Time (IST)",
                                    },
                                    {
                                        value: "Asia/Dubai",
                                        label: "Gulf Standard Time (GST)",
                                    },
                                    {
                                        value: "Europe/London",
                                        label: "London Time",
                                    },
                                ]}
                            />
                        </div>
                    </Card>

                    {/* Job Preferences */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <SettingOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Job Preferences
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Configure default job posting preferences
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    Default Job Type
                                </label>

                                <Select
                                    value={settings.defaultJobType}
                                    onChange={(value) =>
                                        updateSetting("defaultJobType", value)
                                    }
                                    className="!w-full"
                                    options={[
                                        { value: "Full Time", label: "Full Time" },
                                        { value: "Part Time", label: "Part Time" },
                                        { value: "Contract", label: "Contract" },
                                        { value: "Internship", label: "Internship" },
                                    ]}
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#334155]">
                                    Default Work Mode
                                </label>

                                <Select
                                    value={settings.defaultWorkMode}
                                    onChange={(value) =>
                                        updateSetting("defaultWorkMode", value)
                                    }
                                    className="!w-full"
                                    options={[
                                        { value: "On-site", label: "On-site" },
                                        { value: "Remote", label: "Remote" },
                                        { value: "Hybrid", label: "Hybrid" },
                                    ]}
                                />
                            </div>
                        </div>

                        <Divider />

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="m-0 text-sm font-medium text-[#0F172A]">
                                    Auto-expire jobs
                                </p>
                                <p className="m-0 mt-1 text-xs text-[#64748B]">
                                    Automatically close jobs after expiry date
                                </p>
                            </div>

                            <Switch
                                checked={settings.autoExpireJobs}
                                onChange={(value) =>
                                    updateSetting("autoExpireJobs", value)
                                }
                            />
                        </div>
                    </Card>

                    {/* Application Notifications */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <BellOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Application Notifications
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Choose when you want application updates
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <SettingRow
                                title="New applications"
                                description="Get notified when a candidate applies"
                                checked={settings.newApplications}
                                onChange={(value) =>
                                    updateSetting("newApplications", value)
                                }
                            />

                            <SettingRow
                                title="Application status updates"
                                description="Receive updates when application status changes"
                                checked={settings.applicationStatus}
                                onChange={(value) =>
                                    updateSetting("applicationStatus", value)
                                }
                            />

                            <SettingRow
                                title="Shortlisted candidates"
                                description="Get notified when candidates are shortlisted"
                                checked={settings.shortlistedCandidates}
                                onChange={(value) =>
                                    updateSetting("shortlistedCandidates", value)
                                }
                            />
                        </div>
                    </Card>

                    {/* Interview Notifications */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <CalendarOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Interview Notifications
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Manage interview-related notifications
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <SettingRow
                                title="Interview reminders"
                                description="Receive reminders before scheduled interviews"
                                checked={settings.interviewReminders}
                                onChange={(value) =>
                                    updateSetting("interviewReminders", value)
                                }
                            />

                            <SettingRow
                                title="Interview rescheduled"
                                description="Get notified when an interview is rescheduled"
                                checked={settings.interviewRescheduled}
                                onChange={(value) =>
                                    updateSetting("interviewRescheduled", value)
                                }
                            />

                            <SettingRow
                                title="Interview cancelled"
                                description="Get notified when an interview is cancelled"
                                checked={settings.interviewCancelled}
                                onChange={(value) =>
                                    updateSetting("interviewCancelled", value)
                                }
                            />
                        </div>
                    </Card>

                    {/* Security */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <LockOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Security
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Manage your account security
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] p-4">
                            <div>
                                <p className="m-0 text-sm font-medium text-[#0F172A]">
                                    Change Password
                                </p>
                                <p className="m-0 mt-1 text-xs text-[#64748B]">
                                    Update your account password
                                </p>
                            </div>

                            <Button className="!rounded-xl">
                                Change Password
                            </Button>
                        </div>

                        <div className="mt-3">
                            <SettingRow
                                title="Login alerts"
                                description="Get notified about new account logins"
                                checked={settings.loginAlerts}
                                onChange={(value) =>
                                    updateSetting("loginAlerts", value)
                                }
                            />
                        </div>
                    </Card>

                    {/* Privacy */}
                    <Card
                        bordered={false}
                        className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FF] text-[#0052CC]">
                                <CheckOutlined />
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-semibold text-[#0F172A]">
                                    Privacy & Communication
                                </h3>
                                <p className="m-0 text-xs text-[#64748B]">
                                    Control candidate communication preferences
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <SettingRow
                                title="Candidate contact"
                                description="Allow direct communication with candidates"
                                checked={settings.candidateContact}
                                onChange={(value) =>
                                    updateSetting("candidateContact", value)
                                }
                            />

                            <SettingRow
                                title="Profile visibility"
                                description="Show your recruiter profile to candidates"
                                checked={settings.profileVisibility}
                                onChange={(value) =>
                                    updateSetting("profileVisibility", value)
                                }
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

interface SettingRowProps {
    title: string;
    description: string;
    checked: boolean;
    onChange: (value: boolean) => void;
}

const SettingRow = ({
    title,
    description,
    checked,
    onChange,
}: SettingRowProps) => {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#F1F5F9] py-4 last:border-b-0">
            <div>
                <p className="m-0 text-sm font-medium text-[#0F172A]">
                    {title}
                </p>

                <p className="m-0 mt-1 text-xs text-[#64748B]">
                    {description}
                </p>
            </div>

            <Switch
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
};

export default Settings;