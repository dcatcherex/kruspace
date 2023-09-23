import React from "react";
import { TimerIcon, PresentationIcon, SparklesIcon } from "lucide-react";

const features = [
  {
    icon: PresentationIcon,
    title: "Automated Lesson Preparation",
    description: "Get ready-to-use teaching materials generated in an instant.",
  },
  {
    icon: TimerIcon,
    title: "Time Saver",
    description:
      "Shave countless hours off. So you can focus on what matters most - teaching.",
  },
  {
    icon: SparklesIcon,
    title: "Improved Lesson Quality",
    description:
      "With professionally designed materials, elevate the standard of your lessons.",
  },
];

const SectionFeature = () => {
  return (
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
        {features.map((feature, index) => (
          <div
            className="relative overflow-hidden rounded-lg border bg-background p-2"
            key={index}
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      {/* <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div> */}
    </section>
  );
};

export default SectionFeature;
