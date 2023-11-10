import { Icons } from "../icons";

import { useChatStore } from "@/stores/chat";


const ChatChip = () => {
const edlevel = useChatStore((state) => state.edlevel);
const updateEdlevel = useChatStore((state) => state.updateEdlevel);

const removeEdlevel = (levelAndSubject: string) => {
  
    updateEdlevel(edlevel.filter((id) => id !== levelAndSubject).sort());
  
};

  return (
    <section className="space-x-2 space-y-2">
      
      {edlevel.map((item) => (
        <div
          key={item}
         className="inline-flex gap-2 rounded-full bg-slate-300 py-1 pl-2 pr-1 text-sm">
          {item} <Icons.xcircle className="h-5 w-5 fill-gray-500 text-white hover:cursor-pointer hover:fill-red-500" 
           onClick={() => item && removeEdlevel(item)}/>
          </div>))}
      
    </section>
  );
};
export default ChatChip;
