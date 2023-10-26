"use client";

import { useState } from "react";



import { useChat } from "ai/react";

// import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AiCompletion = () => {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("ประถมศึกษาปีที่2");
  // const [topic, setTopic] = useState([
  //   "สาระสำคัญ",
  //   "มาตรฐานและตัวชี้วัด",
  //   "ลักษณะผู้เรียน",
  //   "จุดประสงค์การเรียนรู้",
  //   "ขั้นตอนการเรียนรู้",
  //   "สื่อการเรียนรู้",
  //   "ภาระงานและชิ้นงาน",
  //   "การวัดและประเมินผล",
  // ]);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    body: {
      subject,
      grade,
    },
  });

  const onSubmit = (e: any) => {
    setSubject(input);
    handleSubmit(e)
  };

  return (
    <div>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <label>
          หัวเรื่องที่ต้องการ
          <input className="border-2"
            type="text"
            id="prompt1"
            name="prompt1"
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <Select onValueChange={setGrade} defaultValue="ประถมศึกษาปีที่2">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="ระดับชั้น" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ประถมศึกษาปีที่1">ประถมศึกษาปีที่1</SelectItem>
            <SelectItem value="ประถมศึกษาปีที่2">ประถมศึกษาปีที่2</SelectItem>
            <SelectItem value="ประถมศึกษาปีที่3">ประถมศึกษาปีที่3</SelectItem>
          </SelectContent>
        </Select>
        <br />

        <button type="submit">Send</button>
      </form>
      <div>
        {`input:= ${input}`}
        <br />
        {`subject:= ${subject}`}
        <br />
        {`grade:= ${grade}`}
        <br />
        {/* {`topic:= ${topic}`}
        <br /> */}
      </div>
    </div>
  );
};

export default AiCompletion;
