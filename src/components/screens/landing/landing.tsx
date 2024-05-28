import React from "react";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";

export function Landing() {
  return (
      <div className="relative min-h-screen h-full w-full">
          <Hero />
          <About />
      </div>
  );
}
