import React from "react";
import { Particles } from "@/components/common";

export function Hero() {
  return (
    <section className="relative h-[720px] w-full -mt-20">
      <Particles className="absolute inset-0 -z-10 " color="#ffffff" />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="animate-title duration-1000">
          <pre className="mb-2 text-muted-foreground">{`<h1>`}</pre>
          <h1 className="text-3xl sm:text-5xl uppercase duration-300 font-medium animate-in">
            Product Design
          </h1>
          <p className="text-[10.4vw] xl:text-[9.7vw] whitespace-nowrap leading-none [--text-edge-outline:--foreground] text-center uppercase font-bold bg-background/10 cursor-pointer text-transparent bg-clip-text text-edge-outline">
            Web Development
          </p>
          <p className="text-3xl sm:text-5xl uppercase duration-300 font-medium text-end">
            User Experience
          </p>
          <pre className="text-end mt-2 text-muted-foreground">{`<h1>`}</pre>
        </div>
      </div>
    </section>
  );
}
