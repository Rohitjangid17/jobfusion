
import { useState } from "react";
import {
    ArrowRightOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    MessageOutlined,
    SendOutlined,
    LinkedinOutlined,
    GithubOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import { Button, Input, Select, message } from "antd";

const { TextArea } = Input;

const contactDetails = [
    {
        icon: <MailOutlined />,
        title: "Email us",
        value: "hello@jobfusion.com",
        description: "Send us an email anytime.",
    },
    {
        icon: <PhoneOutlined />,
        title: "Call us",
        value: "+91 98765 43210",
        description: "Monday to Friday, 9 AM – 6 PM.",
    },
    {
        icon: <EnvironmentOutlined />,
        title: "Our location",
        value: "Jaipur, Rajasthan, India",
        description: "Working with teams everywhere.",
    },
];

const faqs = [
    {
        question: "How can I get started with JobFusion?",
        answer:
            "You can create an account using the Get Started option and explore the available recruitment workspace.",
    },
    {
        question: "Can I request a product demo?",
        answer:
            "Yes. Select Product Demo in the inquiry form and share your preferred details. Our team can follow up with you.",
    },
    {
        question: "How can I get technical support?",
        answer:
            "You can contact our support team through the inquiry form or the support email configured for JobFusion.",
    },
    {
        question: "Can JobFusion support recruitment agencies?",
        answer:
            "JobFusion is designed to support different hiring teams, including recruitment agencies, HR teams, startups, and growing businesses.",
    },
];

const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "General Inquiry",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const updateField = (field: string, value: string) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true);

        try {
            // TODO: Replace this with your actual contact API.
            console.log("Contact form submission:", formData);

            messageApi.success(
                "Form validated successfully. Connect your contact API to submit inquiries."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-hidden bg-white text-gray-900">
            {contextHolder}

            {/* Hero */}
            <section className="relative px-5 pb-16 pt-24 sm:px-8 lg:pb-20 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-purple-100/60 blur-[120px]" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <MessageOutlined />
                        We'd love to hear from you
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                        Let's start a
                        <br />
                        <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent">
                            conversation.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        Have a question, need help, or want to explore JobFusion?
                        Our team would love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="px-5 pb-24 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Left Information */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] p-8 text-white sm:p-10">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
                        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[40px] border-white/10" />

                        <div className="relative">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                                Contact Information
                            </span>

                            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                                Let's connect and build something great.
                            </h2>

                            <p className="mt-5 leading-8 text-purple-100">
                                Whether you have questions about our platform, pricing, or
                                partnerships, we're here to help.
                            </p>

                            <div className="mt-12 space-y-8">
                                {contactDetails.map((detail) => (
                                    <div key={detail.title} className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                                            {detail.icon}
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-purple-100">
                                                {detail.title}
                                            </p>
                                            <p className="mt-1 font-semibold">{detail.value}</p>
                                            <p className="mt-1 text-xs text-purple-200">
                                                {detail.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 border-t border-white/20 pt-8">
                                <p className="text-sm font-semibold">Follow us</p>

                                <div className="mt-5 flex gap-3">
                                    {[
                                        {
                                            icon: <LinkedinOutlined />,
                                            label: "LinkedIn",
                                            url: "https://linkedin.com",
                                        },
                                        {
                                            icon: <GithubOutlined />,
                                            label: "GitHub",
                                            url: "https://github.com",
                                        },
                                        {
                                            icon: <TwitterOutlined />,
                                            label: "Twitter",
                                            url: "https://twitter.com",
                                        },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={social.label}
                                            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg transition hover:bg-white hover:text-[#635BFF]"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                                Send us a message
                            </span>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight">
                                How can we help?
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                Fill out the form below and tell us a little about what
                                you're looking for.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>

                                    <Input
                                        size="large"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(event) =>
                                            updateField("name", event.target.value)
                                        }
                                        required
                                        className="rounded-xl"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>

                                    <Input
                                        size="large"
                                        type="email"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={(event) =>
                                            updateField("email", event.target.value)
                                        }
                                        required
                                        className="rounded-xl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Company Name
                                </label>

                                <Input
                                    size="large"
                                    placeholder="Your company"
                                    value={formData.company}
                                    onChange={(event) =>
                                        updateField("company", event.target.value)
                                    }
                                    className="rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    What can we help you with?
                                </label>

                                <Select
                                    size="large"
                                    value={formData.subject}
                                    onChange={(value) => updateField("subject", value)}
                                    className="w-full"
                                    options={[
                                        { label: "General Inquiry", value: "General Inquiry" },
                                        { label: "Product Demo", value: "Product Demo" },
                                        { label: "Pricing & Plans", value: "Pricing & Plans" },
                                        { label: "Technical Support", value: "Technical Support" },
                                        { label: "Partnership", value: "Partnership" },
                                        { label: "Other", value: "Other" },
                                    ]}
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Your Message <span className="text-red-500">*</span>
                                </label>

                                <TextArea
                                    rows={5}
                                    placeholder="Tell us how we can help..."
                                    value={formData.message}
                                    onChange={(event) =>
                                        updateField("message", event.target.value)
                                    }
                                    required
                                    maxLength={2000}
                                    showCount
                                    className="rounded-xl"
                                />
                            </div>

                            <Button
                                htmlType="submit"
                                type="primary"
                                size="large"
                                loading={loading}
                                icon={<SendOutlined />}
                                className="h-12 w-full rounded-xl bg-[#635BFF] font-semibold shadow-lg shadow-purple-100 hover:!bg-[#5148e5]"
                            >
                                Send Message
                            </Button>

                            <p className="text-center text-xs leading-6 text-gray-400">
                                By submitting this form, you agree to be contacted regarding
                                your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Support Banner */}
            <section className="bg-[#F8F7FF] px-5 py-20 sm:px-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-3xl border border-purple-100 bg-white p-8 sm:p-10 lg:flex-row">
                    <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-2xl text-[#635BFF]">
                            <ClockCircleOutlined />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">
                                Need help with JobFusion?
                            </h3>
                            <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500">
                                Reach out to our team for product questions, account
                                assistance, or general support.
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:hello@jobfusion.com"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-purple-200 px-6 py-3.5 font-semibold text-[#635BFF] transition hover:bg-purple-50"
                    >
                        Email Support <ArrowRightOutlined />
                    </a>
                </div>
            </section>

            {/* FAQs */}
            <section className="px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            FAQs
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Got questions?
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Here are a few things you might want to know.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                open={index === 0}
                                className="group rounded-2xl border border-gray-200 p-6 transition open:border-purple-200 open:bg-purple-50/30"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                                    {faq.question}

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition group-open:rotate-45">
                                        <span className="text-xl">+</span>
                                    </span>
                                </summary>

                                <p className="mt-4 text-sm leading-7 text-gray-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-24 sm:px-8">
                <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] px-7 py-16 text-center text-white sm:px-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                        Ready to simplify your hiring?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
                        Start organizing your recruitment workflow with JobFusion.
                    </p>

                    <a
                        href="/register"
                        className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#635BFF] transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Get Started Free <ArrowRightOutlined />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
