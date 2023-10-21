"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from 'sonner'


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

import { SubtitlesIcon } from "lucide-react";

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

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  const submitValues = {
    heading: values.heading
  };

  handleSubmit(submitValues)
  console.log(submitValues);
  console.log(JSON.stringify(submitValues));

  // const response = await fetch("/api/completion", {
  //   method: "POST",
  //   body: JSON.stringify(submitValues),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const responseData = await response.json();

  // if (!response.ok) {
  //   alert("Submitting failed");
  //   return;
  // }
};

export default function Completion() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });

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
    form.setValue('heading', `สร้างแผนการสอนเรื่อง [${watchedTopic}] สำหรับชั้น [${watchedGrade} ]\nที่ผสมผสานเทคนิคการสอน และวิธีการที่หลากหลาย โดยมีหัวข้อต่อไปนี้\n\nสาระสำคัญ\nมาตรฐานและตัวชี้วัด\nลักษณะผู้เรียน\nจุดประสงค์การเรียนรู้ (K,P,A)\nขั้นตอนการเรียนรู้\nสื่อการเรียนรู้\nภาระงาน/ชิ้นงาน\nการวัดและประเมินผล`);
  }, [watchedTopic, watchedGrade, form]);

  return (
    <div className="">
      <p
        className={
          completion
            ? "border-2 border-sky-500 font-semibold p-2 mb-4 rounded-md bg-sky-100 dark:bg-slate-900 h-[300px] overflow-y-auto"
            : ""
        }
      >
        {completion}
      </p>
      <button onClick={() => toast.success('Event has been created')}>
        Give me a toast
      </button>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}> */}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-2 bg-black text-white rounded-full">
                      1
                    </span>
                    <div className="font-medium text-base ">
                      ป้อนเรื่อง หรือข้อความ
                    </div>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="การสังเคราะห์แสง" {...field} />
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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

          <FormField
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
          />

          <Button className="w-full text-lg font-light space-x-2" type="submit">
            <SubtitlesIcon className="stroke-1" /> <p>สร้างแผนการสอน</p>
          </Button>
        </form>
      </Form>
    </div>
  );
}
