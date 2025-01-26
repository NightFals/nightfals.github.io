import { NavItem, SocialLink, FooterSection, FeatureCard } from "../types";

export const mainNavItems: NavItem[] = [
  { label: "Explore Careers", href: "/careers" },
  { label: "Find Colleges", href: "/colleges" },
  { label: "Internship Opportunities", href: "/internships" },
  { label: "Resources", hasDropdown: true },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6292688879f6bbcd8a8f9a127576d8d8c7e9a8b0b1cdd773de03d48f8675c19?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    href: "/facebook",
  },
  {
    platform: "Instagram",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8db9dc52fb00140124a167a21fd331b6e0a966e34c24014a712e277b1104a781?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    href: "/instagram",
  },
  {
    platform: "X",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/61416f735c4a9b5c987c48b67a14aa5587a1cd084ca738d83a6beca37c70e514?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    href: "/twitter",
  },
  {
    platform: "LinkedIn",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8368c263c41cf37a7798f8152c8b2934926f6188ebc078dead3f9162f2af78ab?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    href: "/linkedin",
  },
  {
    platform: "YouTube",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83dbed4d262f75a246fb6b7f8d24ae7da34c5d1b16d68098283e7aa53ab50b4f?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    href: "/youtube",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Resources & Tools",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog Posts", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Connect With Us",
    links: [
      { label: "Newsletter", href: "/newsletter" },
      { label: "Events", href: "/events" },
      { label: "Webinars", href: "/webinars" },
      { label: "Community", href: "/community" },
      { label: "Support", href: "/support" },
    ],
  },
];

export const featureCards: FeatureCard[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    title: "Personalized Tests for Your Unique Journey",
    description: "Take our quizzes to find your strengths and interests.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f9f666004ce497ec7d158ff7000b2ab665a4db3c262ef12313da399d19826b6?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    title: "Explore Majors That Align with Your Passions",
    description: "Discover the academic paths that excite you.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/513997e4ebf8646252b3115f9dc1d2a6bdcddb1974d092193a8df12831a19864?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59",
    title: "Find Colleges That Fit Your Goals",
    description: "Connect with institutions that support your aspirations.",
  },
];
