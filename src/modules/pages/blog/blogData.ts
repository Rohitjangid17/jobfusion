
export interface BlogArticle {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    role: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
    content: {
        id: string;
        heading: string;
        paragraphs: string[];
    }[];
}

export const blogCategories = [
    "All",
    "Recruitment",
    "Hiring Tips",
    "Technology",
    "Productivity",
    "Career",
];

export const blogArticles: BlogArticle[] = [
    {
        id: "future-of-ai-recruitment",
        category: "Technology",
        title: "The Future of Recruitment: How AI Is Transforming Hiring",
        excerpt:
            "Discover how artificial intelligence is changing recruitment and helping modern teams find the right talent faster.",
        author: "Sarah Johnson",
        role: "HR Technology Writer",
        date: "November 04, 2026",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
        featured: true,
        content: [
            {
                id: "introduction",
                heading: "Introduction",
                paragraphs: [
                    "Recruitment is evolving faster than ever. Modern hiring teams are moving beyond traditional spreadsheets and manual workflows to smarter recruitment systems.",
                    "Artificial intelligence is helping companies automate repetitive tasks, improve candidate experiences, and make more informed hiring decisions.",
                ],
            },
            {
                id: "ai-recruitment",
                heading: "How AI is changing recruitment",
                paragraphs: [
                    "AI-powered recruitment tools can analyze resumes, identify relevant skills, and help recruiters prioritize candidates based on job requirements.",
                    "This allows hiring teams to spend less time on repetitive administrative work and more time connecting with qualified candidates.",
                ],
            },
            {
                id: "candidate-experience",
                heading: "Improving candidate experience",
                paragraphs: [
                    "A smooth recruitment journey matters. Automated updates, organized interview scheduling, and timely communication help candidates stay informed throughout the hiring process.",
                    "Recruitment platforms can bring these activities together in one centralized workspace.",
                ],
            },
            {
                id: "choosing-platform",
                heading: "Choosing the right recruitment platform",
                paragraphs: [
                    "The right recruitment platform should make it easy to manage job postings, organize candidate profiles, collaborate with hiring teams, and track recruitment progress.",
                    "Look for a solution that is intuitive, scalable, and flexible enough to support your hiring workflow.",
                ],
            },
            {
                id: "conclusion",
                heading: "Final thoughts",
                paragraphs: [
                    "AI is not replacing the human side of recruitment. It is helping recruiters make better use of their time and focus on meaningful hiring decisions.",
                    "With the right combination of technology and human judgment, businesses can build more efficient recruitment processes.",
                ],
            },
        ],
    },
    {
        id: "better-hiring-workflows",
        category: "Hiring Tips",
        title: "7 Ways to Build a Better Hiring Workflow",
        excerpt:
            "Practical strategies to streamline your recruitment process, improve collaboration, and make better hiring decisions.",
        author: "Michael Carter",
        role: "Recruitment Strategist",
        date: "October 28, 2026",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
        content: [
            {
                id: "introduction",
                heading: "Introduction",
                paragraphs: [
                    "A structured hiring workflow helps teams stay organized and make consistent hiring decisions.",
                    "With clearly defined stages, recruiters can reduce delays and improve collaboration.",
                ],
            },
            {
                id: "define-process",
                heading: "Define your hiring process",
                paragraphs: [
                    "Start by identifying the stages every candidate should go through, from application to final selection.",
                ],
            },
            {
                id: "automate-tasks",
                heading: "Automate repetitive tasks",
                paragraphs: [
                    "Automating scheduling, notifications, and candidate updates gives recruiters more time to focus on people.",
                ],
            },
            {
                id: "conclusion",
                heading: "Build a better hiring experience",
                paragraphs: [
                    "A well-organized process benefits recruiters, hiring managers, and candidates alike.",
                ],
            },
        ],
    },
    {
        id: "candidate-management-guide",
        category: "Recruitment",
        title: "The Complete Guide to Candidate Management",
        excerpt:
            "Learn how to organize candidate profiles, track applications, and create a smoother recruitment experience.",
        author: "Emily Wilson",
        role: "HR Content Specialist",
        date: "October 21, 2026",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
        content: [
            {
                id: "introduction",
                heading: "Introduction",
                paragraphs: [
                    "Managing candidate information across multiple channels can become challenging as companies grow.",
                ],
            },
            {
                id: "centralize-data",
                heading: "Centralize candidate information",
                paragraphs: [
                    "A centralized candidate database helps teams access profiles, application history, and communication in one place.",
                ],
            },
            {
                id: "track-progress",
                heading: "Track candidate progress",
                paragraphs: [
                    "Clear recruitment stages help hiring teams understand where every candidate stands.",
                ],
            },
            {
                id: "conclusion",
                heading: "Conclusion",
                paragraphs: [
                    "A consistent candidate management process helps create an organized and effective hiring experience.",
                ],
            },
        ],
    },
    {
        id: "future-of-workplace",
        category: "Productivity",
        title: "Building a More Productive and Collaborative Workplace",
        excerpt:
            "Explore simple ways technology and better communication can help teams work more efficiently.",
        author: "Daniel Smith",
        role: "Business Technology Writer",
        date: "October 15, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
        content: [
            {
                id: "introduction",
                heading: "Introduction",
                paragraphs: [
                    "Productive workplaces are built on clear communication, organized processes, and effective collaboration.",
                ],
            },
            {
                id: "communication",
                heading: "Improve team communication",
                paragraphs: [
                    "Transparent communication helps teams stay aligned and make progress toward shared goals.",
                ],
            },
            {
                id: "technology",
                heading: "Use technology effectively",
                paragraphs: [
                    "The right digital tools reduce repetitive work and help teams focus on important activities.",
                ],
            },
            {
                id: "conclusion",
                heading: "Final thoughts",
                paragraphs: [
                    "Small improvements in everyday workflows can make a meaningful difference to workplace productivity.",
                ],
            },
        ],
    },
    {
        id: "career-growth-guide",
        category: "Career",
        title: "How to Build a Career That Grows With Technology",
        excerpt:
            "Discover practical ways to develop new skills, stay adaptable, and build a future-ready career.",
        author: "Olivia Brown",
        role: "Career Development Writer",
        date: "October 09, 2026",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
        content: [
            {
                id: "introduction",
                heading: "Introduction",
                paragraphs: [
                    "Technology continues to change the way we work and the skills employers look for.",
                ],
            },
            {
                id: "learn-skills",
                heading: "Keep developing your skills",
                paragraphs: [
                    "Continuous learning helps professionals adapt to changing tools, technologies, and expectations.",
                ],
            },
            {
                id: "stay-adaptable",
                heading: "Stay adaptable",
                paragraphs: [
                    "Being open to new ideas and ways of working helps build a resilient career.",
                ],
            },
            {
                id: "conclusion",
                heading: "Conclusion",
                paragraphs: [
                    "A future-ready career is built through curiosity, practical experience, and continuous growth.",
                ],
            },
        ],
    },
];
