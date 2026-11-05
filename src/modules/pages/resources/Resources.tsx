
import { useState } from "react";
import {
    ArrowRightOutlined,
    BookOutlined,
    FileTextOutlined,
    RocketOutlined,
    SearchOutlined,
    ClockCircleOutlined,
    CalendarOutlined,
    MailOutlined,
    ReadOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";

const categories = [
    "All Resources",
    "Recruitment",
    "Hiring Tips",
    "HR Technology",
    "Product Updates",
    "Career Growth",
];

const articles = [
    {
        id: 1,
        category: "Recruitment",
        title: "The Complete Guide to Building an Effective Recruitment Process",
        description:
            "Explore the essential stages of recruitment, from creating job descriptions to evaluating candidates and making better hiring decisions.",
        date: "November 04, 2026",
        readTime: "8 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85",
        featured: true,
    },
    {
        id: 2,
        category: "Hiring Tips",
        title: "How to Improve Your Candidate Experience",
        description:
            "Practical ways to make your hiring journey more transparent, organized, and candidate-friendly.",
        date: "October 28, 2026",
        readTime: "6 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85",
    },
    {
        id: 3,
        category: "HR Technology",
        title: "Why Recruitment Teams Need a Centralized Workspace",
        description:
            "Understand how connected recruitment workflows can help teams manage candidate information and hiring activities.",
        date: "October 20, 2026",
        readTime: "5 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85",
    },
    {
        id: 4,
        category: "Recruitment",
        title: "Building a Better Candidate Pipeline",
        description:
            "Learn how to organize applicants, define hiring stages, and keep recruitment activities moving forward.",
        date: "October 14, 2026",
        readTime: "7 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85",
    },
    {
        id: 5,
        category: "Product Updates",
        title: "A Smarter Way to Manage Your Hiring Workflow",
        description:
            "Discover how structured recruitment tools can help simplify everyday hiring operations.",
        date: "October 08, 2026",
        readTime: "4 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=85",
    },
    {
        id: 6,
        category: "Career Growth",
        title: "How to Build a Stronger and More Collaborative Hiring Team",
        description:
            "Explore ways to improve communication, align hiring managers, and make better recruitment decisions.",
        date: "September 30, 2026",
        readTime: "6 min read",
        author: "JobFusion Team",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85",
    },
];

const resourceTypes = [
    {
        icon: <BookOutlined />,
        title: "Hiring Guides",
        description:
            "Step-by-step guides to help you improve your recruitment process.",
        link: "#articles",
    },
    {
        icon: <FileTextOutlined />,
        title: "Articles & Insights",
        description:
            "Ideas, strategies, and insights for modern recruitment teams.",
        link: "#articles",
    },
    {
        icon: <BarChartOutlined />,
        title: "HR Insights",
        description:
            "Explore hiring trends, recruitment practices, and useful insights.",
        link: "#articles",
    },
];

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState("All Resources");
    const [search, setSearch] = useState("");
    const [email, setEmail] = useState("");

    const filteredArticles = articles.filter((article) => {
        const matchesCategory =
            activeCategory === "All Resources" ||
            article.category === activeCategory;

        const matchesSearch =
            article.title.toLowerCase().includes(search.toLowerCase()) ||
            article.description.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const featuredArticle = articles.find((article) => article.featured)!;

    return (
        <div className="overflow-hidden bg-white text-gray-900">
            {/* Hero */}
            <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-purple-100/60 blur-[120px]" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <ReadOutlined />
                        JobFusion Resources
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                        Ideas that make
                        <br />
                        <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent">
                            hiring better.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        Explore recruitment guides, practical hiring tips, and insights
                        to help your team build a better hiring experience.
                    </p>

                    <div className="mx-auto mt-9 max-w-xl">
                        <Input
                            size="large"
                            prefix={<SearchOutlined className="text-gray-400" />}
                            placeholder="Search articles, guides, and insights..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            className="h-14 rounded-xl shadow-lg shadow-purple-100/50"
                            allowClear
                        />
                    </div>
                </div>
            </section>

            {/* Resource Types */}
            <section className="border-y border-gray-100 bg-gray-50/70 px-5 py-16 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                    {resourceTypes.map((item) => (
                        <Link
                            to={item.link}
                            key={item.title}
                            className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#635BFF] transition group-hover:bg-[#635BFF] group-hover:text-white">
                                {item.icon}
                            </div>

                            <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                {item.description}
                            </p>

                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF]">
                                Explore Resources <ArrowRightOutlined />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Article */}
            <section className="px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex items-end justify-between gap-5">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                                Featured
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Editor's pick
                            </h2>
                        </div>

                        <span className="hidden items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold text-[#635BFF] sm:inline-flex">
                            <RocketOutlined /> Recommended reading
                        </span>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white lg:grid-cols-2">
                        <div className="relative min-h-[280px] overflow-hidden bg-purple-50 lg:min-h-[480px]">
                            <img
                                src={featuredArticle.image}
                                alt="Team collaborating in a modern workspace"
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                            <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#635BFF] shadow-sm">
                                Featured Article
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                            <span className="w-fit rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-[#635BFF]">
                                {featuredArticle.category}
                            </span>

                            <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                                {featuredArticle.title}
                            </h3>

                            <p className="mt-5 leading-8 text-gray-500">
                                {featuredArticle.description}
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                                <span className="flex items-center gap-2">
                                    <CalendarOutlined /> {featuredArticle.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <ClockCircleOutlined /> {featuredArticle.readTime}
                                </span>
                            </div>

                            <Link
                                to={`/resources/${featuredArticle.id}`}
                                className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-[#635BFF] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#5148e5]"
                            >
                                Read Article <ArrowRightOutlined />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Listing */}
            <section id="articles" className="bg-[#F8F7FF] px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                                Knowledge Hub
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Explore our latest resources
                            </h2>

                            <p className="mt-4 text-gray-500">
                                Fresh ideas and practical insights for your hiring journey.
                            </p>
                        </div>

                        <span className="text-sm font-medium text-gray-400">
                            {filteredArticles.length} articles found
                        </span>
                    </div>

                    {/* Categories */}
                    <div className="mt-10 flex gap-3 overflow-x-auto pb-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${activeCategory === category
                                    ? "bg-[#635BFF] text-white shadow-lg shadow-purple-200"
                                    : "border border-gray-200 bg-white text-gray-500 hover:border-purple-300 hover:text-[#635BFF]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    {filteredArticles.length > 0 ? (
                        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredArticles
                                .filter((article) => !article.featured)
                                .map((article) => (
                                    <article
                                        key={article.id}
                                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"
                                    >
                                        <Link
                                            to={`/resources/${article.id}`}
                                            className="block overflow-hidden"
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                loading="lazy"
                                                className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                                            />
                                        </Link>

                                        <div className="p-6">
                                            <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-[#635BFF]">
                                                {article.category}
                                            </span>

                                            <h3 className="mt-5 line-clamp-2 text-lg font-bold leading-7 transition group-hover:text-[#635BFF]">
                                                <Link to={`/resources/${article.id}`}>
                                                    {article.title}
                                                </Link>
                                            </h3>

                                            <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500">
                                                {article.description}
                                            </p>

                                            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-700">
                                                        {article.author}
                                                    </p>
                                                    <p className="mt-1 text-xs text-gray-400">
                                                        {article.date}
                                                    </p>
                                                </div>

                                                <a
                                                    href={`/resources/${article.id}`}
                                                    aria-label={`Read ${article.title}`}
                                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition hover:bg-[#635BFF] hover:text-white"
                                                >
                                                    <ArrowRightOutlined />
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    ) : (
                        <div className="mt-10 rounded-2xl border border-dashed border-purple-200 bg-white py-16 text-center">
                            <SearchOutlined className="text-3xl text-purple-300" />
                            <h3 className="mt-4 text-lg font-bold">No articles found</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try another search term or select a different category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setActiveCategory("All Resources");
                                }}
                                className="mt-5 font-semibold text-[#635BFF]"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="px-5 py-24 sm:px-8">
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] px-7 py-16 text-center text-white sm:px-12 lg:py-20">
                    <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[50px] border-white/10" />
                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

                    <div className="relative mx-auto max-w-2xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                            <MailOutlined />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-5xl">
                            Stay ahead in hiring.
                        </h2>

                        <p className="mt-5 leading-8 text-purple-100">
                            Get practical recruitment insights, helpful guides, and
                            product updates delivered to your inbox.
                        </p>

                        <form
                            className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row"
                            onSubmit={(event) => {
                                event.preventDefault();
                                // TODO: Connect your newsletter subscription API.
                                alert("Connect your newsletter API to complete subscription.");
                            }}
                        >
                            <Input
                                type="email"
                                size="large"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email address"
                                className="h-14 rounded-xl"
                            />

                            <button
                                type="submit"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#635BFF] transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                Subscribe <ArrowRightOutlined />
                            </button>
                        </form>

                        <p className="mt-4 text-xs text-purple-200">
                            No spam. Unsubscribe whenever you want.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
