import React from 'react'
import Link from "next/link"

// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const headline = 'Lighten your load and heighten the quality of your lessons.'
const subhead = 'Automate your lesson preparation and generate ready-to-use teaching materials, saving countless hours and enhancing your students’ learning experience.'

const SectionHero = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-8 md:pt-10 lg:py-8">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Facebook
          </Link>
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
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
  )
}

export default SectionHero