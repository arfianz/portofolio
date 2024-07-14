import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      {/*Header*/}
      <Header />
      {/*Show magnetic fancy button on sm screen and hide it on md screen*/}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/*Live clock*/}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Asia/Jakarta" />
      </div>
      {/*Slogan*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
          <div>
            <span>Innovative</span>
          </div>
          <div>
            <span>Strategic</span>
          </div>
          <div className="relative">
            <span>Proficient</span>
            <div className="absolute text-[1rem] leading-[1.4rem] tracking-[-0.07rem] top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
              <span>Driving IT Innovation</span>
              <br />
              <span>with Strategic Insight</span>
              <br />
              <span>and Proficient Skills</span>
              <br />
              <span>Delivering Tailored Solutions for Your Success</span>
            </div>
          </div>
        </div>
        {/*Magnetic scroll down*/}
        <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
          <ScrollDown />
        </MagneticWrapper>
      </div>
    </div>
  );
}
