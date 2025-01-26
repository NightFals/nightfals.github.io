import * as React from "react";
import { FooterSection, SocialLink } from "../types";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

interface FooterProps {
  sections: FooterSection[];
  socialLinks: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ sections, socialLinks }) => {
  return (
    <footer className="flex overflow-hidden flex-col px-16 py-20 w-full bg-white max-w-[1440px]">
      <div className="flex flex-wrap gap-10 items-start w-full min-h-[248px]">
        <div className="flex flex-col min-w-[240px] w-[500px]">
          <div className="text-3xl text-black">Daseinify</div>
          <div className="mt-6 text-base leading-6 text-black">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </div>
          <NewsletterForm />
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-10 items-start basis-0 min-w-[240px]">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex overflow-hidden flex-col flex-1 shrink basis-0"
            >
              <div className="text-base font-semibold text-black">
                {section.title}
              </div>
              <div className="flex flex-col mt-4 w-full text-sm text-black">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="flex-1 shrink py-2 w-full hover:text-gray-600"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col flex-1 shrink basis-0">
            <div className="text-base font-semibold text-black">Follow Us</div>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full text-sm">
        <div className="flex w-full bg-black border border-black border-solid min-h-[1px]" />
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full">
          <div className="text-black">
            © 2024 Daseinify. All rights reserved.
          </div>
          <div className="flex gap-6 items-start text-black min-w-[240px]">
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            <a href="/terms" className="underline">
              Terms of Use
            </a>
            <a href="/cookies" className="underline">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
