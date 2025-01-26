import * as React from "react";

export const NewsletterForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-6 w-full">
      <div className="flex flex-wrap gap-4 items-start w-full text-base">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="flex-1 shrink gap-2 self-stretch p-3 border border-black border-solid basis-6 min-w-[240px] text-stone-500"
          placeholder="Your email here"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="gap-2 self-stretch px-6 py-3 text-black whitespace-nowrap border border-black border-solid w-[119px]"
        >
          Join
        </button>
      </div>
      <div className="mt-3 text-xs text-black">
        By subscribing, you consent to our Privacy Policy and agree to receive
        updates.
      </div>
    </form>
  );
};
