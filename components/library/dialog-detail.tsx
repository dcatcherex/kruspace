import { Icons } from "../icons";
import Image from "next/image";

import { CardDataType } from "@/types/type";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type GetContentByLanguageFn = (
  item: CardDataType,
  language: "TH" | "EN" | "JP" | "CN"
) => {
  method: string;
  title: string;
  content: string;
};

type DialogDetailProps = {
  currentCard: number;
  card: CardDataType[];
  getContentByLanguage?: GetContentByLanguageFn;
};

const DialogDetail = ({ currentCard, card }: DialogDetailProps) => {
  return (
    <section>
      <div className="gap-4 space-y-4 md:flex md:space-y-0">
        <li className="relative col-span-1 flex flex-col justify-between rounded-md border-[1px] border-l-8  bg-white text-left shadow-sm  transition duration-150 ease-in-out   dark:bg-black  md:border-l-[1px] ">
          <div className="">
            <div
              className={`rounded-full px-4 py-0 pt-4 md:px-4 md:py-2 ${
                card[currentCard].methodTH === "วิธีการสอน"
                  ? "md:text-yellow-500"
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
                <h3 className="my-2 rounded-full bg-yellow-500 px-2 py-1 text-sm font-normal uppercase  text-white md:text-sm md:font-medium md:text-white">
                  {card[currentCard].methodTH}
                </h3>

                <div className="flex gap-2">
                  <Icons.share className="text-white opacity-0 hover:cursor-pointer  hover:text-black" />

                  <Icons.plus className="text-white opacity-0 hover:cursor-pointer hover:text-black" />
                </div>
              </div>
              <div className="md: flex justify-between  ">
                <div className="flex gap-2 font-semibold text-black dark:text-white">
                  <Icons.clock />
                  <p>{card[currentCard].timeRecommend} นาที</p>
                </div>
                <div className="flex gap-2">
                  <Icons.light className="h-5 w-5 text-green-500" />
                  <Icons.heart className="h-5 w-5 text-red-500" />
                  <Icons.hand className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </div>
            {/* <div className="relative hidden md:block">
              <Image
                src="/placeholder.jpg"
                width={400}
                height={500}
                alt="image"
              />
            </div> */}
            {/* main card */}
            <div className=" p-4 pt-0">
              <h1 className="md: -mt-2  mb-1 text-lg font-semibold text-yellow-500 md:mt-4 md:text-xl  ">
                {card[currentCard].titleTH}
              </h1>
              <p className="  text-sm text-muted-foreground  md:text-sm ">
                {card[currentCard].contentTH}
              </p>

              <h3 className="mt-4  font-semibold">ตัวอย่าง</h3>
              <p className="text-gray-500">(In progress)</p>
              <p className="text-sm text-gray-300  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repudiandae vel atque, omnis dolorem earum in
                molestiae vero optio officiis?
              </p>

              <h3 className="mt-4 font-semibold">สื่อต่าง ๆ</h3>
              <p className="text-gray-500">(In progress)</p>

              <div className="mt-2 text-sm text-gray-300">
                <div className="flex gap-2">
                  <Icons.image className="stroke-1 text-gray-500 dark:text-white" />
                  รูปภาพ
                </div>
                <ul className="list-inside list-disc">
                  <li>รูปภาพ1</li>
                  <li>รูปภาพ2</li>
                </ul>
              </div>
              <div className="mt-2 text-sm text-gray-300">
                <div className="flex gap-2">
                  <Icons.youtube className="stroke-1 text-gray-500 dark:text-white" />
                  วิดีโอ
                </div>
                <ul className="list-inside list-disc">
                  <li>วิดีโอ1</li>
                  <li>วิดีโอ2</li>
                </ul>
              </div>
              <div className="mt-2 text-sm text-gray-300">
                <div className="flex gap-2">
                  <Icons.text className="stroke-1 text-gray-500 dark:text-white" />
                  Document
                </div>
                <ul className="list-inside list-disc">
                  <li>Document1</li>
                  <li>Document2</li>
                </ul>
              </div>

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
        </li>
      </div>
    </section>
  );
};
export default DialogDetail;
