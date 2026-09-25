import { BankOutlined, RiseOutlined, CrownOutlined, UserDeleteOutlined } from '@ant-design/icons';
import type { Company, CompanyStat } from "../admin.interface";

export const PAGE_SIZE = 5;

export const STAT_ICONS: Record<CompanyStat['icon'], typeof BankOutlined> = {
  building: BankOutlined,
  'trending-up': RiseOutlined,
  crown: CrownOutlined,
  'user-x': UserDeleteOutlined,
};

export const STATUS_MAP: Record<Company['status'], { text: string; color: string }> = {
  Active: { text: 'Active', color: 'success' },
  Trial: { text: 'Trial', color: 'processing' },
  Suspended: { text: 'Suspended', color: 'error' },
};

export const PLAN_STYLES: Record<Company['plan'], string> = {
  Free: 'bg-slate-100 text-slate-600',
  Starter: 'bg-blue-50 text-blue-600',
  Growth: 'bg-violet-50 text-violet-600',
  Enterprise: 'bg-amber-50 text-amber-700',
};

export const PLAN_LABELS: Record<Company['plan'], string> = {
  Free: 'Free',
  Starter: 'Starter',
  Growth: 'Growth',
  Enterprise: 'Enterprise',
};

export const companyStats: CompanyStat[] = [
  { id: 'c1', label: 'Total Companies', value: 148, delta: 6.4, icon: 'building' },
  { id: 'c2', label: 'Active This Month', value: 112, delta: 9.1, icon: 'trending-up' },
  { id: 'c3', label: 'Enterprise Plan', value: 34, delta: 2.8, icon: 'crown' },
  { id: 'c4', label: 'Suspended', value: 5, delta: -1.5, icon: 'user-x' },
];

export const companyList: Company[] = [
  {
    key: 1,
    name: "TechNova Solutions",
    email: "contact@technova.com",
    industry: "Information Technology",
    employees: 250,
    jobs: 18,
    plan: "Enterprise",
    status: "Active",
  },
  {
    key: 2,
    name: "GrowthLabs Pvt. Ltd.",
    email: "hr@growthlabs.com",
    industry: "Software",
    employees: 120,
    jobs: 12,
    plan: "Growth",
    status: "Active",
  },
  {
    key: 3,
    name: "FinEdge Technologies",
    email: "contact@finedge.com",
    industry: "Finance",
    employees: 85,
    jobs: 8,
    plan: "Starter",
    status: "Trial",
  },
  {
    key: 4,
    name: "Bright Future Pvt. Ltd.",
    email: "hr@brightfuture.com",
    industry: "Education",
    employees: 60,
    jobs: 6,
    plan: "Free",
    status: "Active",
  },
  {
    key: 5,
    name: "CloudWorks India",
    email: "hello@cloudworks.com",
    industry: "Cloud Services",
    employees: 180,
    jobs: 15,
    plan: "Enterprise",
    status: "Active",
  },
  {
    key: 6,
    name: "InnovateX",
    email: "hr@innovatex.com",
    industry: "Technology",
    employees: 95,
    jobs: 9,
    plan: "Growth",
    status: "Suspended",
  },
  {
    key: 7,
    name: "NextGen Solutions",
    email: "contact@nextgen.com",
    industry: "Consulting",
    employees: 145,
    jobs: 11,
    plan: "Growth",
    status: "Active",
  },
  {
    key: 8,
    name: "Alpha Enterprises",
    email: "hr@alphaenterprises.com",
    industry: "Manufacturing",
    employees: 320,
    jobs: 20,
    plan: "Enterprise",
    status: "Active",
  },
];