
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BookOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  LinkOutlined,
  LinkedinOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    description: string;
    image: string;
    sections: {
      id: string;
      heading: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
  }
> = {
  "1": {
    title: "How to Build a Better Recruitment Process for Your Team",
    category: "Recruitment",
    date: "November 5, 2026",
    readTime: "8 min read",
    author: "JobFusion Team",
    description:
      "Discover practical ways to simplify your hiring workflow, improve candidate experiences, and build a recruitment process that scales with your business.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Recruitment is more than filling open positions. It is about finding the right people, creating a positive candidate experience, and building a process that helps your organisation grow.",
          "A well-structured recruitment process gives your team clarity at every stage, from creating a job opening to making the final hiring decision.",
        ],
      },
      {
        id: "define-hiring-needs",
        heading: "1. Define Your Hiring Needs",
        paragraphs: [
          "Before publishing a job, make sure everyone understands what the role requires. A clear job description helps attract candidates who match your expectations.",
        ],
        bullets: [
          "Define responsibilities and required skills.",
          "Agree on experience and qualification requirements.",
          "Set realistic hiring timelines.",
          "Align hiring managers and recruiters.",
        ],
      },
      {
        id: "centralize-candidates",
        heading: "2. Keep Candidate Information Organized",
        paragraphs: [
          "Managing candidate information across spreadsheets, emails, and separate tools can quickly become difficult. A centralized recruitment workspace makes it easier to track applications and review candidate progress.",
        ],
        bullets: [
          "Keep candidate profiles in one place.",
          "Track applications by hiring stage.",
          "Add notes and feedback after interviews.",
          "Make candidate information accessible to the hiring team.",
        ],
      },
      {
        id: "improve-communication",
        heading: "3. Improve Team Communication",
        paragraphs: [
          "Recruiters and hiring managers should have a shared understanding of candidate progress. Consistent communication helps prevent delays and keeps everyone aligned.",
          "Establish clear feedback expectations and make sure interview decisions are recorded in a consistent way.",
        ],
      },
      {
        id: "measure-performance",
        heading: "4. Measure Recruitment Performance",
        paragraphs: [
          "Recruitment metrics help you understand where your process is working and where it needs improvement.",
        ],
        bullets: [
          "Time to hire",
          "Number of applications per job",
          "Interview-to-offer conversion rate",
          "Offer acceptance rate",
          "Source of hire",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "A better recruitment process starts with clear requirements, organized candidate information, strong communication, and continuous improvement.",
          "With the right workflow and tools, your team can spend less time managing recruitment tasks and more time connecting with great candidates.",
        ],
      },
    ],
  },
  "2": {
    title: "A Practical Guide to Applicant Tracking Systems",
    category: "Guides",
    date: "November 3, 2026",
    readTime: "6 min read",
    author: "JobFusion Team",
    description:
      "Learn what an applicant tracking system does and how it can help your team manage applications and hiring workflows.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "An applicant tracking system, commonly known as an ATS, helps organisations manage candidate applications and recruitment activities in one place.",
          "As hiring grows, managing applications manually can become difficult. An ATS provides a structured way to organise the recruitment journey.",
        ],
      },
      {
        id: "what-is-ats",
        heading: "What Is an Applicant Tracking System?",
        paragraphs: [
          "An ATS is software designed to support the hiring process. It helps recruiters manage job openings, candidate profiles, applications, and interview progress.",
        ],
      },
      {
        id: "key-features",
        heading: "Important ATS Features",
        paragraphs: [
          "The right system should make everyday recruitment tasks easier and provide visibility into the hiring pipeline.",
        ],
        bullets: [
          "Job posting and job management",
          "Candidate profile management",
          "Application tracking",
          "Interview coordination",
          "Recruitment reporting",
          "Team collaboration",
        ],
      },
      {
        id: "benefits",
        heading: "Benefits for Recruitment Teams",
        paragraphs: [
          "A centralized system can reduce manual administration, improve visibility, and help teams collaborate more effectively throughout the hiring process.",
        ],
      },
      {
        id: "choosing-ats",
        heading: "How to Choose the Right ATS",
        paragraphs: [
          "Consider your team size, hiring workflow, ease of use, reporting needs, and ability to scale. Choose a system that fits your actual recruitment process rather than one with features you may never use.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "An ATS can bring structure and consistency to recruitment. Start by understanding your team's needs and evaluate systems based on how well they support your hiring workflow.",
        ],
      },
    ],
  },
  "3": {
    title: "5 Ways to Improve Your Candidate Experience",
    category: "Best Practices",
    date: "October 29, 2026",
    readTime: "5 min read",
    author: "JobFusion Team",
    description:
      "Explore simple ways to make your hiring journey clearer, more transparent, and more welcoming for candidates.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Candidate experience plays an important role in how people perceive your organisation. Every interaction, from the first application to the final decision, shapes that experience.",
        ],
      },
      {
        id: "clear-job-description",
        heading: "1. Write Clear Job Descriptions",
        paragraphs: [
          "Explain the responsibilities, expectations, required skills, and hiring process clearly. Candidates should understand the opportunity before applying.",
        ],
      },
      {
        id: "simple-application",
        heading: "2. Keep Applications Simple",
        paragraphs: [
          "Avoid unnecessary application steps. Ask for relevant information and make the process easy to complete on both desktop and mobile devices.",
        ],
      },
      {
        id: "communicate",
        heading: "3. Communicate Regularly",
        paragraphs: [
          "Send timely updates so candidates know where they stand. Even a short update is better than leaving applicants without information.",
        ],
      },
      {
        id: "respect-time",
        heading: "4. Respect Candidate Time",
        paragraphs: [
          "Plan interviews carefully, communicate schedules in advance, and avoid unnecessary delays between hiring stages.",
        ],
      },
      {
        id: "feedback",
        heading: "5. Provide Thoughtful Feedback",
        paragraphs: [
          "Where possible, provide useful and respectful feedback. A professional rejection experience can leave a positive impression of your organisation.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "A positive candidate experience comes from clear communication, a simple application process, and respect for people's time.",
        ],
      },
    ],
  },
  "4": {
    title: "Recruitment Metrics Every Hiring Team Should Track",
    category: "Analytics",
    date: "October 24, 2026",
    readTime: "7 min read",
    author: "JobFusion Team",
    description:
      "Understand the recruitment metrics that help teams evaluate hiring performance and make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Recruitment metrics provide insight into how effectively your team attracts, evaluates, and hires candidates. They help turn recruitment activity into measurable information.",
        ],
      },
      {
        id: "time-to-hire",
        heading: "1. Time to Hire",
        paragraphs: [
          "Time to hire measures how long it takes to move a candidate through your hiring process. Tracking it helps identify delays between recruitment stages.",
        ],
      },
      {
        id: "source-of-hire",
        heading: "2. Source of Hire",
        paragraphs: [
          "Understand where successful candidates come from. This helps your team evaluate which recruitment channels are worth investing in.",
        ],
      },
      {
        id: "conversion-rate",
        heading: "3. Interview Conversion Rate",
        paragraphs: [
          "Measure how candidates move from one hiring stage to another. This can help identify where your process may be losing suitable applicants.",
        ],
      },
      {
        id: "offer-acceptance",
        heading: "4. Offer Acceptance Rate",
        paragraphs: [
          "Track how many candidates accept the offers your team makes. A low acceptance rate may indicate a need to review compensation, expectations, or communication.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "Start with a small set of meaningful metrics and review them consistently. The goal is not to track everything, but to understand where improvements will make the biggest difference.",
        ],
      },
    ],
  },
  "5": {
    title: "How to Create an Effective Hiring Workflow",
    category: "Hiring Tips",
    date: "October 20, 2026",
    readTime: "6 min read",
    author: "JobFusion Team",
    description:
      "Build a repeatable hiring workflow that keeps recruiters and hiring managers aligned at every stage.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "An effective hiring workflow gives your recruitment team a clear process to follow. It helps everyone understand responsibilities, timelines, and candidate progress.",
        ],
      },
      {
        id: "plan",
        heading: "1. Plan the Hiring Process",
        paragraphs: [
          "Define the role, hiring requirements, interview stages, and decision-makers before starting recruitment.",
        ],
      },
      {
        id: "attract",
        heading: "2. Attract Relevant Candidates",
        paragraphs: [
          "Use clear job descriptions and suitable recruitment channels to reach candidates whose skills match the role.",
        ],
      },
      {
        id: "evaluate",
        heading: "3. Evaluate Consistently",
        paragraphs: [
          "Use consistent evaluation criteria and structured interviews to make candidate comparisons more meaningful.",
        ],
      },
      {
        id: "collaborate",
        heading: "4. Keep Everyone Aligned",
        paragraphs: [
          "Make sure recruiters and hiring managers can access relevant updates, interview feedback, and decisions.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "A repeatable workflow creates consistency and makes recruitment easier to manage as your organisation grows.",
        ],
      },
    ],
  },
  "6": {
    title: "The Future of Recruitment and Hiring Technology",
    category: "Industry Insights",
    date: "October 15, 2026",
    readTime: "8 min read",
    author: "JobFusion Team",
    description:
      "Explore how modern technology is changing recruitment workflows and helping hiring teams work more effectively.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=85",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          "Recruitment technology continues to evolve. Modern tools are helping teams organise information, improve collaboration, and gain better visibility into hiring activities.",
        ],
      },
      {
        id: "automation",
        heading: "Smarter Recruitment Workflows",
        paragraphs: [
          "Automation can reduce repetitive administrative work and help recruiters focus on candidate engagement and hiring decisions.",
        ],
      },
      {
        id: "data",
        heading: "Data-Informed Decisions",
        paragraphs: [
          "Recruitment analytics can help teams understand hiring performance, identify bottlenecks, and make more informed decisions.",
        ],
      },
      {
        id: "candidate-experience",
        heading: "A Better Candidate Experience",
        paragraphs: [
          "Well-designed recruitment platforms can make application processes clearer and help candidates receive more timely updates.",
        ],
      },
      {
        id: "human-connection",
        heading: "The Human Side of Hiring",
        paragraphs: [
          "Technology should support recruiters, not replace meaningful human interaction. Communication, judgement, and relationships remain important parts of hiring.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "The future of recruitment will combine useful technology with thoughtful human decision-making. Teams that build adaptable workflows will be better prepared for changing hiring needs.",
        ],
      },
    ],
  },
};

const ResourceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articles[id] : undefined;

  if (!article) {
    return (
      <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl text-[#635BFF]">
          <BookOutlined />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Article not found
        </h1>
        <p className="mt-3 max-w-md text-gray-500">
          The article you are looking for may have been moved or is no longer
          available.
        </p>
        <Link
          to="/resources"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#635BFF] px-6 py-3 font-semibold text-white transition hover:bg-[#5148e5]"
        >
          <ArrowLeftOutlined />
          Back to Resources
        </Link>
      </div>
    );
  }

  const relatedArticles = Object.entries(articles)
    .filter(([articleId]) => articleId !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Article Hero */}
      <section className="relative overflow-hidden bg-[#F8F7FF]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#635BFF]"
          >
            <ArrowLeftOutlined />
            Back to Resources
          </Link>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-purple-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#635BFF]">
              {article.category}
            </span>

            <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              {article.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <UserOutlined className="text-[#635BFF]" />
                {article.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarOutlined className="text-[#635BFF]" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <ClockCircleOutlined className="text-[#635BFF]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="mx-auto -mt-2 max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/50">
          <img
            src={article.image}
            alt={article.title}
            className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[480px]"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          {/* Table of Contents */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6">
              <div className="flex items-center gap-2 text-base font-bold text-gray-900">
                <BookOutlined className="text-[#635BFF]" />
                On this page
              </div>

              <nav className="mt-5 space-y-1">
                {article.sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-[#635BFF]"
                  >
                    {index === 0
                      ? "Introduction"
                      : section.heading.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-5 rounded-2xl bg-[#F5F3FF] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#635BFF]">
                <CheckCircleOutlined />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">
                Make hiring easier
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Bring your recruitment workflow together with JobFusion.
              </p>
              <Link
                to="/request-demo"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#635BFF] hover:gap-3"
              >
                Request a Demo <ArrowRightOutlined />
              </Link>
            </div>
          </aside>

          {/* Main Article */}
          <article className="min-w-0 max-w-3xl">
            <div className="space-y-12">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-8 text-gray-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-6 space-y-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-base leading-7 text-gray-600"
                        >
                          <CheckCircleOutlined className="mt-1 text-[#635BFF]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Article Share */}
            <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-y border-gray-100 py-7">
              <div>
                <p className="font-bold text-gray-900">
                  Enjoyed this article?
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Share it with your network.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Share article"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition hover:bg-[#635BFF] hover:text-white"
                >
                  <ShareAltOutlined />
                </button>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition hover:bg-[#635BFF] hover:text-white"
                >
                  <LinkedinOutlined />
                </a>

                <button
                  type="button"
                  aria-label="Copy article link"
                  onClick={() =>
                    navigator.clipboard?.writeText(window.location.href)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-[#635BFF] transition hover:bg-[#635BFF] hover:text-white"
                >
                  <LinkOutlined />
                </button>
              </div>
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gray-100 p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F0EDFF] text-xl font-bold text-[#635BFF]">
                J
              </div>
              <div>
                <p className="font-bold text-gray-900">{article.author}</p>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Sharing insights, ideas, and practical resources to help
                  teams build better recruitment experiences.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#FAFAFC] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#635BFF]">
                Keep Learning
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Related articles
              </h2>
              <p className="mt-3 text-gray-500">
                More insights to help you improve your hiring process.
              </p>
            </div>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-semibold text-[#635BFF] transition hover:gap-3"
            >
              View all resources <ArrowRightOutlined />
            </Link>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map(([articleId, related]) => (
              <Link
                key={articleId}
                to={`/resources/${articleId}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                    {related.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-7 text-gray-900 transition group-hover:text-[#635BFF]">
                    {related.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                    <span>{related.readTime}</span>
                    <ArrowRightOutlined className="text-[#635BFF] transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#635BFF] px-6 py-14 text-center sm:px-12 sm:py-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-200">
            Build better teams
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Ready to make recruitment simpler?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-100">
            Organize your hiring workflow and bring your recruitment team
            together with JobFusion.
          </p>
          <Link
            to="/request-demo"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-bold text-[#635BFF] transition hover:bg-purple-50"
          >
            Request a Demo <ArrowRightOutlined />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResourceDetails;
