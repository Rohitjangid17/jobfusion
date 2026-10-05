export interface Job {
    key: number;
    title: string;
    company: string;
    location: string;
    type: "Full Time" | "Part Time" | "Contract" | "Internship";
    workMode: "On-site" | "Remote" | "Hybrid";
    applications: number;
    postedDate: string;
    expiryDate: string;
    status: "Active" | "Draft" | "Closed" | "Expired";
}

export interface Candidate {
    key: number;
    name: string;
    email: string;
    experience: string;
    location: string;
    skills: string[];
    appliedJobs: number;
    status: "Available" | "Interviewing" | "Hired" | "Not Available";
    lastActive: string;
    saved: boolean;
    shortlisted: boolean;
}

export interface Application {
    key: number;
    candidate: string;
    email: string;
    job: string;
    experience: string;
    location: string;
    appliedDate: string;
    status: | "New" | "Shortlisted" | "Interview" | "Selected" | "Rejected";
    source: "Direct" | "LinkedIn" | "Naukri" | "Indeed" | "Referral";
}

export interface Interview {
    key: number;
    candidate: string;
    email: string;
    job: string;
    interviewDate: string;
    interviewTime: string;
    interviewer: string;
    type: "Video Call" | "Phone Call" | "In Person";
    status: "Upcoming" | "Completed" | "Cancelled" | "Rescheduled";
}

export interface SupportTicket {
    key: number;
    ticketId: string;
    subject: string;
    category: | "Account" | "Jobs" | "Applications" | "Interviews" | "Technical" | "Billing";
    priority: "Low" | "Medium" | "High";
    createdDate: string;
    lastUpdated: string;
    status: "Open" | "In Progress" | "Resolved" | "Closed";
}