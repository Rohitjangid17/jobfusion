import { DeleteOutlined, DownloadOutlined, EyeOutlined, FileExcelOutlined, FilePdfOutlined, MoreOutlined, SearchOutlined, UserSwitchOutlined, } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Select, Table, Tag, Tooltip } from "antd";
import type { MenuProps } from "antd";
import type { Application } from "../admin.interface";

const Applications = () => {
  const data: Application[] = [
    {
      key: 1,
      candidate: "Aman Sharma",
      email: "aman.sharma@gmail.com",
      job: "Senior Frontend Developer",
      company: "TechNova Solutions",
      appliedDate: "08 Sep 2026",
      recruiter: "Rahul Sharma",
      status: "Shortlisted",
    },
    {
      key: 2,
      candidate: "Priya Verma",
      email: "priya.verma@gmail.com",
      job: "React.js Developer",
      company: "GrowthLabs Pvt. Ltd.",
      appliedDate: "07 Sep 2026",
      recruiter: "Neha Gupta",
      status: "Interview",
    },
    {
      key: 3,
      candidate: "Rahul Mehta",
      email: "rahul.mehta@gmail.com",
      job: "Backend Developer",
      company: "CloudWorks India",
      appliedDate: "06 Sep 2026",
      recruiter: "Amit Kumar",
      status: "Applied",
    },
    {
      key: 4,
      candidate: "Neha Gupta",
      email: "neha.gupta@gmail.com",
      job: "UI/UX Designer",
      company: "FinEdge Technologies",
      appliedDate: "05 Sep 2026",
      recruiter: "Priya Verma",
      status: "Shortlisted",
    },
    {
      key: 5,
      candidate: "Vikram Singh",
      email: "vikram.singh@gmail.com",
      job: "Product Manager",
      company: "Alpha Enterprises",
      appliedDate: "04 Sep 2026",
      recruiter: "Rahul Sharma",
      status: "Rejected",
    },
    {
      key: 6,
      candidate: "Anjali Mehta",
      email: "anjali.mehta@gmail.com",
      job: "Angular Developer",
      company: "NextGen Solutions",
      appliedDate: "03 Sep 2026",
      recruiter: "Sneha Reddy",
      status: "Interview",
    },
    {
      key: 7,
      candidate: "Rohit Kumar",
      email: "rohit.kumar@gmail.com",
      job: "HR Executive",
      company: "Bright Future Pvt. Ltd.",
      appliedDate: "02 Sep 2026",
      recruiter: "Anjali Mehta",
      status: "Selected",
    },
    {
      key: 8,
      candidate: "Sneha Reddy",
      email: "sneha.reddy@gmail.com",
      job: "Marketing Intern",
      company: "InnovateX",
      appliedDate: "01 Sep 2026",
      recruiter: "Vikram Patel",
      status: "Applied",
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

  const exportApplicationCsv = () => {
    console.log("Export Applications CSV");
  };

  const exportApplicationPdf = () => {
    console.log("Export Applications PDF");
  };

  const columns = [
    {
      title: "Candidate",
      dataIndex: "candidate",
      key: "candidate",
      render: (name: string, record: Application) => (
        <div className="flex items-center gap-3">
          <Avatar className="!bg-[#E8F0FF] !text-[#0052CC]">
            {name.charAt(0)}
          </Avatar>

          <div className="min-w-0">
            <Tooltip title={name}>
              <span className="block max-w-[170px] truncate cursor-pointer font-medium text-[#0F172A]">
                {name}
              </span>
            </Tooltip>

            <Tooltip title={record.email}>
              <span className="block max-w-[190px] truncate text-xs text-slate-400">
                {record.email}
              </span>
            </Tooltip>
          </div>
        </div>
      ),
    },
    {
      title: "Job",
      dataIndex: "job",
      key: "job",
      render: (job: string, record: Application) => (
        <div className="min-w-0">
          <Tooltip title={job}>
            <span className="block max-w-[200px] truncate cursor-pointer font-medium">
              {job}
            </span>
          </Tooltip>

          <Tooltip title={record.company}>
            <span className="block max-w-[180px] truncate text-xs text-slate-400">
              {record.company}
            </span>
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Recruiter",
      dataIndex: "recruiter",
      key: "recruiter",
      render: (recruiter: string) => (
        <Tooltip title={recruiter}>
          <span className="block max-w-[150px] truncate cursor-pointer">
            {recruiter}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: Application["status"]) => {
        const statusColor: Record<Application["status"], string> = {
          Applied: "default",
          Shortlisted: "blue",
          Interview: "purple",
          Selected: "green",
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
      render: (_: unknown, record: Application) => (
        <Dropdown
          trigger={["click"]}
          placement="bottomRight"
          menu={{
            items: actionItems,
            onClick: ({ key }) => {
              if (key === "view") {
                console.log("View", record);
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
            placeholder="Search applications"
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
              { label: "Applied", value: "applied" },
              { label: "Shortlisted", value: "shortlisted" },
              { label: "Interview", value: "interview" },
              { label: "Selected", value: "selected" },
              { label: "Rejected", value: "rejected" },
            ]}
          />

          <Select
            placeholder="Job"
            className="w-40 !rounded-xl !shadow-none !border !border-solid !border-[#D1D6DC]"
            size="middle"
            allowClear
            options={[
              {
                label: "Frontend Developer",
                value: "frontend",
              },
              {
                label: "React.js Developer",
                value: "react",
              },
              {
                label: "Angular Developer",
                value: "angular",
              },
              {
                label: "UI/UX Designer",
                value: "ui-ux",
              },
              {
                label: "Backend Developer",
                value: "backend",
              },
            ]}
          />
        </div>

        <div className="flex items-center gap-4">
          <Dropdown
            trigger={["click"]}
            menu={{
              items: exportItems,
              onClick: ({ key }) =>
                key === "csv"
                  ? exportApplicationCsv()
                  : exportApplicationPdf(),
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

export default Applications;