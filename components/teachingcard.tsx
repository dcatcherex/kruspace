"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { toast } from "sonner";

import { useChat } from "ai/react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/icons";
import Image from "next/image";

// type TeachingData = {
//   method: string;
//   method_en: string;
//   title: string;
//   title_en: string;
//   content: string;
//   content_en: string;
//   time_recommend: string;
//   use: string;
//   min_time: number;
//   max_time: number;
// };

// data: TeachingData[];
type TeachingCardData = {
  id: number;
  methodTH: string;
  methodEN: string;
  titleTH: string;
  titleEN: string;
  contentTH: string;
  contentEN: string;
  timeRecommend: string;
  use: string;
  minTime: number;
  maxTime: number;
};

type TeachingCardProps = {
  data: TeachingCardData[];
};

const FormSchema = z.object({
  prompt: z.string().min(2, {
    message: "ต้องใส่อย่างน้อย 2 ตัวอักษร",
  }),
});

const TeachingCard = ({ data }: TeachingCardProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "0",
        role: "system",
        content:
          "You are a friendly and helpful instructional coach helping teachers plan a lesson.",
      },
    ],
  });


  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 "
    >
      <div className="col-span-1 flex flex-col rounded-md border-[1px] bg-white shadow-sm  transition duration-150 ease-in-out  hover:cursor-pointer hover:ring-4 dark:bg-black ">
        <div className="rounded-t-md bg-slate-300 p-2 font-semibold md:px-4">
          {"เลือกประเภท"}
        </div>
        <div className="hidden bg-slate-800 mix-blend-luminosity md:block ">
          <Image src="/placeholder.jpg" width={400} height={500} alt="image" />
        </div>
        <div className="p-2 md:p-4">
          <h1 className="text-center text-2xl font-semibold">สร้างการ์ด</h1>
          <Icons.plus className="mx-auto h-20 w-20 align-middle text-slate-300 " />
        </div>
      </div>
      {/* main card */}
      {data.map((item) => (
        <li
          key={item.id}
          className="relative col-span-1 flex flex-col justify-between rounded-md border-[1px] border-l-8 border-l-sky-500 bg-white text-left shadow-sm  transition duration-150 ease-in-out  hover:ring-4 dark:bg-black  md:border-l-[1px] md:border-l-gray-200"
        >
          <div className="">
            <div
              className={`rounded-t-md px-4 py-0 pt-4 md:px-4 md:py-2 ${
                item.methodTH === "วิธีการสอน"
                  ? "md:bg-yellow-500"
                  : item.methodTH === "เทคนิคการสอน"
                  ? "md:bg-red-500"
                  : item.methodTH === "วัด/ประเมินผล"
                  ? "md:bg-blue-500"
                  : item.methodTH === "จัดห้องเรียน"
                  ? "md:bg-violet-500"
                  : item.methodTH === "รูปแบบการสอน"
                  ? "md:bg-green-500"
                  : ""
              }`}
            >
              <div className="flex justify-between">
                <h3 className="text-xs font-normal text-sky-500 md:text-base md:font-semibold md:text-black">
                  {item.methodEN}
                </h3>
                <div className="flex gap-2">
                  <Icons.share className="text-white opacity-0 hover:cursor-pointer  hover:text-black" />
                  <Icons.plus className="text-white opacity-0 hover:cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.jpg"
                width={400}
                height={500}
                alt="image"
              />
              {/* sub card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="absolute bottom-4  left-4 bg-black/80 font-light opacity-0 hover:text-white ">
                    รายละเอียด
                  </Button>
                </DialogTrigger>
                {/* contents */}
                <DialogContent className="w-[1280px]">
                  <DialogHeader>
                    <DialogTitle>เรียนรู้เพิ่มเติม</DialogTitle>
                  </DialogHeader>
                  <div className="gap-4 space-y-4 md:flex md:space-y-0">
                    <li
                      key={item.titleEN}
                      className="col-span-1 flex max-w-[300px] flex-col rounded-md border-[1px] bg-white"
                    >
                      <div className="">
                        <div
                          className={`rounded-t-md px-4 py-2 ${
                            item.methodTH === "วิธีการสอน"
                              ? "bg-yellow-500"
                              : item.methodTH === "เทคนิคการสอน"
                              ? "bg-red-500"
                              : item.methodTH === "วัด/ประเมินผล"
                              ? "bg-blue-500"
                              : item.methodTH === "จัดห้องเรียน"
                              ? "bg-violet-500"
                              : item.methodTH === "รูปแบบการสอน"
                              ? "bg-green-500"
                              : ""
                          }`}
                        >
                          <h3 className="font-semibold">{item.methodEN}</h3>
                        </div>
                        <div className="hidden md:block">
                          <Image
                            src="/placeholder.jpg"
                            width={400}
                            height={500}
                            alt="image"
                          />
                        </div>
                        <div className="p-4">
                          <h1 className="mb-3 text-2xl font-semibold">
                            {item.titleEN}
                          </h1>
                          <p className=" text-muted-foreground ">
                            {item.contentEN}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between p-4 ">
                        <div className="flex gap-2 font-semibold">
                          <Icons.clock />
                          <p>{item.timeRecommend} นาที</p>
                        </div>
                        <div className="flex gap-2">
                          <Icons.light className="text-green-500" />
                          <Icons.heart className="text-red-500" />
                          <Icons.hand className="text-yellow-500" />
                        </div>
                      </div>
                    </li>

                    <div className="flex w-full flex-col justify-between rounded-md border-[1px] p-4">
                      {/* ai output */}
                      <ScrollArea className="h-[300px] w-full pr-4">
                        <ul>
                          {messages.map((m, index) => (
                            <li
                              key={index}
                              className={`mb-2 rounded-md p-2 ${
                                m.role === "user"
                                  ? "bg-blue-200"
                                  : "bg-gray-200"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex gap-2">
                                  {m.role === "user" ? (
                                    <Icons.smile />
                                  ) : (
                                    <Icons.bot className=" w-6 flex-none" />
                                  )}
                                  {m.content}
                                </div>
                                <Icons.copy className="h-4 w-4 text-muted-foreground hover:cursor-pointer" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                      <div>
                        <div className="mb-2 flex gap-2 text-muted-foreground">
                          <Button variant="outline">อธิบายเพิ่มเติม</Button>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="ประยุกต์ใช้กับวิชา..." />
                            </SelectTrigger>
                            <SelectContent side="top">
                              <SelectItem value="thai">ภาษาไทย</SelectItem>
                              <SelectItem value="math">คณิตศาสตร์</SelectItem>
                              <SelectItem value="tech">เทคโนโลยี</SelectItem>
                              <SelectItem value="science">
                                วิทยาศาสตร์
                              </SelectItem>
                              <SelectItem value="social">สังคมศึกษา</SelectItem>
                              <SelectItem value="physic">สุขศึกษา</SelectItem>
                              <SelectItem value="art">ศิลปะ</SelectItem>
                              <SelectItem value="job">การงานอาชีพ</SelectItem>
                              <SelectItem value="language">
                                ภาษาต่างประเทศ
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="เด็กพิเศษ..." />
                            </SelectTrigger>
                            <SelectContent side="top">
                              <SelectItem value="brain">
                                บกพร่องทางสติปัญญา
                              </SelectItem>
                              <SelectItem value="hear">
                                บกพร่องทางการได้ยิน
                              </SelectItem>
                              <SelectItem value="see">
                                บกพร่องทางการเห็น
                              </SelectItem>
                              <SelectItem value="body">
                                บกพร่องทางร่างกายและสุขภาพ
                              </SelectItem>
                              <SelectItem value="say">
                                บกพร่องทางการพูดและภาษา
                              </SelectItem>
                              <SelectItem value="mind">
                                มีปัญหาทางพฤติกรรมและอารมณ์
                              </SelectItem>
                              <SelectItem value="learn">
                                มีปัญหาทางการเรียนรู้
                              </SelectItem>
                              <SelectItem value="complex">
                                พิการซ้ำซ้อน
                              </SelectItem>
                              <SelectItem value="autism">ออทิสติก</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/* form */}
                        <Form {...form}>
                          <form onSubmit={handleSubmit}>
                            <div className="flex justify-between gap-2">
                              <FormField
                                control={form.control}
                                name="prompt"
                                render={({ field }) => (
                                  <FormItem className=" w-full">
                                    <FormControl>
                                      <Input
                                        placeholder="พิมพ์ตรงนี้"
                                        {...field}
                                        value={input}
                                        onChange={handleInputChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                className="bg-slate-500 text-lg font-light"
                                type="submit"
                              >
                                <Icons.send className="mr-2 h-4 w-4" />
                                ส่ง
                              </Button>
                            </div>
                          </form>
                        </Form>
                        <div className="relative flex gap-2">
                          {/* <Button className="absolute bottom-1 right-1 bg-slate-500 font-light text-lg"><Icons.send className="mr-2 h-4 w-4" />ส่ง</Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/* main card */}
            <div className=" p-4 pt-0">
              <h1 className="-mt-2 mb-1 line-clamp-1 text-lg font-semibold md:mb-3 md:mt-4 md:text-xl  ">
                {item.titleEN}
              </h1>
              <p className=" line-clamp-2 text-sm font-light text-muted-foreground md:line-clamp-3 md:text-base ">
                {item.contentEN}
              </p>
              <div className="">
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Icons.eye className="stroke=1 h-5 w-5 stroke-slate-300 " />
                    <p className="text-sm font-light text-muted-foreground">
                      125
                    </p>
                  </div>
                  <Icons.bookmark className="stroke=1 h-5 w-5 stroke-slate-300 hover:fill-sky-500 " />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden justify-between p-2 md:p-4 ">
            <div className="flex gap-2 font-semibold">
              <Icons.clock />
              <p>{item.timeRecommend} นาที</p>
            </div>
            <div className="flex gap-2">
              <Icons.light className="text-green-500" />
              <Icons.heart className="text-red-500" />
              <Icons.hand className="text-yellow-500" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeachingCard;
