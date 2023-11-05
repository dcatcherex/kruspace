import React from "react";
import AiCompletion from "@/components/ai/ai-completion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ChatContainer from "@/components/chat/chat-container";

const KruBuddy = () => {
  return (
    <div className="container ">
      KruBuddy
      {/* <Completion /> */}
      {/* <AiForm /> */}
      <div className="mx-auto">
        <AiCompletion />
      </div>
      <Dialog>
        <DialogTrigger>
          <div className="fixed bottom-4 right-4  transition-transform hover:scale-110">
            <Image
              src="/char/owl.svg"
              alt="krubuddy"
              width={150}
              height={150}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="mx-auto bg-[#F5F5F5]">
          <ChatContainer />
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger className="mx-auto">ff</PopoverTrigger>
        <PopoverContent align="start" asChild></PopoverContent>
      </Popover>
    </div>
  );
};

export default KruBuddy;
