import Link from "next/link"

// import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TimerIcon, PresentationIcon, SparklesIcon  } from "lucide-react"
import AiGenerate from "@/components/ai-generate"
import Ai from "@/components/ai"


export default function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Facebook
          </Link>
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Lighten your load and heighten the quality of your lessons.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Automate your lesson preparation and generate ready-to-use teaching materials, saving countless hours and enhancing your students’ learning experience.
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
        <div className="mt-8"><AiGenerate/></div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p> */}
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <PresentationIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Automated Lesson Preparation</h3>
                <p className="text-sm text-muted-foreground">
                Get ready-to-use teaching materials generated in an instant.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <TimerIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Time Saver</h3>
                <p className="text-sm text-muted-foreground">
                Shave countless hours off. So you can focus on what matters most - teaching.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <SparklesIcon />
              <div className="space-y-2">
                <h3 className="font-bold">Improved Lesson Quality</h3>
                <p className="text-sm text-muted-foreground">
                With professionally designed materials, elevate the standard of your lessons.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div> */}
      </section>
      {/* <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          
        </div>
      </section> */}
    </>
  )
}