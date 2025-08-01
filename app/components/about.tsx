'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        threshold: 0.3, // Adjust based on how early you want it to trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative flex overflow-hidden w-screen h-full items-center flex-col justify-center bg-cover bg-center transition-opacity duration-700 `}
      style={{ backgroundImage: "url('/images/about.jpeg')" }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          background:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 70%, rgba(0, 0, 0, 1) 100%)",
        }}
      ></div>

      <div className="h-screen w-screen mt-10 flex flex-col items-center justify-center text-white">
        <div className="h-screen w-screen absolute bg-black opacity-40 z-0"></div>

        <h2
          className={`${
            isVisible ? 'animated animatedFadeInUp fadeInUp' : 'opacity-0'
          } berserker text-5xl mb-6 text-center z-10`}
        >
          About Sphota
        </h2>

        <h3
          className={`${
            isVisible ? 'animated animatedFadeInUp fadeInUp' : 'opacity-0'
          } text-center tahoma text-white text-[1.3vh] sm:text-[1.3vh] lg:text-[2vh] mr-[5vw] ml-[5vw] mb-6 z-10`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s <br /> standard dummy text ever since the 1500s,
          when an unknown printer
        </h3>

        {/* Responsive row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-8 mt-6 z-10">
          {/* Image */}
          <div
            className={`flex-shrink-0 ${
              isVisible ? 'animated animatedFadeInUp fadeInUp' : 'opacity-0'
            }`}
          >
            <Image
              src="/images/image.jpg"
              alt="Watermark"
              width={252}
              height={158}
              min-width={125}
              min-height={79}
            />
          </div>

          {/* Bullet list */}
          <ul
            className={`square-bullet mt-[1vh] text-white tahoma mr-[5vw] ml-[5vw] text-sm lg:text-base text-left max-w-md ${
              isVisible ? 'animated animatedFadeInUp fadeInUp' : 'opacity-0'
            }`}
          >
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Quisque vel leo a justo elementum ullamcorper.</li>
            <li>Mauris in lorem non metus pharetra pulvinar.</li>
            <li>Vestibulum ante ipsum primis in faucibus orci luctus.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
