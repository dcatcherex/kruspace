import { Icons } from "../icons";
import Image from "next/image";

import { CardDataType } from "@/types/type";

import DialogDetail from "./dialog-detail";
import DialogChat from "./dialog-chat";
import cardData from "@/data/teaching.json";

type DialogProps = {
  currentCard: number;
  handleNext: () => void;
  handlePrev: () => void;
  card: CardDataType[];
};

const DialogContainer = ({
  currentCard = 1,
  card = cardData,
  handleNext,
  handlePrev,
}: DialogProps) => {
  return (
    <section>
      <div className="flex flex-col gap-4 border-2 border-blue-600 p-4 md:flex-row">
        <div className="">
          <DialogDetail card={card} currentCard={currentCard} />
        </div>
        <div className=" bottom-0 right-0  bg-white">
          <DialogChat card={card} currentCard={currentCard} />
        </div>
      </div>
    </section>
  );
};
export default DialogContainer;
