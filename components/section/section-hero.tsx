
import React from "react";
import Link from "next/link";

// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import HeadAnimation from "../headanimation";


const headline_en =
  "Lighten your load and heighten the quality of your lessons.";
const headline =
  "ลดเวลาเตรียมการสอน ครูมีเวลาสอนเต็มที่ขึ้น ใส่ใจนักเรียนได้มากขึ้น";
// const headline = 'ใช้เวลาเตรียมการสอนน้อยลง มีเวลาสอนมากขึ้น'
const title1 = "ลดเวลาเตรียมการสอน"
const title2 = "ครูมีเวลาสอนเต็มที่"
const title3 = "ใส่ใจนักเรียนได้มากขึ้น"

const subhead_en =
  "Automate your lesson preparation and generate ready-to-use teaching materials, saving countless hours and enhancing your students’ learning experience.";
const subhead =
  "ช่วยเตรียมแผนการสอนของคุณ และสร้างสื่อการเรียนรู้ที่พร้อมใช้งาน";

const SectionHero = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-8 md:pt-10 lg:py-8">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          ติดตาม Facebook
        </Link>
        <h1 className="font-semibold text-3xl   sm:text-5xl md:text-6xl lg:text-7xl">
          <div className="pb-2 md:pb-4">
            <HeadAnimation head1={title1} head2={title2}/>
          </div>
          {title3}
          {/* {headline} */}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {subhead}
        </p>
        {/* <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div> */}
        {/* <Ai /> */}
      </div>
    </section>
  );
};

export default SectionHero;
