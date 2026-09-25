// export interface Company {
//   id: string;
//   name: string;
//   logoColor: string;
//   industry: string;
//   employees: number;
//   plan: 'free' | 'starter' | 'growth' | 'enterprise';
//   status: 'active' | 'trial' | 'suspended';
//   openJobs: number;
//   joinedAt: string;
//   contactEmail: string;
// }

export interface Company {
  key: number;
  name: string;
  email: string;
  industry: string;
  employees: number;
  jobs: number;
  plan: "Free" | "Starter" | "Growth" | "Enterprise";
  status: "Active" | "Trial" | "Suspended";
}

export interface CompanyStat {
  id: string;
  label: string;
  value: number;
  delta: number;
  icon: 'building' | 'trending-up' | 'crown' | 'user-x';
}

export interface Candidate {
  key: number;
  name: string;
  email: string;
  phone: string;
  experience: string;
  appliedJobs: number;
  status: "Active" | "Shortlisted" | "Interview" | "Rejected";
}

export interface Recruiter {
  key: number;
  name: string;
  email: string;
  department: string;
  jobs: number;
  candidates: number;
}

export interface Job {
  key: number;
  title: string;
  company: string;
  location: string;
  employmentType: "Full Time" | "Part Time" | "Contract" | "Internship";
  applications: number;
  postedDate: string;
  status: "Active" | "Draft" | "Closed" | "Paused";
}

export interface Application {
  key: number;
  candidate: string;
  email: string;
  job: string;
  company: string;
  appliedDate: string;
  recruiter: string;
  status: | "Applied" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
}

export interface MasterData {
  key: string;
  name: string;
  code: string;
  type: string;
  description: string;
  status: "Active" | "Inactive";
}

export interface Location {
  key: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  status: "Active" | "Inactive";
}

export interface Blog {
  key: string;
  title: string;
  category: string;
  author: string;
  publishedDate: string;
  status: "Draft" | "Published" | "Archived";
}

export interface SupportTicket {
  key: string;
  ticketId: string;
  subject: string;
  user: string;
  email: string;
  category: string;
  priority: "Low" | "Medium" | "High" | "Urgent";
  createdDate: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
}

export interface Notification {
  key: string;
  title: string;
  message: string;
  recipient: "All" | "Candidates" | "Recruiters" | "Companies";
  type: "System" | "Job" | "Application" | "Account";
  sentDate: string;
  status: "Sent" | "Scheduled" | "Draft";
}

export interface Report {
    key: string;
    reportName: string;
    type: string;
    generatedBy: string;
    generatedDate: string;
    records: number;
    status: "Generated" | "Processing" | "Failed";
}