import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { TbBrandPython } from "react-icons/tb";
import {Snippet} from "@nextui-org/react";


import Image from "next/image";
import profile from "../../public/profile.jpeg";
import produni from "../../public/Produni.png";
import mentis from "../../public/Mentis.png";
import multitool from "../../public/dmx_multitool.png"
import skipp5 from "../../public/skipp-5.png"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";


export default function Home() {
  return (
    <main className="pb-24">
      <Nav />
      <section className="py-12 px-12 flex flex-col text-center gap-8 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="text-left pt-10 flex justify-between">
          <div>
            <h2 className="text-5xl py-2 text-primary font-medium md:text-6xl">
              Eetu Petänen
            </h2>
            <h3 className="text-2xl pt-2 md:text-3xl text-secondary-foreground">
              Developer and student.
            </h3>
            <div className="text-5xl flex justify-start py-4 gap-6 text-secondary-foreground">
              <a href="https://twitter.com/epetanen">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/eetu-petanen/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.github.com/EetuPe/">
                <AiFillGithub />
              </a>
            </div>
          </div>
          <div className="relative rounded-lg md:rounded-full w-40 h-40 overflow-hidden md:h-80 md:w-80">
            <Image src={profile} layout="fill" objectFit="cover" alt={"Profile picture"} />
          </div>
        </div>
      </section>
      <div className="pt-12 flex gap-6 items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-semibold text-secondary-foreground">Projects I&apos;ve Worked on</h1>
      </div>
      <section className="py-12 px-12 flex flex-col text-center gap-8">
        <Card>
          <CardHeader>
            <CardTitle>ProdUni</CardTitle>
            <CardDescription>A place for students to keep track of their schedules</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image className="rounded w-4/5 h-auto shadow-md" src={produni} alt={"Produni"} />
          </CardContent>
          <CardFooter className="flex-col justify-center items-center gap-6">
            <div className="flex gap-2 items-center justify-center">
            <a
                  href="https://github.com/EetuPe/produni1.1"
            >
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-secondary-foreground text-primary font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">{`</>`}</Badge>
            </a>
            <a
                  href="https://produni.petanen.com"
            >
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-primary text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Live View</Badge>
            </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiReact className="mr-1"/>React</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiJsBadge className="mr-1"/>Javascript</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiHtml5 className="mr-1"/>Html</Badge>
            </div>
            <Snippet variant="shadow" color="secondary" className="md:text-lg sm:text-sm">gh repo clone EetuPe/produni1.1</Snippet>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mentis</CardTitle>
            <CardDescription>A mastermind game where the player guesses a 4 color code. Each color is assigned a numerical value.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image className="rounded w-4/5 h-auto shadow-md" src={mentis} alt={"Mentis"} />
          </CardContent>
          <CardFooter className="flex-col justify-center items-center gap-6">
            <div className="flex gap-2 items-center justify-center">
            <a
                  href="https://github.com/EetuPe/mentis"
            >
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-secondary-foreground text-primary font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">{`</>`}</Badge>
            </a>
            <a
                  href="https://mentis.petanen.com"
            >
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-primary text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Live View</Badge>
            </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiReact className="mr-1"/>React</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiJsBadge className="mr-1"/>Javascript</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiHtml5 className="mr-1"/>Html</Badge>
            </div>
            <Snippet variant="shadow" color="secondary" className="md:text-lg sm:text-sm">gh repo clone EetuPe/mentis</Snippet>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DMX Multitool</CardTitle>
            <CardDescription>A tool for lighting technicians to calculate DMX channel values for all kinds of fixtures. Works with multiple universes.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image className="rounded w-4/5 h-auto shadow-md" src={multitool} alt={"Multitool"} />
          </CardContent>
          <CardFooter className="flex-col justify-center items-center gap-6">
            <div className="flex gap-2 items-center justify-center">
            <a
                  href="https://dmxtool.com"
            >
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-primary text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Live View</Badge>
            </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiReact className="mr-1"/>React</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiJsBadge className="mr-1"/>Javascript</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiHtml5 className="mr-1"/>Html</Badge>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Skipp-5</CardTitle>
            <CardDescription>A simple and fun number game played on a 5x5 board. The goal of the game is to fill the board with numbers 1-25.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image className="rounded w-4/5 h-auto shadow-md" src={skipp5} alt={"Skipp-5"} />
          </CardContent>
          <CardFooter className="flex-col justify-center items-center gap-6">
            <div className="flex gap-2 items-center justify-center">
            <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-secondary-foreground text-primary font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">{`</>`}</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><DiPython className="mr-1"/>Python</Badge>
              <Badge className="py-2 px-4 shadow-md no-underline rounded-full bg-slate-800 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><TbBrandPython className="mr-1"/>Tkinter</Badge>
            </div>
            <Snippet variant="shadow" color="secondary" className="md:text-lg sm:text-sm">gh repo clone EetuPe/skipp-5</Snippet>
          </CardFooter>
        </Card>
        
      </section>
    </main>
  );
}
