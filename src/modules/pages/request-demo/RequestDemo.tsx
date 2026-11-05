
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CheckCircleFilled,
    CheckCircleOutlined,
    MailOutlined,
    MessageOutlined,
    PlayCircleOutlined,
    SafetyOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";

const { TextArea } = Input;

interface DemoFormValues {
    fullName: string;
    workEmail: string;
    company: string;
    jobTitle: string;
    teamSize: string;
    interest: string;
    preferredTime: string;
    message?: string;
}

const teamSizeOptions = [
    { label: "1–10 employees", value: "1-10" },
    { label: "11–50 employees", value: "11-50" },
    { label: "51–200 employees", value: "51-200" },
    { label: "201–500 employees", value: "201-500" },
    { label: "501–1000 employees", value: "501-1000" },
    { label: "1000+ employees", value: "1000+" },
];

const interestOptions = [
    { label: "Applicant Tracking System", value: "ats" },
    { label: "Candidate Management", value: "candidates" },
    { label: "Job & Recruitment Management", value: "jobs" },
    { label: "Team Collaboration", value: "collaboration" },
    { label: "Complete Recruitment Platform", value: "complete" },
    { label: "Other", value: "other" },
];

const timeOptions = [
    { label: "Morning (9 AM – 12 PM)", value: "morning" },
    { label: "Afternoon (12 PM – 3 PM)", value: "afternoon" },
    { label: "Evening (3 PM – 6 PM)", value: "evening" },
    { label: "Flexible", value: "flexible" },
];

const demoBenefits = [
    {
        icon: <TeamOutlined />,
        title: "Explore your workspace",
        description:
            "See how jobs, candidates, and recruitment activities fit together.",
    },
    {
        icon: <PlayCircleOutlined />,
        title: "Product walkthrough",
        description:
            "Understand the platform through a guided product demonstration.",
    },
    {
        icon: <MessageOutlined />,
        title: "Discuss your requirements",
        description:
            "Share your hiring challenges and discuss possible workflows.",
    },
];

const demoSteps = [
    "Tell us about your company and hiring needs.",
    "Our team reviews your demo request.",
    "We get in touch to coordinate a suitable time.",
];

