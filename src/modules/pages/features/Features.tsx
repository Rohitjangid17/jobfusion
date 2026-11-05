
import {
    ArrowRightOutlined,
    CheckCircleFilled,
    TeamOutlined,
    FileSearchOutlined,
    CalendarOutlined,
    BarChartOutlined,
    SafetyCertificateOutlined,
    UserOutlined,
    AppstoreOutlined,
    SearchOutlined,
    BellOutlined,
    FilterOutlined,
    StarFilled,
    RocketOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const featureList = [
    {
        number: "01",
        icon: <FileSearchOutlined />,
        title: "Applicant Tracking System",
        description:
            "Manage your complete candidate journey through a structured recruitment pipeline. Keep applications, candidate details and hiring progress organized in one centralized workspace.",
        points: [
            "Centralized candidate profiles",
            "Application status tracking",
            "Candidate shortlisting",
            "Organized recruitment pipeline",
        ],
        color: "bg-indigo-50 text-[#635BFF]",
    },
    {
        number: "02",
        icon: <AppstoreOutlined />,
        title: "Job Management",
        description:
            "Create, organize and monitor job openings across your organization. Keep job information, requirements and application activity accessible to your recruitment team.",
        points: [
            "Create and manage job openings",
            "Organize job descriptions",
            "Track open and closed positions",
            "Monitor job application activity",
        ],
        color: "bg-blue-50 text-blue-600",
    },
    {
        number: "03",
        icon: <TeamOutlined />,
        title: "Candidate Management",
        description:
            "Build a centralized talent database where your team can review candidate profiles, track application history and manage candidate information.",
        points: [
            "Candidate profile management",
            "Resume and application records",
            "Candidate categorization",
            "Hiring history and progress",
        ],
        color: "bg-purple-50 text-purple-600",
    },
    {
        number: "04",
        icon: <CalendarOutlined />,
        title: "Interview Scheduling",
        description:
            "Coordinate interviews and keep recruiters, candidates and hiring managers aligned throughout the selection process.",
        points: [
            "Interview planning",
            "Interview status management",
            "Recruiter coordination",
            "Interview activity tracking",
        ],
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        number: "05",
        icon: <BarChartOutlined />,
        title: "Recruitment Analytics",
        description:
            "Get a clearer view of your hiring activities with organized recruitment insights, candidate pipeline visibility and job performance information.",
        points: [
            "Recruitment overview",
            "Candidate pipeline insights",
            "Job activity monitoring",
            "Hiring performance reports",
        ],
        color: "bg-amber-50 text-amber-600",
    },
    {
        number: "06",
        icon: <SafetyCertificateOutlined />,
        title: "Team Collaboration",
        description:
            "Bring recruiters, administrators and hiring managers together through a shared recruitment workspace with role-based access.",
        points: [
            "Role-based access control",
            "Recruiter management",
            "Shared candidate visibility",
            "Organized team workflows",
        ],
        color: "bg-pink-50 text-pink-600",
    },
];

const workflowSteps = [
    {
        number: "01",
        title: "Create a job",
        description: "Add job details, requirements and hiring information.",
        icon: <AppstoreOutlined />,
    },
    {
        number: "02",
        title: "Review applications",
        description: "Organize applicants and review their profiles.",
        icon: <FileSearchOutlined />,
    },
    {
        number: "03",
        title: "Schedule interviews",
        description: "Coordinate interviews with your hiring team.",
        icon: <CalendarOutlined />,
    },
    {
        number: "04",
        title: "Select candidates",
        description: "Track decisions and move candidates forward.",
        icon: <CheckCircleFilled />,
    },
];

const FeatureDashboard = () => {
    const pipeline = [
        {
            label: "Applied",
            count: 48,
            color: "bg-blue-500",
            width: "100%",
        },
        {
            label: "Screening",
            count: 32,
            color: "bg-purple-500",
            width: "72%",
        },
        {
            label: "Interview",
            count: 18,
            color: "bg-indigo-500",
            width: "48%",
        },
        {
            label: "Selected",
            count: 8,
            color: "bg-emerald-500",
            width: "25%",
        },
    ];

    const candidates = [
        {
            name: "Olivia Rhye",
            position: "Product Designer",
            status: "Interview",
            initials: "OR",
        },
        {
            name: "Phoenix Baker",
            position: "Frontend Developer",
            status: "Shortlisted",
            initials: "PB",
        },
        {
            name: "Lana Steiner",
            position: "UI/UX Designer",
            status: "Review",
            initials: "LS",
        },
    ];

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_25px_80px_-30px_rgba(99,91,255,0.25)]">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#635BFF] text-white">
                        <AppstoreOutlined />
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                        JobFusion
                    </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                    <SearchOutlined />
                    <BellOutlined />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                        JD
                    </div>
                </div>
            </div>

            <div className="bg-[#FAFAFC] p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-400">Workspace / Candidates</p>
                        <h3 className="mt-1 text-lg font-bold text-gray-900">
                            Recruitment Pipeline
                        </h3>
                    </div>
                    <button className="rounded-lg bg-[#635BFF] px-3 py-2 text-xs font-semibold text-white">
                        + Add Candidate
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                        ["Total Candidates", "248"],
                        ["Screening", "86"],
                        ["Interviews", "42"],
                        ["Selected", "18"],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="rounded-xl border border-gray-100 bg-white p-3"
                        >
                            <p className="text-[10px] text-gray-400">{label}</p>
                            <h4 className="mt-2 text-xl font-bold text-gray-900">
                                {value}
                            </h4>
                        </div>
                    ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <h4 className="mb-5 text-sm font-bold text-gray-900">
                            Candidate Pipeline
                        </h4>

                        {pipeline.map((item) => (
                            <div key={item.label} className="mb-5 last:mb-0">
                                <div className="mb-2 flex justify-between text-xs">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-800">
                                        {item.count}
                                    </span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-100">
                                    <div
                                        className={`h-full rounded-full ${item.color}`}
                                        style={{ width: item.width }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h4 className="text-sm font-bold text-gray-900">
                                Recent Candidates
                            </h4>
                            <FilterOutlined className="text-gray-400" />
                        </div>

                        {candidates.map((candidate) => (
                            <div
                                key={candidate.name}
                                className="flex items-center justify-between gap-2 border-t border-gray-50 py-3"
                            >
                                <div className="flex min-w-0 items-center gap-2">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-600">
                                        {candidate.initials}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-xs font-semibold text-gray-800">
                                            {candidate.name}
                                        </p>
                                        <p className="truncate text-[10px] text-gray-400">
                                            {candidate.position}
                                        </p>
                                    </div>
                                </div>
                                <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-medium text-indigo-600">
                                    {candidate.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <div className="overflow-hidden bg-white text-gray-900">

            {/* HERO */}
            <section className="relative bg-gradient-to-b from-[#F8F7FF] to-white">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-[100px]" />
                <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-100/60 blur-[100px]" />

                <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-20 text-center sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-[#635BFF] shadow-sm">
                        <StarFilled /> Powerful recruitment tools
                    </span>

                    <h1 className="mx-auto mt-7 max-w-[850px] text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-[62px]">
                        Everything you need to
                        <span className="text-[#635BFF]"> hire better.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-[680px] text-base leading-8 text-gray-500 sm:text-lg">
                        From job creation to final selection, JobFusion brings
                        every part of your recruitment process together in one
                        organized and collaborative workspace.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#635BFF] px-7 py-4 text-sm font-semibold text-white no-underline shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-[#5148E5]"
                        >
                            Get Started Free <ArrowRightOutlined />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 no-underline hover:bg-indigo-50"
                        >
                            Talk to our team
                        </a>
                    </div>

                    <div className="mx-auto mt-16 max-w-[920px] text-left">
                        <FeatureDashboard />
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-[700px] text-center">
                        <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
                            One connected workspace
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                            Recruitment management,
                            <span className="text-[#635BFF]"> made simple.</span>
                        </h2>
                        <p className="mt-5 text-base leading-8 text-gray-500">
                            Stop switching between disconnected tools. Organize
                            your hiring activities with a unified platform designed
                            around your recruitment workflow.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <FileSearchOutlined />,
                                title: "Applicant Tracking",
                                description: "Track candidates throughout every hiring stage.",
                                color: "bg-indigo-50 text-[#635BFF]",
                            },
                            {
                                icon: <AppstoreOutlined />,
                                title: "Job Management",
                                description: "Organize job openings and recruitment activities.",
                                color: "bg-blue-50 text-blue-600",
                            },
                            {
                                icon: <TeamOutlined />,
                                title: "Candidate Database",
                                description: "Keep candidate information centralized and accessible.",
                                color: "bg-purple-50 text-purple-600",
                            },
                            {
                                icon: <CalendarOutlined />,
                                title: "Interview Management",
                                description: "Coordinate interviews and hiring schedules.",
                                color: "bg-emerald-50 text-emerald-600",
                            },
                            {
                                icon: <BarChartOutlined />,
                                title: "Analytics and Reports",
                                description: "Understand hiring progress and recruitment activity.",
                                color: "bg-amber-50 text-amber-600",
                            },
                            {
                                icon: <SafetyCertificateOutlined />,
                                title: "Team Management",
                                description: "Keep your recruitment team connected and organized.",
                                color: "bg-pink-50 text-pink-600",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-100 p-7 transition-all hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/30"
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}>
                                    {item.icon}
                                </div>
                                <h3 className="mt-6 text-lg font-bold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DETAILED FEATURES */}
            {featureList.map((feature, index) => (
                <section
                    key={feature.number}
                    className={`py-20 sm:py-24 ${index % 2 === 1 ? "bg-[#FAFAFF]" : "bg-white"
                        }`}
                >
                    <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                            <div className="flex items-center gap-3">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <span className="text-xs font-bold tracking-widest text-[#635BFF]">
                                    FEATURE {feature.number}
                                </span>
                            </div>

                            <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                                {feature.title}
                            </h2>

                            <p className="mt-5 text-base leading-8 text-gray-500">
                                {feature.description}
                            </p>

                            <div className="mt-8 space-y-4">
                                {feature.points.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-center gap-3 text-sm font-medium text-gray-700"
                                    >
                                        <CheckCircleFilled className="text-[#635BFF]" />
                                        {point}
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/register"
                                className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#635BFF] no-underline hover:gap-4"
                            >
                                Get started <ArrowRightOutlined />
                            </a>
                        </div>

                        <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                            {index === 0 || index === 2 ? (
                                <FeatureDashboard />
                            ) : (
                                <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(99,91,255,0.25)] sm:p-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-bold text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <SettingOutlined className="text-gray-400" />
                                    </div>

                                    {index === 1 && (
                                        <div className="mt-7 space-y-3">
                                            {[
                                                ["Frontend Developer", "Engineering", "12 Applicants"],
                                                ["Product Designer", "Design", "24 Applicants"],
                                                ["Marketing Manager", "Marketing", "8 Applicants"],
                                                ["HR Specialist", "Human Resources", "16 Applicants"],
                                            ].map((job) => (
                                                <div key={job[0]} className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-4">
                                                    <div className="min-w-0">
                                                        <h4 className="truncate text-sm font-semibold text-gray-800">{job[0]}</h4>
                                                        <p className="mt-1 text-xs text-gray-400">{job[1]}</p>
                                                    </div>
                                                    <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold text-[#635BFF]">{job[2]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {index === 3 && (
                                        <div className="mt-7 space-y-4">
                                            {[
                                                ["Product Designer Interview", "Today · 10:30 AM"],
                                                ["Frontend Developer Interview", "Today · 02:00 PM"],
                                                ["Marketing Manager Interview", "Tomorrow · 11:00 AM"],
                                            ].map((meeting) => (
                                                <div key={meeting[0]} className="flex gap-4 rounded-xl border border-gray-100 p-4">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg text-[#635BFF]">
                                                        <CalendarOutlined />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-gray-800">{meeting[0]}</h4>
                                                        <p className="mt-2 text-xs text-gray-400">{meeting[1]}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {index === 4 && (
                                        <div className="mt-7 grid grid-cols-2 gap-3">
                                            {[
                                                ["Applications", "1,284"],
                                                ["Active Jobs", "36"],
                                                ["Interviews", "142"],
                                                ["Selected", "28"],
                                            ].map(([label, value]) => (
                                                <div key={label} className="rounded-xl bg-[#F8F7FF] p-5">
                                                    <p className="text-xs text-gray-500">{label}</p>
                                                    <h4 className="mt-2 text-2xl font-bold text-gray-900">{value}</h4>
                                                    <p className="mt-2 text-[10px] font-semibold text-emerald-600">Recruitment overview</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {index === 5 && (
                                        <div className="mt-7 space-y-4">
                                            {[
                                                ["John Smith", "Administrator", "Admin"],
                                                ["Sarah Wilson", "Talent Recruiter", "Recruiter"],
                                                ["David Miller", "Hiring Manager", "Member"],
                                            ].map((member) => (
                                                <div key={member[0]} className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-[#635BFF]">
                                                            <UserOutlined />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-gray-800">{member[0]}</h4>
                                                            <p className="text-xs text-gray-400">{member[1]}</p>
                                                        </div>
                                                    </div>
                                                    <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold text-indigo-600">{member[2]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            {/* WORKFLOW */}
            <section className="bg-white py-24 sm:py-28">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-[650px] text-center">
                        <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
                            Your hiring journey
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                            A smoother workflow,
                            <span className="text-[#635BFF]"> from start to finish.</span>
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {workflowSteps.map((step) => (
                            <div key={step.number} className="rounded-2xl border border-gray-100 p-7 hover:border-indigo-200 hover:shadow-lg">
                                <span className="text-3xl font-bold text-indigo-100">{step.number}</span>
                                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl text-[#635BFF]">
                                    {step.icon}
                                </div>
                                <h3 className="mt-6 text-base font-bold text-gray-900">{step.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-24 sm:px-8 lg:px-10">
                <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-[#635BFF] px-6 py-16 text-center sm:px-12 sm:py-20">
                    <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
                    <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

                    <div className="relative mx-auto max-w-[650px]">
                        <RocketOutlined className="text-4xl text-white" />
                        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                            Everything your team needs to hire better.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-indigo-100 sm:text-base">
                            Bring your hiring workflow together and create a more organized recruitment experience with JobFusion.
                        </p>

                        <a
                            href="/register"
                            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#635BFF] no-underline transition-all hover:-translate-y-1 hover:bg-indigo-50"
                        >
                            Get Started Free <ArrowRightOutlined />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
