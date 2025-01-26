import * as React from "react";
import { NavItem } from "../types";

interface NavigationProps {
  items: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="flex gap-4 justify-center items-center self-stretch my-auto text-base">
      <div className="flex flex-wrap gap-8 items-center self-stretch my-auto text-black min-w-[240px]">
        {items.map((item, index) => (
          <div key={index} className="self-stretch my-auto">
            {item.hasDropdown ? (
              <div className="flex gap-1 justify-center items-center self-stretch my-auto whitespace-nowrap w-[94px]">
                <div className="self-stretch my-auto">{item.label}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/39682cb34f7145bbca5eef408a49dbec7f5fb7b5c08509d485a0e50d92c27b2e?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            ) : (
              <a href={item.href} className="hover:text-gray-600">
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
