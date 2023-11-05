import Image from "next/image";

const char = [
  {
    id: 1,
    title: "ผู้ช่วยครู",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff1.svg",
  },
  {
    id: 2,
    title: "ครูสอนวิทยาศาสตร์",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff2.svg",
  },
  {
    id: 3,
    title: "ครูสอนคณิตศาสตร์",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff3.svg",
  },
  {
    id: 4,
    title: "ครูสอนภาษาไทย",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff4.svg",
  },
  {
    id: 5,
    title: "ครูสอนภาษาอังกฤษ",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff5.svg",
  },
  {
    id: 6,
    title: "ครูแนะแนว",
    description: "คุณครูที่ชอบให้คำแนะนำ",
    instruction: "You are a teacher who likes to give advice",
    image: "/char/staff6.svg",
  },
];

const ChatChar = () => {
  return (
    <section className="">
      <header className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">เลือกผู้ช่วยของคุณ</h1>
        <p className="">+ เพิ่มเติม</p>
      </header>
      <main>
        <ul className="group grid grid-cols-3 gap-4">
          {char.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border-[1px] bg-white p-2 shadow-sm shadow-slate-100 transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-slate-200 "
            >
              <div className="h-32 w-32 ">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="h-full w-full "
                />
              </div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="fixed hidden  text-center text-sm hover:block">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};
export default ChatChar;
