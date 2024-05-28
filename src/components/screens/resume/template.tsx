import React from "react";
import Image from "next/image";
import profile from "/public/profile-no-bg.png";
import {
  SiNextdotjs,
  SiReact,
  SiElectron,
  SiNodedotjs,
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { SlEnvolope, SlGlobe, SlPhone, SlCompass } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { print } from "@/lib/actions";
import { Input } from "@/components/ui/input";

export function Template() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "React Native",
    "RESTFul API",
    "UI/UX",
    "Figma",
    "NodeJS",
    "MongoDB",
    "ElectronJS",
    "TailwindCSS",
    "Bootstrap",
    "MaterialUI",
    "User Interface, User Experience (UI/UX)",
    "Web3",
  ];
  const competencies = [
    "Analytical Skills",
    "Communication",
    "Time Management",
    "Technical Skills",
    "Project Management ",
    "Team Management ",
  ];
  const interests = [
    "Painting",
    "Music",
    "Design",
    "Sculpture",
    "Poetry",
    "Gardening",
  ];
  const languages = ["Nepali", "English", "Hindi"];

  return (
    <section>
      <div className="container flex justify-end sticky print:h-0 print:hidden top-24">
        <Button onClick={print}>Print Resume</Button>
      </div>
      <div className="container py-12 max-w-5xl border font-extralight print:font-normal print:text-black">
        <div className="flex flex-col sm:flex-row gap-6 md:items-end w-full duration-200">
          <Image
            src={profile}
            alt="Nischal Timalsina"
            className="h-24 md:h-32 w-24 md:w-32 rounded-full"
          />
          <div className="flex flex-col justify-end">
            <input
              disabled
              type="text"
              className="focus-visible:outline-none disabled:bg-transparent text-4xl sm:text-5xl md:text-6xl leading-none font-normal duration-200"
              value={"Nischal Timalsina"}
            />
            <input
              disabled
              value={"A Web Designer based in Kathmandu, Nepal"}
              type="text"
              className="focus-visible:outline-none disabled:bg-transparent sm:text-xl md:text-2xl text-muted-foreground  duration-200"
            />
          </div>
        </div>
        <div className="w-full py-8">
          <div className="flex justify-between max-w-4xl mb-4 gap-6 flex-wrap">
            <p className="flex gap-2 items-center">
              <SlCompass />
              Kathmandu, Nepal
            </p>
            <a href="tel:+9779855011882" className="flex gap-2 items-center">
              <SlPhone />
              +977-985-5011882
            </a>
            <a
              href="mailto:nischaltimalcna@gmail.com"
              className="flex gap-2 items-center">
              <SlEnvolope />
              nischaltimalcna@gmail.com
            </a>
            <a
              href="https://nischaltimalsina.com.np"
              target="_blank"
              className="flex gap-2 items-center">
              <SlGlobe />
              nischaltimalsina.com.np
            </a>
          </div>
          <p className="text-muted-foreground font-light max-w-5xl">
            Passionate Front-End Developer with a keen eye for clean, modern and
            minimal designs, 3+ years of experience building user-friendly web
            applications. Skilled in Web Development, User Interface Design,
            JavaScript frameworks such as ReactJs, NextJs, NodeJs, ElectronJs,
            and UI/UX tools such as Figma, Framer. Eager to contribute to a team
            that values innovation and user experience.
          </p>
        </div>
        <div className="flex gap-6 pb-8 flex-wrap">
          <div className="">
            <SiNextdotjs className="h-7 w-7 print:text-black" />
          </div>
          <div className="">
            <SiReact className="h-7 w-7 print:text-black" />
          </div>
          <div className="">
            <SiElectron className="h-7 w-7 print:text-black" />
          </div>
          <div className="">
            <SiNodedotjs className="h-7 w-7 print:text-black" />
          </div>
          <div className="">
            <SiFigma className="h-7 w-7 print:text-black" />
          </div>
          <div className="">
            <SiFramer className="h-7 w-7 print:text-black" />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 print:sm:col-span-3 md:col-span-3 py-8">
            <h2 className="text-3xl">Experiences</h2>
            <ul className="pt-8 space-y-8">
              <li className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Mar 2023 - Present
                </p>
                <div className="flex gap-2 items-end">
                  <p className="text-2xl">E - Signature Pvt. Ltd</p>
                  <p className="text-sm text-muted-foreground">Full Time</p>
                </div>
                <p className="text-xl pb-4">Frontend Developer</p>
                <ul className="space-y-2 list-disc pl-4  text-muted-foreground">
                  <li>
                    <p className="max-w-2xl">
                      Developed an interactive user interface using ReactJs,
                      NextJs, and ElectronJs, ensuring seamless and engaging
                      user experience.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Collaborated with stakeholders to understand and analyze
                      requirements, ensuring accurate translation of design
                      specifications into functional code.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Worked on building design systems, themes and reusable
                      component library using NextJs (ReactJs), Styled
                      Components, Material UI, Tailwind CSS.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  May 2023 - Jan 2024
                </p>
                <div className="flex gap-2 items-end">
                  <p className="text-2xl">Iagon</p>
                  <p className="text-sm text-muted-foreground">Full Time</p>
                </div>
                <p className="text-xl pb-4">Frontend Developer</p>
                <ul className="space-y-2 list-disc pl-4  text-muted-foreground">
                  <li>
                    <p className="max-w-2xl">
                      Worked with UX/UI designers and stakeholders to translate
                      mockups and wireframes into functional React components
                      and interfaces.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Worked on web3 implementation on the frontend applications
                      to bring seamless integration of blockchain to the web
                      application.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Integrated third-party APIs and libraries into React
                      applications, including authentication providers and
                      payment gateways.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Worked on building design systems, themes and reusable
                      component library using NextJs (ReactJs), Styled
                      Components, Material UI, Tailwind CSS.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  May 2020 - Aug 2022
                </p>
                <div className="flex gap-2 items-end">
                  <p className="text-2xl">Aspirant Technology</p>
                  <p className="text-sm text-muted-foreground">Full Time</p>
                </div>
                <p className="text-xl pb-4">Frontend Developer</p>
                <ul className="space-y-2 list-disc pl-4  text-muted-foreground">
                  <li>
                    <p className="max-w-2xl">
                      Developed and maintained applications using React Js.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Implemented responsive and accessible user interfaces
                      using modern front-end technologies, including CSS
                      preprocessors and UI libraries.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Created and maintained reusable and modular React
                      components to improve code maintainability and
                      scalability.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Integrated third-party RESTful APIs and libraries into
                      React applications, including authentication providers and
                      payment gateways.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Developed and maintained project specific React component
                      libraries.
                    </p>
                  </li>
                  <li>
                    <p className="max-w-2xl">
                      Worked with UX/UI designers and stakeholders to translate
                      mockups and wireframes into functional React components
                      and interfaces.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-span-5 print:sm:col-span-2 md:col-span-2 py-8 border-t md:border-none print:border-none">
            <h2 className="text-3xl">Education</h2>
            <div className="pt-6">
              <p className="text-muted-foreground text-sm hidden">2014-2016</p>
              <div className="flex gap-2 items-end">
                <p className="text-2xl">Prasadi Academy</p>
              </div>
              <p className="text-lg pb-4 text-muted-foreground">
                High School (10 +2)
              </p>
            </div>
            <div className="pt-4">
              <p className="text-muted-foreground text-sm hidden">2017-2019</p>
              <div className="flex gap-2 items-end">
                <p className="text-2xl">Melbourne Institute of Technology</p>
              </div>
              <p className="text-lg pb-4 text-muted-foreground">
                Bachelors of Networking
              </p>
            </div>
            <h2 className="text-3xl mt-4">Certificates</h2>
            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                Oct 2022 – Jan 2023
              </p>
              <div className="flex gap-2 items-end">
                <p className="text-2xl">
                  Diploma in FullStack Development (MERN)
                </p>
              </div>
              <p className="text-lg pb-4 text-muted-foreground">
                Vrit Technologies
              </p>
            </div>
            <h2 className="text-3xl mt-4">Skills Summary</h2>
            <div className="pt-4 flex flex-wrap md:max-w-sm gap-y-3 gap-x-6">
              {skills.map((skill, index) => (
                <p
                  key={skill.trim() + index}
                  className="text-lg text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="text-3xl mt-4">Core Competencies</h2>
            <div className="pt-4 flex flex-wrap md:max-w-sm gap-y-3 gap-x-6">
              {competencies.map((skill, index) => (
                <p
                  key={skill.trim() + index}
                  className="text-lg text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="text-3xl mt-4">Interests & Hobbies</h2>
            <div className="pt-4 flex flex-wrap md:max-w-sm gap-y-3 gap-x-6">
              {interests.map((skill, index) => (
                <p
                  key={skill.trim() + index}
                  className="text-lg text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
            <h2 className="text-3xl mt-4">Languages</h2>
            <div className="pt-4 flex flex-wrap md:max-w-sm gap-y-3 gap-x-6">
              {languages.map((skill, index) => (
                <p
                  key={skill.trim() + index}
                  className="text-lg text-muted-foreground">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-3xl">References</h2>
          <div className="pt-6">
            <div className="flex gap-2 items-end">
              <p className="text-2xl">Available Upon Request</p>
            </div>
            <p className="text-lg pb-4 text-muted-foreground">
              Send an Inquiry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
