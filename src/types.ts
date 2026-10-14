export type Language = 'ar' | 'en';

export type LocalizedText = {
  ar: string;
  en: string;
};

export type AvailabilityStatus = 'verified' | 'conditional';

export interface LandingLink {
  label: LocalizedText;
  href: string;
  external?: boolean;
}

export interface AudienceItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
}

export interface ProblemOutcomeItem {
  id: string;
  beforeTitle: LocalizedText;
  beforeDescription: LocalizedText;
  afterTitle: LocalizedText;
  afterDescription: LocalizedText;
}

export interface CapabilityGroup {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  availability: AvailabilityStatus;
  availabilityBadge: LocalizedText;
  routeEvidence: string;
  bullets: {
    ar: string[];
    en: string[];
  };
}

export interface WalkthroughStep {
  stepNumber: string;
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  roleBadge: LocalizedText;
  routePath: string;
  highlights: {
    ar: string[];
    en: string[];
  };
}

export interface RoleMatrixItem {
  id: string;
  roleKey: string;
  name: LocalizedText;
  panelPath: string;
  responsibility: LocalizedText;
  verifiedWorkflows: {
    ar: string[];
    en: string[];
  };
}

export interface CustomizationPillar {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  scopeType: 'baseline' | 'scoped' | 'infrastructure';
  scopeBadge: LocalizedText;
}

export interface DemoOption {
  id: 'primary_generic' | 'branded_dexal' | 'branded_rusu';
  title: LocalizedText;
  subtitle: LocalizedText;
  badge: LocalizedText;
  url: string;
  isPrimary: boolean;
  disclaimer: LocalizedText;
  highlights: {
    ar: string[];
    en: string[];
  };
}

export interface DeliveryStep {
  step: string;
  title: LocalizedText;
  description: LocalizedText;
  deliverable: LocalizedText;
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
  category: 'product' | 'pricing' | 'technical' | 'customization';
}
