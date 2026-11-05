
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    BookOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CopyOutlined,
    DislikeOutlined,
    FileTextOutlined,
    LikeOutlined,
    LockOutlined,
    MessageOutlined,
    QuestionCircleOutlined,
    RightOutlined
} from "@ant-design/icons";
import { Button, message } from "antd";

interface ArticleSection {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
}

interface HelpArticle {
    id: string;
    title: string;
    description: string;
    category: string;
    categoryIcon: React.ReactNode;
    readTime: string;
    updatedAt: string;
    sections: ArticleSection[];
}

const articles: HelpArticle[] = [
    {
        id: "getting-started",
        title: "Getting started with JobFusion",
        description:
            "Learn the basics of JobFusion and set up your recruitment workspace.",
        category: "Getting Started",
        categoryIcon: <BookOutlined />,
        readTime: "5 min read",
        updatedAt: "November 2, 2026",
        sections: [
            {
                id: "introduction",
                title: "Welcome to JobFusion",
                paragraphs: [
                    "JobFusion helps recruitment teams manage their hiring activities in one organized workspace. You can manage candidates, create job openings, track applications, and collaborate with your recruitment team.",
                    "This guide introduces the main areas of the platform and helps you understand how to get started.",
                ],
            },
            {
                id: "workspace",
                title: "Explore your workspace",
                paragraphs: [
                    "Your workspace is the central place where you can access recruitment activities. The dashboard provides an overview of your hiring pipeline and important updates.",
                ],
                bullets: [
                    "Dashboard: View recruitment activity and hiring summaries.",
                    "Jobs: Create and manage job openings.",
                    "Candidates: Organize candidate profiles and applications.",
                    "Recruiters: Manage your recruitment team.",
                    "Companies: Organize company information and access.",
                ],
            },
            {
                id: "create-job",
                title: "Create your first job",
                paragraphs: [
                    "Start by creating a job opening with the role title, department, location, employment type, and job description.",
                    "Once a job is created, you can associate candidates with the opening and track their progress through the recruitment pipeline.",
                ],
                bullets: [
                    "Open the Jobs section.",
                    "Select the create job option.",
                    "Enter the job information.",
                    "Review the details and save the job.",
                ],
            },
            {
                id: "manage-candidates",
                title: "Manage candidates",
                paragraphs: [
                    "The Candidates section helps you maintain candidate profiles and review their application information. You can organize candidates and follow their progress during recruitment.",
                ],
            },
        ],
    },
    {
        id: "manage-jobs",
        title: "How to create and manage jobs",
        description:
            "Learn how to create job openings and manage your hiring requirements.",
        category: "Jobs & Hiring",
        categoryIcon: <FileTextOutlined />,
        readTime: "4 min read",
        updatedAt: "November 1, 2026",
        sections: [
            {
                id: "create-job",
                title: "Create a new job",
                paragraphs: [
                    "Job management helps your team organize open positions and maintain clear hiring requirements.",
                    "Open the Jobs section and select the option to create a new job.",
                ],
                bullets: [
                    "Enter the job title and department.",
                    "Select the employment type.",
                    "Add the job location.",
                    "Write the job description and requirements.",
                    "Review and save the job.",
                ],
            },
            {
                id: "job-details",
                title: "Add job details",
                paragraphs: [
                    "Provide clear information about the position, including responsibilities, qualifications, required skills, and experience level.",
                ],
            },
            {
                id: "track-jobs",
                title: "Track job openings",
                paragraphs: [
                    "Use the Jobs section to review your openings and monitor their current status. Keep job information updated as your hiring requirements change.",
                ],
            },
        ],
    },
    {
        id: "candidate-management",
        title: "Managing candidate profiles",
        description:
            "Understand how to organize candidate information and track applications.",
        category: "Candidates",
        categoryIcon: <QuestionCircleOutlined />,
        readTime: "6 min read",
        updatedAt: "October 30, 2026",
        sections: [
            {
                id: "candidate-overview",
                title: "Candidate overview",
                paragraphs: [
                    "Candidate profiles help recruitment teams keep important applicant information organized in one place.",
                ],
            },
            {
                id: "candidate-information",
                title: "Manage candidate information",
                paragraphs: [
                    "A candidate profile can contain contact information, professional experience, skills, resume details, and application history.",
                ],
                bullets: [
                    "Review candidate contact details.",
                    "Check skills and professional experience.",
                    "Review associated applications.",
                    "Keep candidate information up to date.",
                ],
            },
            {
                id: "candidate-progress",
                title: "Track candidate progress",
                paragraphs: [
                    "Follow each candidate's progress through the recruitment process and keep relevant application information organized.",
                ],
            },
        ],
    },
];

