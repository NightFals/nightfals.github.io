import * as React from "react";
import { SocialLink } from "../types";

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-col mt-4 w-full text-sm text-black whitespace-nowrap">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex gap-3 items-center py-2 w-full hover:text-gray-600"
        >
          <img
            loading="lazy"
            src={link.icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="self-stretch my-auto">{link.platform}</div>
        </a>
      ))}
    </div>
  );
};
