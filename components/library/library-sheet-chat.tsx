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
            <div className="fixed bottom-4 ">
              <DialogChat card={card} currentCard={1} />
            </div>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
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
