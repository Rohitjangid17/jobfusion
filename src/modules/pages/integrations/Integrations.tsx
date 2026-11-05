
import { useState } from "react";
import {
  ArrowRightOutlined,
  ApiOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  CloudSyncOutlined,
  CodeOutlined,
  DownOutlined,
  GlobalOutlined,
  LinkOutlined,
  MailOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Collapse, Tag } from "antd";
import type { CollapseProps } from "antd";
import { Link } from "react-router-dom";

const integrations = [
  {
    category: "Communication",
    title: "Google Workspace",
    description: "Connect Gmail, Google Calendar, and Drive to organize your hiring activities.",
    icon: <MailOutlined />,
    color: "#4285F4",
    bg: "#EEF4FF",
    tags: ["Email", "Calendar", "Storage"],
  },
  {
    category: "Communication",
    title: "Slack",
    description: "Keep your recruitment team updated with hiring notifications and activities.",
    icon: <MessageOutlined />,
    color: "#611F69",
    bg: "#F8EFF9",
    tags: ["Messaging", "Notifications"],
  },
  {
    category: "Communication",
    title: "Microsoft Teams",
    description: "Collaborate with your hiring team and coordinate recruitment discussions.",
    icon: <MessageOutlined />,
    color: "#6264A7",
    bg: "#F0F0FF",
    tags: ["Collaboration", "Messaging"],
  },
  {
    category: "Interview",
    title: "Zoom",
    description: "Make interview coordination easier with video meeting workflows.",
    icon: <VideoCameraOutlined />,
    color: "#2D8CFF",
    bg: "#EEF6FF",
    tags: ["Video", "Interviews"],
  },
  {
    category: "Interview",
    title: "Google Meet",
    description: "Coordinate virtual interviews and manage your interview schedule.",
    icon: <CalendarOutlined />,
    color: "#00897B",
    bg: "#E9F8F5",
    tags: ["Meetings", "Scheduling"],
  },
  {
    category: "Job Boards",
    title: "LinkedIn",
    description: "Support your recruitment workflow with professional hiring channels.",
    icon: <GlobalOutlined />,
    color: "#0A66C2",
    bg: "#EAF3FB",
    tags: ["Recruitment", "Professional"],
  },
  {
    category: "Job Boards",
    title: "Indeed",
    description: "Organize job distribution workflows and candidate sourcing activities.",
    icon: <GlobalOutlined />,
    color: "#2164F3",
    bg: "#EEF2FF",
    tags: ["Job Board", "Sourcing"],
  },
];

const categories = [
  "All Integrations",
  "Communication",
  "Interview",
  "Job Boards",
];

const workflow = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "Choose the tools your team already uses and connect them to your recruitment workspace.",
    icon: <LinkOutlined />,
  },
  {
    number: "02",
    title: "Sync your workflow",
    description:
      "Bring relevant hiring activities and information together in one organized place.",
    icon: <CloudSyncOutlined />,
  },
  {
    number: "03",
    title: "Work smarter",
    description:
      "Spend less time switching between tools and more time finding the right candidates.",
    icon: <ThunderboltOutlined />,
  },
];

const developerFeatures = [
  {
    icon: <ApiOutlined />,
    title: "REST API",
    description: "Build custom connections with structured API endpoints.",
  },
  {
    icon: <CodeOutlined />,
    title: "Webhooks",
    description: "Receive event notifications when important actions happen.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Secure Access",
    description: "Design integrations with secure authentication practices.",
  },
];

const faqItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Are integrations available on every plan?",
    children:
      "Integration availability may depend on the selected subscription plan. Check the pricing details for the latest plan information.",
  },
  {
    key: "2",
    label: "Can I connect my own applications?",
    children:
      "Custom integrations can be explored through the JobFusion API and webhook capabilities, subject to implementation and access availability.",
  },
  {
    key: "3",
    label: "Does JobFusion support custom APIs?",
    children:
      "JobFusion is designed with developer-friendly integration capabilities. Custom API connections can be planned based on your requirements.",
  },
  {
    key: "4",
    label: "Are these integrations currently active?",
    children:
      "The integrations shown on this page represent the planned integration ecosystem. Individual connections will become available as they are developed and released.",
  },
];

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState("All Integrations");

  const filteredIntegrations =
    activeCategory === "All Integrations"
      ? integrations
      : integrations.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="overflow-hidden bg-white text-[#17172B]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F7F6FF]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#635BFF]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2">

          <div>
            <Tag
              color="purple"
              className="mb-6 rounded-full border-0 px-4 py-2 text-sm"
            >
              <LinkOutlined className="mr-2" />
              Connected Hiring Ecosystem
            </Tag>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#17172B] sm:text-5xl lg:text-[58px]">
              All your hiring tools,
              <span className="text-[#635BFF]">
                {" "}working together.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
              Bring your recruitment workflow together with the tools
              your team uses every day. Connect your workspace and
              create a more organized hiring experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                type="primary"
                size="large"
                className="!h-12 !rounded-xl !bg-[#635BFF] !px-7 !font-semibold shadow-lg shadow-[#635BFF]/20"
                onClick={() =>
                  document.getElementById("integration-list")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Integrations <ArrowRightOutlined />
              </Button>

              <Link to="/contact">
                <Button
                  size="large"
                  className="!h-12 !rounded-xl !border-gray-200 !px-7 !font-semibold"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>
                <CheckCircleFilled className="mr-2 text-[#635BFF]" />
                Centralized workflow
              </span>
              <span>
                <CheckCircleFilled className="mr-2 text-[#635BFF]" />
                Developer friendly
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-[32px] border border-white bg-white p-6 shadow-2xl shadow-[#635BFF]/10 md:p-9">

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-400">
                    JOBFUSION WORKSPACE
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Connected ecosystem
                  </h3>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                  <span className="mr-1">●</span> Concept
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {integrations.slice(0, 6).map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:bg-[#F7F6FF]"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                      style={{
                        backgroundColor: item.bg,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="mt-3 text-center text-xs font-semibold text-gray-600">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-7 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#635BFF] text-xl text-white shadow-lg shadow-[#635BFF]/30">
                  <LinkOutlined />
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="rounded-2xl border border-[#635BFF]/10 bg-[#F7F6FF] p-5 text-center">
                <h3 className="text-lg font-bold text-[#635BFF]">
                  JobFusion
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your centralized recruitment platform
                </p>
              </div>
            </div>

            <div className="absolute -right-3 top-16 hidden rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-semibold text-gray-700">
                Connected tools
              </p>
              <p className="mt-1 text-lg font-bold text-[#635BFF]">
                07+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION LIST */}
      <section
        id="integration-list"
        className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Tag color="purple" className="rounded-full border-0 px-4 py-1.5">
            Integrations
          </Tag>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Your favorite tools,
            <span className="text-[#635BFF]"> one workspace.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Explore the tools and platforms that can become part of
            your connected recruitment ecosystem.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#635BFF] text-white shadow-lg shadow-[#635BFF]/20"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-[#635BFF] hover:text-[#635BFF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* INTEGRATION CARDS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#635BFF]/30 hover:shadow-xl hover:shadow-[#635BFF]/5"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <Tag className="rounded-full border-0 bg-[#F7F6FF] px-3 py-1 text-[#635BFF]">
                  Planned
                </Tag>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#635BFF]">
                {item.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#17172B]">
                {item.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-sm font-medium text-gray-400">
                  Learn more
                </span>
                <ArrowRightOutlined className="text-[#635BFF] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F6FF] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Tag color="purple" className="rounded-full border-0 px-4 py-1.5">
              Simple Process
            </Tag>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              How integrations work
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              A connected recruitment experience starts with a simple
              workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {workflow.map((item, index) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-white bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0EEFF] text-2xl text-[#635BFF]">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-bold text-[#E8E6FF]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                {index !== 2 && (
                  <div className="absolute -right-5 top-14 z-10 hidden text-xl text-[#635BFF] md:block">
                    <ArrowRightOutlined />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2">
        <div>
          <Tag color="purple" className="rounded-full border-0 px-4 py-1.5">
            Built for Developers
          </Tag>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Build your own
            <span className="text-[#635BFF]"> integrations.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            Extend your recruitment ecosystem with developer-friendly
            capabilities. Create custom workflows and connect your
            existing business applications.
          </p>

          <div className="mt-9 space-y-6">
            {developerFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EEFF] text-xl text-[#635BFF]">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/contact">
            <Button
              type="primary"
              size="large"
              className="!mt-9 !h-12 !rounded-xl !bg-[#635BFF] !px-7"
            >
              Discuss an Integration <ArrowRightOutlined />
            </Button>
          </Link>
        </div>

        {/* CODE VISUAL */}
        <div className="overflow-hidden rounded-3xl bg-[#17172B] shadow-2xl shadow-[#17172B]/20">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-gray-400">
              integration-example.ts
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-8 md:p-9">
            <p className="text-purple-300">
              {"// Example integration workflow"}
            </p>
            <p>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">jobFusion</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
            </p>
            <p className="pl-5">
              <span className="text-blue-300">platform</span>
              <span className="text-white">:</span>{" "}
              <span className="text-green-300">"JobFusion"</span>,
            </p>
            <p className="pl-5">
              <span className="text-blue-300">integration</span>
              <span className="text-white">:</span>{" "}
              <span className="text-green-300">"Custom API"</span>,
            </p>
            <p className="pl-5">
              <span className="text-blue-300">webhooks</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">true</span>,
            </p>
            <p className="pl-5">
              <span className="text-blue-300">secure</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">true</span>,
            </p>
            <p>
              <span className="text-yellow-300">{"}"}</span>;
            </p>
            <br />
            <p>
              <span className="text-pink-400">export default</span>{" "}
              <span className="text-blue-300">jobFusion</span>;
            </p>
          </div>

          <div className="mx-6 mb-6 rounded-xl border border-white/10 bg-white/5 p-4 md:mx-9">
            <div className="flex items-center gap-3">
              <CheckCircleFilled className="text-green-400" />
              <span className="text-sm text-gray-300">
                Example developer configuration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAFF] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Tag color="purple" className="rounded-full border-0 px-4 py-1.5">
              FAQ
            </Tag>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-gray-500">
              Everything you need to know about JobFusion integrations.
            </p>
          </div>

          <div className="mt-10">
            <Collapse
              items={faqItems}
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <DownOutlined
                  rotate={isActive ? 180 : 0}
                  className="text-[#635BFF]"
                />
              )}
              className="!bg-transparent"
              size="large"
            />
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
              Connect Your Ecosystem
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Bring your recruitment ecosystem together.
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              Simplify your hiring workflow and create a more
              connected experience with JobFusion.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="large"
                  className="!h-12 !rounded-xl !border-0 !px-7 !font-semibold !text-[#635BFF]"
                >
                  Talk to Our Team <ArrowRightOutlined />
                </Button>
              </Link>

              <Link to="/pricing">
                <Button
                  size="large"
                  ghost
                  className="!h-12 !rounded-xl !px-7 !font-semibold"
                >
                  Explore Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Integrations;