export default function RequestDemo() {
    const [form] = Form.useForm<DemoFormValues>();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (values: DemoFormValues) => {
        setSubmitting(true);

        try {
            // Demo frontend behavior. Connect this to your backend API later.
            console.log("Demo request:", values);

            await new Promise((resolve) => setTimeout(resolve, 800));

            setSubmitted(true);
            form.resetFields();
            message.success("Your demo request has been submitted!");
        } catch {
            message.error("Unable to submit your request. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#17172B]">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[#ECEBFA] bg-gradient-to-br from-[#F7F6FF] via-white to-[#F0EEFF]">
                <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#635BFF]/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#A78BFA]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E2FF] bg-white px-4 py-2 text-sm font-semibold text-[#635BFF] shadow-sm">
                                <PlayCircleOutlined />
                                Personalized Product Demo
                            </div>

                            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                See how JobFusion can simplify{" "}
                                <span className="text-[#635BFF]">your hiring.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                                Get a guided walkthrough of JobFusion and discover how to
                                organize jobs, manage candidates, and bring your recruitment
                                activities into one workspace.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#demo-form">
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="!h-12 !rounded-xl !border-0 !bg-[#635BFF] !px-7 !font-semibold shadow-lg shadow-[#635BFF]/20 hover:!bg-[#5148E5]"
                                    >
                                        Request your demo
                                        <ArrowRightOutlined />
                                    </Button>
                                </a>

                                <Link to="/features">
                                    <Button
                                        size="large"
                                        className="!h-12 !rounded-xl !border-[#E5E2FF] !px-7 !font-semibold !text-[#635BFF]"
                                    >
                                        Explore features
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                    <CheckCircleFilled className="text-[#635BFF]" />
                                    Personalized walkthrough
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircleFilled className="text-[#635BFF]" />
                                    No commitment required
                                </span>
                            </div>
                        </div>

                        {/* Hero Preview Card */}
                        <div className="relative mx-auto w-full max-w-lg">
                            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#635BFF]/10 blur-2xl" />

                            <div className="relative rounded-3xl border border-[#EAE8FF] bg-white p-5 shadow-[0_24px_80px_rgba(99,91,255,0.12)] sm:p-7">
                                <div className="flex items-center justify-between border-b border-[#ECEBF5] pb-5">
                                    <div>
                                        <p className="text-sm font-semibold text-[#17172B]">
                                            Recruitment Overview
                                        </p>
                                        <p className="mt-1 text-xs text-gray-400">
                                            Your hiring workspace
                                        </p>
                                    </div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0EEFF] text-lg text-[#635BFF]">
                                        <TeamOutlined />
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Active Jobs", value: "24", color: "bg-[#F0EEFF]" },
                                        { label: "Candidates", value: "186", color: "bg-[#EAF7FF]" },
                                        { label: "Applications", value: "342", color: "bg-[#FFF4E8]" },
                                        { label: "Interviews", value: "18", color: "bg-[#EAFBF2]" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className={`${item.color} rounded-2xl p-5`}
                                        >
                                            <p className="text-xs font-medium text-gray-500">
                                                {item.label}
                                            </p>
                                            <p className="mt-3 text-3xl font-bold text-[#17172B]">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl border border-[#ECEBF5] p-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold">Hiring Pipeline</p>
                                        <span className="text-xs text-gray-400">Overview</span>
                                    </div>

                                    <div className="mt-5 space-y-4">
                                        {[
                                            { label: "Applied", width: "100%", count: "120" },
                                            { label: "Shortlisted", width: "72%", count: "86" },
                                            { label: "Interview", width: "48%", count: "58" },
                                            { label: "Selected", width: "26%", count: "31" },
                                        ].map((item) => (
                                            <div key={item.label}>
                                                <div className="mb-2 flex justify-between text-xs">
                                                    <span className="text-gray-500">{item.label}</span>
                                                    <span className="font-semibold text-[#17172B]">
                                                        {item.count}
                                                    </span>
                                                </div>
                                                <div className="h-2 overflow-hidden rounded-full bg-[#F0EEFF]">
                                                    <div
                                                        className="h-full rounded-full bg-[#635BFF]"
                                                        style={{ width: item.width }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#F7F6FF] p-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#635BFF]">
                                        <CheckCircleOutlined />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">One organized workspace</p>
                                        <p className="mt-1 text-xs text-gray-500">
                                            Jobs, candidates and hiring activities
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-[#ECEBF5] bg-white p-4 shadow-xl sm:flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAFBF2] text-lg text-[#16A36A]">
                                    <CheckCircleFilled />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Simplified hiring</p>
                                    <p className="text-xs text-gray-400">
                                        Built for recruitment teams
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="text-sm font-bold uppercase tracking-[1.5px] text-[#635BFF]">
                        What you'll see
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Make the most of your demo
                    </h2>
                    <p className="mt-4 leading-7 text-gray-500">
                        Explore the platform with a walkthrough focused on your
                        recruitment workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {demoBenefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className="rounded-2xl border border-[#ECEBF5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#D8D3FF] hover:shadow-xl"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFF] text-2xl text-[#635BFF]">
                                {benefit.icon}
                            </div>
                            <div className="mt-6 text-xs font-bold uppercase tracking-widest text-[#635BFF]">
                                Step 0{index + 1}
                            </div>
                            <h3 className="mt-3 text-xl font-bold">{benefit.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Demo Form */}
            <section
                id="demo-form"
                className="scroll-mt-24 bg-[#FAFAFE] py-16 sm:py-20"
            >
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Form Intro */}
                    <div className="lg:sticky lg:top-24">
                        <span className="text-sm font-bold uppercase tracking-[1.5px] text-[#635BFF]">
                            Get started
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                            Request your personalized demo.
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            Share a few details about your team. We'll use this information
                            to understand your requirements and coordinate a suitable
                            product walkthrough.
                        </p>

                        <div className="mt-9 space-y-6">
                            {demoSteps.map((step, index) => (
                                <div key={step} className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EEFF] text-sm font-bold text-[#635BFF]">
                                        {index + 1}
                                    </div>
                                    <p className="pt-1 text-sm leading-6 text-gray-600">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-2xl border border-[#EAE8FF] bg-white p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0EEFF] text-lg text-[#635BFF]">
                                    <MailOutlined />
                                </div>
                                <div>
                                    <p className="font-semibold">Have a question?</p>
                                    <Link
                                        to="/contact"
                                        className="mt-1 inline-block text-sm text-[#635BFF] hover:text-[#4941D8]"
                                    >
                                        Contact our team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="rounded-3xl border border-[#ECEBF5] bg-white p-6 shadow-[0_8px_40px_rgba(23,23,43,0.04)] sm:p-9 lg:p-10">
                        {submitted ? (
                            <div className="py-14 text-center">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAFBF2] text-4xl text-[#16A36A]">
                                    <CheckCircleFilled />
                                </div>

                                <h3 className="mt-7 text-2xl font-bold">
                                    Thank you for your interest!
                                </h3>

                                <p className="mx-auto mt-4 max-w-md leading-7 text-gray-500">
                                    Your demo request has been recorded in this frontend demo.
                                    Connect the form to your backend to process actual requests.
                                </p>

                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={() => setSubmitted(false)}
                                    className="!mt-8 !h-12 !rounded-xl !border-0 !bg-[#635BFF] !px-7 !font-semibold"
                                >
                                    Submit another request
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold">Tell us about yourself</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        Complete the form below to request a product walkthrough.
                                    </p>
                                </div>

                                <Form
                                    form={form}
                                    layout="vertical"
                                    requiredMark={false}
                                    onFinish={handleSubmit}
                                    className="request-demo-form"
                                >
                                    <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                                        <Form.Item
                                            label={<span className="font-semibold">Full name</span>}
                                            name="fullName"
                                            rules={[
                                                { required: true, message: "Please enter your name" },
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                prefix={<UserOutlined className="text-gray-400" />}
                                                placeholder="Your full name"
                                                className="!h-12 !rounded-xl"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={<span className="font-semibold">Work email</span>}
                                            name="workEmail"
                                            rules={[
                                                { required: true, message: "Please enter your email" },
                                                { type: "email", message: "Enter a valid email" },
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                prefix={<MailOutlined className="text-gray-400" />}
                                                placeholder="you@company.com"
                                                className="!h-12 !rounded-xl"
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                                        <Form.Item
                                            label={<span className="font-semibold">Company name</span>}
                                            name="company"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please enter your company name",
                                                },
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Your company"
                                                className="!h-12 !rounded-xl"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={<span className="font-semibold">Job title</span>}
                                            name="jobTitle"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please enter your job title",
                                                },
                                            ]}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="e.g. HR Manager"
                                                className="!h-12 !rounded-xl"
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                                        <Form.Item
                                            label={<span className="font-semibold">Team size</span>}
                                            name="teamSize"
                                            rules={[
                                                { required: true, message: "Select your team size" },
                                            ]}
                                        >
                                            <Select
                                                size="large"
                                                placeholder="Select team size"
                                                options={teamSizeOptions}
                                                className="h-12"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={<span className="font-semibold">What interests you?</span>}
                                            name="interest"
                                            rules={[
                                                { required: true, message: "Select an area of interest" },
                                            ]}
                                        >
                                            <Select
                                                size="large"
                                                placeholder="Select an option"
                                                options={interestOptions}
                                                className="h-12"
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                        label={
                                            <span className="font-semibold">
                                                Preferred time for contact
                                            </span>
                                        }
                                        name="preferredTime"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please select your preferred time",
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            placeholder="Select your preferred time"
                                            options={timeOptions}
                                            className="h-12"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <span className="font-semibold">
                                                Anything else we should know?{" "}
                                                <span className="font-normal text-gray-400">
                                                    (Optional)
                                                </span>
                                            </span>
                                        }
                                        name="message"
                                    >
                                        <TextArea
                                            rows={4}
                                            maxLength={1000}
                                            showCount
                                            placeholder="Tell us about your hiring challenges or specific requirements..."
                                            className="!rounded-xl !py-3"
                                        />
                                    </Form.Item>

                                    <div className="mt-6 border-t border-[#ECEBF5] pt-6">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            loading={submitting}
                                            block
                                            size="large"
                                            icon={<CalendarOutlined />}
                                            className="!h-13 !rounded-xl !border-0 !bg-[#635BFF] !font-semibold shadow-lg shadow-[#635BFF]/15 hover:!bg-[#5148E5]"
                                        >
                                            Request a Demo
                                            <ArrowRightOutlined />
                                        </Button>

                                        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs leading-6 text-gray-400">
                                            <SafetyOutlined />
                                            Your information will be used to respond to your request.
                                        </p>
                                    </div>
                                </Form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 py-16 sm:px-8 lg:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#17172B] px-7 py-10 text-center sm:px-10 md:flex-row md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Want to explore JobFusion first?
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-gray-300">
                            Discover the platform, its features, and how it supports
                            recruitment workflows.
                        </p>
                    </div>

                    <Link to="/features">
                        <Button
                            size="large"
                            className="!h-12 !rounded-xl !border-0 !bg-white !px-7 !font-semibold !text-[#635BFF] hover:!bg-[#F0EEFF]"
                        >
                            Explore features
                            <ArrowRightOutlined />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
