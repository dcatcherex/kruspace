import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Switch } from "@/components/ui/switch";

import { useChat } from "ai/react";

import { useChatStore } from "@/stores/chat";

import companionData from "../../data/companion.json";
import completion from "../completion";
import { Icons } from "../icons";
import Companion1 from "./companion1";
import Companion2 from "./companion2";
import Companion3 from "./companion3";
import Companion4 from "./conpanion4";

const ChatMulti = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

 

  return (
    <section className="grid grid-cols-2 gap-4">

      <Companion1 />
      <Companion2 />
      <Companion3 />
      <Companion4 />

    </section>
  );
};
export default ChatMulti;
