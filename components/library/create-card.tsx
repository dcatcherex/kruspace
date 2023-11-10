import Image from "next/image";
import { Icons } from "../icons";

const cardClasses = "col-span-1 flex flex-col rounded-md border-[1px] bg-white shadow-sm transition duration-150 ease-in-out hover:cursor-pointer hover:ring-4 dark:bg-black";

const CreateCard = () => {
  return (
    <section className={cardClasses}>
      <header className="rounded-t-md bg-slate-300 p-2 font-semibold md:px-4">
        {"หมวดหมู่"}
      </header>
      <main className="hidden bg-slate-800 mix-blend-luminosity md:block">
        <Image src="/placeholder.jpg" width={400} height={500} alt="image" loading="lazy" />
      </main>
      <footer className="p-2 md:p-4">
        <h1 className="text-center text-2xl font-semibold">
          สร้างไอเดียการสอน
        </h1>
        <Icons.plus className="mx-auto h-20 w-20 align-middle text-slate-300" />
      </footer>
    </section>
  );
}

export default CreateCard;