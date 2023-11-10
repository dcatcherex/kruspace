import { Icons } from "../icons";
import { Button } from "../ui/button";
import companionData from "@/data/companion.json";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChatCompanionContainer from "./chat-companion-container";
import ChatSettingContainer from "./chat-setting-container";

import { useChatStore } from "@/stores/chat";
import Image from "next/image";

const ChatTopMenu = () => {
  const companion = useChatStore((state) => state.companion);
  const multiActive = useChatStore((state) => state.multiActive);
  const updateMultiActive = useChatStore((state) => state.updateMultiActive);
  const aiModel = useChatStore((state) => state.aiModel);

  return (
    <nav className="flex items-center justify-between border-b-[1px] py-2 ">
      <div>
        <div className="flex justify-center gap-2">
          <Button variant="ghost" aria-label="menu" size="sm" className=" pl-0">
            <Icons.menu />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="inline-flex items-center gap-2 rounded-md border-[1px] p-2 "
              >
                <Image
                  src={
                    companionData.find((item) => item.titleTH === companion)
                      ?.image
                  }
                  alt={companion}
                  width={40}
                  height={30}
                />
                {/* <Icons.laugh className="h-5 w-5 stroke-1" /> */}
                {companion}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="h-[600px] min-w-[600px] overflow-auto "
            >
              <ChatCompanionContainer />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateMultiActive(!multiActive)}
          >
            <Icons.users />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-slate-400">{aiModel}</div>
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 rounded-md border-[1px] p-2 "
        >
          <Icons.setting2 className="h-5 w-5 stroke-1" />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className=" inline-flex items-center  gap-2 rounded-md border-[1px] p-2  "
            >
              <Icons.setting className="h-5 w-5 stroke-1" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ChatSettingContainer />
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 rounded-md border-[1px] bg-yellow-500 dark:bg-black p-2 "
        >
          <Icons.gem className="h-5 w-5 fill-white dark:fill-black stroke-1" />
        </Button>
      </div>
    </nav>
  );
};
export default ChatTopMenu;
