import React from "react";
import GridPattern from "@/components/shared/grid-pattern";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-h-[720px] w-full py-24">
            <div className="container relative text-center py-20 md:py-40 w-full h-full left-0 top-0">
                <h1 className="text-3xl uppercase md:text-6xl font-semibold ">
                    Transforming Ideas into Stunning Reality
                </h1>
                <p className=" mx-auto font-light text-base md:text-xl mt-8 text-muted-foreground">
                    I create beautiful, cutting-edge products using the latest
                    technologies and frameworks. As a passionate developer and
                    designer, I am dedicated to building amazing products that
                    meet your needs. With a keen eye for detail and a commitment
                    to excellence, I will guide you through the journey of
                    bringing your vision to life.
                </p>
            </div>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"6 3"}
                className={cn(
                    "container [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] animate-pulse"
                )}
            />

            <div className="container grayscale hover:grayscale-0 duration-300">
                <iframe
                    src="https://entail.vercel.app"
                    className="w-full aspect-[21/9] pointer-events-none border bg-accent rounded-2xl"></iframe>
            </div>
        </section>
    );
}
