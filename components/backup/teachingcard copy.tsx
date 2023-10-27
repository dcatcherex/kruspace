"use client";
import { CardDataType } from "@/types/type";
import { useState } from "react";

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

type TeachingCardProps = {
  bookmarkedItems: Array<string | null>;
  setCurrentCard: (item:number)=>void
  setBookmarkedItems: React.Dispatch<React.SetStateAction<number[]>>;
  handleBookmarkedItems: (item:number)=>void;
  card: CardDataType[];
};

const TeachingCard = ({ card, bookmarkedItems, setCurrentCard, setBookmarkedItems, handleBookmarkedItems }: TeachingCardProps) => {
  const [language, setLanguage] = useState<"TH" | "EN">("EN");


  // Add the bookmarked item to the list
  const handleBookmark = (itemId: number) => {
    if (bookmarkedItems.includes(itemId)) {
      setBookmarkedItems(bookmarkedItems.filter((id) => id !== itemId).sort());
    } else {
      setBookmarkedItems([...bookmarkedItems, itemId].sort());
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "TH" ? "EN" : "TH");
  };

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 "
    >
      <h3>{bookmarkedItems.join(' ,')}</h3>
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

      {card.map((item) => (
        
        <li key={item.id} className={`col-span-1 flex flex-col rounded-md border-[1px] bg-white shadow-sm transition duration-150 ease-in-out hover:cursor-pointer hover:ring-4 ${bookmarkedItems.includes(item.id) ? 'ring-4 ring-orange-500' : ''} dark:bg-black`}>
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
                        <Icons.eye className=" h-5 w-5 stroke-slate-300 " />
                        <p className="text-sm font-light text-muted-foreground">
                          125
                        </p>
                      </div>
                      <Icons.bookmark
                        className={`h-5 w-5 stroke-slate-300 hover:fill-sky-500 ${
                          bookmarkedItems.includes(item.id)
                            ? "fill-sky-500"
                            : ""
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
