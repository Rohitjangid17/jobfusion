
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CheckOutlined,
  TeamOutlined,
  FileSearchOutlined,
  CalendarOutlined,
  BarChartOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  PlayCircleOutlined,
  RiseOutlined,
  MoreOutlined,
  SearchOutlined,
  BellOutlined,
  StarFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";

// --------------------------------------------------
// DATA
// --------------------------------------------------

const trustedCompanies = [
  "ACME",
  "NEXORA",
  "vertex",
  "Cloudly",
  "Spheria",
];

const features = [
  {
    icon: <FileSearchOutlined />,
    title: "Smart Applicant Tracking",
    description:
      "Manage every candidate from application to offer with a centralized recruitment pipeline.",
    color: "bg-indigo-50 text-[#635BFF]",
  },
  {
    icon: <TeamOutlined />,
    title: "Candidate Management",
    description:
      "Organize candidate profiles, resumes, communication and hiring history in one place.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <CalendarOutlined />,
    title: "Interview Scheduling",
    description:
      "Coordinate interviews, manage schedules and keep your hiring team aligned.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <BarChartOutlined />,
    title: "Recruitment Analytics",
    description:
      "Track hiring performance, discover trends and make data-driven decisions.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Hiring Automation",
    description:
      "Reduce repetitive work and streamline your recruitment workflow.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Team Collaboration",
    description:
      "Work together with recruiters and hiring managers through shared workflows.",
    color: "bg-pink-50 text-pink-600",
  },
];

const steps = [
  {
    number: "01",
    icon: <UserAddOutlined />,
    title: "Create your workspace",
    description:
      "Set up your organization and invite your recruitment team to JobFusion.",
  },
  {
    number: "02",
    icon: <AppstoreOutlined />,
    title: "Publish job openings",
    description:
      "Create job listings and organize all your open positions in one dashboard.",
  },
  {
    number: "03",
    icon: <TeamOutlined />,
    title: "Manage candidates",
    description:
      "Review applications, shortlist talent and move candidates through your pipeline.",
  },
  {
    number: "04",
    icon: <CheckCircleFilled />,
    title: "Make better hires",
    description:
      "Collaborate with your team, schedule interviews and make confident decisions.",
  },
];

const testimonials = [
  {
    quote:
      "JobFusion gives our recruitment team a much clearer view of every candidate and every open position. It makes managing the hiring pipeline easier.",
    name: "Alex Morgan",
    role: "Talent Acquisition Manager",
    company: "TechFlow",
    initials: "AM",
  },
  {
    quote:
      "Having candidate management, job tracking and interview coordination in one workspace makes our hiring process much more organized.",
    name: "Sarah Williams",
    role: "HR Manager",
    company: "Nexora",
    initials: "SW",
  },
  {
    quote:
      "The centralized dashboard helps our hiring managers and recruiters stay connected throughout the recruitment process.",
    name: "David Miller",
    role: "Recruitment Lead",
    company: "Cloudly",
    initials: "DM",
  },
];

const faqs = [
  {
    question: "What is JobFusion?",
    answer:
      "JobFusion is an Applicant Tracking System (ATS) that helps businesses organize job openings, manage candidates, coordinate interviews and streamline recruitment workflows.",
  },
  {
    question: "Who can use JobFusion?",
    answer:
      "JobFusion is designed for recruitment agencies, HR teams, startups, growing businesses and organizations that want to manage their hiring process efficiently.",
  },
  {
    question: "Can multiple recruiters work together?",
    answer:
      "Yes. JobFusion is designed to support teams with role-based access and shared recruitment workflows.",
  },
  {
    question: "Can I manage multiple job openings?",
    answer:
      "Yes. You can organize multiple job openings, track applications and manage candidates across different hiring pipelines.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can create an account, set up your organization and start configuring your recruitment workspace.",
  },
];

// --------------------------------------------------
// DASHBOARD PREVIEW
// --------------------------------------------------

