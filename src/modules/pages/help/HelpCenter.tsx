
import { useMemo, useState } from "react";
import {
    ArrowRightOutlined,
    BookOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CustomerServiceOutlined,
    FileTextOutlined,
    MessageOutlined,
    RocketOutlined,
    SafetyOutlined,
    SearchOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Empty, Input, Tag } from "antd";
import { Link } from "react-router-dom";

interface HelpArticle {
    id: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    level: string;
    featured?: boolean;
    icon: React.ReactNode;
}

const helpCategories = [
    {
        id: "getting-started",
        title: "Getting Started",
        description: "Learn the basics and set up your workspace.",
        icon: <RocketOutlined />,
        color: "#635BFF",
        background: "#F0EEFF",
        count: 8,
    },
    {
        id: "account",
        title: "Account & Settings",
        description: "Manage your profile, account and preferences.",
        icon: <UserOutlined />,
        color: "#0D9488",
        background: "#E7F8F5",
        count: 6,
    },
    {
        id: "jobs",
        title: "Jobs & Recruitment",
        description: "Create job openings and manage recruitment.",
        icon: <FileTextOutlined />,
        color: "#2563EB",
        background: "#EFF6FF",
        count: 12,
    },
    {
        id: "candidates",
        title: "Candidate Management",
        description: "Organize candidate profiles and applications.",
        icon: <TeamOutlined />,
        color: "#D97706",
        background: "#FFF7E8",
        count: 9,
    },
    {
        id: "team",
        title: "Team Collaboration",
        description: "Manage recruiters and team permissions.",
        icon: <MessageOutlined />,
        color: "#9333EA",
        background: "#F6EEFF",
        count: 5,
    },
    {
        id: "security",
        title: "Security & Privacy",
        description: "Understand data protection and account security.",
        icon: <SafetyOutlined />,
        color: "#16A34A",
        background: "#EDFAF0",
        count: 4,
    },
];

const helpArticles: HelpArticle[] = [
    {
        id: "create-workspace",
        title: "How to create your JobFusion workspace",
        description:
            "Set up your company workspace and get started with your recruitment journey.",
        category: "getting-started",
        readTime: "4 min read",
        level: "Beginner",
        featured: true,
        icon: <RocketOutlined />,
    },
    {
        id: "dashboard-overview",
        title: "Understanding your recruitment dashboard",
        description:
            "Explore dashboard metrics, recruitment activity and important hiring insights.",
        category: "getting-started",
        readTime: "5 min read",
        level: "Beginner",
        icon: <BookOutlined />,
    },
    {
        id: "invite-team",
        title: "How to invite team members",
        description:
            "Learn how to add recruiters and organize your hiring team.",
        category: "team",
        readTime: "3 min read",
        level: "Beginner",
        icon: <TeamOutlined />,
    },
    {
        id: "create-job",
        title: "Creating and managing job openings",
        description:
            "Learn how to create job descriptions and organize open positions.",
        category: "jobs",
        readTime: "6 min read",
        level: "Beginner",
        featured: true,
        icon: <FileTextOutlined />,
    },
    {
        id: "candidate-profile",
        title: "Managing candidate profiles",
        description:
            "Understand candidate information, resumes and application history.",
        category: "candidates",
        readTime: "5 min read",
        level: "Intermediate",
        icon: <UserOutlined />,
    },
    {
        id: "hiring-pipeline",
        title: "Understanding the hiring pipeline",
        description:
            "Track applicants and understand different recruitment stages.",
        category: "jobs",
        readTime: "7 min read",
        level: "Intermediate",
        icon: <CheckCircleOutlined />,
    },
    {
        id: "account-settings",
        title: "Managing your account settings",
        description:
            "Update your profile, preferences and account information.",
        category: "account",
        readTime: "3 min read",
        level: "Beginner",
        icon: <SettingOutlined />,
    },
    {
        id: "recruiter-permissions",
        title: "Understanding recruiter roles and permissions",
        description:
            "Learn about team access and role-based workspace permissions.",
        category: "team",
        readTime: "5 min read",
        level: "Intermediate",
        icon: <SafetyOutlined />,
    },
    {
        id: "data-security",
        title: "Keeping your recruitment data secure",
        description:
            "Learn about privacy-conscious workflows and account security.",
        category: "security",
        readTime: "4 min read",
        level: "Beginner",
        icon: <SafetyOutlined />,
    },
    {
        id: "manage-applications",
        title: "Managing candidate applications",
        description:
            "Organize applications and review candidate progress efficiently.",
        category: "candidates",
        readTime: "6 min read",
        level: "Intermediate",
        icon: <FileTextOutlined />,
    },
    {
        id: "recruitment-reports",
        title: "Understanding recruitment reports",
        description:
            "Explore hiring activity and recruitment performance reports.",
        category: "jobs",
        readTime: "5 min read",
        level: "Intermediate",
        icon: <BookOutlined />,
    },
    {
        id: "profile-update",
        title: "How to update your company profile",
        description:
            "Keep your organization details and company information updated.",
        category: "account",
        readTime: "3 min read",
        level: "Beginner",
        icon: <UserOutlined />,
    },
];

