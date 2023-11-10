import { CardDataType } from "@/types/type";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Icons } from "../icons";
import { Button } from "../ui/button";
import Image from "next/image";

type GetContentByLanguageFn = (
    item: CardDataType,
    language: "TH" | "EN" | "JP" | "CN"
  ) => {
    method: string;
    title: string;
    content: string;
  };

type LibraryRecommendProps = {
    language?: "TH" | "EN" | "JP" | "CN";
  bookmarkedItems?: Array<number | null>;
  handleBookmark?: (item: number) => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
  getContentByLanguage: GetContentByLanguageFn;
  card: CardDataType[];

}

const LibraryRecommend = ({
    card,
    language = "TH",
    bookmarkedItems,
    handleBookmark,
    getContentByLanguage,
    setCurrentCard
}

:LibraryRecommendProps) => {
  return (
    <section>
      <div className=" my-4 min-h-[200px] rounded-lg  ">
        <div className="flex items-center gap-2">
          <div className="p-4">Recommend:</div>
          <div className="rounded-full border-[1px] p-1 px-2 hover:cursor-pointer hover:bg-sky-500 hover:text-white">
            Set1
          </div>
          <div className="rounded-full border-[1px] p-1 px-2 hover:cursor-pointer hover:bg-sky-500 hover:text-white">
            Set2
          </div>
          <div className="rounded-full border-[1px] p-1 px-2 hover:cursor-pointer hover:bg-sky-500 hover:text-white">
            Set3
          </div>
        <Button className="rounded-full"><Icons.random className="mr-2 h-4 w-4" /> Random </Button>
        </div>
        <div className="m-4 grid min-h-[200px] grid-cols-5 gap-2 rounded-lg ">

            {/* card */}
        {card.map((item) => (
        <li
          key={item.id}
          onClick={() => setCurrentCard(item.id)}
          className={`col-span-1 flex flex-col rounded-md border-[1px] bg-white shadow-sm transition duration-150 ease-in-out hover:cursor-pointer hover:ring-4 active:bg-sky-100 dark:bg-black`}
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
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-normal uppercase text-sky-500 md:text-sm md:font-semibold md:text-black">
                  {getContentByLanguage(item, language).method}
                </h3>
                <div className="flex gap-2">
                  {/* <Icons.share className="text-white opacity-0 hover:cursor-pointer  hover:text-black" /> */}

                  <Icons.plus className="text-white opacity-0 hover:cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
            <div className="relative hidden md:block ">
              <Image
                className="grayscale	"
                src="/placeholder.jpg"
                width={400}
                height={500}
                alt="image"
              />
              <Image
                className=" absolute -bottom-7 -right-12 scale-75 drop-shadow-lg "
                src="/char/teacher1.svg"
                width={400}
                height={500}
                alt="image"
              />
              
            </div>
            {/* main card */}
            <div className=" p-4 pt-0">
              <h1 className="-mt-2 mb-1 line-clamp-1 text-lg font-semibold md:mb-3 md:mt-4 md:text-xl  ">
                {getContentByLanguage(item, language).title}
              </h1>
              <p className=" line-clamp-2 text-sm font-light text-muted-foreground md:line-clamp-2 md:text-sm ">
                {getContentByLanguage(item, language).content}
              </p>
              <div className="">
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Icons.eye className=" h-5 w-5 stroke-slate-300 " />
                    <p className="text-sm font-light text-muted-foreground">
                      125
                    </p>
                  </div>
                  <Icons.bookmark
                    className={`h-5 w-5 stroke-yellow-500 hover:fill-yellow-700 `}
                   
                  />
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



        </div>
        <div className="mx-4 mb-4 flex gap-2">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="ระดับการศึกษา..." />
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
            <SelectTrigger className="">
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
            <SelectTrigger className="">
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
          <Button className="w-24">สร้าง</Button>
        </div>
      </div>
    </section>
  );
};
export default LibraryRecommend;
