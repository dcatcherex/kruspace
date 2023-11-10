import Image from "next/image";
import companionData from "../../data/companion.json";
import promptData from "../../data/prompt-library.json";
import { useChatStore } from "@/stores/chat";

const companionSelected = companionData.slice(0, 3);
const promptSelected = promptData.slice(0, 6);

const ChatChar = () => {
  const companion = useChatStore((state) => state.companion);
  const updateCompanion = useChatStore((state) => state.updateCompanion);

  const prompt = useChatStore((state) => state.prompt);
  const updatePrompt = useChatStore((state) => state.updatePrompt);

  return (
    <section className="">
      <header className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">เลือกผู้ช่วยของคุณ</h1>
        {/* <p className="">+ เพิ่มเติม</p> */}
      </header>
      <main>
        <ul className="group mb-8 grid grid-cols-3 gap-4">
          {companionSelected.map((item) => (
            <li
              key={item.id}
              className={`flex flex-col items-center gap-2 rounded-xl border-[1px] bg-white p-2 shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 ${
                companion.includes(item.titleTH) ? "ring-4 ring-sky-500" : ""
              }  `}
              onClick={() => updateCompanion(item.titleTH)}
            >
              <div className="h-32 w-32 ">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.titleTH}
                  className="h-full w-full "
                />
              </div>
              <h2 className="text-sm font-semibold">{item.titleTH}</h2>
              <p className="fixed hidden   text-sm hover:block">
                {item.promptTH}
              </p>
            </li>
          ))}
        </ul>
        <h1 className="mb-4 text-2xl font-semibold">เลือก prompt เบื้องต้น</h1>
        <ul className="group mb-8 grid grid-cols-3 gap-4">
          {promptSelected.map((item) => (
            <li
              key={item.id}
              className={`flex flex-col items-center gap-2 rounded-xl border-[1px] bg-white p-2 shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 ${
                prompt.includes(item.promptTH) ? "ring-4 ring-sky-500" : ""
              }  `}
              onClick={() => updatePrompt(item.promptTH)}
            >
              <h2 className="line-clamp-1 text-left text-sm font-semibold">
                {item.titleTH}
              </h2>
              <p className=" line-clamp-3 text-sm text-muted-foreground ">
                {item.promptTH}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};
export default ChatChar;
