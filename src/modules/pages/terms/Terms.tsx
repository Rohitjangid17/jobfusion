import React from "react";
import {
    FileTextOutlined,
    SafetyCertificateOutlined,
    UserOutlined,
    WarningOutlined,
    CopyrightOutlined,
    LockOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";

const Terms: React.FC = () => {
    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: <FileTextOutlined />,
            content:
                "By accessing or using JobFusion, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using our platform.",
        },
        {
            id: "services",
            title: "About JobFusion",
            icon: <SafetyCertificateOutlined />,
            content:
                "JobFusion is a recruitment and talent management platform designed to help organizations manage hiring activities, candidates, recruiters and job opportunities. Available features may vary depending on your account type and subscription.",
        },
        {
            id: "account",
            title: "Account Registration",
            icon: <UserOutlined />,
            content: "When creating an account, you agree to:",
            items: [
                "Provide accurate and complete registration information.",
                "Keep your account credentials confidential.",
                "Update your information whenever necessary.",
                "Notify us if you suspect unauthorized access to your account.",
                "Take responsibility for activities performed through your account.",
            ],
        },
        {
            id: "acceptable-use",
            title: "Acceptable Use",
            icon: <WarningOutlined />,
            content: "You agree not to:",
            items: [
                "Use JobFusion for unlawful or fraudulent activities.",
                "Upload misleading, harmful or unauthorized content.",
                "Attempt to access another user's account or private information.",
                "Interfere with platform security or functionality.",
                "Distribute malware or harmful code.",
                "Copy, reverse engineer or misuse platform features without authorization.",
            ],
        },
        {
            id: "responsibilities",
            title: "User Responsibilities",
            icon: <LockOutlined />,
            content:
                "Users are responsible for the accuracy of information they submit, the content they upload and their interactions with other users. Employers and recruiters are responsible for ensuring that their hiring practices comply with applicable laws.",
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property",
            icon: <CopyrightOutlined />,
            content:
                "The JobFusion name, branding, website design, software, interface and original platform content are owned by or licensed to JobFusion. You may not reproduce, distribute, modify or commercially exploit these materials without prior written permission.",
        },
        {
            id: "third-party",
            title: "Third-Party Services",
            icon: <ExclamationCircleOutlined />,
            content:
                "JobFusion may integrate with or link to third-party services. These services operate under their own terms and privacy policies. We are not responsible for their content, availability or practices.",
        },
        {
            id: "availability",
            title: "Platform Availability",
            icon: <SafetyCertificateOutlined />,
            content:
                "We aim to keep JobFusion available and functioning reliably. However, we do not guarantee uninterrupted access. Maintenance, updates, technical issues or circumstances beyond our control may temporarily affect the platform.",
        },
        {
            id: "termination",
            title: "Suspension and Termination",
            icon: <WarningOutlined />,
            content:
                "We may suspend or restrict access to an account if we reasonably believe that these terms have been violated, the platform is being misused or access creates a security or legal risk. Users may also discontinue using the platform.",
        },
        {
            id: "disclaimer",
            title: "Disclaimer",
            icon: <ExclamationCircleOutlined />,
            content:
                "JobFusion is provided on an as-available basis. We do not guarantee employment, successful recruitment outcomes, candidate suitability or uninterrupted service. Users should independently verify information before making hiring or employment decisions.",
        },
        {
            id: "liability",
            title: "Limitation of Liability",
            icon: <LockOutlined />,
            content:
                "To the extent permitted by applicable law, JobFusion will not be liable for indirect, incidental, special or consequential damages arising from the use of, or inability to use, the platform.",
        },
        {
            id: "changes",
            title: "Changes to These Terms",
            icon: <FileTextOutlined />,
            content:
                "We may update these Terms and Conditions from time to time. Updated terms will be published on this page with a revised date. Continued use of the platform after changes take effect constitutes acceptance of the updated terms, where permitted by law.",
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
                        <FileTextOutlined />
                        Legal Information
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                        Terms & <span className="text-[#635BFF]">Conditions</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Please read these terms carefully to understand the rules,
                        responsibilities and conditions that apply when using JobFusion.
                    </p>

                    <p className="mt-6 text-sm text-slate-500">
                        Last updated: November 5, 2026
                    </p>
                </div>
            </section>

            {/* Main Content */}
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
                                href="#governing-law"
                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                            >
                                Governing Law
                            </a>

                            <a
                                href="#contact"
                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                            >
                                Contact Us
                            </a>
                        </nav>
                    </aside>

                    {/* Content */}
                    <div className="min-w-0">
                        <div className="mb-10 rounded-2xl border border-[#635BFF]/15 bg-[#F7F6FF] p-6 md:p-8">
                            <h2 className="text-xl font-bold text-slate-900">
                                Welcome to JobFusion
                            </h2>
                            <p className="mt-3 leading-7 text-slate-600">
                                These Terms and Conditions govern your access to and use of
                                the JobFusion website and services. By creating an account or
                                using our platform, you agree to these terms.
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

                            {/* Governing Law */}
                            <section id="governing-law" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Governing Law
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    These terms will be governed by the applicable laws of the
                                    jurisdiction in which JobFusion operates, without regard
                                    to conflict-of-law principles. Any disputes will be handled
                                    by the courts with appropriate jurisdiction.
                                </p>
                            </section>

                            {/* Contact */}
                            <section id="contact" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Contact Us
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    If you have questions about these Terms and Conditions,
                                    please contact our team.
                                </p>

                                <a
                                    href="mailto:legal@jobfusion.com"
                                    className="mt-4 inline-flex font-semibold text-[#635BFF] hover:underline"
                                >
                                    legal@jobfusion.com
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Terms;