const categories = [
    {
        name: "Getting Started",
        icon: <BookOutlined />,
        count: 8,
    },
    {
        name: "Jobs & Hiring",
        icon: <FileTextOutlined />,
        count: 12,
    },
    {
        name: "Candidates",
        icon: <QuestionCircleOutlined />,
        count: 10,
    },
    {
        name: "Account & Security",
        icon: <LockOutlined />,
        count: 6,
    },
];

export default function HelpArticleDetails() {
    const { id } = useParams<{ id: string }>();
    const [activeSection, setActiveSection] = useState("");
    const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

    const article = useMemo(
        () => articles.find((item) => item.id === id) ?? articles[0],
        [id]
    );

    const relatedArticles = articles.filter(
        (item) => item.id !== article.id
    );

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            message.success("Article link copied!");
        } catch {
            message.error("Unable to copy the link.");
        }
    };

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId);

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#17172B]">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[#ECEBFA] bg-gradient-to-br from-[#F7F6FF] via-white to-[#F0EEFF]">
                <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#635BFF]/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A78BFA]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
                    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <Link
                            to="/"
                            className="transition hover:text-[#635BFF]"
                        >
                            Home
                        </Link>
                        <RightOutlined className="text-[10px]" />
                        <Link
                            to="/help-center"
                            className="transition hover:text-[#635BFF]"
                        >
                            Help Center
                        </Link>
                        <RightOutlined className="text-[10px]" />
                        <span className="font-medium text-[#635BFF]">
                            {article.category}
                        </span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E5E2FF] bg-white px-4 py-2 text-sm font-semibold text-[#635BFF] shadow-sm">
                            <span>{article.categoryIcon}</span>
                            {article.category}
                        </div>

                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#17172B] sm:text-4xl lg:text-5xl">
                            {article.title}
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                            {article.description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <ClockCircleOutlined className="text-[#635BFF]" />
                                {article.readTime}
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircleOutlined className="text-[#635BFF]" />
                                Updated {article.updatedAt}
                            </span>
                            <button
                                onClick={handleCopyLink}
                                className="flex items-center gap-2 font-medium text-[#635BFF] transition hover:text-[#4941D8]"
                            >
                                <CopyOutlined />
                                Copy link
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Layout */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[230px_minmax(0,1fr)_230px] lg:gap-10">
                    {/* Left Sidebar */}
                    <aside className="order-2 lg:order-1">
                        <div className="sticky top-24">
                            <Link
                                to="/help-center"
                                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#635BFF]"
                            >
                                <ArrowLeftOutlined />
                                Back to Help Center
                            </Link>

                            <div className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-gray-400">
                                Help Categories
                            </div>

                            <div className="space-y-1">
                                {categories.map((category) => (
                                    <Link
                                        key={category.name}
                                        to="/help-center"
                                        className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-600 transition hover:bg-[#F0EEFF] hover:text-[#635BFF]"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="text-base text-gray-400 group-hover:text-[#635BFF]">
                                                {category.icon}
                                            </span>
                                            {category.name}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {category.count}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#EAE8FF] bg-white p-5">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0EEFF] text-lg text-[#635BFF]">
                                    <MessageOutlined />
                                </div>
                                <h3 className="font-bold text-[#17172B]">
                                    Need more help?
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Can't find what you're looking for? Contact our support team.
                                </p>
                                <Link
                                    to="/contact"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF] hover:text-[#4941D8]"
                                >
                                    Contact support
                                    <ArrowRightOutlined />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <main className="order-1 min-w-0 lg:order-2">
                        <article className="rounded-2xl border border-[#ECEBF5] bg-white p-6 shadow-[0_4px_24px_rgba(23,23,43,0.03)] sm:p-9 lg:p-10">
                            <div className="mb-8 rounded-xl border border-[#EAE8FF] bg-[#F8F7FF] p-5">
                                <div className="flex gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#635BFF] text-white">
                                        <BookOutlined />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#17172B]">
                                            In this article
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            Follow this guide to understand the steps and make the
                                            most of JobFusion.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                {article.sections.map((section, index) => (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-28"
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0EEFF] text-sm font-bold text-[#635BFF]">
                                                {index + 1}
                                            </span>
                                            <h2 className="text-xl font-bold tracking-tight text-[#17172B] sm:text-2xl">
                                                {section.title}
                                            </h2>
                                        </div>

                                        <div className="space-y-4 pl-0 text-[15px] leading-8 text-gray-600 sm:pl-11">
                                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                                                <p key={paragraphIndex}>{paragraph}</p>
                                            ))}

                                            {section.bullets && (
                                                <ul className="space-y-3 pt-1">
                                                    {section.bullets.map((bullet, bulletIndex) => (
                                                        <li
                                                            key={bulletIndex}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <CheckCircleOutlined className="mt-2 shrink-0 text-[#635BFF]" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Feedback */}
                            <div className="mt-12 border-t border-[#ECEBF5] pt-8">
                                <div className="rounded-2xl bg-[#F8F7FF] p-6 text-center sm:p-8">
                                    <h3 className="text-lg font-bold text-[#17172B]">
                                        Was this article helpful?
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Your feedback helps us improve our documentation.
                                    </p>

                                    {feedback ? (
                                        <div className="mt-5 flex items-center justify-center gap-2 font-semibold text-[#635BFF]">
                                            <CheckCircleOutlined />
                                            Thanks for your feedback!
                                        </div>
                                    ) : (
                                        <div className="mt-6 flex justify-center gap-3">
                                            <Button
                                                size="large"
                                                icon={<LikeOutlined />}
                                                onClick={() => setFeedback("yes")}
                                                className="!h-11 !rounded-xl !border-[#E5E2FF] !px-6 !font-semibold hover:!border-[#635BFF] hover:!text-[#635BFF]"
                                            >
                                                Yes, helpful
                                            </Button>
                                            <Button
                                                size="large"
                                                icon={<DislikeOutlined />}
                                                onClick={() => setFeedback("no")}
                                                className="!h-11 !rounded-xl !border-[#E5E2FF] !px-6 !font-semibold hover:!border-[#635BFF] hover:!text-[#635BFF]"
                                            >
                                                Not really
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>

                        {/* Bottom Navigation */}
                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                            <Link
                                to="/help-center"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#635BFF]"
                            >
                                <ArrowLeftOutlined />
                                All help articles
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF] transition hover:text-[#4941D8]"
                            >
                                Still need help?
                                <ArrowRightOutlined />
                            </Link>
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    <aside className="order-3">
                        <div className="sticky top-24">
                            <div className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-gray-400">
                                On this page
                            </div>

                            <div className="space-y-1 border-l-2 border-[#ECEBFA] pl-4">
                                {article.sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => handleSectionClick(section.id)}
                                        className={`block w-full py-2 text-left text-sm transition ${activeSection === section.id
                                            ? "font-semibold text-[#635BFF]"
                                            : "text-gray-500 hover:text-[#635BFF]"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-4 mt-10 text-xs font-bold uppercase tracking-[1.5px] text-gray-400">
                                Related articles
                            </div>

                            <div className="space-y-3">
                                {relatedArticles.map((related) => (
                                    <Link
                                        key={related.id}
                                        to={`/help-center/${related.id}`}
                                        className="group block rounded-xl border border-[#ECEBF5] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#D8D3FF] hover:shadow-md"
                                    >
                                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0EEFF] text-[#635BFF]">
                                            {related.categoryIcon}
                                        </div>
                                        <h4 className="text-sm font-semibold leading-6 text-[#17172B] transition group-hover:text-[#635BFF]">
                                            {related.title}
                                        </h4>
                                        <span className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-gray-400">
                                            {related.readTime}
                                            <ArrowRightOutlined />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 pb-16 sm:px-8">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#17172B] px-6 py-12 text-center sm:px-12 lg:py-16">
                    <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#635BFF]/30 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#A78BFA]/20 blur-3xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white">
                            <MessageOutlined />
                        </div>

                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                            Still have questions?
                        </h2>

                        <p className="mt-4 leading-7 text-gray-300">
                            Our support team can help you find the answers you need and
                            make your recruitment workflow easier.
                        </p>

                        <Link to="/contact">
                            <Button
                                type="primary"
                                size="large"
                                className="!mt-8 !h-12 !rounded-xl !border-0 !bg-[#635BFF] !px-7 !font-semibold hover:!bg-[#5148E5]"
                            >
                                Contact our team
                                <ArrowRightOutlined />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
