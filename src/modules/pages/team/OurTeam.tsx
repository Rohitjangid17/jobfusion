
import {
    ArrowRightOutlined,
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined,
    HeartOutlined,
    RocketOutlined,
    SafetyCertificateOutlined,
    TeamOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";

import { Tag } from "antd";

const teamMembers = [
    {
        name: "Alex Morgan",
        role: "Chief Executive Officer",
        description:
            "Building a better future for recruitment through innovation and technology.",
        initials: "AM",
        color: "from-violet-500 to-indigo-600",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Sarah Williams",
        role: "Head of Product",
        description:
            "Creating intuitive experiences that simplify everyday hiring challenges.",
        initials: "SW",
        color: "from-pink-500 to-rose-500",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Daniel Carter",
        role: "Engineering Lead",
        description:
            "Turning complex recruitment workflows into powerful digital solutions.",
        initials: "DC",
        color: "from-blue-500 to-cyan-500",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Emily Johnson",
        role: "Head of Design",
        description:
            "Making recruitment software simple, accessible and enjoyable to use.",
        initials: "EJ",
        color: "from-orange-400 to-pink-500",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Michael Brown",
        role: "Marketing Lead",
        description:
            "Connecting organizations with smarter ways to find great talent.",
        initials: "MB",
        color: "from-emerald-500 to-teal-500",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Olivia Davis",
        role: "Customer Success Lead",
        description:
            "Helping customers get the best possible experience from JobFusion.",
        initials: "OD",
        color: "from-purple-500 to-fuchsia-500",
        linkedin: "#",
        github: "#",
    },
];

const values = [
    {
        icon: <HeartOutlined />,
        title: "People First",
        description:
            "We believe great products start with understanding the people who use them.",
    },
    {
        icon: <ThunderboltOutlined />,
        title: "Innovation",
        description:
            "We continuously explore better ideas to make recruitment smarter and faster.",
    },
    {
        icon: <TeamOutlined />,
        title: "Collaboration",
        description:
            "We achieve more by sharing ideas, supporting each other and working together.",
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: "Trust & Integrity",
        description:
            "We value transparency, responsibility and trust in everything we do.",
    },
];

const OurTeam = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#F7F6FF] px-5 py-24 sm:py-28">

                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">

                    <Tag color="purple" className="rounded-full px-4 py-1">
                        <TeamOutlined className="mr-1" />
                        OUR PEOPLE
                    </Tag>

                    <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-[#17172B] sm:text-5xl lg:text-6xl">
                        Meet the people
                        <span className="block text-[#635BFF]">
                            behind JobFusion.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        We're a team of passionate thinkers, builders and
                        innovators working together to make hiring simpler,
                        smarter and more human.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-4">
                        <a
                            href="/careers"
                            className="inline-flex items-center gap-3 rounded-xl bg-[#635BFF] px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5148E5]"
                        >
                            Join Our Team <ArrowRightOutlined />
                        </a>

                        <a
                            href="/about"
                            className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-[#17172B] transition hover:border-[#635BFF] hover:text-[#635BFF]"
                        >
                            About JobFusion
                        </a>
                    </div>

                </div>
            </section>

            {/* Team Introduction */}
            <section className="px-5 py-20">

                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#635BFF]">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17172B] sm:text-4xl">
                            Different minds.
                            <span className="block text-[#635BFF]">
                                One shared vision.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-gray-500">
                            JobFusion is built around the idea that hiring
                            should be easier for everyone. Our team brings
                            together different perspectives, skills and
                            experiences to create meaningful recruitment
                            solutions.
                        </p>

                        <p className="mt-5 leading-8 text-gray-500">
                            From product development to customer experience,
                            we work together to solve real hiring challenges
                            and build technology that makes a difference.
                        </p>

                        <div className="mt-8 flex items-center gap-3">
                            <RocketOutlined className="text-2xl text-[#635BFF]" />
                            <span className="font-semibold text-[#17172B]">
                                Building the future of hiring, together.
                            </span>
                        </div>
                    </div>

                    <div className="relative">

                        <div className="rounded-3xl bg-[#F0EEFF] p-8 sm:p-12">
                            <div className="grid grid-cols-2 gap-4">

                                {[
                                    { number: "01", label: "Think creatively" },
                                    { number: "02", label: "Build together" },
                                    { number: "03", label: "Stay curious" },
                                    { number: "04", label: "Make an impact" },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="rounded-2xl border border-white bg-white p-6 shadow-sm"
                                    >
                                        <span className="text-sm font-bold text-[#635BFF]">
                                            {item.number}
                                        </span>

                                        <h3 className="mt-5 text-lg font-bold text-[#17172B]">
                                            {item.label}
                                        </h3>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-[#635BFF] px-6 py-4 text-white shadow-xl sm:block">
                            <p className="text-sm font-semibold">
                                One Team. One Vision.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Team Members */}
            <section className="bg-[#FAFAFC] px-5 py-20">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto mb-14 max-w-2xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-widest text-[#635BFF]">
                            THE PEOPLE BEHIND THE PRODUCT
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-[#17172B] sm:text-4xl">
                            Meet our team
                        </h2>

                        <p className="mt-5 leading-7 text-gray-500">
                            A diverse group of people bringing ideas to life
                            and making JobFusion what it is.
                        </p>

                    </div>

                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {teamMembers.map((member) => (

                            <div
                                key={member.name}
                                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#635BFF]/30 hover:shadow-xl"
                            >

                                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F2F0FF]">

                                    <div className={`flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-4xl font-bold text-white shadow-xl ring-8 ring-white/60 transition-transform duration-500 group-hover:scale-110`}>
                                        {member.initials}
                                    </div>

                                    <div className="absolute bottom-4 right-4 flex gap-2">

                                        <a
                                            href={member.linkedin}
                                            aria-label={`${member.name} LinkedIn`}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-[#635BFF] hover:text-white"
                                        >
                                            <LinkedinOutlined />
                                        </a>

                                        <a
                                            href={member.github}
                                            aria-label={`${member.name} GitHub`}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-[#635BFF] hover:text-white"
                                        >
                                            <GithubOutlined />
                                        </a>

                                    </div>

                                </div>

                                <div className="p-7">

                                    <h3 className="text-xl font-bold text-[#17172B]">
                                        {member.name}
                                    </h3>

                                    <p className="mt-1 text-sm font-semibold text-[#635BFF]">
                                        {member.role}
                                    </p>

                                    <p className="mt-4 min-h-14 text-sm leading-6 text-gray-500">
                                        {member.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* Company Values */}
            <section className="px-5 py-20">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto mb-14 max-w-2xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-widest text-[#635BFF]">
                            WHAT DRIVES US
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-[#17172B] sm:text-4xl">
                            The values that unite us
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Our values guide how we work, collaborate
                            and build products.
                        </p>

                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {values.map((value) => (

                            <div
                                key={value.title}
                                className="rounded-2xl border border-gray-200 p-7 transition-all hover:-translate-y-1 hover:border-[#635BFF]/40 hover:shadow-lg"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0EEFF] text-xl text-[#635BFF]">
                                    {value.icon}
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-[#17172B]">
                                    {value.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {value.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* Careers CTA */}
            <section className="px-5 pb-20">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#17172B] px-7 py-16 text-center sm:px-16">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#A69FFF]">
                        <RocketOutlined />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                        Want to be part of our story?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
                        We're always excited to connect with passionate
                        people who want to build something meaningful.
                    </p>

                    <a
                        href="/careers"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#635BFF] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#5148E5]"
                    >
                        Explore Careers <ArrowRightOutlined />
                    </a>

                </div>

            </section>

            {/* Contact CTA */}
            <section className="px-5 pb-20">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 p-8 sm:flex-row">

                    <div>
                        <h3 className="text-xl font-bold text-[#17172B]">
                            Have questions for our team?
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            We'd love to hear from you. Let's start a conversation.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-[#635BFF] px-6 py-3 font-semibold text-[#635BFF] transition hover:bg-[#635BFF] hover:text-white"
                    >
                        <MailOutlined /> Get in Touch
                    </a>

                </div>

            </section>

        </main>
    );
};

export default OurTeam;
