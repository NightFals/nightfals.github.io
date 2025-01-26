import * as React from "react";
import { FeatureCard as FeatureCardType } from "../types";

interface FeatureCardProps {
  feature: FeatureCardType;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={feature.icon}
        alt=""
        className="object-contain w-12 aspect-square"
      />
      <div className="mt-6 text-3xl font-bold leading-10">{feature.title}</div>
      <div className="mt-6 text-base">{feature.description}</div>
    </div>
  );
};
