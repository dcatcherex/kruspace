"use client";

import * as React from "react";
import { useChatStore } from "@/stores/chat";

import { Icons } from "@/components/icons";

import { useChat } from "ai/react";

import companionData from "../../data/companion.json";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ChatPromptContainer from "./chat-prompt-container";
import ChatEdlevelContainer from "./chat-edlevel-container";
import { Button } from "../ui/button";
import Image from "next/image";
import ChatChip from "./chat-chip";

const ChatInput = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const prompt = useChatStore((state) => state.prompt);
  const updatePrompt = useChatStore((state) => state.updatePrompt);
  const introActive = useChatStore((state) => state.introActive);
  const updateIntroActive = useChatStore((state) => state.updateIntroActive);
  const companion = useChatStore((state) => state.companion);


  return (
    <section className="">
      <ul className="">
        {messages.map((m, index) => (
          <li key={index} className=" mb-2 mr-4 rounded-lg p-2  ">
            <div className="flex items-start  gap-2">
              {m.role === "user" ? (
                ""
              ) : (
                <div className=" min-w-[70px] ">
                  <Image
                    className="mx-auto mb-2"
                    src={
                      companionData.find((item) => item.titleTH === companion)?.image || 'default_image_path'
                    }
                    alt={companion}
                    width={40}
                    height={30}
                  />
                  <div className="text-center text-sm font-semibold">
                    {companion}
                  </div>
                </div>
              )}
              <div
                className={`rounded-lg border-[1px] p-4 ${
                  !(m.role === "user")
                    ? " bg-white "
                    : "rounded-full bg-sky-100 text-muted-foreground"
                }`}
              >
                {m.content}
              </div>
            </div>
            {/* <div className="flex gap-2">
              <button className="rounded-full bg-sky-500 px-2 text-sm font-light text-white">
                อธิบายเพิ่มเติม
              </button>
              <button className="rounded-full bg-sky-500 px-2 text-sm font-light text-white">
                ขยายความ
              </button>
            </div> */}
          </li>
        ))}
      </ul>
      <div className="mb-4 ml-32">
        <ChatChip />
      </div>
      <div className="flex max-w-6xl  items-center justify-between gap-2">
        <div className="flex gap-2">
          <button className="text-slate-400 hover:text-black ">
            <Icons.pluscircle />
          </button>
          <div className=" text-slate-400">
            <Popover>
              <PopoverTrigger>
                <div className="hover: hover:text-black ">
                  <Icons.book />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="h-[600px] min-w-[600px] overflow-auto  "
              >
                <ChatPromptContainer />
              </PopoverContent>
            </Popover>
          </div>
          <div className=" text-slate-400">
            <Popover>
              <PopoverTrigger>
                <div className="hover: hover:text-black ">
                  <Icons.school />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="h-[600px] min-w-[600px] overflow-auto  "
              >
                <ChatEdlevelContainer />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* form */}
        <form id="main chat" onSubmit={handleSubmit}>
          <input
            className="w-[1000px] rounded border border-gray-300 p-4 shadow-sm dark:bg-slate-600 dark:text-white"
            placeholder="สอบถาม..."
            value={input}
            onChange={handleInputChange}
          />
        </form>

        <button className=" text-lg font-light " type="submit">
          <Icons.send2 className="right-4 h-6 w-6 stroke-2 text-slate-400 hover:text-black" />
        </button>
      </div>
    </section>
  );
};
export default ChatInput;
