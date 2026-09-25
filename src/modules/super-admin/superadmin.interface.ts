export interface Admin {
    key: number;
    name: string;
    email: string;
    phone: string;
    role: "Admin" | "Moderator";
    lastLogin: string;
    status: "Active" | "Inactive";
}

export interface Recruiter {
    key: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    jobs: number;
    applications: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface Candidate {
    key: number;
    name: string;
    email: string;
    phone: string;
    experience: string;
    applications: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface RolePermission {
    key: number;
    role: "Super Admin" | "Admin" | "Recruiter" | "Candidate";
    description: string;
    users: number;
    permissions: number;
    status: "Active" | "Inactive";
}

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

export interface Recruiter {
    key: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    jobs: number;
    applications: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface Candidate {
    key: number;
    name: string;
    email: string;
    phone: string;
    experience: string;
    applications: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface Job {
    key: number;
    title: string;
    company: string;
    location: string;
    employmentType: | "Full Time" | "Part Time" | "Contract" | "Internship";
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
    recruiter: string;
    appliedDate: string;
    status: | "Applied" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
}

export interface MasterData {
    key: number;
    name: string;
    code: string;
    type: | "Job Category" | "Job Type" | "Industry" | "Skill" | "Experience Level" | "Education Level" | "Department" | "Application Status" | "Recruiter Department" | "Company Plan";
    description: string;
    status: "Active" | "Inactive";
}

export interface Location {
    key: number;
    city: string;
    state: string;
    country: string;
    pincode: string;
    status: "Active" | "Inactive";
}

export interface Blog {
    key: number;
    title: string;
    category: string;
    author: string;
    publishedDate: string;
    status: "Draft" | "Published" | "Archived";
}

export interface SupportTicket {
    key: number;
    ticketId: string;
    subject: string;
    user: string;
    email: string;
    category: string;
    priority: "Low" | "Medium" | "High" | "Urgent";
    createdDate: string;
    status: "Open" | "In Progress" | "Resolved" | "Closed";
}

export interface JobReport {
    key: number;
    title: string;
    company: string;
    location: string;
    type: string;
    applications: number;
    postedDate: string;
    status: "Active" | "Draft" | "Closed" | "Paused";
}

export interface CandidateReport {
    key: number;
    name: string;
    email: string;
    experience: string;
    applications: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface ApplicationReport {
    key: number;
    candidate: string;
    email: string;
    job: string;
    company: string;
    recruiter: string;
    appliedDate: string;
    status: | "Applied" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
}

export interface RecruiterReport {
    key: number;
    name: string;
    email: string;
    company: string;
    jobs: number;
    applications: number;
    hired: number;
    joinedDate: string;
    status: "Active" | "Inactive";
}

export interface CompanyReport {
    key: number;
    name: string;
    industry: string;
    location: string;
    plan: "Free" | "Starter" | "Growth" | "Enterprise";
    jobs: number;
    recruiters: number;
    employees: number;
    joinedDate: string;
    status: "Active" | "Trial" | "Suspended";
}

export interface HiringReport {
    key: number;
    candidate: string;
    job: string;
    company: string;
    location: string;
    recruiter: string;
    hiredDate: string;
    type: "Full Time" | "Part Time" | "Contract" | "Internship";
    status: "Hired" | "Pending" | "Rejected";
}

export interface AuditLog {
    key: number;
    user: string;
    email: string;
    action: | "Created" | "Updated" | "Deleted" | "Login" | "Logout" | "Status Changed";
    module: | "Companies" | "Recruiters" | "Candidates" | "Jobs" | "Applications" | "Authentication" | "Blogs" | "Settings";
    description: string;
    ipAddress: string;
    dateTime: string;
    status: "Success" | "Failed";
}