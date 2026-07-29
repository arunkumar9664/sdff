export interface CompanySocial {
  linkedin: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  legalName: string;
  cin: string;
  registeredOffice: string;
  phone: string;
  email: string;
  grievanceEmail: string;
  website: string;
  regulatoryStatus: string;
  businessHours: string;
  social: CompanySocial;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  /** When set and numeric, enables animated counters */
  numericValue?: number;
  suffix?: string;
  prefix?: string;
}

export interface ProductBenefit {
  title: string;
  description?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  whoIsItFor: string[];
  useCases: string[];
  eligibilityNote: string;
  documentsNote: string;
  journey: string[];
  faqs: { question: string; answer: string }[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  linkedin?: string;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  business: string;
  heading: string;
  story: string;
  image: string;
  isDemoContent: boolean;
}

export interface PresenceLocation {
  state: string;
  districts: string[];
  branches: number;
  isActive: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  financialYear: string;
  category: string;
  file?: string;
  publishedDate?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  employmentType: string;
  description: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  image: string;
}
