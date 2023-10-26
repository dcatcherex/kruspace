"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Icons } from "../icons";

import { useChat } from "ai/react";

import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  topic: z.string().min(2, {
    message: "หัวข้อควรมีตัวอักษรตั้งแต่ 2 ตัวขึ้นไป",
  }),
  grade: z.string({
    required_error: "กรุณาเลือกระดับชั้นที่ต้องการ",
  }),
  heading: z
    .string()
    .min(5, {
      message: "ควรมีตัวอักษรตั้งแต่ 5 ตัวขึ้นไป",
    })
    .max(300, {
      message: "ไม่ควรมีตัวอักษรเกิน 300 ตัว",
    }),
});

// const onSubmit = async (values: z.infer<typeof formSchema>) => {
//   const submitValues = {
//     heading: values.heading
//   };

const data = {
  topic: "พืช",
  grade_level: "ประถมศึกษาชั้นปีที่ 3",
  key_concepts: [
    "การรู้จักพืชต่างๆ",
    "กระบวนการเจริญเติบโตของพืช",
    "ผลกระทบของสิ่งแวดล้อมต่อพืช",
  ],
  standards_and_indicators: [
    "- เข้าใจความหมายของคำศัพท์ที่เกี่ยวข้องกับพืช\n- สามารถอธิบายกระบวนการเจริญเติบโตของพืชได้\n- สามารถวิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืชได้",
  ],
  learner_characteristics: ["- เด็กชั้นป.3\n- มีความสนใจในธรรมชาติและพืช"],
  learning_objectives: {
    knowledge: ["K: เข้าใจความหมายของคำศัพท์เกี่ยวกับพืช"],
    skill: ["P: อธิบายกระบวนการเจริญเติบโตของพืชได้"],
    attitude: ["A: วิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืชได้"],
  },
  learning_steps: [
    "1. ศึกษาเนื้อหาที่เกี่ยวข้องกับพืช",
    "2. สำรวจและสังเกตพืชในสิ่งแวดล้อม",
    "3. อธิบายกระบวนการเจริญเติบโตของพืช",
    "4. วิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืช",
  ],
  teaching_methods: [
    "- ใช้หนังสือเรียน\n- ใช้ภาพถ่ายของพืช\n- ใช้โมเดลจำลองของกระบวนการเจริญเติบโตของพืช",
  ],
  tasks_and_assignments: [
    "- ทำแบบทดสอบความเข้าใจเกี่ยวกับพืช\n- เขียนรายงานการสำรวจและสังเกตพืชในสิ่งแวดล้อม\n- เขียนคำอธิบายกระบวนการเจริญเติบโตของพืช\n- เขียนรายงานการวิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืช",
  ],
  assessment: [
    "- แบบทดสอบความรู้\n- การสังเกตการกระทำของผู้เรียนในขั้นตอนการเรียนรู้\n- เกรด/การประเมินความสำเร็จในภาระงาน/ชิ้นงา",
  ],
};

