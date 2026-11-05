
import React, { useState } from "react";
import {
    SafetyCertificateOutlined,
    LockOutlined,
    KeyOutlined,
    EyeOutlined,
    DatabaseOutlined,
    CloudServerOutlined,
    ApiOutlined,
    BugOutlined,
    CheckCircleFilled,
    ArrowRightOutlined,
    GlobalOutlined,
    FileProtectOutlined,
    UserSwitchOutlined,
    SyncOutlined,
    MonitorOutlined,
    MailOutlined,
    PlusOutlined,
    MinusOutlined,
} from "@ant-design/icons";

const securityFeatures = [
    {
        icon: <LockOutlined />,
        title: "Data Encryption",
        description:
            "Sensitive information is protected through secure encryption practices throughout its lifecycle.",
    },
    {
        icon: <KeyOutlined />,
        title: "Secure Authentication",
        description:
            "Authentication controls help ensure that only authorized users can access their accounts.",
    },
    {
        icon: <UserSwitchOutlined />,
        title: "Access Control",
        description:
            "Role-based permissions help organizations manage access to their recruitment data.",
    },
    {
        icon: <EyeOutlined />,
        title: "Data Privacy",
        description:
            "We prioritize responsible data handling and respect the privacy of candidates and organizations.",
    },
];

const protectionItems = [
    {
        icon: <LockOutlined />,
        title: "Encryption in Transit",
        description:
            "Secure HTTPS connections help protect information while it travels between your browser and our application.",
    },
    {
        icon: <DatabaseOutlined />,
        title: "Data Protection",
        description:
            "Sensitive application data is handled using appropriate safeguards and secure storage practices.",
    },
    {
        icon: <CloudServerOutlined />,
        title: "Backup & Recovery",
        description:
            "Backup and recovery practices help support data availability and business continuity.",
    },
];

const applicationSecurity = [
    {
        icon: <SafetyCertificateOutlined />,
        title: "Authentication",
        description: "Secure account access and identity verification practices.",
    },
    {
        icon: <UserSwitchOutlined />,
        title: "Role-Based Access",
        description: "Permissions designed around user roles and responsibilities.",
    },
    {
        icon: <ApiOutlined />,
        title: "API Protection",
        description: "Secure communication and validation across application endpoints.",
    },
    {
        icon: <BugOutlined />,
        title: "Vulnerability Management",
        description: "Identifying and addressing potential application security issues.",
    },
    {
        icon: <MonitorOutlined />,
        title: "Monitoring",
        description: "Monitoring application activity to help identify unusual behavior.",
    },
    {
        icon: <SyncOutlined />,
        title: "Session Management",
        description: "Session controls designed to help protect authenticated accounts.",
    },
];

const infrastructureFeatures = [
    {
        icon: <CloudServerOutlined />,
        title: "Secure Infrastructure",
        description:
            "Infrastructure security practices designed to protect application services and resources.",
    },
    {
        icon: <MonitorOutlined />,
        title: "Monitoring & Logging",
        description:
            "Application monitoring and logs help identify operational issues and unusual activity.",
    },
    {
        icon: <DatabaseOutlined />,
        title: "Backup Management",
        description:
            "Data backup practices support recovery and service continuity.",
    },
];

const faqs = [
    {
        question: "How does JobFusion protect my data?",
        answer:
            "JobFusion follows security-focused practices for protecting information, including secure connections, access controls, and responsible data handling.",
    },
    {
        question: "Is candidate information secure?",
        answer:
            "We take candidate privacy seriously and use appropriate application and data protection practices to help safeguard candidate information.",
    },
    {
        question: "Who can access company data?",
        answer:
            "Access is managed through user permissions and role-based controls. Organizations can manage access according to their configured roles and responsibilities.",
    },
    {
        question: "Does JobFusion use encryption?",
        answer:
            "Secure HTTPS connections are used to protect information in transit. Data-at-rest encryption depends on the underlying infrastructure and configuration.",
    },
    {
        question: "How can I report a security vulnerability?",
        answer:
            "If you discover a potential security issue, please contact our security team with a description of the issue and steps to reproduce it.",
    },
];

