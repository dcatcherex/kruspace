"use client";

import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  HelpCircleIcon,
  FileSearch2Icon,
  PencilIcon,
  SubtitlesIcon,
} from "lucide-react";

export default function Completion() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });

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
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div></div>
        <Label htmlFor="input">
          <div className="flex items-center gap-2 pb-2 pt-4">
            <span className="px-3 py-2 bg-black text-white rounded-full">
              1
            </span>
            <p className="text-base">ป้อนหัวข้อ หรือข้อความ</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            placeholder="ตัวอย่าง: สังเคราะห์แสง"
            value={input}
            onChange={handleInputChange}
          />
        </Label>
        <div className=" text-right space-x-2 mt-1">
          {/* <Badge variant="outline">สังเคราะห์แสง</Badge>
            <Badge variant="outline">แมลง</Badge>
            <Badge variant="outline">ดาวเคราะห์</Badge>
            <Badge variant="outline">พืช</Badge> */}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-black text-white rounded-full">
              2
            </span>
            <p className="font-medium">เลือกระดับชั้น</p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ระดับชั้น" />
            </SelectTrigger>
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircleIcon className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">ข้อความบอก AI</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-sm p-4 border-[1px] rounded-md text-muted-foreground">
          
            <div>
              สร้างแผนการสอนที่ผสมผสานเทคนิคการสอน และวิธีการที่หลากหลาย ได้แก่
            </div>
            <ul className="list-disc pl-4 py-2">
              <li>การสอนโดยตรง</li> <li>การตรวจสอบความเข้าใจ</li>{" "}
              <li>การสนทนา </li>
              <li>กิจกรรมที่น่าสนใจในห้องเรียน</li>
              <li>การมอบหมายงาน</li>
            </ul>
            ในหัวข้อ <span className="text-black font-semibold">[หัวข้อหรือข้อความ]</span> ระดับชั้น <span className="text-black font-semibold">[ระดับชั้น]</span>  
          </div>
        </div>


        <div>
          <div className="flex items-center gap-1">
            <Toggle
              className="p-1 "
              onPressedChange={() => console.log("on press")}
            >
              + แสดงการตั้งค่าเพิ่มเติม
            </Toggle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button className="w-full text-lg font-light space-x-2" type="submit">
            <SubtitlesIcon className="stroke-1" /> <p>สร้างแผนการสอน</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
