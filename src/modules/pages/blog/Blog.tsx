
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRightOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    SearchOutlined,
    RightOutlined,
    ReadOutlined,
} from "@ant-design/icons";
import { Button, Empty, Input, Tag } from "antd";
import { blogArticles, blogCategories } from "./blogData";

export interface BlogArticle {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    role: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
    content: {
        id: string;
        heading: string;
        paragraphs: string[];
    }[];
}

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 6;

    const featuredArticle = blogArticles.find(
        (article) => article.featured
    );

    const filteredArticles = useMemo(() => {
        return blogArticles.filter((article) => {
            const matchesCategory =
                activeCategory === "All" ||
                article.category === activeCategory;

            const searchTerm = search.toLowerCase().trim();

            const matchesSearch =
                article.title.toLowerCase().includes(searchTerm) ||
                article.excerpt.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    const totalPages = Math.ceil(filteredArticles.length / pageSize);

    const displayedArticles = filteredArticles.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handleSearch = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
    };

    return (
        <main className="overflow-hidden bg-white text-[#17172B]">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#F7F6FF] px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">

                <div className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full border-[65px] border-[#635BFF]/[0.04]" />

                <div className="pointer-events-none absolute -bottom-48 -left-28 h-96 w-96 rounded-full border-[65px] border-[#635BFF]/[0.04]" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="mx-auto max-w-3xl text-center">

                        <Tag className="!mb-6 !rounded-full !border-[#E5E1FF] !bg-[#EFEDFF] !px-4 !py-1.5 !font-semibold !text-[#635BFF]">
                            THE JOBFUSION BLOG
                        </Tag>

                        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#17172B] sm:text-5xl lg:text-6xl">
                            Insights for a
                            <span className="block text-[#635BFF]">
                                smarter workplace.
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                            Explore the latest ideas, recruitment strategies,
                            hiring trends, and technology insights to help
                            your team work smarter and grow faster.
                        </p>

                        <div className="mx-auto mt-9 max-w-xl">

                            <Input
                                size="large"
                                allowClear
                                prefix={
                                    <SearchOutlined className="text-gray-400" />
                                }
                                placeholder="Search articles, topics and insights..."
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="!h-14 !rounded-xl !border-gray-200 !bg-white !shadow-[0_8px_30px_rgba(50,40,120,0.06)]"
                            />

                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {featuredArticle && activeCategory === "All" && !search && (
                <section className="px-5 py-16 sm:px-8 lg:py-24">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-9 flex items-center justify-between">

                            <div>
                                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                                    EDITOR'S PICK
                                </span>

                                <h2 className="text-2xl font-bold text-[#17172B] sm:text-3xl">
                                    Featured article
                                </h2>
                            </div>

                            <Tag className="!rounded-full !border-[#E5E1FF] !bg-[#EFEDFF] !px-3 !py-1 !text-[#635BFF]">
                                Featured
                            </Tag>

                        </div>

                        <div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_15px_50px_rgba(35,30,90,0.06)] lg:grid-cols-2">

                            <Link
                                to={`/blog/${featuredArticle.id}`}
                                className="group block min-h-[280px] overflow-hidden lg:min-h-[480px]"
                            >
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 lg:min-h-[480px]"
                                />
                            </Link>

                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                                <Tag className="mb-5 w-fit !rounded-full !border-[#E5E1FF] !bg-[#EFEDFF] !px-3 !py-1 !text-[#635BFF]">
                                    {featuredArticle.category}
                                </Tag>

                                <Link to={`/blog/${featuredArticle.id}`}>
                                    <h3 className="mb-5 text-2xl font-bold leading-snug text-[#17172B] transition hover:text-[#635BFF] sm:text-3xl lg:text-4xl">
                                        {featuredArticle.title}
                                    </h3>
                                </Link>

                                <p className="mb-8 text-base leading-8 text-gray-500">
                                    {featuredArticle.excerpt}
                                </p>

                                <div className="mb-8 flex flex-wrap items-center gap-5 text-sm text-gray-400">

                                    <span className="flex items-center gap-2">
                                        <CalendarOutlined />
                                        {featuredArticle.date}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <ClockCircleOutlined />
                                        {featuredArticle.readTime}
                                    </span>

                                </div>

                                <Link
                                    to={`/blog/${featuredArticle.id}`}
                                    className="inline-flex w-fit items-center gap-3 font-semibold text-[#635BFF] transition hover:gap-5"
                                >
                                    Read full article
                                    <ArrowRightOutlined />
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Articles Section */}
            <section className="bg-[#FAFAFF] px-5 py-16 sm:px-8 lg:py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                        <div>
                            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                                EXPLORE OUR CONTENT
                            </span>

                            <h2 className="text-3xl font-bold tracking-tight text-[#17172B] sm:text-4xl">
                                Latest articles & insights
                            </h2>

                            <p className="mt-3 text-gray-500">
                                Fresh perspectives, useful tips, and ideas worth sharing.
                            </p>
                        </div>

                        <span className="text-sm text-gray-400">
                            {filteredArticles.length} articles found
                        </span>

                    </div>

                    {/* Category Filters */}
                    <div className="mb-10 flex gap-3 overflow-x-auto pb-3">

                        {blogCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category
                                    ? "border-[#635BFF] bg-[#635BFF] text-white shadow-lg shadow-[#635BFF]/20"
                                    : "border-gray-200 bg-white text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                    {/* Blog Grid */}
                    {displayedArticles.length > 0 ? (

                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                            {displayedArticles.map((article) => (

                                <Link
                                    to={`/blog/${article.id}`}
                                    key={article.id}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#DCD8FF] hover:shadow-[0_20px_50px_rgba(50,40,120,0.09)]"
                                >

                                    <div className="relative overflow-hidden">

                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <Tag className="!absolute !left-5 !top-5 !m-0 !rounded-full !border-0 !bg-white/95 !px-3 !py-1 !font-medium !text-[#635BFF]">
                                            {article.category}
                                        </Tag>

                                    </div>

                                    <div className="flex flex-1 flex-col p-6">

                                        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">

                                            <span className="flex items-center gap-1.5">
                                                <CalendarOutlined />
                                                {article.date}
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <ClockCircleOutlined />
                                                {article.readTime}
                                            </span>

                                        </div>

                                        <h3 className="mb-3 text-xl font-bold leading-snug text-[#17172B] transition group-hover:text-[#635BFF]">
                                            {article.title}
                                        </h3>

                                        <p className="mb-7 flex-1 text-sm leading-7 text-gray-500">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-gray-100 pt-5">

                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    {article.author}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-400">
                                                    {article.role}
                                                </p>
                                            </div>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFEDFF] text-[#635BFF] transition group-hover:bg-[#635BFF] group-hover:text-white">
                                                <ArrowRightOutlined />
                                            </span>

                                        </div>

                                    </div>
                                </Link>

                            ))}

                        </div>

                    ) : (

                        <div className="rounded-2xl border border-gray-100 bg-white py-20">
                            <Empty description="No articles found. Try another search or category." />
                        </div>

                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (

                        <div className="mt-14 flex items-center justify-center gap-3">

                            <Button
                                disabled={currentPage === 1}
                                icon={<RightOutlined rotate={180} />}
                                onClick={() => setCurrentPage((p) => p - 1)}
                                className="!h-11 !rounded-lg"
                            />

                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            ).map((page) => (

                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`h-11 w-11 rounded-lg text-sm font-semibold transition ${currentPage === page
                                        ? "bg-[#635BFF] text-white"
                                        : "border border-gray-200 bg-white text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
                                        }`}
                                >
                                    {page}
                                </button>

                            ))}

                            <Button
                                disabled={currentPage === totalPages}
                                icon={<RightOutlined />}
                                onClick={() => setCurrentPage((p) => p + 1)}
                                className="!h-11 !rounded-lg"
                            />

                        </div>

                    )}

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 py-20 sm:px-8 lg:py-24">

                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#635BFF] px-6 py-16 text-center sm:px-12 sm:py-20">

                    <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10" />

                    <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

                    <div className="relative z-10 mx-auto max-w-2xl">

                        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white">
                            <ReadOutlined />
                        </span>

                        <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
                            Ideas that move your business forward.
                        </h2>

                        <p className="mb-8 leading-8 text-white/75">
                            Discover fresh insights and practical strategies
                            for building better teams and smarter workplaces.
                        </p>

                        <Link to="/resources">
                            <Button
                                size="large"
                                className="!h-12 !rounded-xl !border-0 !bg-white !px-8 !font-semibold !text-[#635BFF] hover:!bg-gray-100"
                            >
                                Explore Resources
                                <ArrowRightOutlined />
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default Blog;
