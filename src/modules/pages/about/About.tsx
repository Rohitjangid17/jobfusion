
import {
    ArrowRightOutlined,
    AimOutlined,
    EyeOutlined,
    HeartOutlined,
    ThunderboltOutlined,
    TeamOutlined,
    RocketOutlined,
    CheckCircleFilled,
} from "@ant-design/icons";

const values = [
    {
        icon: <HeartOutlined />,
        title: "People First",
        description:
            "We believe great companies are built by great people. Every hiring decision should create meaningful opportunities.",
    },
    {
        icon: <ThunderboltOutlined />,
        title: "Keep It Simple",
        description:
            "Recruitment should not feel complicated. We focus on making everyday hiring workflows simple and organized.",
    },
    {
        icon: <TeamOutlined />,
        title: "Better Together",
        description:
            "Hiring is a team effort. We believe collaboration and transparency lead to better recruitment outcomes.",
    },
    {
        icon: <RocketOutlined />,
        title: "Always Improving",
        description:
            "We continuously explore better ways to help teams manage recruitment and build stronger organizations.",
    },
];

const highlights = [
    "Centralized recruitment workspace",
    "Organized candidate management",
    "Structured hiring workflows",
    "Better team collaboration",
];

const About = () => {
    return (
        <div className="overflow-hidden bg-white text-gray-900">
            {/* Hero */}
            <section className="relative px-5 pb-24 pt-24 sm:px-8 lg:pb-32 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-purple-100/60 blur-[120px]" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                        Get to know JobFusion
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        We're making hiring
                        <br />
                        <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent">
                            a better experience.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        JobFusion is designed to bring people, processes, and recruitment
                        activities together in one organized workspace.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href="/features"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#635BFF] px-7 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5148e5]"
                        >
                            Explore Our Platform <ArrowRightOutlined />
                        </a>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-purple-300 hover:text-[#635BFF]"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Brand statement */}
            <section className="border-y border-gray-100 bg-[#F8F7FF] px-5 py-20 sm:px-8 lg:py-28">
                <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Our Story
                        </span>

                        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Hiring deserves
                            <br />
                            a better workflow.
                        </h2>

                        <p className="mt-7 leading-8 text-gray-500">
                            Recruitment involves many moving parts: job openings, candidate
                            profiles, interviews, hiring teams, and decisions. When these
                            activities are spread across disconnected tools, keeping
                            everything organized becomes difficult.
                        </p>

                        <p className="mt-5 leading-8 text-gray-500">
                            JobFusion brings these activities into one recruitment
                            management experience. Our goal is to help teams stay organized,
                            work together, and make their hiring processes easier to manage.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 text-sm font-medium text-gray-700"
                                >
                                    <CheckCircleFilled className="mt-0.5 text-[#635BFF]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brand visual */}
                    <div className="relative">
                        <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-purple-200/60 to-indigo-100/50 blur-2xl" />

                        <div className="relative rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-purple-100/70 sm:p-9">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#635BFF] text-xl text-white">
                                        <TeamOutlined />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">JobFusion</p>
                                        <p className="text-xs text-gray-400">
                                            Recruitment Workspace
                                        </p>
                                    </div>
                                </div>

                                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                                    Workspace
                                </span>
                            </div>

                            <div className="mt-7">
                                <p className="text-sm font-semibold text-gray-900">
                                    Your hiring journey
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    Bring every step together
                                </p>
                            </div>

                            <div className="mt-7 space-y-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Discover Candidates",
                                        subtitle: "Keep candidate information organized",
                                    },
                                    {
                                        number: "02",
                                        title: "Manage Applications",
                                        subtitle: "Track progress through hiring stages",
                                    },
                                    {
                                        number: "03",
                                        title: "Collaborate as a Team",
                                        subtitle: "Keep everyone aligned",
                                    },
                                    {
                                        number: "04",
                                        title: "Make Better Decisions",
                                        subtitle: "Understand your hiring pipeline",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={item.number}
                                        className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-purple-200 hover:bg-purple-50/40"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-sm font-bold text-[#635BFF]">
                                            {item.number}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-gray-800">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 text-xs text-gray-400">
                                                {item.subtitle}
                                            </p>
                                        </div>

                                        <CheckCircleFilled
                                            className={
                                                index === 3 ? "text-[#635BFF]" : "text-gray-200"
                                            }
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-xl bg-gradient-to-r from-[#635BFF] to-[#8175FF] p-5 text-white">
                                <p className="text-sm font-semibold">
                                    Better hiring starts with better organization.
                                </p>
                                <p className="mt-1 text-xs text-purple-100">
                                    Everything your team needs, together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="px-5 py-24 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Our Purpose
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            What drives us forward
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-2">
                        <div className="rounded-3xl border border-purple-100 bg-[#F8F7FF] p-8 sm:p-11">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#635BFF] shadow-sm">
                                <AimOutlined />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">Our Mission</h3>

                            <p className="mt-5 leading-8 text-gray-500">
                                To simplify recruitment by providing teams with an organized
                                platform that connects hiring activities, improves
                                collaboration, and makes recruitment easier to manage.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-11">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl text-[#635BFF]">
                                <EyeOutlined />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">Our Vision</h3>

                            <p className="mt-5 leading-8 text-gray-500">
                                To create a connected recruitment experience where
                                organizations can manage their hiring processes with clarity,
                                confidence, and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[#F8F7FF] px-5 py-24 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Our Values
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            The principles behind JobFusion
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            These principles shape how we think about recruitment and the
                            experience we want to create.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl border border-purple-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#635BFF]">
                                    {value.icon}
                                </div>

                                <h3 className="mt-6 text-lg font-bold">{value.title}</h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] px-7 py-16 text-center text-white sm:px-12 lg:py-20">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                        <RocketOutlined />
                    </div>

                    <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                        Let's make hiring simpler, together.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
                        Discover a more organized way to manage your recruitment process
                        with JobFusion.
                    </p>

                    <a
                        href="/request-demo"
                        className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#635BFF] transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Request a Demo <ArrowRightOutlined />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
