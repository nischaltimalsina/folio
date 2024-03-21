import { Particles } from "@/components/common";
import React from "react";

export function Landing() {
  return (
    <main className="relative h-screen w-full">
        <Particles className="absolute inset-0 -z-10 "/>
      <div className="min-h-full w-full flex justify-center items-center">
        <div className="animate-title duration-1000">
          <h1 className="text-3xl sm:text-5xl uppercase duration-300 font-medium animate-in">
            Product Design
          </h1>
          <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center uppercase duration-300 font-bold bg-white text-transparent bg-clip-text text-edge-outline">
            Web Development
          </p>
          <p className="text-3xl sm:text-5xl uppercase duration-300 font-medium text-end">
            User Experience
          </p>
        </div>
      </div>
    </main>
  );
}
