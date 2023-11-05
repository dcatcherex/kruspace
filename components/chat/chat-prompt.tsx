"use client";

import Image from "next/image";
import { Icons } from "../icons";

import prompt from "../../data/prompt-library.json";

import { useState } from "react";
import Search from "../search";
import clsx from "clsx";

const companion = [
  {
    id: 1,
    "titleEN": "Math Teacher",
    "titleTH": "ครูคณิตศาสตร์",
    "categoryEN": "education",
    "categoryTH": "การศึกษา",
    "promptEN": "I want you to act as a math teacher. I will provide some mathematical equations or concepts, and it will be your job to explain them in easy-to-understand terms. This could include providing step-by-step instructions for solving a problem, demonstrating various techniques with visuals or suggesting online resources for further study. My first request is \"I need help understanding how probability works.\"",
    "promptTH": "\"\"\"\nฉันต้องการให้คุณทำหน้าที่เป็นครูคณิตศาสตร์ ฉันจะให้สมการหรือแนวคิดทางคณิตศาสตร์บางส่วนและงานของคุณคืออธิบายให้เข้าใจง่าย สามารถรวมถึงการให้คำแนะนำขั้นตอนการแก้ปัญหาทีละขั้นตอน การสาธิตเทคนิคต่างๆ ด้วยภาพหรือแนะนำทรัพยากรออนไลน์สำหรับการศึกษาเพิ่มเติม คำขอแรกของฉันคือ \"ฉันต้องการความช่วยเหลือในการเข้าใจการทำงานของความน่าจะเป็น\"",
    image: "/char/staff1.svg",
  },
  {
    id: 2,
    "titleEN": "Academician",
    "titleTH": "นักวิชาการ",
    "categoryEN": "education",
    "categoryTH": "การศึกษา",
    "promptEN": "I want you to act as an academician. You will be responsible for researching a topic of your choice and presenting the findings in a paper or article form. Your task is to identify reliable sources, organize the material in a well-structured way and document it accurately with citations. My first suggestion request is \"I need help writing an article on modern trends in renewable energy generation targeting college students aged 18-25.\"",
    "promptTH": "\"\"\"\nฉันต้องการให้คุณทำหน้าที่เป็นนักวิชาการ คุณจะรับผิดชอบในการวิจัยเรื่องที่คุณเลือกและนำเสนอข้อมูลที่พบในรูปแบบเอกสารหรือบทความ งานของคุณคือการระบุแหล่งข้อมูลที่เชื่อถือได้ จัดระเบียบเนื้อหาในรูปแบบที่มีโครงสร้างที่ดีและเอกสารอ้างอิงอย่างถูกต้อง คำขอคำแนะนำแรกของฉันคือ \"ฉันต้องการความช่วยเหลือในการเขียนบทความเกี่ยวกับแนวโน้มทางพลังงานทดแทนที่ทันสมัยเพื่อเป้าหมายที่นักศึกษามหาวิทยาลัยอายุ 18-25 ปี\"",
    image: "/char/staff2.svg",
  },
  {
    id: 3,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff3.svg",
    category: "Education",
  },
  {
    id: 4,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff4.svg",
    category: "Education",
  },
  {
    id: 5,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff5.svg",
    category: "Education",
  },
  {
    id: 6,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff6.svg",
    category: "communication",
  },
  {
    id: 7,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff7.svg",
    category: "communication",
  },
  {
    id: 8,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff8.svg",
    category: "Profession",
  },
  {
    id: 9,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff9.svg",
    category: "Profession",
  },
  {
    id: 10,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff10.svg",
    category: "communication",
  },
  {
    id: 11,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff11.svg",
    category: "communication",
  },
  {
    id: 12,
    title: "English Teacher",
    description: "Teacher who likes to give advice",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff12.svg",
    category: "communication",
  },
];

const ChatPrompt = () => {
  const [filterValue, setFilterValue] = useState("all");

  const filteredData = prompt.filter((item) => {
    if (filterValue === "all") return true;
    return item.categoryEN === filterValue;
  });

  const handleFilter = (value: string) => {
    setFilterValue(value);
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Prompt Library</h2>
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
              "font-bold  border-slate-200": filterValue === "lesson planning",
            })}
            onClick={() => setFilterValue("lesson planning")}
          >
            วางแผนการสอน
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "assessment",
            })}
            onClick={() => setFilterValue("assessment")}
          >
            การประเมิน
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "communication",
            })}
            onClick={() => setFilterValue("communication")}
          >
            การสื่อสาร
          </button>
          <button
            className={clsx("border-b-2 border-transparent", {
              "font-bold  border-slate-200": filterValue === "special needs",
            })}
            onClick={() => setFilterValue("special needs")}
          >
            การศึกษาพิเศษ
          </button>
        </ul>
        <button>
          <Icons.sort />
        </button>
      </div>
      <ul className="grid grid-cols-3 gap-4">
        <li className="flex flex-col items-center justify-center rounded-xl border-[1px] bg-white shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 ">
          <div className="rounded-b-lg p-2">
            <h3 className="mb-1  text-sm font-semibold">Create a prompt</h3>
            <Icons.plus className="mx-auto" />
          </div>
        </li>
        {filteredData.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border-[1px] bg-white shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 "
          >
            <div className="rounded-b-lg p-2">
              <h3 className="mb-1 line-clamp-1 text-sm font-semibold">
                {item.titleTH}
              </h3>
              <p className="line-clamp-2 text-xs text-gray-500">
                {item.promptTH}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChatPrompt;
