'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { toast } from 'sonner'


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

const FormSchema = z.object({
  prompt: z.string().min(2, {
    message: "ต้องใส่อย่างน้อย 2 ตัวอักษร",
  }),
})


const TeachingCard: React.FC<TeachingCardProps> = ({ data }) => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
    toast(<div>You submitted the following values:
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
    </div>)

  }



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
        <li
          key={item.title}
          className="flex flex-col justify-between border-[1px] col-span-1 bg-white dark:bg-black rounded-md  shadow-sm transition ease-in-out  duration-150 hover:ring-4  text-left relative"
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
                  <Icons.share className="hover:text-black text-white hover:cursor-pointer  opacity-0" />
                  <Icons.plus className="hover:text-black text-white hover:cursor-pointer opacity-0" />
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="opacity-0 hover:text-white  absolute bottom-4 left-4 bg-slate-500 bg-opacity-50 ">
                    รายละเอียด
                  </Button>
                </DialogTrigger>
                {/* contents */}
                <DialogContent className="w-[1280px]">
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
                          <p className=" text-muted-foreground ">
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
                    
                    {/* form */}

                    
                    <div className="flex flex-col justify-between p-4 border-[1px] rounded-md w-full">
                      <div className="full-h">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Id odit sit, exercitationem pariatur velit debitis
                        quaerat iure autem obcaecati repudiandae.
                      </div>
                      <div>
                        <div className="flex gap-2 text-muted-foreground mb-2">
                          
                          <Button variant="outline">อธิบายเพิ่มเติม</Button>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="ประยุกต์ใช้กับวิชา..." />
                            </SelectTrigger>
                            <SelectContent side="top">
                              <SelectItem value="thai">ภาษาไทย</SelectItem>
                              <SelectItem value="math">คณิตศาสตร์</SelectItem>
                              <SelectItem value="tech">เทคโนโลยี</SelectItem>
                              <SelectItem value="science">วิทยาศาสตร์</SelectItem>
                              <SelectItem value="social">สังคมศึกษา</SelectItem>
                              <SelectItem value="physic">สุขศึกษา</SelectItem>
                              <SelectItem value="art">ศิลปะ</SelectItem>
                              <SelectItem value="job">การงานอาชีพ</SelectItem>
                              <SelectItem value="language">ภาษาต่างประเทศ</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="เด็กพิเศษ..." />
                            </SelectTrigger>
                            <SelectContent side="top">
                              <SelectItem value="brain">บกพร่องทางสติปัญญา</SelectItem>
                              <SelectItem value="hear">บกพร่องทางการได้ยิน</SelectItem>
                              <SelectItem value="see">บกพร่องทางการเห็น</SelectItem>
                              <SelectItem value="body">บกพร่องทางร่างกายและสุขภาพ</SelectItem>
                              <SelectItem value="say">บกพร่องทางการพูดและภาษา</SelectItem>
                              <SelectItem value="mind">มีปัญหาทางพฤติกรรมและอารมณ์</SelectItem>
                              <SelectItem value="learn">มีปัญหาทางการเรียนรู้</SelectItem>
                              <SelectItem value="complex">พิการซ้ำซ้อน</SelectItem>
                              <SelectItem value="autism">ออทิสติก</SelectItem>
                            </SelectContent>
                          </Select>

                         
                        </div>

                        <div className="relative flex gap-2">
                          <Input placeholder="พิมพ์ตรงนี้" />
                          <Button className="bg-slate-500 font-light text-lg">
                            <Icons.send className="mr-2 h-4 w-4" />
                            ส่ง
                          </Button>
                          {/* <Button className="absolute bottom-1 right-1 bg-slate-500 font-light text-lg"><Icons.send className="mr-2 h-4 w-4" />ส่ง</Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
