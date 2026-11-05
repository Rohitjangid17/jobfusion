import React from "react";
import {
    SafetyCertificateOutlined,
    SettingOutlined,
    BarChartOutlined,
    NotificationOutlined,
    LockOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";

const CookiePolicy: React.FC = () => {
    const cookieTypes = [
        {
            icon: <SafetyCertificateOutlined />,
            title: "Essential Cookies",
            description:
                "These cookies are necessary for the website to function properly and cannot be disabled through our cookie preferences.",
            examples: ["Authentication", "Security", "Session management"],
            required: true,
        },
        {
            icon: <SettingOutlined />,
            title: "Functional Cookies",
            description:
                "These cookies help remember your preferences and provide a more personalized experience.",
            examples: ["Language preferences", "User settings", "Saved preferences"],
            required: false,
        },
        {
            icon: <BarChartOutlined />,
            title: "Analytics Cookies",
            description:
                "These cookies help us understand how visitors interact with JobFusion so we can improve our platform.",
            examples: ["Page visits", "Traffic sources", "Usage patterns"],
            required: false,
        },
        {
            icon: <NotificationOutlined />,
            title: "Marketing Cookies",
            description:
                "These cookies may be used to deliver relevant communications and measure the effectiveness of marketing campaigns.",
            examples: ["Campaign tracking", "Advertising preferences", "Engagement measurement"],
            required: false,
        },
    ];

    const sections = [
        {
            id: "what-are-cookies",
            title: "What Are Cookies?",
            content:
                "Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, improve functionality and provide a better user experience.",
        },
        {
            id: "how-we-use",
            title: "How We Use Cookies",
            content:
                "JobFusion may use cookies and similar technologies to keep users signed in, maintain security, remember preferences, understand website usage and improve platform performance.",
        },
        {
            id: "third-party",
            title: "Third-Party Cookies",
            content:
                "Some cookies may be placed by third-party services integrated into our platform, such as analytics or other service providers. Their use of cookies is governed by their own privacy policies.",
        },
        {
            id: "manage-cookies",
            title: "Managing Your Cookie Preferences",
            content:
                "You can manage cookies through your browser settings. Most browsers allow you to block, delete or restrict cookies. Disabling certain cookies may affect the functionality of some JobFusion features.",
        },
        {
            id: "retention",
            title: "Cookie Retention",
            content:
                "Some cookies are temporary and expire when you close your browser. Others may remain on your device for a longer period or until you delete them. Retention periods depend on the purpose of each cookie.",
        },
        {
            id: "updates",
            title: "Updates to This Policy",
            content:
                "We may update this Cookie Policy to reflect changes in our practices, technologies or legal requirements. Any updates will be published on this page with a revised date.",
        },
    ];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#EEF2FF] px-6 py-20 lg:py-28">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#635BFF]/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#635BFF]/20 bg-white px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <SettingOutlined />
                        Website Preferences
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                        Cookie <span className="text-[#635BFF]">Policy</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Discover how JobFusion uses cookies and similar technologies to
                        improve your browsing experience and keep our platform working
                        smoothly.
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
                            <a
                                href="#what-are-cookies"
                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                            >
                                What Are Cookies?
                            </a>

                            <a
                                href="#cookie-types"
                                className="block text-sm text-slate-600 transition hover:translate-x-1 hover:text-[#635BFF]"
                            >
                                Types of Cookies
                            </a>

                            {sections.slice(1).map((section) => (
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

                    {/* Content */}
                    <div className="min-w-0">
                        {/* Introduction */}
                        <div className="mb-12 rounded-2xl border border-[#635BFF]/15 bg-[#F7F6FF] p-6 md:p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#635BFF]/10 text-2xl text-[#635BFF]">
                                <SettingOutlined />
                            </div>

                            <h2 className="text-xl font-bold text-slate-900">
                                Your browsing experience matters
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                This Cookie Policy explains what cookies are, how JobFusion
                                uses them and how you can manage your preferences when using
                                our website.
                            </p>
                        </div>

                        {/* Cookie Types */}
                        <section id="cookie-types" className="mb-14 scroll-mt-28">
                            <div className="mb-8">
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
                                    Cookie Categories
                                </span>

                                <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                                    Types of Cookies We Use
                                </h2>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Different cookies serve different purposes. Here are the
                                    categories that may be used on our platform.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {cookieTypes.map((cookie) => (
                                    <div
                                        key={cookie.title}
                                        className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#635BFF]/40 hover:shadow-xl hover:shadow-[#635BFF]/5"
                                    >
                                        <div className="mb-5 flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#635BFF]/10 text-xl text-[#635BFF] transition group-hover:bg-[#635BFF] group-hover:text-white">
                                                {cookie.icon}
                                            </div>

                                            {cookie.required ? (
                                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                                    Required
                                                </span>
                                            ) : (
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                                                    Optional
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900">
                                            {cookie.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {cookie.description}
                                        </p>

                                        <div className="mt-5 border-t border-slate-100 pt-4">
                                            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                                                Examples
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {cookie.examples.map((example) => (
                                                    <span
                                                        key={example}
                                                        className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                                                    >
                                                        {example}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Policy Sections */}
                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <section
                                    id={section.id}
                                    key={section.id}
                                    className="scroll-mt-28"
                                >
                                    <div className="mb-4">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
                                            Section {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <p className="leading-8 text-slate-600">
                                        {section.content}
                                    </p>
                                </section>
                            ))}

                            {/* Contact */}
                            <section id="contact" className="scroll-mt-28">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#635BFF]/10 text-xl text-[#635BFF]">
                                        <LockOutlined />
                                    </div>

                                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                                        Have Questions About Cookies?
                                    </h2>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        If you have questions about our Cookie Policy or how we
                                        use cookies, feel free to contact our team.
                                    </p>

                                    <a
                                        href="mailto:privacy@jobfusion.com"
                                        className="mt-5 inline-flex items-center gap-2 font-semibold text-[#635BFF] hover:underline"
                                    >
                                        privacy@jobfusion.com
                                        <CheckCircleOutlined />
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CookiePolicy;