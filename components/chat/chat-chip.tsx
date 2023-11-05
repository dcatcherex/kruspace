import { Icons } from "../icons";

const ChatChip = () => {
  return (
    <section className="space-x-2">
      <div className="inline-flex gap-2 rounded-full bg-slate-300 py-1 pl-2 pr-1 text-sm">
        ประถม 3
        <Icons.xcircle className="h-5 w-5 fill-gray-500 text-white hover:cursor-pointer hover:fill-red-500" />
      </div>
      <div className="inline-flex gap-2 rounded-full bg-slate-300 py-1 pl-2 pr-1 text-sm ">
        วิทยาศาสตร์
        <Icons.xcircle className="h-5 w-5 fill-gray-500 text-white hover:cursor-pointer hover:fill-red-500" />
      </div>
      <div className="inline-flex gap-2 rounded-full bg-slate-300 py-1 pl-2 pr-1 text-sm ">
        สังเคราะห์แสง
        <Icons.xcircle className="h-5 w-5 fill-gray-500 text-white hover:cursor-pointer hover:fill-red-500" />
      </div>
    </section>
  );
};
export default ChatChip;
