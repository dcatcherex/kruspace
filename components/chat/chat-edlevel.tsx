import { Icons } from "../icons";
import { Toggle } from "@/components/ui/toggle";

import { useChatStore } from "@/stores/chat";

const elementary = [
  { id: 1, grade: "ประถม 1" },
  { id: 2, grade: "ประถม 2" },
  { id: 3, grade: "ประถม 3" },
  { id: 4, grade: "ประถม 4" },
  { id: 5, grade: "ประถม 5" },
  { id: 6, grade: "ประถม 6" },
];

const secondary = [
  { id: 1, grade: "มัธยม 1" },
  { id: 2, grade: "มัธยม 2" },
  { id: 3, grade: "มัธยม 3" },
  { id: 4, grade: "มัธยม 4" },
  { id: 5, grade: "มัธยม 5" },
  { id: 6, grade: "มัธยม 6" },
];

const subjects = [
  { id: 1, subject: "ภาษาไทย" },
  { id: 2, subject: "คณิตศาสตร์" },
  { id: 3, subject: "วิทยาศาสตร์และเทคโนโลยี" },
  { id: 4, subject: "สังคมศึกษา ศาสนาและวัฒนธรรม" },
  { id: 5, subject: "ประวัติศาสตร์" },
  { id: 6, subject: "สุขศึกษาและพลศึกษา" },
  { id: 7, subject: "ศิลปะ" },
  { id: 8, subject: "การงานอาชีพ" },
  { id: 9, subject: "ภาษาอังกฤษ" },
  { id: 10, subject: "หน้าที่พลเมือง" },
  { id: 11, subject: "คอมพิวเตอร์" },
  { id: 12, subject: "แนะแนว" },
];

const subjects2 = [
  { id: 1, subject: "ช่างยนต์" },
  { id: 2, subject: "ช่างไฟฟ้า" },
  { id: 3, subject: "ช่างอิเล็กทรอนิกส์" },
  { id: 4, subject: "ช่างก่อสร้าง" },
  { id: 5, subject: "การบัญชี" },
  { id: 6, subject: "การตลาด" },
  { id: 7, subject: "คอมพิวเตอร์ธุรกิจ" },
  { id: 8, subject: "การท่องเที่ยว" },
  { id: 9, subject: "เทคนิคเครื่องกล" },
  { id: 10, subject: "ช่างไฟฟ้า" },
  { id: 11, subject: "อิเล็กทรอนิกส์อุตสาหกรรม" },
  { id: 12, subject: "เทคโนโลยีธุรกิจดิจิทัล" },
];

const special = [
  {
    id: 1,
    type: "บกพร่องทางสติปัญญา",
    icon: <Icons.brain className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 2,
    type: "บกพร่องทางการได้ยิน",
    icon: <Icons.ear className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 3,
    type: "บกพร่องทางการมองเห็น",
    icon: <Icons.eye className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 4,
    type: "บกพร่องทางร่างกายและสุขภาพ",
    icon: <Icons.person className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 5,
    type: "บกพร่องทางการพูดและภาษา",
    icon: <Icons.speech className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 6,
    type: "มีปัญหาทางพฤติกรรมและอารมณ์",
    icon: <Icons.emotion className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 7,
    type: "บกพร่องทางการเรียนรู้",
    icon: <Icons.book className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 8,
    type: "พิการซ้ำซ้อน",
    icon: <Icons.accessibility className="h-4 w-4 text-gray-500" />,
  },
  {
    id: 9,
    type: "ออทิสติก",
    icon: <Icons.autism className="h-4 w-4 text-gray-500" />,
  },
];

