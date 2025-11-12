"use client";

import gsap from "gsap";
import { Orbitron } from "next/font/google";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className={orbitron.className}>
      <TitleSection />
    </div>
  );
}

function TitleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      SplitText.create(".title", {
        type: "words, chars",
        wordsClass: "title-word++",
        charsClass: "title-char++",
        mask: "chars",
      });

      const tl = gsap.timeline();

      tl.from(".title-word1 .title-char", {
        duration: 0.5,
        autoAlpha: 0,
        y: 100,
        stagger: 0.07,
        ease: "circ.out",
      });

      tl.from(
        ".title-word2 .title-char",
        {
          duration: 0.2,
          autoAlpha: 0,
          x: -100,
          stagger: 0.07,
          ease: "circ.inOut",
        },
        "-=0.5s"
      );

      tl.from(
        ".title-word3 .title-char",
        {
          duration: 0.3,
          autoAlpha: 0,
          y: -100,
          stagger: 0.07,
          ease: "circ.out",
        },
        "-=0.5s"
      );

      tl.to(
        ".tl-dot",
        {
          opacity: 1,
          duration: 0.01,
          repeat: 6,
          repeatDelay: 0.05,
          yoyo: true,
          ease: "circ.out",
        },
        "-=0.1s"
      );

      tl.from(
        ".tl-start",
        {
          height: 0,
          duration: 0.4,
          ease: "circ.out",
        },
        0.2
      );

      tl.from(
        ".tl-main",
        {
          width: 0,
          duration: 0.8,
          ease: "circ.out",
        },
        0.4
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#E5E5E5] text-[#2A2A2A] flex h-screen items-center justify-center tracking-tighter"
    >
      <h1 className="title font-bold text-[20vh] flex flex-col gap-[0.2em] leading-none text-left uppercase">
        <span className="relative block right-[1.5em] text-left">GSAP</span>
        <span className="relative block">
          <span>timeline</span>
          {/* Timeline */}
          <div className="absolute w-full -bottom-2 h-2">
            <div className="tl-main absolute w-full bottom-0 h-2 bg-orange-500" />
            <div className="tl-start absolute left-0 top-1/2 -translate-y-1/2 h-8 w-2 bg-orange-500" />
          </div>
          {/* Dot */}
          <div className="tl-dot absolute -top-2 -right-4 h-4 aspect-square bg-orange-500 opacity-0" />
        </span>
        <span className="relative block left-[1.6em] text-right">basics</span>
      </h1>
    </div>
  );
}
