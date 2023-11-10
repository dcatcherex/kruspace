"use client";

import * as React from "react";
import { useChatStore } from "@/stores/chat";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/icons";

import { useChat } from "ai/react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "../ui/select";
import ChatPromptContainer from "./chat-prompt-container";
import ChatEdlevelContainer from "./chat-edlevel-container";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "prompt must be at least 2 characters.",
  }),
});

type ChatInputProps = {
  edlevel: Array<string | null>;
  setEdlevel: React.Dispatch<React.SetStateAction<string[]>>;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
};

const ChatInput = () => {
  const prompt = useChatStore((state) => state.prompt);
  const updatePrompt = useChatStore((state) => state.updatePrompt);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  // const { messages, input, handleInputChange, handleSubmit } = useChat({
  //   api: "/api/chat",
  //   initialMessages: [
  //     {
  //       id: "0",
  //       role: "system",
  //       content:
  //         "You are a friendly and helpful instructional coach helping teachers plan a lesson.",
  //     },
  //   ],
  // });

  const handleSubmits = (data) => {

    console.log(data);
  };

  return (
    <section>
      <div className="flex items-center  gap-2 ">
        <div className="flex w-full items-center gap-2 rounded-lg border-[1px] bg-white px-2 shadow-sm">
          <button className="text-slate-400 hover:text-black ">
            <Icons.pluscircle />
          </button>
          <div className="flex gap-2 text-slate-400">
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
          <div className="flex gap-2 text-slate-400">
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

          {/* form */}
          <form onSubmit={handleSubmits}>
            <label>
              Say something...
              <input  />
            </label>
            <button type="submit">Send</button>
          </form>
          {/* <Form {...form}>
            <form onSubmit={handleSubmits}>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input
                          defaultValue={prompt}
                          className="w-full min-w-[830px] border-0"
                          {...field}
                          placeholder="Type your message here..."
                          // value={input}
                          // onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button className=" text-lg font-light " type="submit">
                  <Icons.send2 className="right-4 h-6 w-6 stroke-2 text-slate-400 hover:text-black" />
                </button>
              </div>
            </form>
          </Form> */}
        </div>
      </div>
    </section>
  );
};
export default ChatInput;
