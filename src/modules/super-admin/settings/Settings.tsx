import { useState } from "react";
import { BellOutlined, GlobalOutlined, LockOutlined, MailOutlined, SaveOutlined, SafetyCertificateOutlined, SettingOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Button, Card, Input, Select, Switch } from "antd";

const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button
          type="primary"
          icon={<SaveOutlined />}
          loading={isSaving}
          onClick={handleSave}
          className="!rounded-[20px] !bg-[#0052CC] !px-4 !py-2 !text-white !shadow-none"
        >
          Save Changes
        </Button>
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card
            bordered={false}
            className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F1FF]">
                <SettingOutlined className="text-[#0052CC]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#0F172A]">
                  General Settings
                </h2>

                <p className="mt-1 text-sm text-[#98A2B3]">
                  Configure basic platform information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#344054]">
                  Platform Name
                </label>

                <Input
                  value="JobFusion"
                  className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#344054]">
                  Support Email
                </label>

                <Input
                  prefix={
                    <MailOutlined className="text-[#98A2B3]" />
                  }
                  value="support@jobfusion.com"
                  className="!h-10 !rounded-xl !border-[#D1D6DC] !shadow-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#344054]">
                  Default Language
                </label>

                <Select
                  value="English"
                  className="!w-full"
                  options={[
                    {
                      label: "English",
                      value: "English",
                    },
                    {
                      label: "Hindi",
                      value: "Hindi",
                    },
                  ]}
                />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card
            bordered={false}
            className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC]">
                <BellOutlined className="text-[#475467]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Notifications
                </h2>

                <p className="mt-1 text-sm text-[#98A2B3]">
                  Manage admin notification preferences
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <SettingRow
                title="New User Registration"
                description="Get notified when a new user registers"
                defaultChecked
              />

              <SettingRow
                title="New Job Posted"
                description="Get notified when a recruiter posts a job"
                defaultChecked
              />

              <SettingRow
                title="New Application"
                description="Get notified about new applications"
                defaultChecked
              />

              <SettingRow
                title="Support Tickets"
                description="Get notified when a new support ticket is created"
                defaultChecked
              />
            </div>
          </Card>

          {/* Job Settings */}
          <Card
            bordered={false}
            className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC]">
                <GlobalOutlined className="text-[#475467]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Job Settings
                </h2>

                <p className="mt-1 text-sm text-[#98A2B3]">
                  Configure job posting preferences
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <SettingRow
                title="Auto Approve Jobs"
                description="Automatically approve newly posted jobs"
              />

              <SettingRow
                title="Allow Remote Jobs"
                description="Allow recruiters to post remote jobs"
                defaultChecked
              />

              <SettingRow
                title="Job Expiry"
                description="Automatically expire jobs after the configured period"
                defaultChecked
              />

              <div className="flex items-center justify-between border-t border-[#EAECF0] py-4">
                <div>
                  <p className="text-sm font-medium text-[#344054]">
                    Default Job Expiry
                  </p>

                  <p className="mt-0.5 text-xs text-[#98A2B3]">
                    Number of days before a job expires
                  </p>
                </div>

                <Select
                  value="30 Days"
                  className="!w-[120px]"
                  options={[
                    {
                      label: "15 Days",
                      value: "15 Days",
                    },
                    {
                      label: "30 Days",
                      value: "30 Days",
                    },
                    {
                      label: "60 Days",
                      value: "60 Days",
                    },
                    {
                      label: "90 Days",
                      value: "90 Days",
                    },
                  ]}
                />
              </div>
            </div>
          </Card>

          {/* Application Settings */}
          <Card
            bordered={false}
            className="!rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC]">
                <UserSwitchOutlined className="text-[#475467]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Application Settings
                </h2>

                <p className="mt-1 text-sm text-[#98A2B3]">
                  Manage application workflow preferences
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <SettingRow
                title="Allow Multiple Applications"
                description="Allow candidates to apply for multiple jobs"
                defaultChecked
              />

              <SettingRow
                title="Application Email Notifications"
                description="Send email notifications for application updates"
                defaultChecked
              />

              <SettingRow
                title="Resume Required"
                description="Require candidates to upload a resume before applying"
                defaultChecked
              />
            </div>
          </Card>

          {/* Security */}
          <Card
            bordered={false}
            className="lg:col-span-2 !rounded-2xl !shadow-[0px_4px_32px_0px_#98A2B31F]"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC]">
                <SafetyCertificateOutlined className="text-[#475467]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Security
                </h2>

                <p className="mt-1 text-sm text-[#98A2B3]">
                  Manage platform security preferences
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] p-4">
                <div className="flex items-center gap-3">
                  <LockOutlined className="text-[#475467]" />

                  <div>
                    <p className="text-sm font-medium text-[#344054]">
                      Two-Factor Authentication
                    </p>

                    <p className="mt-0.5 text-xs text-[#98A2B3]">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                </div>

                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-[#EAECF0] p-4">
                <div className="flex items-center gap-3">
                  <LockOutlined className="text-[#475467]" />

                  <div>
                    <p className="text-sm font-medium text-[#344054]">
                      Login Alerts
                    </p>

                    <p className="mt-0.5 text-xs text-[#98A2B3]">
                      Notify admins about new logins
                    </p>
                  </div>
                </div>

                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const SettingRow = ({
  title,
  description,
  defaultChecked = false,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#EAECF0] py-4 last:border-b-0">
      <div>
        <p className="text-sm font-medium text-[#344054]">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-[#98A2B3]">
          {description}
        </p>
      </div>

      <Switch defaultChecked={defaultChecked} />
    </div>
  );
};

export default Settings;