const DashboardPreview = () => {
  const stats = [
    {
      label: "Total Candidates",
      value: "2,840",
      change: "+12.8%",
      icon: <TeamOutlined />,
    },
    {
      label: "Active Jobs",
      value: "48",
      change: "+8.2%",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Interviews",
      value: "126",
      change: "+18.4%",
      icon: <CalendarOutlined />,
    },
  ];

  const candidates = [
    {
      name: "Olivia Rhye",
      role: "Product Designer",
      status: "Interview",
      color: "bg-purple-100 text-purple-700",
      initials: "OR",
    },
    {
      name: "Phoenix Baker",
      role: "Frontend Developer",
      status: "Shortlisted",
      color: "bg-emerald-100 text-emerald-700",
      initials: "PB",
    },
    {
      name: "Lana Steiner",
      role: "UI/UX Designer",
      status: "Review",
      color: "bg-amber-100 text-amber-700",
      initials: "LS",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[650px]">

      {/* Decorative elements */}
      <div className="absolute -right-5 -top-8 h-36 w-36 rounded-full bg-purple-200/50 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_30px_90px_-30px_rgba(79,70,229,0.28)]">

        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#635BFF] text-white">
              <AppstoreOutlined />
            </div>
            <span className="text-sm font-bold text-gray-900">
              JobFusion
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <SearchOutlined />
            <BellOutlined />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
              JD
            </div>
          </div>
        </div>

        <div className="flex">

          {/* Sidebar */}
          <aside className="hidden w-[145px] shrink-0 border-r border-gray-100 p-4 sm:block">
            <p className="mb-4 text-[9px] font-bold uppercase tracking-wider text-gray-400">
              Workspace
            </p>

            {[
              "Dashboard",
              "Jobs",
              "Candidates",
              "Interviews",
              "Analytics",
            ].map((item, index) => (
              <div
                key={item}
                className={`mb-2 flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] font-medium ${index === 0
                  ? "bg-indigo-50 text-[#635BFF]"
                  : "text-gray-500"
                  }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {item}
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <div className="min-w-0 flex-1 bg-[#FAFAFC] p-4 sm:p-5">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[9px] text-gray-400">
                  Workspace / Overview
                </p>
                <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                  Dashboard Overview
                </h3>
                <p className="mt-1 text-[9px] text-gray-400">
                  Welcome back, John! Here's your hiring overview.
                </p>
              </div>

              <button className="rounded-lg bg-[#635BFF] px-3 py-2 text-[9px] font-semibold text-white">
                + Add Job
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 bg-white p-2.5 sm:p-3"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-[#635BFF]">
                      {stat.icon}
                    </span>
                    <span className="hidden text-[8px] font-semibold text-emerald-600 sm:block">
                      {stat.change}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-gray-900 sm:text-lg">
                    {stat.value}
                  </h4>

                  <p className="mt-1 text-[8px] leading-3 text-gray-400 sm:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-xl border border-gray-100 bg-white p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-[11px] font-bold text-gray-800">
                    Hiring Activity
                  </h4>
                  <p className="mt-1 text-[8px] text-gray-400">
                    Candidate applications overview
                  </p>
                </div>
                <span className="rounded-md border border-gray-100 px-2 py-1 text-[8px] text-gray-500">
                  Last 7 days
                </span>
              </div>

              <div className="flex h-[105px] items-end justify-between gap-2 border-b border-gray-100 px-1">
                {[38, 58, 45, 78, 55, 90, 72, 100, 68, 85, 60, 95].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="w-full rounded-t-sm bg-gradient-to-t from-[#635BFF] to-[#A5A0FF]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

              <div className="mt-2 flex justify-between text-[8px] text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Candidate Table */}
            <div className="mt-3 overflow-hidden rounded-xl border border-gray-100 bg-white p-3">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-[11px] font-bold text-gray-800">
                  Recent Candidates
                </h4>
                <span className="text-[9px] font-semibold text-[#635BFF]">
                  View all
                </span>
              </div>

              {candidates.map((candidate) => (
                <div
                  key={candidate.name}
                  className="flex items-center justify-between border-t border-gray-50 py-2"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[8px] font-bold text-indigo-600">
                      {candidate.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-semibold text-gray-800">
                        {candidate.name}
                      </p>
                      <p className="truncate text-[8px] text-gray-400">
                        {candidate.role}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-[8px] font-medium ${candidate.color}`}
                  >
                    {candidate.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-xl sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <CheckOutlined />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-900">
            New candidate shortlisted
          </p>
          <p className="mt-1 text-[9px] text-gray-400">
            Your hiring pipeline is updated
          </p>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------
// MAIN HOMEPAGE
// --------------------------------------------------

const Home = () => {
  return (
    <div className="overflow-hidden bg-white text-gray-900">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F7FF] via-white to-white">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-indigo-100/60 blur-[100px]" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pb-32 lg:pt-28">

          {/* Hero Content */}
          <div className="max-w-[590px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
              <span className="text-xs font-semibold text-[#635BFF] sm:text-sm">
                The smarter way to recruit
              </span>
              <ArrowRightOutlined className="text-xs text-[#635BFF]" />
            </div>

            <h1 className="text-[42px] font-bold leading-[1.12] tracking-[-1.8px] text-gray-950 sm:text-[54px] lg:text-[62px]">
              Hire smarter.
              <br />
              Build stronger
              <span className="relative ml-2 inline-block text-[#635BFF]">
                teams.
              </span>
            </h1>

            <p className="mt-7 max-w-[510px] text-base leading-8 text-gray-500 sm:text-lg">
              Simplify your entire recruitment journey with JobFusion.
              Manage jobs, discover great talent, track candidates and
              collaborate with your team — all in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/request-demo"
                className="inline-flex h-13 items-center justify-center gap-3 rounded-xl bg-[#635BFF] px-7 py-4 text-sm font-semibold text-white no-underline shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5148E5]"
              >
                Request a Demo
                <ArrowRightOutlined />
              </a>

              <a
                href="/features"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 no-underline transition-all hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore Features
                <PlayCircleOutlined className="text-[#635BFF]" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                "Easy to use",
                "Team collaboration",
                "Centralized hiring",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-gray-500"
                >
                  <CheckCircleFilled className="text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Dashboard */}
          <div className="relative px-2 py-5 sm:px-5">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* ==========================================
          TRUSTED BY SECTION
      ========================================== */}

      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-400">
            Built for modern recruitment teams
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-7 sm:gap-x-16">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-xl font-bold tracking-tight text-gray-300 transition-colors hover:text-[#635BFF] sm:text-2xl"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURES SECTION
      ========================================== */}

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-[650px] text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
              Everything you need
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-[44px]">
              One platform.
              <br />
              <span className="text-[#635BFF]">
                Complete hiring control.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-500">
              Bring your entire recruitment workflow together with
              powerful tools designed to make hiring more organized,
              collaborative and efficient.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-[0_15px_40px_-20px_rgba(99,91,255,0.25)] sm:p-8"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#635BFF] opacity-0 transition-all group-hover:opacity-100">
                  Learn more <ArrowRightOutlined />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          WORKFLOW SECTION
      ========================================== */}

      <section className="bg-[#F8F7FF] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-[650px] text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
              How it works
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              From job opening to
              <span className="text-[#635BFF]"> great hire.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-500">
              A simple, structured recruitment journey that keeps
              everyone on the same page.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="rounded-2xl border border-indigo-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl text-[#635BFF]">
                      {step.icon}
                    </div>

                    <span className="text-3xl font-bold text-indigo-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 z-10 hidden -translate-y-1/2 text-lg text-[#A5A0FF] lg:block">
                    <ArrowRightOutlined />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ANALYTICS SECTION
      ========================================== */}

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

          <div>
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
              Insights that matter
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-[44px]">
              Turn recruitment data into
              <span className="text-[#635BFF]"> better decisions.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-500">
              Get a clearer picture of your hiring process with
              recruitment analytics. Understand your pipeline,
              monitor progress and identify opportunities to
              improve your hiring workflow.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Monitor candidate pipeline activity",
                "Track job and recruitment progress",
                "Understand your team's hiring performance",
                "Make informed recruitment decisions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-gray-700"
                >
                  <CheckCircleFilled className="text-lg text-[#635BFF]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/features"
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#635BFF] no-underline hover:gap-4"
            >
              Explore all features <ArrowRightOutlined />
            </a>
          </div>

          {/* Analytics Card */}
          <div className="relative rounded-3xl border border-gray-100 bg-[#FAFAFF] p-5 sm:p-8">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-purple-100 blur-3xl" />

            <div className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-indigo-100/40 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Recruitment Insights
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Your hiring overview
                  </p>
                </div>

                <BarChartOutlined className="text-2xl text-[#635BFF]" />
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-indigo-50 p-4">
                  <p className="text-xs text-gray-500">
                    Total Applications
                  </p>
                  <h4 className="mt-2 text-2xl font-bold text-gray-900">
                    1,284
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">
                    <RiseOutlined /> +14.5%
                  </p>
                </div>

                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-xs text-gray-500">
                    Open Positions
                  </p>
                  <h4 className="mt-2 text-2xl font-bold text-gray-900">
                    36
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">
                    <RiseOutlined /> +8.2%
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-gray-100 p-4">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-800">
                    Candidate Pipeline
                  </h4>
                  <MoreOutlined className="text-gray-400" />
                </div>

                {[
                  { name: "Applied", count: 840, width: "100%", color: "bg-indigo-500" },
                  { name: "Screening", count: 520, width: "70%", color: "bg-purple-500" },
                  { name: "Interview", count: 310, width: "48%", color: "bg-blue-500" },
                  { name: "Selected", count: 145, width: "28%", color: "bg-emerald-500" },
                ].map((item) => (
                  <div key={item.name} className="mb-5 last:mb-0">
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="font-medium text-gray-600">
                        {item.name}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {item.count}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckCircleFilled />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Pipeline overview
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    All your recruitment stages in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          BENEFITS SECTION
      ========================================== */}

      <section className="border-y border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: <ClockCircleOutlined />,
                title: "Less manual work",
                description: "Spend less time managing repetitive recruitment tasks.",
              },
              {
                icon: <TeamOutlined />,
                title: "Better teamwork",
                description: "Keep recruiters and hiring managers connected.",
              },
              {
                icon: <BarChartOutlined />,
                title: "Clearer insights",
                description: "Understand your hiring pipeline with organized data.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl text-[#635BFF]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS SECTION
      ========================================== */}

      <section className="bg-[#F8F7FF] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-[650px] text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
              Testimonials
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Designed for teams
              <span className="text-[#635BFF]"> that hire.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-500">
              A better recruitment experience starts with a better
              organized hiring process.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-indigo-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-1 text-sm text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarFilled key={index} />
                  ))}
                </div>

                <p className="mt-6 min-h-[120px] text-sm leading-7 text-gray-600">
                  "{item.quote}"
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-[#635BFF]">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
      ========================================== */}

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl text-[#635BFF]">
              <QuestionCircleOutlined />
            </div>

            <span className="mt-7 block text-xs font-bold uppercase tracking-[2px] text-[#635BFF]">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Got questions?
              <br />
              We've got answers.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Everything you need to know about getting started
              with JobFusion and managing your recruitment workflow.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#635BFF] no-underline hover:gap-3"
            >
              Contact our team <ArrowRightOutlined />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-xl border border-gray-200 bg-white p-5 open:border-indigo-200 open:bg-[#FCFBFF]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900">
                  {faq.question}

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[#635BFF] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 pr-8 text-sm leading-7 text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FINAL CTA SECTION
      ========================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-[#635BFF] px-6 py-16 text-center sm:px-12 sm:py-20">

          <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

          <div className="relative mx-auto max-w-[650px]">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
              Your next great hire starts here
            </span>

            <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to make hiring
              <br className="hidden sm:block" />
              simpler and smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-[500px] text-sm leading-7 text-indigo-100 sm:text-base">
              Bring your recruitment team, candidates and hiring
              workflow together with JobFusion.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/request-demo"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#635BFF] no-underline transition-all hover:-translate-y-1 hover:bg-indigo-50"
              >
                Request a Demo <ArrowRightOutlined />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white no-underline transition-all hover:bg-white/10"
              >
                Talk to our team
              </a>
            </div>

            <p className="mt-6 text-xs text-indigo-100">
              Organize your hiring. Empower your team. Find great talent.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