const Security: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    return (
        <main className="overflow-hidden bg-white text-slate-900">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#F8F8FF]">
                <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-200/30 blur-[100px]" />
                <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
                            <SafetyCertificateOutlined />
                            Security at JobFusion
                        </div>

                        <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Your Data. Your Trust.
                            <span className="block text-[#635BFF]">
                                Our Responsibility.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Your recruitment data deserves the highest level of care.
                            JobFusion is built with security and privacy-focused
                            practices to help protect your people, processes, and information.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="mailto:security@jobfusion.com"
                                className="inline-flex items-center gap-3 rounded-xl bg-[#635BFF] px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-[#5148E5]"
                            >
                                Contact Security Team
                                <ArrowRightOutlined />
                            </a>

                            <a
                                href="#security-practices"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-violet-300 hover:text-[#635BFF]"
                            >
                                Explore Security
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                            <span className="flex items-center gap-2">
                                <CheckCircleFilled className="text-emerald-500" />
                                Privacy-focused
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircleFilled className="text-emerald-500" />
                                Secure access practices
                            </span>
                        </div>
                    </div>

                    {/* HERO VISUAL */}
                    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-10">

                        <div className="absolute h-[380px] w-[380px] rounded-full border border-violet-200/70" />
                        <div className="absolute h-[300px] w-[300px] rounded-full border border-violet-200/70" />
                        <div className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 blur-xl" />

                        <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-[55px] bg-gradient-to-br from-[#796CFF] via-[#635BFF] to-[#4837CE] shadow-2xl shadow-violet-300 sm:h-72 sm:w-72">
                            <SafetyCertificateOutlined className="text-[145px] text-white drop-shadow-xl" />
                        </div>

                        <div className="absolute -left-2 top-12 z-20 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                                    <LockOutlined />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Secure Access</p>
                                    <p className="text-xs text-slate-500">Account protection</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-2 bottom-16 z-20 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-right-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl text-[#635BFF]">
                                    <DatabaseOutlined />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Data Privacy</p>
                                    <p className="text-xs text-slate-500">Responsible handling</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-10 h-12 w-12 rounded-2xl bg-indigo-100/80" />
                        <div className="absolute right-10 top-0 h-8 w-8 rounded-xl bg-violet-200/80" />
                    </div>
                </div>
            </section>

            {/* SECURITY HIGHLIGHTS */}
            <section className="px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Security First
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Security is built into everything we do.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-500">
                            From account access to data management, our security-focused
                            approach helps create a safer recruitment experience.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {securityFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-[#635BFF] transition group-hover:bg-[#635BFF] group-hover:text-white">
                                    {feature.icon}
                                </div>

                                <h3 className="mt-7 text-lg font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-500">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DATA PROTECTION */}
            <section id="security-practices" className="bg-[#F8F8FF] px-6 py-24 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Data Protection
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                            Protecting the information that matters most.
                        </h2>

                        <p className="mt-6 leading-8 text-slate-500">
                            Recruitment platforms manage valuable information.
                            We focus on secure data handling practices to help
                            safeguard company, recruiter, and candidate information.
                        </p>

                        <div className="mt-9 space-y-7">
                            {protectionItems.map((item, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#635BFF] shadow-sm">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DATA PROTECTION VISUAL */}
                    <div className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white p-8 shadow-xl shadow-violet-100/50 sm:p-12">

                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">
                                        Security Overview
                                    </p>
                                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                        Data Protection
                                    </h3>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-[#635BFF]">
                                    <SafetyCertificateOutlined />
                                </div>
                            </div>

                            <div className="mt-10 space-y-4">
                                {[
                                    { title: "Secure Connections", icon: <GlobalOutlined /> },
                                    { title: "Access Permissions", icon: <KeyOutlined /> },
                                    { title: "Data Management", icon: <DatabaseOutlined /> },
                                    { title: "Backup Practices", icon: <CloudServerOutlined /> },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#FAFAFF] p-5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl text-[#635BFF]">
                                                {item.icon}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-700">
                                                {item.title}
                                            </span>
                                        </div>
                                        <CheckCircleFilled className="text-lg text-emerald-500" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#635BFF] to-[#8175FF] p-6 text-white">
                                <div className="flex items-center gap-3">
                                    <SafetyCertificateOutlined className="text-2xl" />
                                    <span className="font-semibold">
                                        Security-conscious by design
                                    </span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-violet-100">
                                    We continuously aim to improve the practices
                                    that protect your recruitment environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATION SECURITY */}
            <section className="px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Application Security
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                            Multiple layers of application protection.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-500">
                            Security is not a single feature. It is a combination
                            of practices that work together to protect your
                            recruitment workflows.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {applicationSecurity.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-violet-200 hover:bg-violet-50/30"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xl text-[#635BFF]">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INFRASTRUCTURE SECURITY */}
            <section className="bg-[#F8F8FF] px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Infrastructure
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                            A reliable foundation for your work.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-500">
                            Our infrastructure-focused practices help support
                            reliable access, service availability, and data protection.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {infrastructureFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-[#635BFF]">
                                    {item.icon}
                                </div>

                                <h3 className="mt-7 text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRIVACY SECTION */}
            <section className="px-6 py-24 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#635BFF] to-[#4536C8] p-10 text-white sm:p-14">
                        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[40px] border-white/10" />

                        <div className="relative">
                            <FileProtectOutlined className="text-6xl text-white" />

                            <h3 className="mt-8 text-3xl font-bold">
                                Privacy matters. Always.
                            </h3>

                            <p className="mt-5 leading-8 text-violet-100">
                                We believe personal information should be handled
                                with care, transparency, and respect.
                            </p>

                            <a
                                href="/privacy-policy"
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition hover:gap-4"
                            >
                                Read our Privacy Policy
                                <ArrowRightOutlined />
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Privacy & Compliance
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                            Respecting the privacy of every individual.
                        </h2>

                        <p className="mt-6 leading-8 text-slate-500">
                            JobFusion supports recruitment workflows involving
                            candidate and company information. Responsible data
                            handling and privacy-aware practices are important
                            parts of our approach.
                        </p>

                        <div className="mt-8 space-y-5">
                            {[
                                "Responsible information handling",
                                "Access based on assigned permissions",
                                "Privacy-focused product practices",
                                "Clear privacy-related documentation",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircleFilled className="text-lg text-emerald-500" />
                                    <span className="text-sm font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY REPORTING */}
            <section className="bg-[#F8F8FF] px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white p-8 shadow-sm sm:p-12 lg:p-16">

                        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />

                        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

                            <div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-[#635BFF]">
                                    <BugOutlined />
                                </div>

                                <h2 className="mt-7 text-3xl font-bold text-slate-950 sm:text-4xl">
                                    Found a security vulnerability?
                                </h2>

                                <p className="mt-5 max-w-2xl leading-8 text-slate-500">
                                    We appreciate responsible security research.
                                    If you discover a potential vulnerability or
                                    security concern, let our team know so it can
                                    be reviewed.
                                </p>

                                <p className="mt-5 text-sm text-slate-500">
                                    Please include the affected area, a description
                                    of the issue, and steps to reproduce it.
                                </p>
                            </div>

                            <a
                                href="mailto:security@jobfusion.com?subject=Security%20Vulnerability%20Report"
                                className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#635BFF] px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-[#5148E5]"
                            >
                                <MailOutlined />
                                Report a Security Issue
                                <ArrowRightOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="px-6 py-24 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            FAQs
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                            Security questions, answered.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-500">
                            Have questions about how JobFusion approaches
                            security and privacy? Find answers to common
                            questions here.
                        </p>

                        <a
                            href="mailto:security@jobfusion.com"
                            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#635BFF] hover:gap-4"
                        >
                            Contact our team
                            <ArrowRightOutlined />
                        </a>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-2xl border transition ${activeFaq === index
                                    ? "border-violet-200 bg-violet-50/40"
                                    : "border-slate-200 bg-white"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveFaq(activeFaq === index ? null : index)
                                    }
                                    aria-expanded={activeFaq === index}
                                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                                >
                                    <span className="font-semibold text-slate-900">
                                        {faq.question}
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#635BFF] shadow-sm">
                                        {activeFaq === index ? (
                                            <MinusOutlined />
                                        ) : (
                                            <PlusOutlined />
                                        )}
                                    </span>
                                </button>

                                {activeFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="border-t border-violet-100 pt-5 text-sm leading-7 text-slate-500">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-6 pb-24 lg:px-8">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#635BFF] via-[#594EEB] to-[#4536C8] px-8 py-16 text-center sm:px-16 sm:py-20">

                    <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full border-[45px] border-white/5" />
                    <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full border-[45px] border-white/5" />

                    <div className="relative mx-auto max-w-2xl">
                        <SafetyCertificateOutlined className="text-5xl text-white/90" />

                        <h2 className="mt-7 text-3xl font-bold text-white sm:text-5xl">
                            Your trust means everything.
                        </h2>

                        <p className="mt-6 leading-8 text-violet-100">
                            Have a question about security, privacy, or data
                            protection? Our team is here to help.
                        </p>

                        <a
                            href="mailto:security@jobfusion.com"
                            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#635BFF] shadow-xl transition hover:-translate-y-1 hover:bg-violet-50"
                        >
                            Talk to Our Team
                            <ArrowRightOutlined />
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Security;
