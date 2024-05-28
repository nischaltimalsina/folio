import React from "react";
import Image from "next/image";
import profile from "/public/apple-touch-icon.png";
import Link from "next/link";
export function Header() {
    return (
        <header className="sticky top-0 z-10 print:hidden bg-background/70 backdrop-blur-sm">
            <div className="container py-6 flex justify-between">
                <div className="flex gap-2 items-center">
                    <Image
                        src={profile}
                        alt="Nischal Timalsina"
                        className="rounded-lg h-8 w-8"
                    />
                    <p className="text-2xl hidden sm:flex uppercase">
                        Nischal Timalsina
                    </p>
                </div>
                <div className="text-lg">
                    <ul className="flex gap-4">
                        <li className="hover:underline hover:text-muted-foreground">
                            <Link href={"/"}>About Me</Link>
                        </li>
                        <li className="hover:underline hover:text-muted-foreground">
                            <Link href={"/resume"}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
