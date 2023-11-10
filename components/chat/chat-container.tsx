"use client";

import { useState } from "react";

import { useChatStore } from "@/stores/chat";

import ChatChar from "./chat-char";
import ChatChip from "./chat-chip";
import ChatInput from "./chat-input";
import ChatLeftPanel from "./chat-left-panel";
import ChatTopMenu from "./chat-top-menu";
import ChatMulti from "./chat-multi";

const ChatContainer = () => {
  // const [edlevel, setEdlevel] = useState<string[]>([]);
  // const [prompt, setPrompt] = useState<string>("");
  // const [companion, setCompanion] = useState<string>("teacher assistant");
  const edlevel = useChatStore((state) => state.edlevel);
  const updateEdlevel = useChatStore((state) => state.updateEdlevel);

  const prompt = useChatStore((state) => state.prompt);
  const updatePrompt = useChatStore((state) => state.updatePrompt);

  const companion = useChatStore((state) => state.companion);
  const updateCompanion = useChatStore((state) => state.updateCompanion);

  const introActive = useChatStore((state) => state.introActive);
  const updateIntroActive = useChatStore((state) => state.updateIntroActive);

  const multiActive = useChatStore((state) => state.multiActive);
  const updateMultiActive = useChatStore((state) => state.updateMultiActive);

  return (
    <section>
      <div className="flex justify-center  ">
        {/* <div className="min-w-[200px]">
            <ChatLeftPanel />
        </div> */}
        <div className="mx-auto w-full px-2">
          <div className="mb-10 pr-9">
            <ChatTopMenu />
          </div>

          <div
            className={`${
              introActive ? "mx-auto block  max-w-[800px]" : "hidden"
            }`}
          >
            <ChatChar />
          </div>
          <div className={`${multiActive ? "block" : "hidden"}`}>
            <ChatMulti />
          </div>
          {/* <div className="mb-2 flex justify-between font-light">
            <p>
              companion:{" "}
              <span className="font-semibold text-blue-500">{companion}</span>
            </p>
            <p className="line-clamp-1">prompt: {prompt}</p>
            <p>edlevel: {edlevel}</p>
          </div> */}
          <div
            className={`${
              prompt
                ? "mx-2 mb-2  line-clamp-3 overflow-hidden rounded-md border-[1px] border-slate-300 p-2"
                : ""
            }`}
          >
            {prompt}{" "}
          </div>
          <div className="mb-2 text-center">
            {/* <ChatChip /> */}
          </div>
          <div className="container fixed bottom-0 mb-4">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChatContainer;
