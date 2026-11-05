import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Drawer } from "antd";
import { AppstoreOutlined, ArrowRightOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined, TwitterOutlined, } from "@ant-design/icons";

const navigation = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
];

const footerLinks = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Solutions", href: "/solutions" },
            { label: "Integrations", href: "/integrations" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Careers", href: "/careers" },
            { label: "Our Team", href: "/team" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "/blog" },
            { label: "Documentation", href: "/docs" },
            { label: "Help Center", href: "/help" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Security", href: "/security" },
        ],
    },
];
const PagesLayout = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
                <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2.5 no-underline"
                        aria-label="JobFusion Home"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#635BFF] text-white shadow-lg shadow-indigo-200">
                            <AppstoreOutlined className="text-xl" />
                        </div>

                        <span className="text-[23px] font-bold tracking-tight text-gray-900">
                            Job<span className="text-[#635BFF]">Fusion</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => (
                            <Link   
                                key={item.label}
                                to={item.href}
                                className="text-[14px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#635BFF]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <Link
                            to="/auth/login"
                            className="px-4 py-2 text-sm font-semibold text-gray-700 no-underline transition-colors hover:text-[#635BFF]"
                        >
                            Sign In
                        </Link>

                        <Button
                            type="primary"
                            size="large"
                            href="/register"
                            className="!h-11 !rounded-xl !border-0 !bg-[#635BFF] !px-5 !text-sm !font-semibold shadow-md shadow-indigo-100 hover:!bg-[#5148e5]"
                        >
                            Get Started <ArrowRightOutlined />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        <MenuOutlined />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#635BFF] text-white">
                            <AppstoreOutlined />
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            Job<span className="text-[#635BFF]">Fusion</span>
                        </span>
                    </div>
                }
                placement="right"
                open={open}
                onClose={closeMenu}
                width={320}
            >
                <nav className="flex flex-col gap-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-[15px] font-medium text-gray-700 no-underline transition-colors hover:bg-indigo-50 hover:text-[#635BFF]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6">
                    <Button
                        block
                        size="large"
                        href="/auth/login"
                        onClick={closeMenu}
                        className="!h-11 !rounded-xl !font-semibold"
                    >
                        Sign In
                    </Button>

                    <Button
                        block
                        type="primary"
                        size="large"
                        href="/register"
                        onClick={closeMenu}
                        className="!h-11 !rounded-xl !border-0 !bg-[#635BFF] !font-semibold"
                    >
                        Get Started <ArrowRightOutlined />
                    </Button>
                </div>
            </Drawer>

            <main>
                <Outlet />
            </main>

            <footer className="border-t border-gray-100 bg-white">

                <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">

                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <Link
                                to="/"
                                className="mb-5 inline-flex items-center gap-2.5 no-underline"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#635BFF] text-white shadow-md shadow-indigo-100">
                                    <AppstoreOutlined className="text-xl" />
                                </div>

                                <span className="text-2xl font-bold tracking-tight text-gray-900">
                                    Job<span className="text-[#635BFF]">Fusion</span>
                                </span>
                            </Link>

                            <p className="max-w-[340px] text-sm leading-7 text-gray-500">
                                Simplify your hiring journey with smarter recruitment.
                                Manage jobs, candidates, interviews and your entire hiring
                                pipeline in one powerful platform.
                            </p>

                            {/* Social Links */}
                            <div className="mt-7 flex items-center gap-3">
                                {[
                                    { icon: <LinkedinOutlined />, href: "https://linkedin.com/", label: "LinkedIn" },
                                    { icon: <TwitterOutlined />, href: "https://twitter.com/", label: "Twitter" },
                                    { icon: <GithubOutlined />, href: "https://github.com/", label: "GitHub" },
                                    { icon: <InstagramOutlined />, href: "https://instagram.com/", label: "Instagram" },
                                ].map((social) => (
                                    <Link
                                        key={social.label}
                                        to={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all duration-200 hover:border-[#635BFF] hover:bg-[#F5F3FF] hover:text-[#635BFF]"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Footer Navigation */}
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-6 text-sm font-bold text-gray-900">
                                    {section.title}
                                </h3>

                                <ul className="flex flex-col gap-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="text-sm text-gray-500 no-underline transition-colors duration-200 hover:text-[#635BFF]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-indigo-100 bg-[#F8F7FF] p-7 sm:flex-row sm:items-center sm:p-9">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                Ready to transform your hiring?
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Bring your recruitment process together with JobFusion.
                            </p>
                        </div>

                        <Link
                            to="/register"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#635BFF] px-6 py-3 text-sm font-semibold text-white no-underline transition-all hover:bg-[#5148e5]"
                        >
                            Get Started <ArrowRightOutlined />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100">
                    <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-10">

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} JobFusion. All rights reserved.
                        </p>

                        <p className="text-sm text-gray-500">
                            Built for better hiring. Made for growing teams.
                        </p>

                        <Link
                            to="/contact"
                            className="text-sm font-medium text-gray-600 no-underline transition-colors hover:text-[#635BFF]"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default PagesLayout;