const HelpCenter: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredArticles = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        return helpArticles.filter((article) => {
            const matchesCategory =
                activeCategory === "all" ||
                article.category === activeCategory;

            const matchesSearch =
                !search ||
                article.title.toLowerCase().includes(search) ||
                article.description.toLowerCase().includes(search) ||
                article.level.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    const featuredArticles = helpArticles.filter(
        (article) => article.featured
    );

    return (
        <main className="overflow-hidden bg-white text-[#17172B]">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#F7F6FF]">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#635BFF]/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-28">

                    <Tag
                        color="purple"
                        className="!mb-6 !rounded-full !border-0 !px-4 !py-2 !text-sm"
                    >
                        <BookOutlined className="mr-2" />
                        JobFusion Help Center
                    </Tag>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[58px]">
                        How can we help
                        <span className="text-[#635BFF]"> you today?</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
                        Find helpful guides, tutorials and resources to make
                        the most of your JobFusion recruitment workspace.
                    </p>

                    <div className="mx-auto mt-10 max-w-2xl">
                        <Input
                            size="large"
                            prefix={
                                <SearchOutlined className="mr-2 text-[#635BFF]" />
                            }
                            placeholder="Search guides, articles and tutorials..."
                            value={searchTerm}
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                                setActiveCategory("all");
                            }}
                            allowClear
                            className="!h-14 !rounded-2xl !border-white !bg-white !px-5 !shadow-xl !shadow-[#635BFF]/5"
                        />
                        <p className="mt-4 text-sm text-gray-400">
                            Popular topics: Getting started, Jobs, Candidates, Recruiters
                        </p>
                    </div>

                    <div className="mt-9 flex flex-wrap justify-center gap-7 text-sm text-gray-500">
                        <span>
                            <CheckCircleOutlined className="mr-2 text-[#635BFF]" />
                            Step-by-step guides
                        </span>
                        <span>
                            <CheckCircleOutlined className="mr-2 text-[#635BFF]" />
                            Easy tutorials
                        </span>
                        <span>
                            <CheckCircleOutlined className="mr-2 text-[#635BFF]" />
                            Helpful resources
                        </span>
                    </div>
                </div>
            </section>

            {/* FEATURED GUIDES */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                            Start Here
                        </Tag>
                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Popular getting started guides
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Everything you need to get started with JobFusion.
                        </p>
                    </div>

                    <span className="text-sm font-medium text-gray-400">
                        Featured resources
                    </span>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {featuredArticles.map((article) => (
                        <Link
                            to={`/help-center/${article.id}`}
                            key={article.id}
                            className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:shadow-xl hover:shadow-[#635BFF]/5 md:p-9"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFF] text-2xl text-[#635BFF]">
                                    {article.icon}
                                </div>
                                <Tag color="purple" className="!rounded-full !border-0">
                                    Featured
                                </Tag>
                            </div>

                            <h3 className="mt-7 text-xl font-bold text-[#17172B] transition group-hover:text-[#635BFF]">
                                {article.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                {article.description}
                            </p>

                            <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                                <div className="flex gap-4 text-xs text-gray-400">
                                    <span>
                                        <ClockCircleOutlined className="mr-1" />
                                        {article.readTime}
                                    </span>
                                    <span>{article.level}</span>
                                </div>

                                <ArrowRightOutlined className="text-[#635BFF] transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CATEGORY SECTION */}
            <section className="bg-[#FAFAFF] py-20 md:py-24">
                <div className="mx-auto max-w-7xl px-5 md:px-10">
                    <div className="text-center">
                        <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                            Browse Documentation
                        </Tag>

                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Explore help categories
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
                            Find the right documentation for every part of your
                            recruitment workflow.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {helpCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setSearchTerm("");
                                    document
                                        .getElementById("all-guides")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`group rounded-2xl border bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#635BFF]/5 ${activeCategory === category.id
                                    ? "border-[#635BFF] shadow-lg shadow-[#635BFF]/5"
                                    : "border-gray-100 hover:border-[#635BFF]/30"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                                        style={{
                                            backgroundColor: category.background,
                                            color: category.color,
                                        }}
                                    >
                                        {category.icon}
                                    </div>

                                    <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-400">
                                        {category.count} guides
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-bold">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {category.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#635BFF]">
                                    Explore guides
                                    <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALL GUIDES */}
            <section
                id="all-guides"
                className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28"
            >
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                            Documentation Library
                        </Tag>

                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Explore all guides
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Browse tutorials and documentation for JobFusion.
                        </p>
                    </div>

                    <span className="text-sm font-medium text-gray-400">
                        {filteredArticles.length} articles found
                    </span>
                </div>

                {/* FILTERS */}
                <div className="mt-9 flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${activeCategory === "all"
                            ? "bg-[#635BFF] text-white"
                            : "border border-gray-200 text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
                            }`}
                    >
                        All Guides
                    </button>

                    {helpCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${activeCategory === category.id
                                ? "bg-[#635BFF] text-white"
                                : "border border-gray-200 text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
                                }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* ARTICLE GRID */}
                {filteredArticles.length > 0 ? (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article) => {
                            const category = helpCategories.find(
                                (item) => item.id === article.category
                            );

                            return (
                                <Link
                                    to={`/help-center/${article.id}`}
                                    key={article.id}
                                    className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:shadow-xl hover:shadow-[#635BFF]/5"
                                >
                                    <div className="flex items-center justify-between">
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                                            style={{
                                                backgroundColor: category?.background,
                                                color: category?.color,
                                            }}
                                        >
                                            {article.icon}
                                        </div>

                                        <Tag className="!rounded-full !border-0 !bg-[#F7F6FF] !text-[#635BFF]">
                                            {article.level}
                                        </Tag>
                                    </div>

                                    <h3 className="mt-6 text-base font-bold leading-7 text-[#17172B] transition group-hover:text-[#635BFF]">
                                        {article.title}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-500">
                                        {article.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                                        <span className="text-xs text-gray-400">
                                            <ClockCircleOutlined className="mr-1" />
                                            {article.readTime}
                                        </span>

                                        <span className="text-sm font-semibold text-[#635BFF]">
                                            Read guide
                                            <ArrowRightOutlined className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mt-10 rounded-2xl border border-dashed border-gray-200 py-16">
                        <Empty
                            description={
                                <span className="text-gray-500">
                                    No guides found. Try another search or category.
                                </span>
                            }
                        />
                        <div className="mt-5 text-center">
                            <Button
                                type="primary"
                                className="!rounded-xl !bg-[#635BFF]"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("all");
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </div>
                )}
            </section>

            {/* SUPPORT CTA */}
            <section className="bg-[#F7F6FF] px-5 py-20 md:px-10 md:py-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl border border-white bg-white p-8 shadow-sm md:flex-row md:p-12">
                    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F0EEFF] text-3xl text-[#635BFF]">
                            <CustomerServiceOutlined />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                Can't find what you're looking for?
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Our team is ready to help you with your questions.
                            </p>
                        </div>
                    </div>

                    <Link to="/contact">
                        <Button
                            type="primary"
                            size="large"
                            className="!h-12 !rounded-xl !bg-[#635BFF] !px-7"
                        >
                            Contact Support <ArrowRightOutlined />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-20 md:px-10 md:py-24">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#635BFF] px-7 py-16 text-center md:px-16 md:py-20">
                    <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-purple-300/20 blur-2xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                            Learn. Explore. Grow.
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl">
                            Make the most of your hiring workspace.
                        </h2>

                        <p className="mt-5 leading-8 text-white/75">
                            Explore JobFusion and discover a simpler way to
                            manage your recruitment process.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link to="/features">
                                <Button
                                    size="large"
                                    className="!h-12 !rounded-xl !border-0 !px-7 !font-semibold !text-[#635BFF]"
                                >
                                    Explore Features <ArrowRightOutlined />
                                </Button>
                            </Link>

                            <Link to="/faq">
                                <Button
                                    ghost
                                    size="large"
                                    className="!h-12 !rounded-xl !px-7 !font-semibold"
                                >
                                    Visit FAQs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default HelpCenter;
