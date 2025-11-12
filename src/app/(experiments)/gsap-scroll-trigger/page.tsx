"use client";

import { DrawSVGPlugin } from "gsap/all";
import gsap from "gsap";
import { Highlighted1, Highlighted2, Highlighted3 } from "./highlights";

gsap.registerPlugin(DrawSVGPlugin);

export default function Page() {
  return (
    <>
      <TitleSection />
      <DescriptionSection />
    </>
  );
}

function TitleSection() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="title font-black text-[10vh] leading-[0.9] pb-[0.1em] flex flex-col gap-[0.1em] relative right-[0.5em]">
        <span className="block relative text-left text-(--dark-green) italic font-thin">
          gsap
        </span>
        <span className="block relative text-right uppercase font-thin">
          scroll
        </span>
        <span className="block relative text-left uppercase font-thin">
          triggered
        </span>
        <span className="block relative left-[1.5em] text-right text-(--dark-green) italic font-thin">
          animations
        </span>
      </h1>
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="h-screen w-screen p-10 flex items-stretch justify-stretch">
      <div className="border-2 border-(--line) p-10 w-full flex items-center justify-center">
        <h2 className="text-[6vh] leading-[1.4] text-center text-balance max-w-7xl">
          <ScrollTriggerWord /> enables anyone to create{" "}
          <span className="whitespace-nowrap">jaw-dropping</span>{" "}
          <ScrollBasedWord /> animations with minimal code. Infinitely flexible.
          Scrub, pin, snap, or just <TriggerAnythingWord /> scroll-related, even
          if it has nothing to do{" "}
          <span className="whitespace-nowrap">with animation.</span>
        </h2>
      </div>
    </div>
  );
}

const ScrollTriggerWord = () => (
  <span className="relative">
    <Highlighted1 className="absolute top-[0.2em] left-0 w-[6em] mix-blend-multiply" />
    ScrollTrigger
  </span>
);
const ScrollBasedWord = () => (
  <span className="whitespace-nowrap relative">
    <Highlighted2 className="absolute bottom-0 left-0 mix-blend-multiply" />
    scroll-based
  </span>
);
const TriggerAnythingWord = () => (
  <span className="whitespace-nowrap relative">
    <Highlighted3 className="absolute bottom-0 left-0 mix-blend-multiply" />
    trigger anything
  </span>
);
