import DialogDetail from "./dialog-detail";
import LibraryBucketCard from "./library-bucket-card";

import { CardDataType } from "@/types/type";

type LibraryBucketCardProps = {
  currentCard: number;
  card: CardDataType[];
}

const LibraryBucketContainer = ({currentCard=1, card}:LibraryBucketCardProps) => {
  return (
    <section>
      <div className="right-0 hidden min-w-[330px] pl-8 pt-0 md:block">
        <div className="min-h-[500px] rounded-md border-[1px] bg-white p-4">
          <DialogDetail card={card} currentCard={5} />
        </div>
      </div>
      <LibraryBucketCard />
    </section>
  );
};
export default LibraryBucketContainer;
