import React from "react";
import {
    SafetyCertificateOutlined,
    LockOutlined,
    UserOutlined,
    DatabaseOutlined,
    ShareAltOutlined,
    FileProtectOutlined,
} from "@ant-design/icons";

const PrivacyPolicy: React.FC = () => {
    const sections = [
        {
            id: "information",
            title: "Information We Collect",
            icon: <DatabaseOutlined />,
            content:
                "We collect information that helps us provide and improve JobFusion services.",
            items: [
                "Personal information such as name, email address and phone number.",
                "Account credentials and profile information.",
                "Professional details such as skills, experience and resume information.",
                "Usage data, device information and website activity.",
            ],
        },
        {
            id: "collection",
            title: "How We Collect Information",
            icon: <UserOutlined />,
            content: "We collect information through several methods:",
            items: [
                "When you create an account or update your profile.",
                "When you interact with our website and services.",
                "When you contact our support team.",
                "Through cookies and similar technologies.",
            ],
        },
        {
            id: "usage",
            title: "How We Use Your Information",
            icon: <FileProtectOutlined />,
            content: "Your information may be used to:",
            items: [
                "Create and manage your JobFusion account.",
                "Provide recruitment and job management features.",
                "Improve platform functionality and user experience.",
                "Communicate important updates and service notifications.",
                "Maintain platform security and prevent fraudulent activity.",
            ],
        },
        {
            id: "sharing",
            title: "Information Sharing",
            icon: <ShareAltOutlined />,
            content:
                "We do not sell your personal information. We may share information with trusted service providers who help us operate JobFusion, when required by law, or when necessary to protect our rights and users.",
        },
        {
            id: "security",
            title: "Data Security",
            icon: <LockOutlined />,
            content:
                "We use appropriate technical and organizational measures designed to protect your information against unauthorized access, alteration, disclosure or destruction.",
        },
        {
            id: "rights",
            title: "Your Privacy Rights",
            icon: <SafetyCertificateOutlined />,
            content: "Depending on applicable laws, you may have the right to:",
            items: [
                "Access the personal information we hold about you.",
                "Request correction of inaccurate information.",
                "Request deletion of your personal information.",
                "Withdraw consent where processing is based on consent.",
                "Raise concerns about how your information is handled.",
            ],
        },
    ];

    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#EEF2FF] px-6 py-20 lg:py-28">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#635BFF]/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#635BFF]/20 bg-white px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <SafetyCertificateOutlined />
                        Privacy & Data Protection
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                        Privacy <span className="text-[#635BFF]">Policy</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Your privacy matters to us. Learn how JobFusion collects, uses,
                        protects and manages your personal information.
                    </p>

                    <p className="mt-6 text-sm text-slate-500">
                        Last updated: November 5, 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 py-16 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr]">
                    {/* Sidebar */}
                    <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                            On this page
                        </h3>

                        <nav className="space-y-3">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                                >
                                    {section.title}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                            >
                                Contact Us
                            </a>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="min-w-0">
                        <div className="mb-10 rounded-2xl border border-[#635BFF]/15 bg-[#F7F6FF] p-6 md:p-8">
                            <h2 className="text-xl font-bold text-slate-900">
                                Your privacy is important
                            </h2>
                            <p className="mt-3 leading-7 text-slate-600">
                                This Privacy Policy explains how JobFusion handles information
                                when you access or use our website and services. By using our
                                platform, you acknowledge this policy.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <section
                                    id={section.id}
                                    key={section.id}
                                    className="scroll-mt-28"
                                >
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#635BFF]/10 text-xl text-[#635BFF]">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
                                                Section {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="leading-8 text-slate-600">
                                        {section.content}
                                    </p>

                                    {section.items && (
                                        <ul className="mt-5 space-y-3">
                                            {section.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex gap-3 text-sm leading-7 text-slate-600"
                                                >
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#635BFF]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            ))}

                            <section id="contact" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Contact Us
                                </h2>
                                <p className="mt-4 leading-8 text-slate-600">
                                    If you have questions or requests regarding this Privacy
                                    Policy, please contact our team.
                                </p>
                                <a
                                    href="mailto:privacy@jobfusion.com"
                                    className="mt-4 inline-flex font-semibold text-[#635BFF] hover:underline"
                                >
                                    privacy@jobfusion.com
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;