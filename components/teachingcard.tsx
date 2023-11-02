"use client";
import { CardDataType } from "@/types/type";
import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/icons";
import Image from "next/image";
import CreateCard from "./library/create-card";

type GetContentByLanguageFn = (
  item: CardDataType,
  language: "TH" | "EN" | "JP" | "CN"
) => {
  method: string;
  title: string;
  content: string;
};

type TeachingCardProps = {
  language: "TH" | "EN" | "JP" | "CN";
  bookmarkedItems: Array<number | null>;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
  setBookmarkedItems: React.Dispatch<React.SetStateAction<number[]>>;
  handleBookmark: (item: number) => void;
  getContentByLanguage: GetContentByLanguageFn;
  card: CardDataType[];
};

const TeachingCard = ({
  card,
  bookmarkedItems,
  setCurrentCard,
  setBookmarkedItems,
  handleBookmark,
  getContentByLanguage,
  language,
}: TeachingCardProps) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 "
    >
      <CreateCard />
      {/* main card */}

      {card.map((item) => (
        <li
          key={item.id}
          onClick={() => setCurrentCard(item.id)}
          className={`group col-span-1 flex flex-col rounded-md border-[1px] bg-white shadow-sm transition duration-150 ease-in-out hover:z-50 hover:scale-110 hover:cursor-pointer hover:ring-4 active:bg-sky-100 ${
            bookmarkedItems.includes(item.id) ? "ring-4 ring-yellow-500" : ""
          } dark:bg-black`}
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
              <Icons.image className="absolute left-4 top-4 h-10 w-10 rounded-full bg-black/70 stroke-1 p-2 text-white hover:bg-sky-500" />
              <Icons.youtube className="absolute left-4 top-16 h-10 w-10 rounded-full bg-black/70 stroke-1 p-2 text-white hover:bg-red-500" />
            </div>
            {/* main card */}
            <div className=" p-4 pt-0">
              <h1 className="-mt-2 mb-1 line-clamp-1 text-lg font-semibold md:mb-3 md:mt-4 md:text-xl  ">
                {getContentByLanguage(item, language).title}
              </h1>
              <p className=" line-clamp-2 text-sm font-light text-muted-foreground md:line-clamp-3 md:text-base ">
                {getContentByLanguage(item, language).content}
              </p>
              <div className="opacity-0 group-hover:opacity-100">
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Icons.eye className=" h-5 w-5 stroke-slate-300 " />
                    <p className="text-sm font-light text-muted-foreground">
                      125
                    </p>
                  </div>
                  <Icons.bookmark
                    className={`h-5 w-5 stroke-yellow-500 hover:fill-yellow-700 ${
                      bookmarkedItems.includes(item.id) ? "fill-yellow-500" : ""
                    }`}
                    onClick={() => handleBookmark(item.id)}
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
    </ul>
  );
};

export default TeachingCard;
