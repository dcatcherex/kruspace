import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

import { useChatStore } from "@/stores/chat";

import { Icons } from "../icons";
import Image from "next/image";
import { Input } from "../ui/input";

const ChatSetting = () => {
  const introActive = useChatStore((state) => state.introActive);
  const updateIntroActive = useChatStore((state) => state.updateIntroActive);

  const debugActive = useChatStore((state) => state.debugActive);
  const updateDebugActive = useChatStore((state) => state.updateDebugActive);

  const aiModel = useChatStore((state) => state.aiModel);
  const updateAiModel = useChatStore((state) => state.updateAiModel);

  return (
    <section>
      <div>
        <h3 className="mb-2 mt-4 text-sm font-semibold">Provider</h3>
        <Select onValueChange={(value:string) => updateAiModel(value)}>
          <SelectTrigger className="h-12 w-[260px] font-semibold">
            <Image src="/openai.svg" width={30} height={30} alt="openai" />
            <div className="">
              <SelectValue
                defaultValue={aiModel}
                
                placeholder="gpt-3.5-turbo-1106"
              />
              
              <p className="text-xs font-normal text-muted-foreground">
                OpenAI
              </p>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4-1106-preview" className="flex flex-row">
              
              <div className="flex items-center gap-2">
                <div>gpt-4-1106-preview</div>
                <div className=" rounded-sm bg-green-300 px-1 py-[1px] text-green-700">
                  New
                </div>
              </div>
            </SelectItem>
            <SelectItem value="gpt-4-vision-preview	" className="flex flex-row">
              
              <div className="flex items-center gap-2">
                <div>gpt-4-vision-preview</div>
                <div className=" rounded-sm bg-green-300 px-1 py-[1px] text-green-700">
                  New
                </div>
              </div>
            </SelectItem>
            <SelectItem value="gpt-4-0613">gpt-4-0613</SelectItem>

            <SelectItem value="gpt-3.5-turbo-1106" className="flex flex-row">
              <div className="flex items-center gap-2">
                <div>gpt-3.5-turbo-1106</div>
                <div className=" rounded-sm bg-green-300 px-1 py-[1px] text-green-700">
                  New
                </div>
              </div>
            </SelectItem>
            <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
            <SelectItem value="gpt-3.5-turbo-instruct">
              gpt-3.5-turbo-instruct
            </SelectItem>
            <SelectItem value="gpt-3.5-turbo-16k-0613">
              gpt-3.5-turbo-16k-0613
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <h3 className="mb-2 mt-4 text-sm font-semibold">Output language</h3>
        <Select>
          <SelectTrigger className=" w-[260px] font-semibold">
            <div className="">
              <SelectValue placeholder="English" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ไทย">ไทย</SelectItem>
            <SelectItem value="english">English</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" mt-4">
        <div className="mb-2 flex items-center gap-2">
          <Checkbox id="token" />
          <label
            htmlFor="token"
            className="text-sm font-semibold leading-none "
          >
            Max Tokens
          </label>
        </div>
        <Input className="w-[260px]" />
      </div>
      <div className="w-[260px]">
        <h3 className="mb-2 mt-4 text-sm font-semibold">Creativeness</h3>

        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="w-[250px]">
        <h3 className="mb-2 mt-4 text-sm font-semibold">Utils</h3>
        <div className=" mb-4 flex space-x-2">
          <Checkbox
            id="intro"
            checked={introActive}
            onClick={() => updateIntroActive(!introActive)}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="intro"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show Active Intro
            </label>
            <p className="text-xs text-muted-foreground">
              Easy Guide to use Chat
            </p>
          </div>
        </div>
        <div className=" mb-4 flex space-x-2">
          <Checkbox id="debug" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="debug"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show log value for debug
            </label>
            <p className="text-xs text-muted-foreground">
              General information for maintenance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChatSetting;
