
import {
    ArrowRightOutlined,
    BookOutlined,
    CodeOutlined,
    RocketOutlined,
    SearchOutlined,
    SettingOutlined,
    TeamOutlined,
    ApiOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { Input, Tag } from "antd";
import { useMemo, useState } from "react";

const categories = [
    {
        title: "Getting Started",
        description: "Everything you need to get started with JobFusion.",
        icon: <RocketOutlined />,
        articles: ["Introduction to JobFusion", "Create your workspace", "Invite your team"],
        color: "bg-violet-50 text-violet-600",
    },
    {
        title: "Recruitment",
        description: "Learn how to manage your complete hiring process.",
        icon: <TeamOutlined />,
        articles: ["Create a job opening", "Manage candidates", "Track applications"],
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Platform Features",
        description: "Explore the tools that make recruitment easier.",
        icon: <SettingOutlined />,
        articles: ["Dashboard overview", "Recruitment pipeline", "Reports and analytics"],
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "API & Integrations",
        description: "Connect JobFusion with your favorite applications.",
        icon: <ApiOutlined />,
        articles: ["API introduction", "Authentication", "Integration setup"],
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Account & Security",
        description: "Manage your account, team access and security.",
        icon: <BookOutlined />,
        articles: ["Account settings", "Roles and permissions", "Password management"],
        color: "bg-pink-50 text-pink-600",
    },
    {
        title: "Developer Resources",
        description: "Technical guides and resources for developers.",
        icon: <CodeOutlined />,
        articles: ["Developer introduction", "API reference", "Webhooks"],
        color: "bg-indigo-50 text-indigo-600",
    },
];

const Documentation = () => {
    const [search, setSearch] = useState("");

    const filteredCategories = useMemo(() => {
        const query = search.toLowerCase().trim();

        if (!query) return categories;

        return categories.filter((category) =>
            [category.title, category.description, ...category.articles]
                .join(" ")
                .toLowerCase()
                .includes(query)
        );
    }, [search]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#F7F6FF] px-5 py-24">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <Tag color="purple" className="mb-5 rounded-full px-4 py-1">
                        DOCUMENTATION
                    </Tag>

                    <h1 className="text-4xl font-bold tracking-tight text-[#17172B] sm:text-5xl lg:text-6xl">
                        Everything you need to
                        <span className="block text-[#635BFF]">
                            know about JobFusion.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        Explore guides, tutorials and technical documentation
                        to make the most of your recruitment workspace.
                    </p>

                    <div className="mx-auto mt-9 max-w-2xl">
                        <Input
                            size="large"
                            prefix={<SearchOutlined className="text-gray-400" />}
                            placeholder="Search documentation..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-14 rounded-xl shadow-lg"
                            allowClear
                        />
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                        Popular: Getting started · Recruitment · API
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="px-5 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#635BFF]">
                            EXPLORE DOCUMENTATION
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-[#17172B] sm:text-4xl">
                            Browse by category
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Find the right resources to help you work smarter.
                        </p>
                    </div>

                    {filteredCategories.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredCategories.map((category) => (
                                <div
                                    key={category.title}
                                    className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/40 hover:shadow-xl"
                                >
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${category.color}`}>
                                        {category.icon}
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-[#17172B]">
                                        {category.title}
                                    </h3>

                                    <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                                        {category.description}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        {category.articles.map((article) => (
                                            <div
                                                key={article}
                                                className="flex items-center justify-between gap-3 text-sm text-gray-600 transition-colors hover:text-[#635BFF]"
                                            >
                                                <span>{article}</span>
                                                <ArrowRightOutlined className="text-xs" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center text-gray-500">
                            No documentation found for "{search}".
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-20">
                <div className="mx-auto max-w-7xl rounded-3xl bg-[#17172B] px-8 py-14 text-center sm:px-16">
                    <FileTextOutlined className="text-4xl text-[#A69FFF]" />
                    <h2 className="mt-5 text-3xl font-bold text-white">
                        Need more assistance?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-gray-400">
                        Our team can help you find the right information
                        and answer your questions.
                    </p>
                    <a
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#635BFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#5148E5]"
                    >
                        Contact Support <ArrowRightOutlined />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Documentation;