export default function Completion() {
  const [topic, setTopic] = useState("");
  const [grade, setGrade] = useState("");

  const dataToRender = (messages) => {
    <div className="container mx-auto">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h3 className="text-lg font-bold">{key}</h3>
          {Array.isArray(value) ? (
            <ul className="list-disc pl-6">
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : typeof value === "object" ? (
            <ul className="list-disc pl-6">
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>
                  {subKey}: {subValue}
                </li>
              ))}
            </ul>
          ) : (
            <p className="pl-6">{value}</p>
          )}
        </div>
      ))}
    </div>;
  };

  useChat({
    api: "/api/completion",
    body: {
      topic,
      grade,
    },
    onFinish() {},
    onResponse() {
    },
  });

  const onSubmit = (e: any) => {
    toast.success("สร้างแผนการสอน");
    setTopic(input);
    console.log("topic:" + topic);
  };

  const lastMessage = messages[messages.length - 1];
  const generatedLessonPlan =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "การสังเคราะห์แสง",
      grade: "ประถมปีที่2",
      heading: "",
    },
  });

  const watchedTopic = form.watch("topic", "การสังเคราะห์แสง");
  const watchedGrade = form.watch("grade", "ประถมปีที่2");

  useEffect(() => {
    form.setValue(
      "heading",
      `สร้างแผนการสอนเรื่อง [${watchedTopic}] สำหรับชั้น [${watchedGrade} ]\nที่ผสมผสานเทคนิคการสอน และวิธีการที่หลากหลาย โดยมีหัวข้อต่อไปนี้\n\nสาระสำคัญ\nมาตรฐานและตัวชี้วัด\nลักษณะผู้เรียน\nจุดประสงค์การเรียนรู้ (K,P,A)\nขั้นตอนการเรียนรู้\nสื่อการเรียนรู้\nภาระงาน/ชิ้นงาน\nการวัดและประเมินผล`
    );
  }, [watchedTopic, watchedGrade, form]);

  return (
    <div className="">
      <ul>
        {messages.map((m, index) => (
          <li
            key={index}
            className={`mb-2 rounded-md p-2 ${
              m.role === "user" ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                {m.role === "user" ? (
                  <Icons.smile />
                ) : (
                  <Icons.bot className="min-w-6 w-6 flex-none" />
                )}
                {m.content}
              </div>
              <Icons.copy className="h-4 w-4 text-muted-foreground hover:cursor-pointer" />
            </div>
          </li>
        ))}
      </ul>
      {/* <p
        className={
          completion
            ? "border-2 border-sky-500 font-semibold p-2 mb-4 rounded-md bg-sky-100 dark:bg-slate-900 h-[300px] overflow-y-auto"
            : ""
        }
      >
        {completion}
      </p> */}

      <Form {...form}>
        <form className="space-y-4" onSubmit={onSubmit}>
          {/* <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}> */}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full bg-black px-3 py-2 text-white">
                      1
                    </span>
                    <div className="text-base font-medium ">
                      ป้อนเรื่อง หรือข้อความ
                    </div>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="การสังเคราะห์แสง"
                    {...field}
                    value={input}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เลือกระดับชั้น</FormLabel>
                <Select onValueChange={setGrade} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="ระดับชั้น" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-red-500">
                    <SelectItem value="อนุบาล">อนุบาล</SelectItem>
                    <SelectItem value="ประถมปีที่1">ประถมปีที่ 1</SelectItem>
                    <SelectItem value="ประถมปีที่2">ประถมปีที่ 2</SelectItem>
                    <SelectItem value="ประถมปีที่3">ประถมปีที่ 3</SelectItem>
                    <SelectItem value="ประถมปีที่4">ประถมปีที่ 4</SelectItem>
                    <SelectItem value="ประถมปีที่5">ประถมปีที่ 5</SelectItem>
                    <SelectItem value="ประถมปีที่6">ประถมปีที่ 6</SelectItem>
                    <SelectItem value="มหาวิทยาลัย">มหาวิทยาลัย</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="heading"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="text-base font">ข้อความบอก AI</div>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none min-h-[250px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          <div>
            {"topic"} {topic}
            {"grade"} {grade}
            {/* {"value"} {value} */}
            {"input"} {input}
          </div>
          <Button className="w-full space-x-2 text-lg font-light" type="submit">
            <Icons.subtitle className="stroke-1" /> <p>สร้างแผนการสอน</p>
          </Button>
        </form>
      </Form>

      <div className="container mx-auto">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="mb-4">
            <h3 className="text-lg font-bold">{key}</h3>
            {Array.isArray(value) ? (
              <ul className="list-disc pl-6">
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : typeof value === "object" ? (
              <ul className="list-disc pl-6">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <li key={subKey}>
                    {subKey}: {subValue}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="pl-6">{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
