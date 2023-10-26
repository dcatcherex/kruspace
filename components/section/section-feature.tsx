import React from "react";
import { TimerIcon, PresentationIcon, SparklesIcon } from "lucide-react";

const features = [
  {
    icon: PresentationIcon,
    title: " ช่วยสร้างสื่อเตรียมการสอน",
    title_en: "Automated Lesson Preparation",
    description:
      "สร้างสื่อที่พร้อมปรับใช้เพียงไม่นาน ได้สื่อและตัวช่วยในการสอนที่หลากหลาย",
    description_en:
      "Get ready-to-use teaching materials generated in an instant.",
  },
  {
    icon: TimerIcon,
    title: "ประหยัดเวลาเตรียมสอน",
    title_en: "Time Saver",
    description:
      "ลดเวลาได้หลายชั่วโมง ทำให้ครูมุ่งเน้นสิ่งที่สำคัญที่สุด นั่นคือการสอน",
    description_en:
      "Shave countless hours off. So you can focus on what matters most - teaching.",
  },
  {
    icon: SparklesIcon,
    title: "ได้สื่อการเรียนการสอนที่มีคุณภาพ",
    title_en: "Improved Lesson Quality",
    description:
      "สื่อที่ได้มีคุณภาพ เหมาะต่อการนำไปสอน ให้ครูเหนื่อยกับงานออกแบบน้อยที่สุด",
    description_en:
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
        <h2 className="text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
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
            <div className="flex items-start justify-between rounded-md p-2 md:flex-col md:p-6">
              <feature.icon className="mb-4 mr-3 h-8 w-8" />
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
