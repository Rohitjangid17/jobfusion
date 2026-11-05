import { useState } from "react";
import type { FC } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  ShareAltOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Tag,
  Upload,
} from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { useNavigate, useParams } from "react-router-dom";

const { TextArea } = Input;

interface Job {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  salary: string;
  posted: string;
  applicants: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

interface JobApplicationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  location: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
  consent: boolean;
}

type ResumeFile = File & {
  uid: string;
};

const job: Job = {
  title: "Senior Frontend Developer",
  department: "Engineering",
  location: "Remote",
  employmentType: "Full-time",
  experience: "3–5 Years",
  salary: "Competitive Salary",
  posted: "Recently Posted",
  applicants: "24 Applicants",
  description:
    "We are looking for a passionate Senior Frontend Developer who loves building beautiful, scalable, and high-performance web applications. You will work closely with designers, product managers, and backend engineers to create exceptional digital experiences.",
  responsibilities: [
    "Build responsive and scalable web applications using React.js and Next.js.",
    "Develop reusable UI components and maintain design systems.",
    "Collaborate with designers to translate UI/UX designs into working interfaces.",
    "Integrate REST APIs and manage application state efficiently.",
    "Write clean, maintainable, and well-tested code.",
    "Identify and resolve bugs and frontend performance issues.",
    "Participate in code reviews and technical discussions.",
  ],
  requirements: [
    "3+ years of professional frontend development experience.",
    "Strong knowledge of JavaScript, TypeScript, HTML, and CSS.",
    "Hands-on experience with React.js and Next.js.",
    "Experience with state management libraries.",
    "Understanding of REST APIs and asynchronous programming.",
    "Familiarity with Git and modern development workflows.",
    "Strong problem-solving and communication skills.",
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "REST APIs",
    "Git",
  ],
};

