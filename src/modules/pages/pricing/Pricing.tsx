
import { useState } from "react";
import {
    ArrowRightOutlined,
    CheckOutlined,
    CloseOutlined,
    CrownOutlined,
    RocketOutlined,
    ThunderboltOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";

const plans = [
    {
        name: "Free",
        description: "Perfect for individuals getting started with hiring.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        label: "Get started",
        features: [
            "1 active job posting",
            "Up to 50 candidates",
            "Basic candidate management",
            "Standard recruitment pipeline",
            "Basic dashboard",
            "Email support",
        ],
        unavailable: [
            "Advanced recruitment analytics",
            "Team collaboration",
            "Custom hiring workflows",
            "Priority support",
        ],
        popular: false,
        icon: <RocketOutlined />,
    },
    {
        name: "Professional",
        description: "Everything growing teams need to hire efficiently.",
        monthlyPrice: 1499,
        yearlyPrice: 1199,
        label: "Start free trial",
        features: [
            "Unlimited active job postings",
            "Unlimited candidate profiles",
            "Advanced candidate management",
            "Custom recruitment pipeline",
            "Advanced recruitment analytics",
            "Team collaboration",
            "Custom hiring workflows",
            "Priority email support",
        ],
        unavailable: [],
        popular: true,
        icon: <CrownOutlined />,
    },
    {
        name: "Enterprise",
        description: "Powerful recruitment management for larger teams.",
        monthlyPrice: null,
        yearlyPrice: null,
        label: "Contact sales",
        features: [
            "Everything in Professional",
            "Multiple team management",
            "Advanced access controls",
            "Custom integrations",
            "Dedicated account manager",
            "Advanced reporting",
            "Custom onboarding",
            "Priority dedicated support",
        ],
        unavailable: [],
        popular: false,
        icon: <ThunderboltOutlined />,
    },
];

const comparisonFeatures = [
    {
        category: "Recruitment",
        features: [
            { name: "Active job postings", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
            { name: "Candidate profiles", free: "50", pro: "Unlimited", enterprise: "Unlimited" },
            { name: "Candidate management", free: true, pro: true, enterprise: true },
            { name: "Recruitment pipeline", free: "Basic", pro: "Custom", enterprise: "Custom" },
            { name: "Interview scheduling", free: false, pro: true, enterprise: true },
        ],
    },
    {
        category: "Analytics & Collaboration",
        features: [
            { name: "Basic dashboard", free: true, pro: true, enterprise: true },
            { name: "Advanced analytics", free: false, pro: true, enterprise: true },
            { name: "Team collaboration", free: false, pro: true, enterprise: true },
            { name: "Custom workflows", free: false, pro: true, enterprise: true },
            { name: "Advanced reporting", free: false, pro: false, enterprise: true },
        ],
    },
    {
        category: "Support & Security",
        features: [
            { name: "Email support", free: true, pro: true, enterprise: true },
            { name: "Priority support", free: false, pro: true, enterprise: true },
            { name: "Custom integrations", free: false, pro: false, enterprise: true },
            { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
        ],
    },
];

const faqs = [
    {
        question: "Can I start with the free plan?",
        answer:
            "Yes. You can start with the Free plan and explore the basic recruitment features before choosing a paid plan.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Yes. You can upgrade or change your subscription as your recruitment requirements grow.",
    },
    {
        question: "What happens when I switch to yearly billing?",
        answer:
            "Yearly billing offers a lower monthly equivalent price compared with monthly billing. The displayed prices are illustrative.",
    },
    {
        question: "Is there a plan for larger organizations?",
        answer:
            "Yes. The Enterprise plan is designed for larger organizations that need advanced controls, integrations, and dedicated support.",
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            "Subscription cancellation and billing terms will depend on the final billing policy configured for JobFusion.",
    },
];

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN").format(price);

const Pricing = () => {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    const isYearly = billing === "yearly";

    return (
        <div className="overflow-hidden bg-white text-gray-900">
            {/* Hero */}
            <section className="relative px-5 pb-16 pt-24 sm:px-8 lg:pt-32">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-purple-100/60 blur-[120px]" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#635BFF]">
                        <ThunderboltOutlined />
                        Simple and transparent pricing
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Plans that grow
                        <br />
                        <span className="bg-gradient-to-r from-[#635BFF] to-[#A78BFA] bg-clip-text text-transparent">
                            with your team.
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                        Start with what you need today and scale as your hiring needs grow.
                        Choose the right plan for your recruitment team.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-1.5">
                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${!isYearly
                                    ? "bg-white text-[#635BFF] shadow-sm"
                                    : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${isYearly
                                    ? "bg-white text-[#635BFF] shadow-sm"
                                    : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            Yearly
                            <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
                                SAVE 20%
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-5 pb-24 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-3">
                    {plans.map((plan) => {
                        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

                        return (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${plan.popular
                                        ? "border-[#635BFF] bg-white shadow-2xl shadow-purple-100 lg:scale-[1.03]"
                                        : "border-gray-200 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#635BFF] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-purple-200">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#635BFF]">
                                    {plan.icon}
                                </div>

                                <h2 className="mt-6 text-2xl font-bold">{plan.name}</h2>

                                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                                    {plan.description}
                                </p>

                                <div className="mt-7 flex min-h-[65px] items-end gap-1">
                                    {price !== null ? (
                                        <>
                                            <span className="mb-1 text-xl font-semibold">₹</span>
                                            <span className="text-5xl font-bold tracking-tight">
                                                {formatPrice(price)}
                                            </span>
                                            {plan.name !== "Free" && (
                                                <span className="mb-2 text-sm text-gray-400">
                                                    / month
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        <span className="text-4xl font-bold tracking-tight">
                                            Custom
                                        </span>
                                    )}
                                </div>

                                {plan.name !== "Enterprise" && (
                                    <p className="mt-2 text-xs text-gray-400">
                                        {plan.name === "Free"
                                            ? "Free forever"
                                            : isYearly
                                                ? "Billed annually"
                                                : "Billed monthly"}
                                    </p>
                                )}

                                {plan.name === "Enterprise" && (
                                    <p className="mt-2 text-xs text-gray-400">
                                        Contact us for pricing
                                    </p>
                                )}

                                <a
                                    href={
                                        plan.name === "Enterprise"
                                            ? "/contact"
                                            : "/register"
                                    }
                                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${plan.popular
                                            ? "bg-[#635BFF] text-white shadow-lg shadow-purple-200 hover:bg-[#5148e5]"
                                            : "border border-gray-200 bg-white text-gray-700 hover:border-[#635BFF] hover:text-[#635BFF]"
                                        }`}
                                >
                                    {plan.label}
                                    <ArrowRightOutlined />
                                </a>

                                <div className="my-8 border-t border-gray-100" />

                                <p className="mb-5 text-sm font-bold text-gray-900">
                                    What's included
                                </p>

                                <ul className="flex-1 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-gray-600"
                                        >
                                            <CheckOutlined className="mt-0.5 text-[#635BFF]" />
                                            {feature}
                                        </li>
                                    ))}

                                    {plan.unavailable.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-gray-300"
                                        >
                                            <CloseOutlined className="mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-gray-400">
                    Pricing shown above is illustrative and subject to change. Final
                    subscription limits, billing terms, taxes, and features should be
                    confirmed before publishing.
                </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-[#F8F7FF] px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                            Compare plans
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                            Find the right fit
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            Compare the features available across different JobFusion plans.
                        </p>
                    </div>

                    <div className="mt-14 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <table className="w-full min-w-[650px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="w-[40%] px-6 py-5 text-sm font-bold text-gray-900">
                                        Features
                                    </th>
                                    <th className="px-4 py-5 text-center text-sm font-bold text-gray-700">
                                        Free
                                    </th>
                                    <th className="bg-purple-50/70 px-4 py-5 text-center text-sm font-bold text-[#635BFF]">
                                        Professional
                                    </th>
                                    <th className="px-4 py-5 text-center text-sm font-bold text-gray-700">
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonFeatures.map((group) => (
                                    <>
                                        <tr key={group.category} className="bg-gray-50/70">
                                            <td
                                                colSpan={4}
                                                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500"
                                            >
                                                {group.category}
                                            </td>
                                        </tr>

                                        {group.features.map((feature) => {
                                            const renderValue = (value: string | boolean) => {
                                                if (typeof value === "boolean") {
                                                    return value ? (
                                                        <CheckOutlined className="text-[#635BFF]" />
                                                    ) : (
                                                        <CloseOutlined className="text-gray-300" />
                                                    );
                                                }

                                                return (
                                                    <span className="text-xs font-medium text-gray-600">
                                                        {value}
                                                    </span>
                                                );
                                            };

                                            return (
                                                <tr
                                                    key={feature.name}
                                                    className="border-t border-gray-100"
                                                >
                                                    <td className="px-6 py-4 text-sm text-gray-600">
                                                        {feature.name}
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        {renderValue(feature.free)}
                                                    </td>
                                                    <td className="bg-purple-50/40 px-4 py-4 text-center">
                                                        {renderValue(feature.pro)}
                                                    </td>
                                                    <td className="px-4 py-4 text-center">
                                                        {renderValue(feature.enterprise)}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="px-5 py-24 sm:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-[#635BFF]">
                            <QuestionCircleOutlined />
                        </div>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                            Frequently asked questions
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Everything you need to know about JobFusion pricing.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                open={index === 0}
                                className="group rounded-2xl border border-gray-200 bg-white p-6 transition open:border-purple-200 open:bg-purple-50/30"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                                    {faq.question}

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition group-open:rotate-45">
                                        <CloseOutlined />
                                    </span>
                                </summary>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 pb-24 sm:px-8">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] to-[#8175FF] px-7 py-16 text-center text-white sm:px-12 lg:py-20">
                    <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                        Start building your dream team today.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
                        Get started with JobFusion and bring your entire recruitment
                        workflow into one place.
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

export default Pricing;
