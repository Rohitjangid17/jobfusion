
import React, { useMemo, useState } from "react";
import { ArrowRightOutlined, BulbOutlined, HeartOutlined, RocketOutlined, TeamOutlined, TrophyOutlined, BookOutlined, ClockCircleOutlined, EnvironmentOutlined, LaptopOutlined, SafetyCertificateOutlined, SearchOutlined, SmileOutlined, ThunderboltOutlined, UserOutlined, } from "@ant-design/icons";
import { Button, Card, Input, Select, Tag, Empty, } from "antd";

const { Option } = Select;

const values = [
  {
    icon: <BulbOutlined />,
    title: "Think Different",
    description:
      "We encourage fresh ideas, creative thinking, and challenging the ordinary.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: <TeamOutlined />,
    title: "Work Together",
    description:
      "Great things happen when talented people collaborate and support each other.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <RocketOutlined />,
    title: "Own Your Impact",
    description:
      "Take ownership, make meaningful decisions, and see your ideas come to life.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: <TrophyOutlined />,
    title: "Grow Every Day",
    description:
      "We believe in continuous learning, personal development, and professional growth.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const benefits = [
  {
    icon: <LaptopOutlined />,
    title: "Flexible Working",
    description: "Work in an environment that supports your productivity.",
  },
  {
    icon: <BookOutlined />,
    title: "Learning & Development",
    description: "Access opportunities to develop your skills and knowledge.",
  },
  {
    icon: <HeartOutlined />,
    title: "Health & Wellbeing",
    description: "A supportive environment that values your wellbeing.",
  },
  {
    icon: <ClockCircleOutlined />,
    title: "Work-Life Balance",
    description: "Build a sustainable career while enjoying life outside work.",
  },
  {
    icon: <RocketOutlined />,
    title: "Career Growth",
    description: "Take on exciting challenges and grow with the company.",
  },
  {
    icon: <TeamOutlined />,
    title: "Amazing People",
    description: "Collaborate with passionate and talented individuals.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3–5 Years",
    category: "Engineering",
    description:
      "Build beautiful, scalable, and high-performance user experiences.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    experience: "2–4 Years",
    category: "Engineering",
    description:
      "Design robust APIs and scalable backend infrastructure.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2–3 Years",
    category: "Design",
    description:
      "Create intuitive and engaging experiences for modern products.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    id: 4,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    experience: "3–5 Years",
    category: "Marketing",
    description:
      "Shape product positioning and build meaningful customer connections.",
    tags: ["Marketing", "Strategy", "Growth"],
  },
];

const Careers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesDepartment =
        department === "All Departments" ||
        job.category === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#10162B]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>
            <Tag className="!mb-6 !rounded-full !border-white/10 !bg-white/10 !px-4 !py-1.5 !text-violet-200">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
              YOUR NEXT CHAPTER STARTS HERE
            </Tag>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build something
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Join a team of passionate thinkers, creators, and innovators.
              At JobFusion, your ideas matter and your work makes a difference.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                type="primary"
                size="large"
                className="!h-12 !rounded-xl !border-0 !bg-violet-600 !px-7 !font-semibold hover:!bg-violet-500"
                onClick={() =>
                  document.getElementById("open-positions")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Open Roles <ArrowRightOutlined />
              </Button>

              <Button
                size="large"
                className="!h-12 !rounded-xl !border-white/20 !bg-white/5 !px-7 !text-white hover:!border-white hover:!bg-white/10 hover:!text-white"
                onClick={() =>
                  document.getElementById("our-culture")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Discover Our Culture
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">People</p>
                <p className="mt-1 text-sm text-slate-400">Come first</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Ideas</p>
                <p className="mt-1 text-sm text-slate-400">Make an impact</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Growth</p>
                <p className="mt-1 text-sm text-slate-400">Without limits</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1100&q=85"
              alt="Team collaborating in a modern workspace"
              className="relative h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[480px]"
            />

            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-600">
                  <SmileOutlined />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Make an impact</p>
                  <p className="text-xs text-slate-500">
                    Do work that matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <Tag color="purple" className="!rounded-full !px-4 !py-1">
              WHY JOBFUSION
            </Tag>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              More than a workplace.
              <span className="block text-violet-600">
                A place to make a difference.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We believe great work starts with great people. We are building
              an environment where creativity, collaboration, and ambition
              come together to solve meaningful problems.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you're an experienced professional or just beginning
              your journey, we want to help you unlock your potential and
              create something you're proud of.
            </p>

            <a
              href="#our-values"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-700"
            >
              Discover our values <ArrowRightOutlined />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Team collaboration"
              className="h-56 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80"
              alt="Modern workspace"
              className="mt-10 h-56 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
              alt="Team meeting"
              className="-mt-10 h-56 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80"
              alt="Team working together"
              className="h-56 w-full rounded-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section id="our-values" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Tag color="purple" className="!rounded-full !px-4 !py-1">
              WHAT DRIVES US
            </Tag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              The values that bring us together
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              Our values shape how we think, work, collaborate, and grow
              together every day.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                bordered={false}
                className="!h-full !rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-500">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CULTURE */}
      <section id="our-culture" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <Tag color="purple" className="!rounded-full !px-4 !py-1">
              LIFE AT JOBFUSION
            </Tag>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Great people.
              <span className="block text-violet-600">
                Meaningful experiences.
              </span>
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              We believe a great workplace is built on trust, respect,
              curiosity, and the freedom to bring your best ideas forward.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "An inclusive and collaborative environment",
                "Space to experiment and share new ideas",
                "Opportunities to learn from one another",
                "Recognition for meaningful contributions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <SafetyCertificateOutlined className="mt-1 text-lg text-violet-600" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000&q=85"
              alt="People enjoying time together"
              className="h-[440px] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-5 right-5 rounded-2xl bg-white p-5 shadow-xl sm:right-10">
              <p className="text-sm font-semibold text-slate-900">
                Better together
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Building a culture of collaboration.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#10162B] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Tag className="!rounded-full !border-white/10 !bg-white/10 !px-4 !py-1 !text-violet-200">
              PERKS & BENEFITS
            </Tag>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Your growth matters to us
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              We want you to feel supported, motivated, and empowered
              throughout your career journey.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all hover:border-violet-400/50 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300">
                  {benefit.icon}
                </div>
                <h3 className="mt-5 font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Tag color="purple" className="!rounded-full !px-4 !py-1">
                JOIN OUR TEAM
              </Tag>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Find your next opportunity
              </h2>
              <p className="mt-3 text-slate-500">
                Explore opportunities and find a role where you can thrive.
              </p>
            </div>

            <p className="text-sm font-medium text-slate-500">
              {filteredJobs.length} opportunities available
            </p>
          </div>

          {/* FILTERS */}
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">
            <Input
              size="large"
              prefix={<SearchOutlined className="text-slate-400" />}
              placeholder="Search job title or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="!rounded-xl"
            />

            <Select
              size="large"
              value={department}
              onChange={setDepartment}
              className="w-full sm:!w-64"
            >
              <Option value="All Departments">All Departments</Option>
              <Option value="Engineering">Engineering</Option>
              <Option value="Design">Design</Option>
              <Option value="Marketing">Marketing</Option>
            </Select>
          </div>

          {/* JOB LIST */}
          <div className="mt-8 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  bordered={false}
                  className="!rounded-2xl !border !border-slate-200 !shadow-none transition-all hover:!border-violet-200 hover:!shadow-lg"
                >
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {job.title}
                        </h3>
                        <Tag color="purple">{job.department}</Tag>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {job.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
                        <span>
                          <EnvironmentOutlined className="mr-2" />
                          {job.location}
                        </span>
                        <span>
                          <ClockCircleOutlined className="mr-2" />
                          {job.type}
                        </span>
                        <span>
                          <UserOutlined className="mr-2" />
                          {job.experience}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <Tag
                            key={tag}
                            className="!rounded-full !border-0 !bg-slate-100 !px-3 !py-1 !text-slate-600"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Button
                        type="primary"
                        size="large"
                        className="!h-11 !w-full !rounded-xl !bg-violet-600 !px-6 hover:!bg-violet-500 sm:!w-auto"
                        href={`/careers/${job.id}`}
                      >
                        Apply Now <ArrowRightOutlined />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white py-16">
                <Empty
                  description={
                    <span className="text-slate-500">
                      No positions found. Try another search.
                    </span>
                  }
                />
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 px-7 py-16 text-center sm:px-12">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white">
              <ThunderboltOutlined />
            </div>

            <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl">
              Don't see the right role?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
              We're always excited to connect with talented people.
              Share your profile with us and let's explore what's possible.
            </p>

            <Button
              size="large"
              className="!mt-8 !h-12 !rounded-xl !border-0 !bg-white !px-8 !font-semibold !text-violet-700 hover:!bg-violet-50"
              href="mailto:careers@jobfusion.com"
            >
              Send Your Resume <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Careers;