const JobDetails: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<JobApplicationFormValues>();
  const [messageApi, contextHolder] = message.useMessage();
  const [resume, setResume] = useState<ResumeFile | null>(null);

  const handleApply = (values: JobApplicationFormValues): void => {
    if (!resume) {
      messageApi.error("Please upload your resume.");
      return;
    }

    // Replace this demo handler with your application API request.
    console.log("Application:", {
      jobId: id,
      ...values,
      resume,
    });

    messageApi.success("Application submitted successfully!");
    form.resetFields();
    setResume(null);
  };

  const handleShare = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      messageApi.success("Job link copied!");
    } catch {
      messageApi.error("Unable to copy the job link.");
    }
  };

  const scrollToApplication = (): void => {
    document.getElementById("application-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleResumeBeforeUpload = (
    file: ResumeFile,
  ): boolean | typeof Upload.LIST_IGNORE => {
    const allowedTypes: string[] = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      messageApi.error("Please upload a PDF or Word document.");
      return Upload.LIST_IGNORE;
    }

    if (file.size > 5 * 1024 * 1024) {
      messageApi.error("Resume must be smaller than 5 MB.");
      return Upload.LIST_IGNORE;
    }

    setResume(file);
    return false;
  };

  const resumeFileList: UploadFile[] = resume
    ? [
        {
          uid: resume.uid,
          name: resume.name,
          status: "done",
        },
      ]
    : [];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {contextHolder}

      {/* TOP NAVIGATION */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <Breadcrumb
            items={[
              {
                title: (
                  <a href="/" className="text-slate-500">
                    Home
                  </a>
                ),
              },
              {
                title: (
                  <a href="/careers" className="text-slate-500">
                    Careers
                  </a>
                ),
              },
              { title: "Job Details" },
            ]}
          />
        </div>
      </div>

      {/* JOB HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/careers")}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-600"
          >
            <ArrowLeftOutlined />
            Back to Careers
          </button>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap gap-2">
                <Tag color="purple">{job.department}</Tag>
                <Tag color="success">Actively Hiring</Tag>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {job.title}
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                {job.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-500">
                <span>
                  <EnvironmentOutlined className="mr-2" />
                  {job.location}
                </span>
                <span>
                  <ClockCircleOutlined className="mr-2" />
                  {job.employmentType}
                </span>
                <span>
                  <UserOutlined className="mr-2" />
                  {job.experience}
                </span>
                <span>
                  <CalendarOutlined className="mr-2" />
                  {job.posted}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="large"
                icon={<ShareAltOutlined />}
                className="!h-12 !rounded-xl !px-5"
                onClick={handleShare}
              >
                Share Job
              </Button>

              <Button
                type="primary"
                size="large"
                className="!h-12 !rounded-xl !border-0 !bg-violet-600 !px-8 hover:!bg-violet-500"
                onClick={scrollToApplication}
              >
                Apply Now <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Row gutter={[32, 32]}>
          {/* LEFT CONTENT */}
          <Col xs={24} lg={15}>
            <div className="space-y-8">
              {/* OVERVIEW */}
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">Job Overview</h2>

                <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
                  {[
                    {
                      icon: <TeamOutlined />,
                      label: "Department",
                      value: job.department,
                    },
                    {
                      icon: <EnvironmentOutlined />,
                      label: "Location",
                      value: job.location,
                    },
                    {
                      icon: <ClockCircleOutlined />,
                      label: "Job Type",
                      value: job.employmentType,
                    },
                    {
                      icon: <UserOutlined />,
                      label: "Experience",
                      value: job.experience,
                    },
                    {
                      icon: <SafetyCertificateOutlined />,
                      label: "Salary",
                      value: job.salary,
                    },
                    {
                      icon: <CalendarOutlined />,
                      label: "Posted",
                      value: job.posted,
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center gap-2 text-violet-600">
                        {item.icon}
                        <span className="text-xs font-medium text-slate-400">
                          {item.label}
                        </span>
                      </div>
                      <p className="mt-2 font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* ABOUT ROLE */}
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">About the Role</h2>
                <p className="mt-5 leading-8 text-slate-600">
                  {job.description}
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  You will have the opportunity to contribute to product
                  architecture, build reusable solutions, and work with a
                  collaborative engineering team.
                </p>
              </Card>

              {/* RESPONSIBILITIES */}
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">Key Responsibilities</h2>
                <div className="mt-6 space-y-4">
                  {job.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleFilled className="mt-1 text-violet-600" />
                      <p className="leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* REQUIREMENTS */}
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">
                  Requirements &amp; Qualifications
                </h2>
                <div className="mt-6 space-y-4">
                  {job.requirements.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleFilled className="mt-1 text-violet-600" />
                      <p className="leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* SKILLS */}
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h2 className="text-xl font-bold">Skills &amp; Technologies</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {job.skills.map((skill) => (
                    <Tag
                      key={skill}
                      className="!rounded-lg !border-slate-200 !bg-slate-50 !px-4 !py-2 !text-sm !text-slate-700"
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>

              {/* APPLICATION FORM */}
              <Card
                id="application-form"
                bordered={false}
                className="!scroll-mt-24 !rounded-2xl !shadow-sm"
              >
                <div className="mb-8">
                  <Tag color="purple">APPLICATION</Tag>
                  <h2 className="mt-4 text-2xl font-bold">
                    Apply for this position
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Share your details and tell us why you would be a great fit.
                  </p>
                </div>

                <Form<JobApplicationFormValues>
                  form={form}
                  layout="vertical"
                  requiredMark={false}
                  onFinish={handleApply}
                  initialValues={{ consent: false }}
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                          { required: true, message: "Enter first name" },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="John"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                          { required: true, message: "Enter last name" },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Doe"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                          { required: true, message: "Enter email" },
                          { type: "email", message: "Enter a valid email" },
                        ]}
                      >
                        <Input
                          size="large"
                          prefix={<MailOutlined />}
                          placeholder="john@example.com"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                          { required: true, message: "Enter phone number" },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="+91 98765 43210"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Years of Experience"
                        name="experience"
                        rules={[
                          { required: true, message: "Select experience" },
                        ]}
                      >
                        <Select size="large" placeholder="Select experience">
                          <Select.Option value="0-1">0–1 Years</Select.Option>
                          <Select.Option value="1-3">1–3 Years</Select.Option>
                          <Select.Option value="3-5">3–5 Years</Select.Option>
                          <Select.Option value="5+">5+ Years</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12}>
                      <Form.Item
                        label="Current Location"
                        name="location"
                        rules={[
                          { required: true, message: "Enter location" },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="City, Country"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="LinkedIn Profile"
                        name="linkedin"
                        rules={[
                          {
                            type: "url",
                            message: "Enter a valid LinkedIn URL",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          prefix={<LinkedinOutlined />}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="Portfolio / Website"
                        name="portfolio"
                        rules={[
                          { type: "url", message: "Enter a valid website URL" },
                        ]}
                      >
                        <Input
                          size="large"
                          prefix={<ArrowRightOutlined />}
                          placeholder="https://yourportfolio.com"
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="Why should we hire you?"
                        name="coverLetter"
                      >
                        <TextArea
                          rows={5}
                          placeholder="Tell us about your experience, skills and what makes you a great fit..."
                          className="!rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item label="Upload Resume" required>
                        <Upload.Dragger
                          accept=".pdf,.doc,.docx"
                          maxCount={1}
                          beforeUpload={handleResumeBeforeUpload}
                          onRemove={() => {
                            setResume(null);
                            return true;
                          }}
                          fileList={resumeFileList}
                          className="!rounded-xl"
                        >
                          <div className="py-5">
                            <UploadOutlined className="text-3xl text-violet-600" />
                            <p className="mt-3 font-semibold text-slate-700">
                              Click or drag your resume here
                            </p>
                            <p className="mt-2 text-xs text-slate-400">
                              PDF, DOC or DOCX (Maximum 5 MB)
                            </p>
                          </div>
                        </Upload.Dragger>
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        name="consent"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: async (_, value: boolean) => {
                              if (!value) {
                                throw new Error(
                                  "Please accept the privacy consent.",
                                );
                              }
                            },
                          },
                        ]}
                      >
                        <Checkbox className="!text-sm !text-slate-600">
                          I agree to the processing of my personal information
                          for recruitment purposes in accordance with the
                          Privacy Policy.
                        </Checkbox>
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                        block
                        className="!h-12 !rounded-xl !border-0 !bg-violet-600 !font-semibold hover:!bg-violet-500"
                      >
                        Submit Application <ArrowRightOutlined />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </div>
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col xs={24} lg={9}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold">Ready to apply?</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Take the next step in your career. Submit your application
                  and our recruitment team will review your profile.
                </p>

                <Button
                  block
                  type="primary"
                  size="large"
                  className="!mt-6 !h-12 !rounded-xl !border-0 !bg-violet-600"
                  onClick={scrollToApplication}
                >
                  Apply for this Job <ArrowRightOutlined />
                </Button>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <SafetyCertificateOutlined />
                  Your information stays protected.
                </div>
              </Card>

              <Card bordered={false} className="!rounded-2xl shadow-sm">
                <h3 className="font-bold">Application Tips</h3>
                <div className="mt-6 space-y-5">
                  {[
                    "Keep your resume updated and relevant.",
                    "Highlight your most important projects.",
                    "Include your portfolio and LinkedIn profile.",
                    "Write a short, personalized introduction.",
                  ].map((tip, index) => (
                    <div key={tip} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-600">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-500">{tip}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="rounded-2xl bg-[#10162B] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl text-violet-300">
                  <MailOutlined />
                </div>
                <h3 className="mt-5 font-bold text-white">Have questions?</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Contact our recruitment team if you need assistance with the
                  application process.
                </p>
                <a
                  href="mailto:careers@jobfusion.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white"
                >
                  Contact Recruitment <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default JobDetails;
