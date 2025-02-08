import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaBluesky } from "react-icons/fa6";
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
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Nav />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Eetu Petänen
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary-foreground">
              Developer and student.
            </h2>
            <div className="flex gap-6 text-4xl text-secondary-foreground">
              <a href="https://www.linkedin.com/in/eetu-petanen/" className="hover:text-primary transition-colors">
                <AiFillLinkedin />
              </a>
              <a href="https://www.github.com/EetuPe/" className="hover:text-primary transition-colors">
                <AiFillGithub />
              </a>
              <a href="https://bsky.app/profile/petanen.com" className="hover:text-primary transition-colors">
                <FaBluesky />
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
            <Image 
              src={profile} 
              fill
              sizes="(max-width: 768px) 192px, 384px"
              alt="Profile picture"
              className="hover:scale-105 transition-transform duration-300 object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-12">
          Projects I&apos;ve Worked on
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* ProdUni Card */}
          <Card className="hover:shadow-lg transition-transform hover:scale-105 duration-300">
            <CardHeader>
              <CardTitle>ProdUni</CardTitle>
              <CardDescription>A place for students to keep track of their schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full">
                <Image 
                  src={produni} 
                  alt="Produni" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <div className="flex gap-3">
                <a href="https://github.com/EetuPe/produni1.1">
                  <Badge className="hover:scale-105 transition-transform">{`</>`}</Badge>
                </a>
                <a href="https://produni.petanen.com">
                  <Badge className="bg-primary hover:scale-105 transition-transform">Live View</Badge>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-primary-foreground"><DiReact className="inline mr-1"/>React</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiJsBadge className="inline mr-1"/>Javascript</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiHtml5 className="inline mr-1"/>HTML</Badge>
              </div>
              <Snippet className="w-full text-sm">gh repo clone EetuPe/produni1.1</Snippet>
            </CardFooter>
          </Card>

          {/* Mentis Card */}
          <Card className="hover:shadow-lg transition-transform hover:scale-105 duration-300">
            <CardHeader>
              <CardTitle>Mentis</CardTitle>
              <CardDescription>A mastermind game where the player guesses a 4 color code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full">
                <Image 
                  src={mentis} 
                  alt="Mentis" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <div className="flex gap-3">
                <a href="https://github.com/EetuPe/mentis">
                  <Badge className="hover:scale-105 transition-transform">{`</>`}</Badge>
                </a>
                <a href="https://mentis.petanen.com">
                  <Badge className="bg-primary hover:scale-105 transition-transform">Live View</Badge>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-primary-foreground"><DiReact className="inline mr-1"/>React</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiJsBadge className="inline mr-1"/>Javascript</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiHtml5 className="inline mr-1"/>HTML</Badge>
              </div>
              <Snippet className="w-full text-sm">gh repo clone EetuPe/mentis</Snippet>
            </CardFooter>
          </Card>

          {/* DMX Multitool Card */}
          <Card className="hover:shadow-lg transition-transform hover:scale-105 duration-300">
            <CardHeader>
              <CardTitle>DMX Multitool</CardTitle>
              <CardDescription>A tool for lighting technicians to calculate DMX channel values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full">
                <Image 
                  src={multitool} 
                  alt="DMX Multitool" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <a href="https://dmxtool.com">
                <Badge className="bg-primary hover:scale-105 transition-transform">Live View</Badge>
              </a>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-primary-foreground"><DiReact className="inline mr-1"/>React</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiJsBadge className="inline mr-1"/>Javascript</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><DiHtml5 className="inline mr-1"/>HTML</Badge>
              </div>
            </CardFooter>
          </Card>

          {/* Skipp-5 Card */}
          <Card className="hover:shadow-lg transition-transform hover:scale-105 duration-300">
            <CardHeader>
              <CardTitle>Skipp-5</CardTitle>
              <CardDescription>A simple and fun number game played on a 5x5 board</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full">
                <Image 
                  src={skipp5} 
                  alt="Skipp-5" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <a href="https://github.com/EetuPe/Skipp-5">
                <Badge className="hover:scale-105 transition-transform">{`</>`}</Badge>
              </a>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-primary-foreground"><DiPython className="inline mr-1"/>Python</Badge>
                <Badge variant="secondary" className="text-primary-foreground"><TbBrandPython className="inline mr-1"/>Tkinter</Badge>
              </div>
              <Snippet className="w-full text-sm">gh repo clone EetuPe/Skipp-5</Snippet>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-12">
          Experience
        </h2>
        <Timeline />
      </section>
    </main>
  );
}
