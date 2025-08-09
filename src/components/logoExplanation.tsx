
"use client";

import Image from "next/image";
import { JSX, useState } from "react";

type Section = {
  title: string;
  content: JSX.Element;
};

const sections: Section[] = [
  {
    title: "1) Outer Ring & Typography",
    content: (
      <ul className="list-disc ms-5 space-y-2">
        <li>
          <span className="font-semibold text-green-700">Text:</span> “PAN YOUTH ASSOCIATION” at the top and “PAN TONG” at the base — unity and identity of the Pan ethnic group.
        </li>
        <li>
          <span className="font-semibold text-green-700">Font &amp; 3D Texture:</span> Embossed style symbolizing strength, legacy, and modern relevance.
        </li>
        <li>
          <span className="font-semibold text-green-700">Stars:</span> On either side of the name — excellence, aspiration, and universal relevance.
        </li>
      </ul>
    ),
  },
  {
    title: "2) Central Image Composition",
    content: (
      <ul className="list-disc ms-5 space-y-2">
        <li>
          <span className="font-semibold text-green-700">The Tree:</span> Traditional meeting point for brothers (Tuwagat Jep Fu&apos;up).
        </li>
        <li>
          <span className="font-semibold text-green-700">The Elder:</span> Standing with a staff — wisdom and leadership.
        </li>
        <li>
          <span className="font-semibold text-green-700">Hoe on the Tree:</span> Agriculture, hard work, and ancestral farming heritage; its placement shows the bond between nature, culture, and sustenance.
        </li>
        <li>
          <span className="font-semibold text-green-700">Youth Around:</span> Six young men in traditional attire — unity of purpose across sub-dialects (Blep Jep Fu&apos;up).
        </li>
      </ul>
    ),
  },
  {
    title: "3) Color Scheme",
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-green-600" />
          <p>
            <span className="font-semibold text-green-700">Green:</span> Agrarian people.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-white ring-1 ring-gray-300" />
          <p>
            <span className="font-semibold">White:</span> Peace and honesty.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-black" />
          <p>
            <span className="font-semibold">Black:</span> Rocky terrain.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-full bg-amber-800" />
          <p>
            <span className="font-semibold">Earth (brown):</span> Fertile agricultural land.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Interpretation",
    content: (
      <p className="text-green-800">
        Respect for elders, community unity, dedication to agriculture, and passing ancestral wisdom to youth.
        The 3D treatment shows roots in tradition with a forward-looking spirit.
      </p>
    ),
  },
];

export default function LogoExplanation() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Overall Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            Our Logo Explained
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            An in-depth look into the meaning, symbolism, and cultural heritage represented by the Pan Youth Association emblem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Logo */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="relative mx-auto w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl ring-4 ring-green-700 bg-gray-50">
              <Image
                src="/Newpanlogo.jpeg"
                alt="PAN Youth Association Logo"
                fill
                priority
                className="object-contain p-6"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-green-700">
                PAN YOUTH ASSOCIATION • PANTONG
              </h2>
              <p className="text-gray-600 text-sm">Unity, heritage, and forward vision.</p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {sections.map((sec, i) => {
              const isOpen = open === i;
              return (
                <div key={sec.title} className="rounded-xl border border-gray-200 bg-white shadow-sm">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`w-full flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5 ${
                      isOpen ? "bg-green-50" : ""
                    }`}
                  >
                    <span className="text-base md:text-lg font-semibold text-green-700">
                      {sec.title}
                    </span>
                    <span
                      className={`inline-block transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-green-700" : ""
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 md:px-6 md:pb-6 text-[15px] leading-relaxed text-gray-800">
                        {sec.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              <div className="rounded-lg border border-green-700 bg-green-50 px-3 py-2 text-center">
                <p className="text-xs text-green-800">Core Values</p>
                <p className="text-sm font-semibold text-green-900">Unity • Wisdom</p>
              </div>
              <div className="rounded-lg border border-green-700 bg-green-50 px-3 py-2 text-center">
                <p className="text-xs text-green-800">Heritage</p>
                <p className="text-sm font-semibold text-green-900">Agrarian Roots</p>
              </div>
              <div className="rounded-lg border border-green-700 bg-green-50 px-3 py-2 text-center">
                <p className="text-xs text-green-800">Symbol</p>
                <p className="text-sm font-semibold text-green-900">Tree &amp; Hoe</p>
              </div>
              <div className="rounded-lg border border-green-700 bg-green-50 px-3 py-2 text-center">
                <p className="text-xs text-green-800">Vision</p>
                <p className="text-sm font-semibold text-green-900">Forward-Looking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
