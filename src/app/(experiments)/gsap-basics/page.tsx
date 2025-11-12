"use client";

import gsap from "gsap";
import { Antonio } from "next/font/google";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const antonio = Antonio({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className={antonio.className}>
      <TitleSection />
    </div>
  );
}
function TitleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(".title");

      gsap.from(split.chars, {
        autoAlpha: 0,
        y: 200,
        stagger: 0.03,
        ease: "circ.out",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="bg-blue-300 text-black flex h-screen items-end justify-left"
    >
      <h1 className="title font-black text-[20rem] leading-none pb-[0.1em] text-left">
        GSAP
        <br />
        basics
      </h1>
    </div>
  );
}
