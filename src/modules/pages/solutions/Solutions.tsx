
import {
    ArrowRightOutlined,
    CheckCircleFilled,
    RocketOutlined,
    TeamOutlined,
    ApartmentOutlined,
    BarChartOutlined,
    SolutionOutlined,
    SafetyCertificateOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";

const solutions = [
    {
        id: "startups",
        number: "01",
        title: "For Startups",
        subtitle: "Build your team without slowing down.",
        description:
            "Give your growing team a simple way to manage jobs, organize applicants, and hire the right people without unnecessary complexity.",
        icon: <RocketOutlined />,
        benefits: [
            "Manage multiple job openings",
            "Keep candidate profiles organized",
            "Track every hiring stage",
            "Collaborate with your hiring team",
        ],
        tag: "Move faster",
    },
    {
        id: "agencies",
        number: "02",
        title: "For Recruitment Agencies",
        subtitle: "Manage clients and candidates in one place.",
        description:
            "Organize your recruitment pipeline, manage candidate relationships, and keep your hiring operations structured as your agency grows.",
        icon: <SolutionOutlined />,
        benefits: [
            "Centralized candidate database",
            "Manage multiple recruitment projects",
            "Track candidate progress",
            "Improve team coordination",
        ],
        tag: "Stay organized",
    },
    {
        id: "hr-teams",
        number: "03",
        title: "For HR Teams",
        subtitle: "Make everyday recruitment easier.",
        description:
            "Bring your hiring workflow together with structured candidate management, interview coordination, and recruitment insights.",
        icon: <TeamOutlined />,
        benefits: [
            "Centralize recruitment activities",
            "Coordinate interviews",
            "Monitor hiring progress",
            "Access recruitment reports",
        ],
        tag: "Work smarter",
    },
    {
        id: "enterprises",
        number: "04",
        title: "For Growing Businesses",
        subtitle: "Create a hiring process that scales.",
        description:
            "Build a consistent recruitment workflow across teams, manage hiring activity, and get a clearer picture of your recruitment pipeline.",
        icon: <ApartmentOutlined />,
        benefits: [
            "Manage multiple departments",
            "Standardize hiring workflows",
            "Improve recruitment visibility",
            "Support team collaboration",
        ],
        tag: "Scale confidently",
    },
];

const highlights = [
    {
        icon: <BarChartOutlined />,
        title: "Clear hiring visibility",
        description:
            "Understand your recruitment pipeline and keep track of candidate progress.",
    },
    {
        icon: <ThunderboltOutlined />,
        title: "Simplified workflows",
        description:
            "Bring everyday recruitment activities into one organized workspace.",
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: "Organized candidate data",
        description:
            "Keep candidate information structured and easier for your team to access.",
    },
];

const Solutions = () => {
    return (
        <div className="overflow-hidden bg-white text-gray-900">
            {/* Hero */}
            <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-100/60 blur-[120px]" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                        Solutions for every hiring team
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                        One platform.
                        <br />
                        <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent">
                            Every hiring need.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        Whether you're building your first team or managing recruitment
                        across an organization, JobFusion helps you bring your hiring
                        workflow together.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#635BFF] px-7 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5148e5]"
                        >
                            Get Started Free <ArrowRightOutlined />
                        </a>

                        <a
                            href="/features"
                            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-purple-300 hover:text-[#635BFF]"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            {/* Audience navigation */}
            <section className="border-y border-gray-100 bg-gray-50/70 px-5 py-7 sm:px-8">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
                    {solutions.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:border-purple-300 hover:text-[#635BFF]"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </section>

            {/* Solutions */}
            <section className="px-5 py-24 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Who we help
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            Built around the way you hire
                        </h2>
                        <p className="mt-5 leading-8 text-gray-500">
                            Different teams have different hiring challenges. JobFusion
                            provides a centralized workspace to help manage them.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <div
                                id={solution.id}
                                key={solution.id}
                                className="scroll-mt-28 grid overflow-hidden rounded-3xl border border-gray-200 bg-white lg:grid-cols-2"
                            >
                                <div
                                    className={`flex flex-col justify-center p-8 sm:p-12 lg:p-14 ${index % 2 === 1 ? "lg:order-2" : ""
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold tracking-widest text-gray-300">
                                            {solution.number}
                                        </span>
                                        <span className="rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold text-[#635BFF]">
                                            {solution.tag}
                                        </span>
                                    </div>

                                    <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl text-[#635BFF]">
                                        {solution.icon}
                                    </div>

                                    <h3 className="mt-7 text-3xl font-bold tracking-tight">
                                        {solution.title}
                                    </h3>

                                    <h4 className="mt-3 text-lg font-semibold text-[#635BFF]">
                                        {solution.subtitle}
                                    </h4>

                                    <p className="mt-5 leading-8 text-gray-500">
                                        {solution.description}
                                    </p>

                                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                        {solution.benefits.map((benefit) => (
                                            <div
                                                key={benefit}
                                                className="flex items-start gap-3 text-sm text-gray-600"
                                            >
                                                <CheckCircleFilled className="mt-0.5 text-[#635BFF]" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="/register"
                                        className="mt-9 inline-flex w-fit items-center gap-2 font-semibold text-[#635BFF] transition hover:gap-3"
                                    >
                                        Get started <ArrowRightOutlined />
                                    </a>
                                </div>

                                <div
                                    className={`flex min-h-[340px] items-center justify-center bg-gradient-to-br from-[#F5F3FF] to-[#EEF2FF] p-8 sm:p-12 ${index % 2 === 1 ? "lg:order-1" : ""
                                        }`}
                                >
                                    <div className="w-full max-w-md rounded-2xl border border-white bg-white p-6 shadow-xl shadow-purple-100/70">
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">
                                                    Hiring Overview
                                                </p>
                                                <p className="mt-1 text-xs text-gray-400">
                                                    Your recruitment workspace
                                                </p>
                                            </div>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-lg text-[#635BFF]">
                                                {solution.icon}
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                            {[
                                                { label: "Open Positions", value: "12" },
                                                { label: "Candidates", value: "248" },
                                                { label: "Interviews", value: "18" },
                                                { label: "Shortlisted", value: "36" },
                                            ].map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className="rounded-xl bg-gray-50 p-4"
                                                >
                                                    <p className="text-2xl font-bold text-gray-900">
                                                        {stat.value}
                                                    </p>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-5 rounded-xl border border-gray-100 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-xs font-semibold text-gray-700">
                                                    Recruitment Pipeline
                                                </span>
                                                <span className="text-xs text-[#635BFF]">
                                                    Overview
                                                </span>
                                            </div>

                                            {[
                                                { label: "Applied", width: "100%" },
                                                { label: "Screening", width: "75%" },
                                                { label: "Interview", width: "48%" },
                                                { label: "Selected", width: "25%" },
                                            ].map((stage) => (
                                                <div key={stage.label} className="mb-4 last:mb-0">
                                                    <div className="mb-2 flex justify-between text-xs text-gray-500">
                                                        <span>{stage.label}</span>
                                                    </div>
                                                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                                                        <div
                                                            className="h-full rounded-full bg-gradient-to-r from-[#635BFF] to-[#A78BFA]"
                                                            style={{ width: stage.width }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="mt-4 text-center text-[10px] text-gray-400">
                                            Illustrative dashboard preview
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-[#F8F7FF] px-5 py-24 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Why JobFusion
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            Everything connected in one place
                        </h2>
                        <p className="mt-5 leading-8 text-gray-500">
                            Spend less time switching between tools and more time building
                            your team.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-purple-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#635BFF]">
                                    {item.icon}
                                </div>
                                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                                <p className="mt-3 leading-7 text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] px-7 py-16 text-center text-white sm:px-12 lg:py-20">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                        <RocketOutlined />
                    </div>

                    <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                        Ready to transform your hiring process?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
                        Bring your recruitment workflow together and create a better
                        experience for your hiring team.
                    </p>

                    <a
                        href="/register"
                        className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#635BFF] transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Get Started Free <ArrowRightOutlined />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
