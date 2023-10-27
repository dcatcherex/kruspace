"use client";

import { CardDataType } from "@/types/type";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useChat } from "ai/react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "prompt must be at least 2 characters.",
  }),
});

type DialogChatProps = {
  currentCard: number;
  card: CardDataType[];
};

const DialogChat = ({ currentCard, card }: DialogChatProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { messages, input, handleInputChange, handleSubmit } = useChat({
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
    <section className="flex flex-col justify-center md:min-w-[550px]   ">
      <ScrollArea className="h-full min-h-[700px] pr-4">
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
        <div className="mb-2 flex flex-col gap-2 text-muted-foreground md:flex-row">
          <Select>
            <SelectTrigger className="h-8">
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
            <SelectTrigger className="h-8">
              <SelectValue placeholder="เด็กพิเศษ..." />
            </SelectTrigger>
            <SelectContent side="top">
              <SelectItem value="brain">
                <div className="flex gap-2 ">
                  <Icons.brain className="h-4 w-4 text-gray-500" />
                  {"บกพร่องทางสติปัญญา"}
                </div>
              </SelectItem>
              <SelectItem value="hear">
                <div className="flex gap-2">
                  <Icons.ear className="h-4 w-4 text-gray-500" />
                  {"บกพร่องทางการได้ยิน"}
                </div>
              </SelectItem>
              <SelectItem value="see">
                <div className="flex gap-2">
                  <Icons.eye className="h-4 w-4 text-gray-500" />
                  {"บกพร่องทางการมองเห็น"}
                </div>
              </SelectItem>
              <SelectItem value="body">
                <div className="flex gap-2">
                  <Icons.person className="h-4 w-4 text-gray-500" />
                  {"บกพร่องทางร่างกายและสุขภาพ"}
                </div>
              </SelectItem>
              <SelectItem value="say">
                <div className="flex gap-2">
                  <Icons.speech className="h-4 w-4 text-gray-500" />
                  {"บกพร่องทางการพูดและภาษา"}
                </div>
              </SelectItem>
              <SelectItem value="mind">
                <div className="flex gap-2">
                  <Icons.emotion className="h-4 w-4 text-gray-500" />
                  {"มีปัญหาทางพฤติกรรมและอารมณ์"}
                </div>
              </SelectItem>
              <SelectItem value="learn">
                <div className="flex gap-2">
                  <Icons.book className="h-4 w-4 text-gray-500" />
                  {"มีปัญหาทางการเรียนรู้"}
                </div>
              </SelectItem>
              <SelectItem value="complex">
                <div className="flex gap-2">
                  <Icons.accessibility className="h-4 w-4 text-gray-500" />
                  {"พิการซ้ำซ้อน"}
                </div>
              </SelectItem>
              <SelectItem value="autistic">
                <div className="flex gap-2">
                  <Icons.autism className="h-4 w-4 text-gray-500" />
                  {"ออทิสติก"}
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* form */}
        <Form {...form}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <FormControl>
                      <Input
                        placeholder="สอบถาม..."
                        {...field}
                        value={input}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-slate-500 text-lg font-light" type="submit">
                <Icons.send className="mr-2 h-4 w-4" />
                ส่ง
              </Button>
            </div>
          </form>
        </Form>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Kru Buddy</h3>
          <div className="flex ">
            <Select>
              <SelectTrigger className="w-[60px] border-0">
                <SelectValue placeholder="GPT3.5" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3">GPT3.5</SelectItem>
                <SelectItem value="gpt4">GPT4</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost">อธิบายเพิ่มเติม</Button>
            <Button variant="ghost">
              <Icons.setting className="h-4 w-4" />
            </Button>
            <Select>
              <SelectTrigger className="w-[50px] border-0">
                <SelectValue placeholder="ไทย" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">Enlish</SelectItem>
                <SelectItem value="th">ไทย</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DialogChat;
