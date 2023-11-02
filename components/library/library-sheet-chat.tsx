import { CardDataType } from "@/types/type";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import DialogChat from "./dialog-chat";
import { Icons } from "../icons";

type LibrarySheetChatProps = {
  card: CardDataType[];
  currentCard: number;
};

const LibrarySheetChat = ({ card, currentCard = 1 }: LibrarySheetChatProps) => {
  return (
    <section>
      <div className="fixed bottom-4 right-4">
        <Sheet>
          <SheetTrigger>
            <div className="transition-all hover:scale-110">
              <Image src="/char/owl.svg" width={130} height={130} alt="owl" />
            </div>
          </SheetTrigger>
          <SheetContent className=" min-w-[600px]">
            <h2 className="text-xl font-semibold">Choose your AI Assistant</h2>
            <div
              className="grid grid-cols-4
           gap-4"
            >
              <div className="relative rounded-lg border-[1px] border-gray-200 transition-all hover:ring-2">
                <div>
                  <Image
                    className="scale-110"
                    src="/char/staff1.svg"
                    width={300}
                    height={300}
                    alt="staff1"
                  />
                  <Icons.pencil className="absolute right-2 top-2 h-4 w-4 text-slate-300" />
                  <div className="absolute top-0 h-full  rounded-lg bg-black/50 p-2 text-xs text-white opacity-0 hover:cursor-pointer hover:opacity-100">
                    Help teacher do a lesson plan preparation
                  </div>
                </div>
                <div className="z-50 rounded-b-lg bg-sky-500 p-2 text-center text-sm text-white ">
                  <h3>Teacher Asssistant</h3>
                </div>
              </div>
              <div className="relative rounded-lg border-[1px] border-gray-200 transition-all hover:ring-2">
                <div>
                  <Image
                    className="scale-110"
                    src="/char/staff1.svg"
                    width={300}
                    height={300}
                    alt="staff1"
                  />
                  <div className="absolute top-0 h-full  rounded-lg bg-black/50 p-2 text-xs text-white opacity-0 hover:cursor-pointer hover:opacity-100">
                    Help teacher do a lesson plan preparation
                  </div>
                </div>
                <div className="z-50 rounded-b-lg bg-slate-600 p-2 text-center text-sm text-white ">
                  <h3>Spoken English Teacher</h3>
                </div>
              </div>
              <div className="relative rounded-lg border-[1px] border-gray-200 transition-all hover:ring-2">
                <div>
                  <Image
                    className="scale-110"
                    src="/char/staff1.svg"
                    width={300}
                    height={300}
                    alt="staff1"
                  />
                  <div className="absolute top-0 h-full  rounded-lg bg-black/50 p-2 text-xs text-white opacity-0 hover:cursor-pointer hover:opacity-100">
                    Help teacher do a lesson plan preparation
                  </div>
                </div>
                <div className="z-50 rounded-b-lg bg-slate-600 p-2 text-center text-sm text-white ">
                  <h3>Teacher Asssistant</h3>
                </div>
              </div>
              <div className="relative rounded-lg border-[1px] border-gray-200 transition-all hover:ring-2">
                <div>
                  <Image
                    className="scale-110"
                    src="/char/staff1.svg"
                    width={300}
                    height={300}
                    alt="staff1"
                  />
                  <div className="absolute top-0 h-full  rounded-lg bg-black/50 p-2 text-xs text-white opacity-0 hover:cursor-pointer hover:opacity-100">
                    Help teacher do a lesson plan preparation
                  </div>
                </div>
                <div className="z-50 rounded-b-lg bg-slate-600 p-2 text-center text-sm text-white ">
                  <h3>Teacher Asssistant</h3>
                </div>
              </div>
              <Image
                className="scale-110"
                src="/char/staff3.svg"
                width={300}
                height={300}
                alt="staff1"
              />
              <Image
                className="scale-110"
                src="/char/staff2.svg"
                width={300}
                height={300}
                alt="staff1"
              />

              <Image
                className="scale-110"
                src="/char/morestaff.svg"
                width={300}
                height={300}
                alt="staff1"
              />
            </div>
            <div className=" bottom-4 ">
              <DialogChat card={card} currentCard={1} />
            </div>
            <div>
              {/* <Image
                className="absolute -left-14 top-60 -z-30 scale-110"
                src="/things/blackboard2.svg"
                width={1400}
                height={800}
                alt="blackboard"
              /> */}
            </div>
            <SheetHeader>
              <SheetTitle>Choose your AI Assistant</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default LibrarySheetChat;
