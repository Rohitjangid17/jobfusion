
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  LinkedinOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Empty, Tag, message } from "antd";
import { blogArticles } from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();

  const article = useMemo(
    () => blogArticles.find((item) => item.id === id),
    [id]
  );

  const relatedArticles = useMemo(() => {
    if (!article) return [];

    return blogArticles
      .filter(
        (item) =>
          item.id !== article.id &&
          item.category === article.category
      )
      .concat(
        blogArticles.filter(
          (item) =>
            item.id !== article.id &&
            item.category !== article.category
        )
      )
      .slice(0, 3);
  }, [article]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      messageApi.success("Article link copied!");
    } catch {
      messageApi.error("Unable to copy article link.");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          url: window.location.href,
        });
      } catch {
        // User cancelled sharing.
      }
    } else {
      handleCopy();
    }
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!article) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-5">

        <Empty description="Sorry, this article could not be found." />

        <Link to="/blog" className="mt-6">
          <Button
            type="primary"
            className="!h-11 !rounded-lg !bg-[#635BFF]"
          >
            Back to Blog
          </Button>
        </Link>

      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white text-[#17172B]">

      {contextHolder}

      {/* Breadcrumb */}
      <section className="border-b border-gray-100 px-5 sm:px-8">

        <div className="mx-auto flex max-w-7xl items-center gap-2 py-5 text-sm text-gray-400">

          <Link
            to="/"
            className="transition hover:text-[#635BFF]"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/blog"
            className="transition hover:text-[#635BFF]"
          >
            Blog
          </Link>

          <span>/</span>

          <span className="truncate font-medium text-[#635BFF]">
            Article
          </span>

        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F7F6FF] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">

        <div className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full border-[65px] border-[#635BFF]/[0.04]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Link
            to="/blog"
            className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF] transition hover:gap-3"
          >
            <ArrowLeftOutlined />
            Back to all articles
          </Link>

          <div>
            <Tag className="!mb-6 !rounded-full !border-[#E5E1FF] !bg-[#EFEDFF] !px-4 !py-1.5 !font-semibold !text-[#635BFF]">
              {article.category}
            </Tag>
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#17172B] sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            {article.excerpt}
          </p>

          {/* Author Information */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5">

            <div className="flex items-center gap-3 text-left">

              <Avatar
                size={44}
                icon={<UserOutlined />}
                className="!bg-[#635BFF] !text-white"
              />

              <div>
                <p className="text-sm font-bold text-[#17172B]">
                  {article.author}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {article.role}
                </p>
              </div>

            </div>

            <span className="hidden h-9 w-px bg-gray-200 sm:block" />

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarOutlined className="text-[#635BFF]" />
              {article.date}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ClockCircleOutlined className="text-[#635BFF]" />
              {article.readTime}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-5 sm:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(35,30,90,0.08)]">

            <img
              src={article.image}
              alt={article.title}
              className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />

          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-5 py-16 sm:px-8 lg:py-24">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">

          {/* Table of Contents Sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">

            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFF] p-6">

              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#17172B]">
                Table of contents
              </h3>

              <nav className="space-y-5">

                {article.content.map((section, index) => (

                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 text-sm text-gray-500 transition hover:text-[#635BFF]"
                  >

                    <span className="text-xs font-bold text-[#A5A0D9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="leading-5 transition-transform group-hover:translate-x-1">
                      {section.heading}
                    </span>

                  </a>

                ))}

              </nav>

              <div className="my-7 border-t border-gray-200" />

              <h3 className="mb-4 text-sm font-bold text-[#17172B]">
                Share this article
              </h3>

              <div className="flex items-center gap-2">

                <Button
                  shape="circle"
                  icon={<ShareAltOutlined />}
                  onClick={handleShare}
                  title="Share article"
                />

                <Button
                  shape="circle"
                  icon={<CopyOutlined />}
                  onClick={handleCopy}
                  title="Copy link"
                />

                <Button
                  shape="circle"
                  icon={<LinkedinOutlined />}
                  onClick={handleLinkedInShare}
                  title="Share on LinkedIn"
                />

              </div>

            </div>
          </aside>

          {/* Main Article */}
          <article className="min-w-0">

            {/* Introduction Highlight */}
            <div className="mb-12 rounded-xl border-l-4 border-[#635BFF] bg-[#F7F6FF] p-6 sm:p-8">

              <p className="text-lg font-medium leading-8 text-[#45436B]">
                {article.excerpt}
              </p>

            </div>

            {/* Dynamic Article Sections */}
            <div className="space-y-14">

              {article.content.map((section, index) => (

                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >

                  <div className="mb-6 flex items-center gap-4">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFEDFF] text-sm font-bold text-[#635BFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-2xl font-bold tracking-tight text-[#17172B] sm:text-3xl">
                      {section.heading}
                    </h2>

                  </div>

                  <div className="space-y-5">

                    {section.paragraphs.map((paragraph, paragraphIndex) => (

                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-gray-600 sm:text-[17px]"
                      >
                        {paragraph}
                      </p>

                    ))}

                  </div>

                </section>

              ))}

            </div>

            {/* Author Footer */}
            <div className="mt-16 border-y border-gray-100 py-8">

              <div className="flex flex-wrap items-center justify-between gap-5">

                <div className="flex items-center gap-4">

                  <Avatar
                    size={52}
                    icon={<UserOutlined />}
                    className="!bg-[#EFEDFF] !text-[#635BFF]"
                  />

                  <div>

                    <p className="text-xs text-gray-400">
                      Written by
                    </p>

                    <p className="mt-1 font-bold text-[#17172B]">
                      {article.author}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {article.role}
                    </p>

                  </div>
                </div>

                <Button
                  icon={<ShareAltOutlined />}
                  onClick={handleShare}
                  className="!h-11 !rounded-lg !border-[#E5E1FF] !font-semibold !text-[#635BFF]"
                >
                  Share Article
                </Button>

              </div>
            </div>

            <div className="mt-8">

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#635BFF] transition hover:gap-3"
              >
                <ArrowLeftOutlined />
                Explore more articles
              </Link>

            </div>

          </article>

        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (

        <section className="border-t border-gray-100 bg-[#FAFAFF] px-5 py-20 sm:px-8 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">

              <div>

                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#635BFF]">
                  KEEP EXPLORING
                </span>

                <h2 className="text-3xl font-bold text-[#17172B] sm:text-4xl">
                  Related articles
                </h2>

                <p className="mt-3 text-gray-500">
                  More ideas and insights selected for you.
                </p>

              </div>

              <Link
                to="/blog"
                className="flex items-center gap-2 font-semibold text-[#635BFF] transition hover:gap-3"
              >
                View all articles
                <ArrowRightOutlined />
              </Link>

            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {relatedArticles.map((item) => (

                <Link
                  to={`/blog/${item.id}`}
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#DCD8FF] hover:shadow-xl"
                >

                  <div className="overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-6">

                    <Tag className="!mb-4 !rounded-full !border-[#E5E1FF] !bg-[#EFEDFF] !text-[#635BFF]">
                      {item.category}
                    </Tag>

                    <h3 className="mb-5 text-xl font-bold leading-snug text-[#17172B] transition group-hover:text-[#635BFF]">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-400">

                      <span>{item.readTime}</span>

                      <ArrowRightOutlined className="text-[#635BFF] transition group-hover:translate-x-1" />

                    </div>

                  </div>

                </Link>

              ))}

            </div>
          </div>
        </section>

      )}

      {/* Bottom CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#635BFF] px-6 py-16 text-center sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl">

            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              THE JOBFUSION BLOG
            </span>

            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
              Better hiring starts with better insights.
            </h2>

            <p className="mb-8 leading-8 text-white/75">
              Explore more recruitment insights, practical hiring
              tips, and ideas to help your team hire smarter.
            </p>

            <Link to="/blog">

              <Button
                size="large"
                className="!h-12 !rounded-xl !border-0 !bg-white !px-8 !font-semibold !text-[#635BFF] hover:!bg-gray-100"
              >
                Explore More Articles
                <ArrowRightOutlined />
              </Button>

            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default BlogDetails;
