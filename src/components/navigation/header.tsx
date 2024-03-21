import React from "react";
import Image from "next/image";
import profile from "/public/profile-no-bg.png";
import Link from "next/link";
export function Header() {
  return (
    <header className="sticky top-0 z-10 print:hidden">
      <div className="container py-6 flex justify-between">
        <div className="flex gap-2 items-baseline">
          {/* <Image
            src={profile}
            alt="Nischal Timalsina"
            className="rounded-lg h-8 w-8"
          /> */}
          <p className="text-2xl uppercase f">Nischal Timalsina</p>
          <p className="text-muted-foreground">(Frontend Developer)</p>
        </div>
        <div className="text-lg">
          <ul className="flex gap-4">
            <li className="hover:underline hover:text-muted-foreground">
              <Link href={""}>About Me</Link>
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
