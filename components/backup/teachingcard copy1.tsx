// 'use client'

import React from "react";

import { motion } from "framer-motion"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/icons";
import Image from "next/image";

type TeachingData = {
  method: string;
  title: string;
  content: string;
  time_recommend: string;
  use: string;
  min_time: number;
  max_time: number;
};

type TeachingCardProps = {
  data: TeachingData[];
};

const TeachingCard: React.FC<TeachingCardProps> = ({ data }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-2 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 "
    >
      <div className="flex flex-col border-[1px] col-span-1 bg-white dark:bg-black rounded-md  shadow-sm transition ease-in-out  duration-150 hover:ring-4 hover:cursor-pointer ">
        <div className="px-2 md:px-4 py-2 rounded-t-md bg-slate-300 font-semibold">
          {"เลือกประเภท"}
        </div>
        <div className="hidden md:block mix-blend-luminosity bg-slate-800 ">
          <Image src="/placeholder.jpg" width={400} height={500} alt="image" />
        </div>
        <div className="p-2 md:p-4">
          <h1 className="font-semibold text-2xl text-center">สร้างการ์ด</h1>
          <Icons.plus className="w-20 h-20 mx-auto text-slate-300 align-middle " />
        </div>
      </div>

      {data.map((item) => (
        <Dialog key={item.title}>
          <DialogTrigger asChild>
            <li
              key={item.title}
              className="flex flex-col justify-between border-[1px] col-span-1 bg-white dark:bg-black rounded-md  shadow-sm transition ease-in-out  duration-150 hover:ring-4 hover:cursor-pointer text-left relative"
            >
              <div className="">
                <div
                  className={`px-2 md:px-4 py-2 rounded-t-md ${
                    item.method === "วิธีการสอน"
                      ? "bg-yellow-500"
                      : item.method === "เทคนิคการสอน"
                      ? "bg-red-500"
                      : item.method === "วัด/ประเมินผล"
                      ? "bg-blue-500"
                      : item.method === "จัดห้องเรียน"
                      ? "bg-violet-500"
                      : item.method === "รูปแบบการสอน"
                      ? "bg-green-500"
                      : ""
                  }`}
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.method}</h3>
                    <div className="flex gap-2">
                      <Icons.share className="hover:text-black text-white  opacity-0" />
                      <Icons.plus className="hover:text-black text-white opacity-0" />
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
                  <Button className="opacity-0 hover:text-white  absolute bottom-4 left-4 bg-slate-500 bg-opacity-50 ">รายละเอียด</Button>
                </div>
                <div className="p-2 md:p-4">
                  <h1 className="text-2xl font-semibold mb-3 line-clamp-1">
                    {item.title}
                  </h1>
                  <p className="line-clamp-3 text-muted-foreground ">
                    {item.content}
                  </p>
                </div>
              </div>
              <div className="flex justify-between p-2 md:p-4 border-t-[1px]">
                <div className="flex gap-2 font-semibold">
                  <Icons.clock />
                  <p>{item.time_recommend} นาที</p>
                </div>
                <div className="flex gap-2">
                  <Icons.light className="text-green-500" />
                  <Icons.heart className="text-red-500" />
                  <Icons.hand className="text-yellow-500" />
                </div>
              </div>
            </li>
          </DialogTrigger>

          {/* contents */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle>เรียนรู้เพิ่มเติม</DialogTitle>
            </DialogHeader>
            <div className="md:flex gap-4 space-y-4 md:space-y-0">
              <li
                key={item.title}
                className="max-w-[300px] flex flex-col border-[1px] col-span-1 bg-white rounded-md"
              >
                <div className="">
                  <div
                    className={`px-4 py-2 rounded-t-md ${
                      item.method === "วิธีการสอน"
                        ? "bg-yellow-500"
                        : item.method === "เทคนิคการสอน"
                        ? "bg-red-500"
                        : item.method === "วัด/ประเมินผล"
                        ? "bg-blue-500"
                        : item.method === "จัดห้องเรียน"
                        ? "bg-violet-500"
                        : item.method === "รูปแบบการสอน"
                        ? "bg-green-500"
                        : ""
                    }`}
                  >
                    <h3 className="font-semibold">{item.method}</h3>
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
                    <h1 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h1>
                    <p className=" text-muted-foreground ">{item.content}</p>
                  </div>
                </div>
                <div className="flex justify-between p-4 border-t-[1px]">
                  <div className="flex gap-2 font-semibold">
                    <Icons.clock />
                    <p>{item.time_recommend} นาที</p>
                  </div>
                  <div className="flex gap-2">
                    <Icons.light className="text-green-500" />
                    <Icons.heart className="text-red-500" />
                    <Icons.hand className="text-yellow-500" />
                  </div>
                </div>
              </li>
              <div className="flex flex-col justify-between p-4 border-[1px] rounded-md w-full">
                <div className="full-h">
                  รูปแบบการสอน
                </div>
                <div>
                  <div className="flex gap-2 text-muted-foreground mb-2">
                    <div className="border-[1px] rounded-full px-2 text-sm">
                      simplify{" "}
                    </div>
                    <div className="border-[1px] rounded-full px-2 text-sm">
                      adapt{" "}
                    </div>
                    <div className="border-[1px] rounded-full px-2 text-sm">
                      {"เด็กพิเศษ "}
                    </div>
                  </div>

                  <Input placeholder="พิมพ์ตรงนี้" />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* {data.map((item) => (
        <li
          key={item.title}
          className="flex flex-col justify-between border-[1px]  col-span-1 bg-white rounded-md  shadow-sm transition ease-in-out  duration-150 hover:scale-105 hover:cursor-pointer"
        >
          <div>
            <div
              className={`px-4 py-2 rounded-t-md ${
                item.method === "วิธีการสอน"
                  ? "bg-yellow-500"
                  : item.method === "เทคนิคการสอน"
                  ? "bg-red-500"
                  : item.method === "วัด/ประเมินผล"
                  ? "bg-blue-500"
                  : item.method === "จัดห้องเรียน"
                  ? "bg-violet-500"
                  : item.method === "รูปแบบการสอน"
                  ? "bg-green-500"
                  : ""
              }`}
            >
              <h3 className="font-semibold">{item.method}</h3>
            </div>
            <div>
              <Image
                src="/placeholder.jpg"
                width={400}
                height={500}
                alt="image"
              />
            </div>
            <div className="p-4">
              <h1 className="text-2xl font-semibold mb-3 line-clamp-1">
                {item.title}
              </h1>
              <p className="line-clamp-3 text-muted-foreground ">
                {item.content}
              </p>
            </div>
          </div>
          <div className="flex justify-between p-4 border-t-[1px]">
            <div className="flex gap-2 font-semibold">
              <Icons.clock />
              <p>{item.time_recommend} นาที</p>
            </div>
            <div className="flex gap-2">
              <Icons.light className="text-green-500" />
              <Icons.heart className="text-red-500" />
              <Icons.hand className="text-yellow-500" />
            </div>
          </div>
        </li>
      ))} */}
    </ul>
  );
};

export default TeachingCard;
