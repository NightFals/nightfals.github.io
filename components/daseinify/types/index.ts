export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
  hasDropdown?: boolean;
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

export interface ResourceLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: ResourceLink[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
