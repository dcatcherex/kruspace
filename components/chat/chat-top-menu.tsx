import { Icons } from "../icons";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChatCompanionContainer from "./chat-companion-container";
import ChatSettingContainer from "./chat-setting-container";

const ChatTopMenu = () => {
  return (
    <nav className="flex items-center justify-between border-b-[1px] py-2 ">
      <div>
        <Button variant="ghost" aria-label="menu" size="sm" className=" pl-0">
          <Icons.menu />
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              size="sm"
              className="inline-flex items-center gap-2 rounded-md border-[1px] p-2 "
            >
              <Icons.laugh className="h-5 w-5 stroke-1" />
              ผู้ช่วยครู
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="h-[600px] min-w-[600px] overflow-auto "
          >
            <ChatCompanionContainer />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-1">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 rounded-md border-[1px] p-2 "
        >
          <Icons.setting2 className="h-5 w-5 stroke-1" />
        </Button>

        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              size="sm"
              className=" inline-flex items-center  gap-2 rounded-md border-[1px] border-red-300 p-2 "
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
          className="inline-flex items-center gap-2 rounded-md border-[1px] bg-yellow-500 p-2 "
        >
          <Icons.gem className="h-5 w-5 fill-white stroke-1" />
        </Button>
      </div>
    </nav>
  );
};
export default ChatTopMenu;
