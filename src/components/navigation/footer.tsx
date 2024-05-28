import Link from "next/link";
import React from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="print:hidden">
      <div className="container py-6 flex justify-between">
        <p className=" font-light text-sm text-muted-foreground ">
          {" "}
          Copyright &copy; {new Date().getUTCFullYear()} Nischal Timalsina. All
          rights reserved.
        </p>
        <div className="">
          <ul className="flex gap-4">
            <li>
              <Link
                href="https://www.linkedin.com/in/nischaltimalsina/"
                className="hover:text-blue-500 duration-300">
                <SiLinkedin className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/nischaltimalsina"
                className="hover:text-violet-500 duration-300">
                <SiGithub className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/nischaltimalcna"
                className="hover:text-sky-600 duration-300">
                <SiFacebook className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/nischaltimalcna/"
                className="hover:text-pink-500 duration-300">
                <SiInstagram className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
