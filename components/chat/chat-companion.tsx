"use client";
import { useChatStore } from "@/stores/chat";

import companionData from "../../data/companion.json";

import Image from "next/image";
import { Icons } from "../icons";

import { useState } from "react";
import Search from "../search";
import clsx from "clsx";

const ChatCompanion = () => {
  const companion = useChatStore((state) => state.companion);
  const updateCompanion = useChatStore((state) => state.updateCompanion);

  const [filterValue, setFilterValue] = useState("all");

  const filteredData = companionData.filter((item) => {
    if (filterValue === "all") return true;
    return item.categoryEN === filterValue;
  });

  const handleFilter = (value: string) => {
    setFilterValue(value);
  };

  return (
    <section className="">
      <Search />
      <div className="mb-2 flex justify-between">
        <ul className="flex gap-4">
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "all",
            })}
            onClick={() => setFilterValue("all")}
          >
            ทั้งหมด
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "education",
            })}
            onClick={() => setFilterValue("education")}
          >
            การศึกษา
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "health",
            })}
            onClick={() => setFilterValue("health")}
          >
            สุขภาพ
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "general",
            })}
            onClick={() => setFilterValue("general")}
          >
            ทั่วไป
          </button>
        </ul>
        <button>
          <Icons.sort />
        </button>
      </div>
      <ul className="grid grid-cols-3 gap-4">
        <li className="flex flex-col items-center justify-center rounded-xl border-[1px] bg-white shadow-sm shadow-slate-100 dark:shadow-slate-800 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 ">
          <Icons.plus className="h-24 w-10 dark:text-black" />
          <div className=" rounded-b-lg bg-slate-200 p-2  dark:bg-slate-800">
            <h3 className="mb-1  text-sm font-semibold">สร้างผู้ช่วย</h3>
            <p className="line-clamp-2 text-xs text-gray-500">
              สร้างผู้ช่วยที่เหมาะสมกับความต้องการของ
            </p>
          </div>
        </li>
        {filteredData.map((item) => (
          <li
            key={item.id}
            className={`rounded-xl border-[1px] bg-white shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 dark:bg-black dark:shadow-slate-700 ${
              companion.includes(item.titleTH) ? "ring-4 ring-sky-500" : ""
            }  `}
            onClick={() => updateCompanion(item.titleTH)}
          >
            <Image
              className="mx-auto h-24 w-24 pt-2"
              src={item.image}
              width={90}
              height={90}
              alt=""
            />
            <div className="rounded-b-lg bg-slate-200 p-2 dark:bg-slate-800">
              <h3 className="mb-1 line-clamp-1 text-sm font-semibold">
                {item.titleTH}
              </h3>
              <p className="line-clamp-2 text-xs text-gray-500 dark:text-white">
                {item.promptTH}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChatCompanion;
