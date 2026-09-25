import type { FC, ReactNode } from 'react';
import { Avatar, Button, Col, Progress, Row, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
    ApartmentOutlined,
    ArrowDownOutlined,
    ArrowUpOutlined,
    EditOutlined,
    EnvironmentOutlined,
    EyeOutlined,
    FileTextOutlined,
    RightOutlined,
    SolutionOutlined,
    TeamOutlined,
    ThunderboltOutlined,
    UserAddOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type TrendDirection = 'up' | 'down';

type StatIconKey = 'jobs' | 'activeJobs' | 'candidates' | 'applications';

interface StatCardData {
    id: string;
    title: string;
    value: number;
    formattedValue?: string;
    changePercent: number;
    trend: TrendDirection;
    iconKey: StatIconKey;
}

interface ApplicationOverviewPoint {
    month: string;
    applications: number;
}

interface JobStatisticItem {
    id: string;
    label: string;
    count: number;
    color: string;
}

interface JobCategoryItem {
    id: string;
    name: string;
    applications: number;
    percentage: number;
    color: string;
}

type ApplicationStatus = 'Pending' | 'Shortlisted' | 'Interview' | 'Hired' | 'Rejected';

interface RecentApplication {
    id: string;
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    company: string;
    appliedDate: string;
    status: ApplicationStatus;
}

type JobPostStatus = 'Active' | 'Pending Approval' | 'Expired' | 'Draft';

interface RecentJobPost {
    id: string;
    jobTitle: string;
    company: string;
    location: string;
    applications: number;
    status: JobPostStatus;
    postedDate: string;
}

type QuickActionIconKey = StatIconKey | 'addCandidate' | 'manageCompanies';

interface QuickAction {
    id: string;
    label: string;
    description: string;
    iconKey: QuickActionIconKey;
}

/* -------------------------------------------------------------------------- */
/*  Icon maps (typed icon keys instead of storing JSX/`any` in mock data)     */
/* -------------------------------------------------------------------------- */

const STAT_ICON_MAP: Record<StatIconKey, ReactNode> = {
    jobs: <FileTextOutlined />,
    activeJobs: <ThunderboltOutlined />,
    candidates: <TeamOutlined />,
    applications: <SolutionOutlined />,
};

const QUICK_ACTION_ICON_MAP: Record<QuickActionIconKey, ReactNode> = {
    ...STAT_ICON_MAP,
    addCandidate: <UserAddOutlined />,
    manageCompanies: <ApartmentOutlined />,
};

const STAT_CARDS: StatCardData[] = [
    { id: 'total-jobs', title: 'Total Jobs', value: 1248, formattedValue: '1,248', changePercent: 12.5, trend: 'up', iconKey: 'jobs' },
    { id: 'active-jobs', title: 'Active Jobs', value: 856, formattedValue: '856', changePercent: 8.2, trend: 'up', iconKey: 'activeJobs' },
    { id: 'total-candidates', title: 'Total Candidates', value: 18450, formattedValue: '18,450', changePercent: 18.4, trend: 'up', iconKey: 'candidates' },
    { id: 'total-applications', title: 'Total Applications', value: 32580, formattedValue: '32,580', changePercent: 24.6, trend: 'up', iconKey: 'applications' },
];

const APPLICATION_OVERVIEW: ApplicationOverviewPoint[] = [
    { month: 'Jan', applications: 1820 },
    { month: 'Feb', applications: 2140 },
    { month: 'Mar', applications: 1960 },
    { month: 'Apr', applications: 2480 },
    { month: 'May', applications: 2260 },
    { month: 'Jun', applications: 2790 },
    { month: 'Jul', applications: 2610 },
    { month: 'Aug', applications: 3040 },
    { month: 'Sep', applications: 2870 },
    { month: 'Oct', applications: 3320 },
    { month: 'Nov', applications: 3180 },
    { month: 'Dec', applications: 3610 },
];

const APPLICATION_OVERVIEW_TOTAL = APPLICATION_OVERVIEW.reduce((sum, point) => sum + point.applications, 0);
const APPLICATION_OVERVIEW_GROWTH_PERCENT = 24.6;

const JOB_STATISTICS: JobStatisticItem[] = [
    { id: 'active', label: 'Active', count: 856, color: '#4F46E5' },
    { id: 'pending', label: 'Pending Approval', count: 214, color: '#F59E0B' },
    { id: 'expired', label: 'Expired', count: 122, color: '#EF4444' },
    { id: 'draft', label: 'Draft', count: 56, color: '#94A3B8' },
];

const TOP_JOB_CATEGORIES: JobCategoryItem[] = [
    { id: 'software-development', name: 'Software Development', applications: 12680, percentage: 38, color: '#4F46E5' },
    { id: 'design', name: 'Design', applications: 6210, percentage: 19, color: '#6366F1' },
    { id: 'marketing', name: 'Marketing', applications: 4870, percentage: 15, color: '#818CF8' },
    { id: 'sales', name: 'Sales', applications: 4120, percentage: 13, color: '#A5B4FC' },
    { id: 'finance', name: 'Finance', applications: 2740, percentage: 8, color: '#C7D2FE' },
    { id: 'others', name: 'Others', applications: 2560, percentage: 7, color: '#E0E7FF' },
];

const RECENT_APPLICATIONS: RecentApplication[] = [
    { id: 'APP-1042', candidateName: 'Ananya Sharma', candidateEmail: 'ananya.sharma@mail.com', jobTitle: 'Senior Frontend Engineer', company: 'Nimbus Cloud', appliedDate: '2026-08-19', status: 'Interview' },
    { id: 'APP-1041', candidateName: 'Karan Mehta', candidateEmail: 'karan.mehta@mail.com', jobTitle: 'Product Designer', company: 'Studio Loop', appliedDate: '2026-08-19', status: 'Shortlisted' },
    { id: 'APP-1040', candidateName: 'Priya Nair', candidateEmail: 'priya.nair@mail.com', jobTitle: 'Backend Engineer (Node.js)', company: 'Fintra Labs', appliedDate: '2026-08-18', status: 'Pending' },
    { id: 'APP-1039', candidateName: 'Rahul Verma', candidateEmail: 'rahul.verma@mail.com', jobTitle: 'DevOps Engineer', company: 'Skyforge Systems', appliedDate: '2026-08-18', status: 'Hired' },
    { id: 'APP-1038', candidateName: 'Ishita Kapoor', candidateEmail: 'ishita.kapoor@mail.com', jobTitle: 'Digital Marketing Lead', company: 'Brightpath Media', appliedDate: '2026-08-17', status: 'Rejected' },
    { id: 'APP-1037', candidateName: 'Aditya Rao', candidateEmail: 'aditya.rao@mail.com', jobTitle: 'QA Automation Engineer', company: 'Nimbus Cloud', appliedDate: '2026-08-17', status: 'Shortlisted' },
];

const RECENT_JOB_POSTS: RecentJobPost[] = [
    { id: 'JOB-3081', jobTitle: 'Senior Frontend Engineer', company: 'Nimbus Cloud', location: 'Bengaluru, IN', applications: 184, status: 'Active', postedDate: '2026-08-14' },
    { id: 'JOB-3080', jobTitle: 'Product Designer', company: 'Studio Loop', location: 'Remote', applications: 96, status: 'Active', postedDate: '2026-08-13' },
    { id: 'JOB-3079', jobTitle: 'Backend Engineer (Node.js)', company: 'Fintra Labs', location: 'Pune, IN', applications: 142, status: 'Pending Approval', postedDate: '2026-08-12' },
    { id: 'JOB-3078', jobTitle: 'DevOps Engineer', company: 'Skyforge Systems', location: 'Hyderabad, IN', applications: 61, status: 'Active', postedDate: '2026-08-10' },
    { id: 'JOB-3077', jobTitle: 'Business Development Manager', company: 'Brightpath Media', location: 'Jaipur, IN', applications: 38, status: 'Draft', postedDate: '2026-08-09' },
    { id: 'JOB-3076', jobTitle: 'Technical Recruiter', company: 'Fintra Labs', location: 'Remote', applications: 27, status: 'Expired', postedDate: '2026-07-28' },
];

const QUICK_ACTIONS: QuickAction[] = [
    { id: 'add-job', label: 'Add New Job', description: 'Post a new opening', iconKey: 'jobs' },
    { id: 'view-applications', label: 'View Applications', description: 'Review candidate activity', iconKey: 'applications' },
    { id: 'add-candidate', label: 'Add Candidate', description: 'Create a candidate profile', iconKey: 'addCandidate' },
    { id: 'manage-companies', label: 'Manage Companies', description: 'Edit employer accounts', iconKey: 'manageCompanies' },
];

const StatCard: FC<{ stat: StatCardData }> = ({ stat }) => {
    const isPositive = stat.trend === 'up';

    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                        {stat.formattedValue ?? stat.value}
                    </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg text-indigo-600">
                    {STAT_ICON_MAP[stat.iconKey]}
                </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5">
                <span
                    className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                        }`}
                >
                    {isPositive ? <ArrowUpOutlined className="text-[10px]" /> : <ArrowDownOutlined className="text-[10px]" />}
                    {stat.changePercent}%
                </span>
                <span className="text-xs text-slate-400">vs last month</span>
            </div>
        </div>
    );
};

const StatsGrid: FC<{ stats: StatCardData[] }> = ({ stats }) => (
    <Row gutter={[16, 16]}>
        {stats.map((stat) => (
            <Col key={stat.id} xs={24} sm={12} xl={6}>
                <StatCard stat={stat} />
            </Col>
        ))}
    </Row>
);

/** Builds a smooth SVG path from a set of points using simple cubic bezier interpolation. */
const buildSmoothPath = (points: Array<{ x: number; y: number }>): string => {
    if (points.length === 0) return '';

    return points.reduce((path, point, index) => {
        if (index === 0) {
            return `M ${point.x},${point.y}`;
        }
        const previous = points[index - 1];
        const controlX = (previous.x + point.x) / 2;
        return `${path} C ${controlX},${previous.y} ${controlX},${point.y} ${point.x},${point.y}`;
    }, '');
};

const CHART_WIDTH = 640;
const CHART_HEIGHT = 200;
const PADDING_X = 12;
const PADDING_Y = 16;

const ApplicationOverviewCard: FC<{
    data: ApplicationOverviewPoint[];
    total: number;
    growthPercent: number;
}> = ({ data, total, growthPercent }) => {
    const maxValue = Math.max(...data.map((point) => point.applications));
    const minValue = Math.min(...data.map((point) => point.applications));
    const valueRange = maxValue - minValue || 1;

    const usableWidth = CHART_WIDTH - PADDING_X * 2;
    const usableHeight = CHART_HEIGHT - PADDING_Y * 2;
    const stepX = data.length > 1 ? usableWidth / (data.length - 1) : 0;

    const points = data.map((point, index) => {
        const x = PADDING_X + index * stepX;
        const normalized = (point.applications - minValue) / valueRange;
        const y = PADDING_Y + (1 - normalized) * usableHeight;
        return { x, y, month: point.month, applications: point.applications };
    });

    const linePath = buildSmoothPath(points);
    const areaPath = `${linePath} L ${points[points.length - 1]?.x ?? 0},${CHART_HEIGHT - PADDING_Y} L ${points[0]?.x ?? 0},${CHART_HEIGHT - PADDING_Y} Z`;

    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <Title level={5} className="!mb-1 !text-slate-900">
                        Application Overview
                    </Title>
                    <Text className="text-sm text-slate-500">Applications received, January&nbsp;–&nbsp;December</Text>
                </div>
                <Tag color="success" icon={<ArrowUpOutlined />} className="!m-0 !rounded-full !px-2.5 !py-0.5">
                    {growthPercent}% YoY
                </Tag>
            </div>

            <div className="mt-4">
                <span className="text-3xl font-semibold tracking-tight text-slate-900">{total.toLocaleString('en-IN')}</span>
                <span className="ml-2 text-sm text-slate-400">total applications</span>
            </div>

            <div className="mt-5 w-full overflow-x-auto">
                <svg
                    viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                    className="h-48 w-full min-w-[560px]"
                    role="img"
                    aria-label="Applications received per month, January to December"
                >
                    <defs>
                        <linearGradient id="applicationOverviewFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.22} />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    {[0.25, 0.5, 0.75].map((fraction) => (
                        <line
                            key={fraction}
                            x1={PADDING_X}
                            x2={CHART_WIDTH - PADDING_X}
                            y1={PADDING_Y + usableHeight * fraction}
                            y2={PADDING_Y + usableHeight * fraction}
                            stroke="#EEF2F7"
                            strokeWidth={1}
                        />
                    ))}

                    <path d={areaPath} fill="url(#applicationOverviewFill)" stroke="none" />
                    <path d={linePath} fill="none" stroke="#4F46E5" strokeWidth={2.5} strokeLinecap="round" />

                    {points.map((point) => (
                        <circle key={point.month} cx={point.x} cy={point.y} r={3} fill="#4F46E5" stroke="#fff" strokeWidth={1.5} />
                    ))}
                </svg>

                <div className="mt-2 flex min-w-[560px] justify-between px-3 text-xs text-slate-400">
                    {data.map((point) => (
                        <span key={point.month}>{point.month}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const JobStatisticsCard: FC<{ stats: JobStatisticItem[] }> = ({ stats }) => {
    const totalJobs = stats.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Title level={5} className="!mb-1 !text-slate-900">
                Job Statistics
            </Title>
            <Text className="text-sm text-slate-500">Breakdown of all {totalJobs.toLocaleString('en-IN')} job posts</Text>

            <div className="mt-5 flex flex-col gap-4">
                {stats.map((item) => {
                    const percent = totalJobs > 0 ? Math.round((item.count / totalJobs) * 100) : 0;
                    return (
                        <div key={item.id}>
                            <div className="mb-1.5 flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="font-medium text-slate-700">{item.label}</span>
                                </div>
                                <span className="font-semibold text-slate-900">{item.count.toLocaleString('en-IN')}</span>
                            </div>
                            <Progress percent={percent} showInfo={false} strokeColor={item.color} trailColor="#F1F5F9" size="small" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TopCategoriesCard: FC<{ categories: JobCategoryItem[] }> = ({ categories }) => (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Title level={5} className="!mb-1 !text-slate-900">
            Top Job Categories
        </Title>
        <Text className="text-sm text-slate-500">Share of applications by category</Text>

        <div className="mt-5 flex flex-col gap-3.5">
            {categories.map((category) => (
                <div key={category.id}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700">{category.name}</span>
                        <span className="text-slate-400">
                            <span className="font-semibold text-slate-900">{category.percentage}%</span> &middot;{' '}
                            {category.applications.toLocaleString('en-IN')}
                        </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full"
                            style={{ width: `${category.percentage}%`, backgroundColor: category.color }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const QuickActionsCard: FC<{
    actions: QuickAction[];
    onActionClick?: (action: QuickAction) => void;
}> = ({ actions, onActionClick }) => (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Title level={5} className="!mb-1 !text-slate-900">
            Quick Actions
        </Title>
        <Text className="text-sm text-slate-500">Jump straight into common tasks</Text>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {actions.map((action) => (
                <button
                    key={action.id}
                    type="button"
                    onClick={() => onActionClick?.(action)}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-left transition-colors hover:border-indigo-200 hover:bg-indigo-50"
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200 group-hover:ring-indigo-200">
                        {QUICK_ACTION_ICON_MAP[action.iconKey]}
                    </span>
                    <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-slate-800">{action.label}</span>
                        <span className="block truncate text-xs text-slate-500">{action.description}</span>
                    </span>
                    <RightOutlined className="shrink-0 text-xs text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500" />
                </button>
            ))}
        </div>
    </div>
);

const APPLICATION_STATUS_COLOR_MAP: Record<ApplicationStatus, string> = {
    Pending: 'gold',
    Shortlisted: 'blue',
    Interview: 'purple',
    Hired: 'green',
    Rejected: 'red',
};

const JOB_POST_STATUS_COLOR_MAP: Record<JobPostStatus, string> = {
    Active: 'green',
    'Pending Approval': 'gold',
    Expired: 'red',
    Draft: 'default',
};

const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

const getInitials = (name: string): string =>
    name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase();

const RecentApplicationsTable: FC<{
    applications: RecentApplication[];
    onView?: (application: RecentApplication) => void;
}> = ({ applications, onView }) => {
    const columns: ColumnsType<RecentApplication> = [
        {
            title: 'Candidate',
            dataIndex: 'candidateName',
            key: 'candidate',
            render: (_value: string, record: RecentApplication) => (
                <div className="flex items-center gap-3">
                    <Avatar className="!bg-indigo-100 !text-indigo-600 !font-semibold">
                        {getInitials(record.candidateName)}
                    </Avatar>
                    <div>
                        <div className="font-medium text-slate-800">{record.candidateName}</div>
                        <div className="text-xs text-slate-400">{record.candidateEmail}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Job',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
            render: (jobTitle: string) => <span className="text-slate-700">{jobTitle}</span>,
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (company: string) => <span className="text-slate-500">{company}</span>,
        },
        {
            title: 'Date',
            dataIndex: 'appliedDate',
            key: 'appliedDate',
            render: (appliedDate: string) => <span className="text-slate-500">{formatDate(appliedDate)}</span>,
            sorter: (a: RecentApplication, b: RecentApplication) =>
                new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime(),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: ApplicationStatus) => (
                <Tag color={APPLICATION_STATUS_COLOR_MAP[status]} className="!rounded-full !px-2.5">
                    {status}
                </Tag>
            ),
            filters: (Object.keys(APPLICATION_STATUS_COLOR_MAP) as ApplicationStatus[]).map((status) => ({
                text: status,
                value: status,
            })),
            onFilter: (value, record) => record.status === value,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'right',
            render: (_value: unknown, record: RecentApplication) => (
                <Button
                    type="text"
                    size="small"
                    icon={<EyeOutlined />}
                    onClick={() => onView?.(record)}
                    className="!text-indigo-600 hover:!text-indigo-700"
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <Title level={5} className="!mb-0 !text-slate-900">
                    Recent Applications
                </Title>
                <Button type="link" className="!px-0 !text-indigo-600">
                    View all
                </Button>
            </div>

            <Table<RecentApplication> columns={columns} dataSource={applications} rowKey="id" pagination={false} scroll={{ x: 720 }} />
        </div>
    );
};

const RecentJobPostsTable: FC<{
    jobPosts: RecentJobPost[];
    onEdit?: (jobPost: RecentJobPost) => void;
}> = ({ jobPosts, onEdit }) => {
    const columns: ColumnsType<RecentJobPost> = [
        {
            title: 'Job',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
            render: (jobTitle: string) => <span className="font-medium text-slate-800">{jobTitle}</span>,
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (company: string) => <span className="text-slate-500">{company}</span>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (location: string) => (
                <span className="flex items-center gap-1.5 text-slate-500">
                    <EnvironmentOutlined className="text-slate-400" />
                    {location}
                </span>
            ),
        },
        {
            title: 'Applications',
            dataIndex: 'applications',
            key: 'applications',
            align: 'center',
            sorter: (a: RecentJobPost, b: RecentJobPost) => a.applications - b.applications,
            render: (applications: number) => <span className="font-semibold text-slate-800">{applications}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: JobPostStatus) => (
                <Tag color={JOB_POST_STATUS_COLOR_MAP[status]} className="!rounded-full !px-2.5">
                    {status}
                </Tag>
            ),
            filters: (Object.keys(JOB_POST_STATUS_COLOR_MAP) as JobPostStatus[]).map((status) => ({
                text: status,
                value: status,
            })),
            onFilter: (value, record) => record.status === value,
        },
        {
            title: 'Date',
            dataIndex: 'postedDate',
            key: 'postedDate',
            render: (postedDate: string) => <span className="text-slate-500">{formatDate(postedDate)}</span>,
            sorter: (a: RecentJobPost, b: RecentJobPost) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime(),
        },
        {
            title: 'Action',
            key: 'action',
            align: 'right',
            render: (_value: unknown, record: RecentJobPost) => (
                <Button
                    type="text"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => onEdit?.(record)}
                    className="!text-indigo-600 hover:!text-indigo-700"
                >
                    Edit
                </Button>
            ),
        },
    ];

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <Title level={5} className="!mb-0 !text-slate-900">
                    Recent Job Posts
                </Title>
                <Button type="link" className="!px-0 !text-indigo-600">
                    View all
                </Button>
            </div>

            <Table<RecentJobPost> columns={columns} dataSource={jobPosts} rowKey="id" pagination={false} scroll={{ x: 780 }} />
        </div>
    );
};

const SuperAdminDashboard = () => {
    const handleViewApplication = (application: RecentApplication): void => {
        console.log('View application', application.id);
    };

    const handleEditJobPost = (jobPost: RecentJobPost): void => {
        console.log('Edit job post', jobPost.id);
    };

    const handleQuickAction = (action: QuickAction): void => {
        console.log('Quick action triggered', action.id);
    };

    return (
        <div className="flex flex-col gap-5 overflow-y-auto">
            <StatsGrid stats={STAT_CARDS} />

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <ApplicationOverviewCard
                        data={APPLICATION_OVERVIEW}
                        total={APPLICATION_OVERVIEW_TOTAL}
                        growthPercent={APPLICATION_OVERVIEW_GROWTH_PERCENT}
                    />
                </div>

                <div className="xl:col-span-1">
                    <JobStatisticsCard stats={JOB_STATISTICS} />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div className="xl:col-span-1">
                    <TopCategoriesCard categories={TOP_JOB_CATEGORIES} />
                </div>

                <div className="xl:col-span-2">
                    <QuickActionsCard
                        actions={QUICK_ACTIONS}
                        onActionClick={handleQuickAction}
                    />
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                <div>
                    <RecentApplicationsTable
                        applications={RECENT_APPLICATIONS}
                        onView={handleViewApplication}
                    />
                </div>

                <div>
                    <RecentJobPostsTable
                        jobPosts={RECENT_JOB_POSTS}
                        onEdit={handleEditJobPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;