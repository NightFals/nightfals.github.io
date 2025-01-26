import * as React from "react";
import { Navigation } from "./components/Navigation";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import {
  mainNavItems,
  socialLinks,
  footerSections,
  featureCards,
} from "./data/navigationData";

export const DaseinifyLanding: React.FC = () => {
  return (
    <div className="border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <header className="flex overflow-hidden flex-col w-full bg-white border border-black border-solid">
        <div className="flex flex-wrap gap-10 justify-between items-center px-16 w-full h-[91px]">
          <div className="self-stretch my-auto text-3xl text-black">
            Daseinify
          </div>
          <div className="flex gap-4 justify-center items-center self-stretch my-auto">
            <Navigation items={mainNavItems} />
            <div className="flex gap-4 items-start self-stretch my-auto">
              <button className="gap-2 self-stretch px-5 py-2 text-black whitespace-nowrap border border-black border-solid">
                Join
              </button>
              <button className="gap-2 self-stretch px-5 py-2 text-white bg-black border border-black border-solid">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col px-16 py-28 w-full bg-white">
          <div className="flex flex-wrap gap-10 items-start w-full">
            <div className="flex-1 shrink text-6xl font-bold text-black leading-[67px] min-w-[240px]">
              Find Your Future with Daseinify Today
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="text-lg leading-7 text-black">
                At Daseinify, we guide teens and young adults in discovering
                their true passions and educational paths. Our platform offers
                personalized resources to help you create a fulfilling career
                that aligns with your dreams.
              </div>
              <div className="flex gap-4 items-start self-start mt-8 text-base">
                <button className="gap-2 self-stretch px-6 py-3 text-white bg-black border border-black border-solid">
                  Get Started
                </button>
                <button className="gap-2 self-stretch px-6 py-3 text-black border border-black border-solid">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25778dd6686ef7b925e4103b9afa932d335e1c2cfa6ce78f5fbb50cdbebfb695?placeholderIfAbsent=true&apiKey=dec92e5cabe24422ac66c42343aedd59"
            alt="Students exploring career options"
            className="object-contain mt-20 w-full aspect-[1.88]"
          />
        </section>

        <section className="flex overflow-hidden flex-col items-start px-16 py-28 w-full text-black bg-white">
          <div className="flex flex-col max-w-full w-[768px]">
            <div className="self-start text-base font-semibold whitespace-nowrap">
              Explore
            </div>
            <div className="flex flex-col mt-4 w-full">
              <h2 className="text-5xl font-bold leading-[58px]">
                Unlock Your Future with Personalized Guidance
              </h2>
              <div className="mt-6 text-lg leading-7">
                Daseinify offers tailored assessments to help you discover your
                ideal career path. Our platform simplifies the process of
                exploring majors, colleges, and internships that resonate with
                your passions.
              </div>
            </div>
          </div>
          <div className="flex flex-col self-stretch mt-20 w-full">
            <div className="flex flex-wrap gap-10 items-start w-full">
              {featureCards.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer sections={footerSections} socialLinks={socialLinks} />
    </div>
  );
};
