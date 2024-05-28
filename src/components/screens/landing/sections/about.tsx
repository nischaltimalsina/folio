import React from "react";
import { Particles } from "@/components/shared";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import project from "/public/project-1.png";

export function About() {
    return (
        <section>
            <div className="container grid lg:grid-cols-2 md:gap-12 items-center h-screen">
                <div className=" flex flex-col gap-6 py-8">
                    <h3 className="!my-0 text-2xl xl:text-3xl">
                        Let&apos;s Create Something Fast & Beautiful
                    </h3>
                    <p className="font-light text-lg leading-[1.4] opacity-70">
                        In the digital realm, speed and performance are
                        paramount. I specialize in crafting websites that not
                        only look great but also load lightning-fast and perform
                        exceptionally well. From optimizing code to leveraging
                        the latest techniques, I ensure your online presence
                        stands out with speed and efficiency.
                        <br /> Ready to enhance your online presence with a
                        high-performance website? Let&apos;s collaborate to
                        bring your vision to life. Reach out today to discuss
                        your project and discover how we can build something
                        exceptional together.
                    </p>
                    <div className="not-prose flex items-center gap-2">
                        <Button className="w-fit" asChild>
                            <Link href="mailto:nischaltimalcna@gmail.com">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="w-fit h-fit border grayscale hover:grayscale-0 duration-300 relative rounded-lg overflow-hidden flex">
                    <Image
                        src={project}
                        alt="placeholder"
                        className="fill h-full w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
