import { Icons } from "../icons";
import Image from "next/image";

import { CardDataType } from "@/types/type";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type DialogDetailProps = {
  currentCard: number;
  card: CardDataType[];
};

const DialogDetail = ({ currentCard = 1, card }: DialogDetailProps) => {
  return (
    <section>
      <div className="gap-4 space-y-4 md:flex md:space-y-0">
        <li className="relative col-span-1 flex flex-col justify-between rounded-md border-[1px] border-l-8 border-l-sky-500 bg-white text-left shadow-sm  transition duration-150 ease-in-out   dark:bg-black  md:border-l-[1px] md:border-l-gray-200">
          <div className="">
            <div
              className={`rounded-t-md px-4 py-0 pt-4 md:px-4 md:py-2 ${
                card[currentCard].methodTH === "วิธีการสอน"
                  ? "md:bg-yellow-500"
                  : card[currentCard].methodTH === "เทคนิคการสอน"
                  ? "md:bg-red-500"
                  : card[currentCard].methodTH === "วัด/ประเมินผล"
                  ? "md:bg-blue-500"
                  : card[currentCard].methodTH === "จัดห้องเรียน"
                  ? "md:bg-violet-500"
                  : card[currentCard].methodTH === "รูปแบบการสอน"
                  ? "md:bg-green-500"
                  : ""
              }`}
            >
              <div className="flex justify-between">
                <h3 className="text-xs font-normal text-sky-500 md:text-base md:font-semibold md:text-black">
                  {card[currentCard].methodEN}
                </h3>
                <div className="flex gap-2">
                  <Icons.share className="text-white opacity-0 hover:cursor-pointer  hover:text-black" />

                  <Icons.plus className="text-white opacity-0 hover:cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.jpg"
                width={400}
                height={500}
                alt="image"
              />
            </div>
            {/* main card */}
            <div className=" p-4 pt-0">
              <h1 className="-mt-2 mb-1  text-lg font-semibold md:mb-3 md:mt-4 md:text-xl  ">
                {card[currentCard].titleEN}
              </h1>
              <p className="  text-sm font-light text-muted-foreground  md:text-base ">
                {card[currentCard].contentEN}
              </p>
              <Collapsible>
                <CollapsibleTrigger className="mt-4 flex w-full justify-between rounded-lg border-[1px] p-2 font-semibold">
                  <h3>Example</h3> <Icons.updown />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  Yes. Free to use for personal and commercial projects. No
                  attribution required.
                </CollapsibleContent>
              </Collapsible>

              <div className="">
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Icons.eye className=" h-5 w-5 stroke-slate-300 " />
                    <p className="text-sm font-light text-muted-foreground">
                      125
                    </p>
                  </div>
                  <Icons.bookmark className=" h-5 w-5 stroke-slate-300 hover:fill-sky-500 " />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-2 md:p-4 ">
            <div className="flex gap-2 font-semibold">
              <Icons.clock />
              <p>{card[currentCard].timeRecommend} นาที</p>
            </div>
            <div className="flex gap-2">
              <Icons.light className="text-green-500" />
              <Icons.heart className="text-red-500" />
              <Icons.hand className="text-yellow-500" />
            </div>
          </div>
        </li>
      </div>
    </section>
  );
};
export default DialogDetail;
