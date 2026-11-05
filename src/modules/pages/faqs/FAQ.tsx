
import { useMemo, useState } from "react";
import {
    ArrowRightOutlined,
    BookOutlined,
    CheckCircleFilled,
    CreditCardOutlined,
    CustomerServiceOutlined,
    DownOutlined,
    MailOutlined,
    MessageOutlined,
    SafetyCertificateOutlined,
    SearchOutlined,
    TeamOutlined,
    UserOutlined,
    WechatOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Input, Tag } from "antd";
import type { CollapseProps } from "antd";
import { Link } from "react-router-dom";

interface FAQItem {
    id: number;
    category: string;
    question: string;
    answer: string;
}

const categories = [
    {
        name: "All Questions",
        icon: <BookOutlined />,
        description: "Browse all frequently asked questions.",
    },
    {
        name: "Getting Started",
        icon: <UserOutlined />,
        description: "Account setup and onboarding.",
    },
    {
        name: "Candidates & Jobs",
        icon: <TeamOutlined />,
        description: "Candidate management and job postings.",
    },
    {
        name: "Pricing & Billing",
        icon: <CreditCardOutlined />,
        description: "Plans, subscriptions and payments.",
    },
    {
        name: "Security & Privacy",
        icon: <SafetyCertificateOutlined />,
        description: "Your data and account security.",
    },
];

const faqData: FAQItem[] = [
    {
        id: 1,
        category: "Getting Started",
        question: "What is JobFusion?",
        answer:
            "JobFusion is a recruitment management platform designed to help organizations manage job openings, candidates, recruiters, and hiring workflows from one centralized workspace.",
    },
    {
        id: 2,
        category: "Getting Started",
        question: "How do I create a company account?",
        answer:
            "You can create an account by visiting the registration page, entering your details, and following the onboarding process to set up your company workspace.",
    },
    {
        id: 3,
        category: "Getting Started",
        question: "Can I invite multiple recruiters?",
        answer:
            "JobFusion is designed to support collaborative recruitment. Depending on your subscription plan, you can add recruiters and assign appropriate workspace access.",
    },
    {
        id: 4,
        category: "Getting Started",
        question: "Is there a free plan available?",
        answer:
            "A starter plan is included in the planned pricing structure. Please check the Pricing page for the latest subscription details and availability.",
    },
    {
        id: 5,
        category: "Candidates & Jobs",
        question: "How can I publish a job?",
        answer:
            "You can create a job opening by entering its title, department, description, location, employment type, and other relevant information in the job management section.",
    },
    {
        id: 6,
        category: "Candidates & Jobs",
        question: "Can I track candidates through hiring stages?",
        answer:
            "Yes. The platform is designed to organize candidates across different recruitment stages, helping your team monitor application progress and hiring decisions.",
    },
    {
        id: 7,
        category: "Candidates & Jobs",
        question: "Can I manage candidate resumes?",
        answer:
            "JobFusion is designed to centralize candidate profiles, resumes, contact details, and application history so recruiters can access relevant information easily.",
    },
    {
        id: 8,
        category: "Candidates & Jobs",
        question: "Can multiple recruiters work on the same job?",
        answer:
            "Team collaboration is part of the planned recruitment workflow. Recruiters can coordinate hiring activities based on their assigned roles and permissions.",
    },
    {
        id: 9,
        category: "Pricing & Billing",
        question: "Can I change my subscription plan?",
        answer:
            "Plan changes can be managed according to the subscription options available to your company. Contact the JobFusion team if you need assistance.",
    },
    {
        id: 10,
        category: "Pricing & Billing",
        question: "What payment methods are supported?",
        answer:
            "Supported payment methods and billing arrangements will be communicated when subscription and payment services are available.",
    },
    {
        id: 11,
        category: "Pricing & Billing",
        question: "Can I cancel my subscription?",
        answer:
            "Subscription cancellation policies will depend on the selected plan and billing terms. Please contact our team for assistance with subscription-related questions.",
    },
    {
        id: 12,
        category: "Security & Privacy",
        question: "Is my recruitment data secure?",
        answer:
            "JobFusion is being designed with data security, role-based access, and privacy-conscious recruitment workflows in mind. Specific security policies will be published as the platform becomes available.",
    },
    {
        id: 13,
        category: "Security & Privacy",
        question: "Can I control recruiter permissions?",
        answer:
            "The platform is designed around role-based access so organizations can manage workspace permissions according to user roles and responsibilities.",
    },
    {
        id: 14,
        category: "Security & Privacy",
        question: "Can I remove a team member?",
        answer:
            "Workspace administrators will be able to manage team membership and access permissions through the account management workflow.",
    },
];

