import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import DialogDetail from "./dialog-detail";
import LibraryBucketCard from "./library-bucket-card";

import { CardDataType } from "@/types/type";

type LibraryBucketCardProps = {
  currentCard: number;
  card: CardDataType[];
};

const LibraryBucketContainer = ({
  currentCard,
  card,
}: LibraryBucketCardProps) => {
  return (
    <section>
      <div className="right-0 hidden min-w-[330px] pl-8 pt-0 md:block">
        <div className="min-h-[500px] rounded-md ">
          <h3 className="text-lg font-semibold">รายละเอียดเพิ่มเติม</h3>
          <div className="text-gray-300">currentCard: {currentCard}</div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-md border-[1px] px-1">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div>
                <div>AI ผู้ช่วยครู</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">GPT 3.5 Turbo</p>
          </div>
          <DialogDetail card={card} currentCard={currentCard}  />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="relative mt-4 w-full rounded-md border-[1px] bg-white shadow-sm dark:bg-black ">
            <div className="flex items-center">
              <Icons.pluscircle className="h-10 w-10 fill-slate-500 pl-2 text-white hover:fill-sky-500" />
              <input
                className=" w-full rounded-none border-x-0 border-input pl-2 dark:bg-black"
                placeholder="สอบถาม ขอคำแนะนำ"
              />
            </div>
          </div>
          <Icons.send2 className="mt-4 rounded-full text-slate-500 hover:cursor-pointer hover:text-sky-500" />
        </div>
      </div>
      <LibraryBucketCard />
    </section>
  );
};
export default LibraryBucketContainer;