const ChatEdlevel = () => {
  const edlevel = useChatStore((state) => state.edlevel);
  const updateEdlevel = useChatStore((state) => state.updateEdlevel);

  const handleEdlevel = (levelAndSubject: string) => {
    if (edlevel.includes(levelAndSubject)) {
      updateEdlevel(edlevel.filter((id) => id !== levelAndSubject).sort());
    } else {
      updateEdlevel([...edlevel, levelAndSubject].sort());
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Education Levels</h2>
      <div className="mb-4">
        <div className="mb-2 mt-4 flex items-center gap-2 font-semibold">
          <Icons.school /> {"Grades"}
        </div>
        <p className="text-sm text-muted-foreground">
          เลือกระดับชั้นที่รับผิดชอบ
        </p>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-sm">ปฐมวัย</h3>
        <Toggle
          variant="outline"
          size="sm"
          className="rounded-full data-[state=on]:bg-slate-200"
          onClick={() => handleEdlevel("ปฐมวัย")}
        >
          ปฐมวัย
        </Toggle>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-sm">ประถมศึกษา</h3>
        {elementary.map((item) => (
          <Toggle
            variant="outline"
            size="sm"
            key={item.id}
            className={`rounded-full data-[state=on]:bg-slate-200 ${
              edlevel.includes(item.grade) ? "bg-slate-200" : ""
            } `}
            onClick={() => handleEdlevel(item.grade)}
          >
            {item.grade}
          </Toggle>
        ))}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-sm">มัธยมศึกษา</h3>
        {secondary.map((item) => (
          <Toggle
            variant="outline"
            size="sm"
            key={item.id}
            className={`rounded-full data-[state=on]:bg-slate-200 ${
              edlevel.includes(item.grade) ? "bg-slate-200" : ""
            } `}
            onClick={() => handleEdlevel(item.grade)}
          >
            {item.grade}
          </Toggle>
        ))}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-sm">วิทยาลัยการอาชีพ</h3>
        <Toggle
          variant="outline"
          size="sm"
          className={`rounded-full data-[state=on]:bg-slate-200 ${
            edlevel.includes("ประกาศนียบัตรวิชาชีพ") ? "bg-slate-200" : ""
          } `}
          onClick={() => handleEdlevel("ประกาศนียบัตรวิชาชีพ")}
        >
          ประกาศนียบัตรวิชาชีพ
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          className={`rounded-full data-[state=on]:bg-slate-200 ${
            edlevel.includes("ประกาศนียบัตรวิชาชีพชั้นสูง")
              ? "bg-slate-200"
              : ""
          } `}
          onClick={() => handleEdlevel("ประกาศนียบัตรวิชาชีพชั้นสูง")}
        >
          ประกาศนียบัตรวิชาชีพชั้นสูง
        </Toggle>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-sm">มหาวิทยาลัย</h3>
        <Toggle
          variant="outline"
          size="sm"
          className="rounded-full data-[state=on]:bg-slate-200"
        >
          ปริญญาตรี
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          className="rounded-full data-[state=on]:bg-slate-200"
        >
          ปริญญาโท
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          className="rounded-full data-[state=on]:bg-slate-200"
        >
          ปริญญาเอก
        </Toggle>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-2 rounded-lg bg-slate-100 p-2">
        <h3 className="text-sm">การศึกษาพิเศษ</h3>
        {special.map((item) => (
          <Toggle
            variant="outline"
            size="sm"
            key={item.id}
            className={`rounded-full data-[state=on]:bg-slate-400 ${
              edlevel.includes(item.type) ? "bg-slate-400" : ""
            } `}
            onClick={() => handleEdlevel(item.type)}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              {item.type}
            </div>
          </Toggle>
        ))}
      </div>
      <div className="mb-4">
        <div className="mb-2 mt-4 flex items-center gap-2 font-semibold">
          <Icons.book /> {"วิชา"}
        </div>
        <p className="text-sm text-muted-foreground">เลือกวิชาที่รับผิดชอบ</p>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {subjects.map((item) => (
          <Toggle
            variant="outline"
            size="sm"
            key={item.id}
            className={`rounded-full data-[state=on]:bg-slate-200 ${
              edlevel.includes(item.subject) ? "bg-slate-200" : ""
            } `}
            onClick={() => handleEdlevel(item.subject)}
          >
            {item.subject}
          </Toggle>
        ))}
      </div>
      <div className="mb-4">
        <div className="mb-2 mt-4 flex items-center gap-2 font-semibold">
          <Icons.book /> {"วิชาชีพ"}
        </div>
        <p className="text-sm text-muted-foreground">เลือกวิชาที่รับผิดชอบ</p>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {subjects2.map((item) => (
          <Toggle
            variant="outline"
            size="sm"
            key={item.id}
            className={`rounded-full data-[state=on]:bg-slate-200 ${
              edlevel.includes(item.subject) ? "bg-slate-200" : ""
            } `}
            onClick={() => handleEdlevel(item.subject)}
          >
            {item.subject}
          </Toggle>
        ))}
      </div>
    </section>
  );
};
export default ChatEdlevel;