const FAQ: React.FC = () => {
    const [activeCategory, setActiveCategory] =
        useState("All Questions");

    const [searchTerm, setSearchTerm] = useState("");

    const filteredFAQs = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        return faqData.filter((faq) => {
            const matchesCategory =
                activeCategory === "All Questions" ||
                faq.category === activeCategory;

            const matchesSearch =
                !search ||
                faq.question.toLowerCase().includes(search) ||
                faq.answer.toLowerCase().includes(search) ||
                faq.category.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const groupedFAQs = useMemo(() => {
        if (activeCategory !== "All Questions") {
            return [
                {
                    category: activeCategory,
                    items: filteredFAQs,
                },
            ];
        }

        return categories
            .filter((category) => category.name !== "All Questions")
            .map((category) => ({
                category: category.name,
                items: filteredFAQs.filter(
                    (faq) => faq.category === category.name
                ),
            }))
            .filter((group) => group.items.length > 0);
    }, [activeCategory, filteredFAQs]);

    const getCollapseItems = (
        items: FAQItem[]
    ): CollapseProps["items"] => {
        return items.map((faq) => ({
            key: faq.id.toString(),
            label: (
                <span className="pr-4 text-sm font-semibold text-[#17172B] sm:text-base">
                    {faq.question}
                </span>
            ),
            children: (
                <p className="pb-2 pr-4 text-sm leading-7 text-gray-500">
                    {faq.answer}
                </p>
            ),
        }));
    };

    return (
        <>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#F7F6FF]">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#635BFF]/10 blur-3xl" />

                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-28">

                    <Tag
                        color="purple"
                        className="!mb-6 !rounded-full !border-0 !px-4 !py-2 !text-sm"
                    >
                        <MessageOutlined className="mr-2" />
                        Help & Support Center
                    </Tag>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[58px]">
                        Got questions?
                        <span className="text-[#635BFF]">
                            {" "}We've got answers.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
                        Find answers to common questions about JobFusion.
                        Explore our help center and get the information
                        you need to simplify your recruitment journey.
                    </p>

                    {/* SEARCH */}
                    <div className="mx-auto mt-10 max-w-2xl">
                        <Input
                            size="large"
                            prefix={
                                <SearchOutlined className="mr-2 text-[#635BFF]" />
                            }
                            placeholder="Search for questions, topics or answers..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                if (e.target.value) {
                                    setActiveCategory("All Questions");
                                }
                            }}
                            allowClear
                            className="!h-14 !rounded-2xl !border-white !bg-white !px-5 !shadow-xl !shadow-[#635BFF]/5"
                        />

                        <p className="mt-4 text-sm text-gray-400">
                            Popular searches: Getting started, Job postings,
                            Candidates, Billing
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-7 text-sm text-gray-500">
                        <span>
                            <CheckCircleFilled className="mr-2 text-[#635BFF]" />
                            Quick answers
                        </span>
                        <span>
                            <CheckCircleFilled className="mr-2 text-[#635BFF]" />
                            Easy navigation
                        </span>
                        <span>
                            <CheckCircleFilled className="mr-2 text-[#635BFF]" />
                            Helpful resources
                        </span>
                    </div>
                </div>
            </section>

            {/* CATEGORY SECTION */}
            <section className="mx-auto max-w-7xl px-5 pt-20 md:px-10">
                <div className="text-center">
                    <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                        Browse Topics
                    </Tag>

                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        How can we help you?
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Select a category to find the answers you're looking for.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {categories
                        .filter((category) => category.name !== "All Questions")
                        .map((category) => {
                            const count = faqData.filter(
                                (faq) => faq.category === category.name
                            ).length;

                            return (
                                <button
                                    key={category.name}
                                    onClick={() => {
                                        setActiveCategory(category.name);
                                        setSearchTerm("");
                                    }}
                                    className={`group rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#635BFF]/5 ${activeCategory === category.name
                                            ? "border-[#635BFF] bg-[#F7F6FF]"
                                            : "border-gray-100 bg-white hover:border-[#635BFF]/30"
                                        }`}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0EEFF] text-xl text-[#635BFF] transition group-hover:bg-[#635BFF] group-hover:text-white">
                                        {category.icon}
                                    </div>

                                    <h3 className="mt-5 text-base font-bold">
                                        {category.name}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        {category.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-400">
                                            {count} questions
                                        </span>

                                        <ArrowRightOutlined className="text-sm text-[#635BFF] transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>
                            );
                        })}
                </div>
            </section>

            {/* FAQ QUESTIONS SECTION */}
            <section
                id="faq-questions"
                className="mx-auto max-w-5xl px-5 py-20 md:px-10 md:py-28"
            >
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                            Knowledge Base
                        </Tag>

                        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                            Frequently asked questions
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Find detailed answers to your questions.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setActiveCategory("All Questions");
                            setSearchTerm("");
                        }}
                        className="text-sm font-semibold text-[#635BFF] hover:underline"
                    >
                        View all questions
                    </button>
                </div>

                {/* CATEGORY FILTERS */}
                <div className="mt-9 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => {
                                setActiveCategory(category.name);
                            }}
                            className={`rounded-full px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${activeCategory === category.name
                                    ? "bg-[#635BFF] text-white"
                                    : "border border-gray-200 text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* QUESTIONS */}
                <div className="mt-9 space-y-10">
                    {groupedFAQs.map((group) => (
                        <div key={group.category}>
                            {activeCategory === "All Questions" && (
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="h-8 w-1 rounded-full bg-[#635BFF]" />
                                    <h3 className="text-lg font-bold">
                                        {group.category}
                                    </h3>
                                    <span className="rounded-full bg-[#F0EEFF] px-3 py-1 text-xs font-semibold text-[#635BFF]">
                                        {group.items.length}
                                    </span>
                                </div>
                            )}

                            <Collapse
                                items={getCollapseItems(group.items)}
                                bordered={false}
                                expandIconPosition="end"
                                expandIcon={({ isActive }) => (
                                    <DownOutlined
                                        rotate={isActive ? 180 : 0}
                                        className="!text-[#635BFF]"
                                    />
                                )}
                                className="faq-collapse !bg-white"
                                size="large"
                            />
                        </div>
                    ))}

                    {filteredFAQs.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-5 py-16 text-center">
                            <SearchOutlined className="text-4xl text-gray-300" />

                            <h3 className="mt-5 text-lg font-bold">
                                No questions found
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Try another search term or select a different category.
                            </p>

                            <Button
                                type="primary"
                                className="!mt-5 !rounded-xl !bg-[#635BFF]"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("All Questions");
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* SUPPORT SECTION */}
            <section className="bg-[#F7F6FF] py-20 md:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2">

                    <div>
                        <Tag color="purple" className="!rounded-full !border-0 !px-4 !py-1.5">
                            Need More Help?
                        </Tag>

                        <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                            Still looking for an answer?
                            <span className="text-[#635BFF]">
                                {" "}Let's talk.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg leading-8 text-gray-500">
                            Can't find what you're looking for? Our team is
                            ready to help you understand JobFusion and answer
                            your questions.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button
                                    type="primary"
                                    size="large"
                                    className="!h-12 !rounded-xl !bg-[#635BFF] !px-7"
                                >
                                    Contact Support <ArrowRightOutlined />
                                </Button>
                            </Link>

                            <a href="mailto:support@jobfusion.com">
                                <Button
                                    size="large"
                                    className="!h-12 !rounded-xl !border-gray-200 !px-7"
                                >
                                    <MailOutlined /> Email Us
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* SUPPORT CARDS */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white bg-white p-7 shadow-sm">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0EEFF] text-xl text-[#635BFF]">
                                <CustomerServiceOutlined />
                            </div>

                            <h3 className="mt-5 font-bold">
                                Contact Support
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Get assistance with your account and recruitment workflow.
                            </p>

                            <Link
                                to="/contact"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF]"
                            >
                                Get in touch <ArrowRightOutlined />
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-white bg-white p-7 shadow-sm sm:translate-y-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0EEFF] text-xl text-[#635BFF]">
                                <WechatOutlined />
                            </div>

                            <h3 className="mt-5 font-bold">
                                Explore Resources
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Discover helpful articles, tips, and recruitment insights.
                            </p>

                            <Link
                                to="/blog"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF]"
                            >
                                Explore Blog <ArrowRightOutlined />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 py-20 md:px-10 md:py-24">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#635BFF] px-7 py-16 text-center md:px-16 md:py-20">
                    <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-purple-300/20 blur-2xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                            Your Hiring Journey Starts Here
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl">
                            Make your recruitment process simpler with JobFusion.
                        </h2>

                        <p className="mt-5 leading-8 text-white/75">
                            Bring your jobs, candidates, and hiring team together
                            in one organized platform.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link to="/contact">
                                <Button
                                    size="large"
                                    className="!h-12 !rounded-xl !border-0 !px-7 !font-semibold !text-[#635BFF]"
                                >
                                    Get in Touch <ArrowRightOutlined />
                                </Button>
                            </Link>

                            <Link to="/features">
                                <Button
                                    ghost
                                    size="large"
                                    className="!h-12 !rounded-xl !px-7 !font-semibold"
                                >
                                    Explore Features
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FAQ;
