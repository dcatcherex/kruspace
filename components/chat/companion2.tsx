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

const Companion2 = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/chat",
      });

    const companion2 = useChatStore((state) => state.companion2);
    const updateCompanion2 = useChatStore((state) => state.updateCompanion2);
    const miniCompanion = companionData.slice(0, 8);

  return (
    <section>{/* companian1 */}
    <div className="relative min-h-[300px] rounded-lg border-[1px]   ">
      <div className="">
        <div className="relative flex items-start">
          <DropdownMenu>
            <div className=" flex justify-between">
              <DropdownMenuTrigger>
                <div className="h-28 w-28 items-center rounded-lg p-2 hover:cursor-pointer hover:bg-slate-100">
                  <Image
                    className="mx-auto"
                    src={
                      companionData.find(
                        (item) => item.titleTH === companion2
                      )?.image || "default_image_path"
                    }
                    alt=""
                    width={60}
                    height={60}
                  />
                  <h3 className="text-center text-sm font-semibold">
                    {companion2}
                  </h3>
                </div>
              </DropdownMenuTrigger>
              <Switch
                defaultChecked={false}
                className="absolute right-0 m-2 "
              />
            </div>
            <DropdownMenuContent align="center">
              <DropdownMenuLabel>ผู้ช่วย</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {miniCompanion.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className="flex items-center gap-2"
                  onClick={() => updateCompanion2(item.titleTH)}
                >
                  {item.titleTH}{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ul className="mt-2 max-h-[250px] overflow-y-auto">
            {messages.map((m, index) => (
              <li key={index} className=" mb-1 mr-2 rounded-lg text-sm  ">
                <div className="flex items-start  gap-2">
                  {m.role === "user" ? "" : ""}
                  <div
                    className={`rounded-lg border-[1px] p-1 ${
                      !(m.role === "user")
                        ? " bg-white "
                        : "border-none p-0  text-sky-500 "
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className=" mx-auto flex w-full max-w-md flex-col py-10">
          <form id="2" onSubmit={handleSubmit} className="">
            <input
              className="absolute bottom-0 mb-4 w-full max-w-md rounded border border-gray-300 p-2 shadow-sm dark:text-black "
              placeholder="สอบถาม..."
              value={input}
              onChange={handleInputChange}
            />
            {/* <button type="submit">ส่ง</button> */}
           
          </form>
        </div>
      </div>
    </div></section>
  )
}
export default Companion2