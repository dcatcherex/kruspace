import React from "react";
import TeachingCard from "@/components/teachingcard";
import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";

import {Button} from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Value } from "@radix-ui/react-select";

const Library = () => {

  const วิธีการสอน_card  = card.filter(item => item.method === "วิธีการสอน");
  const เทคนิคการสอน_card  = card.filter(item => item.method === "เทคนิคการสอน");
  const วัดประเมินผล_card  = card.filter(item => item.method === "วัด/ประเมินผล");
  const จัดห้องเรียน_card  = card.filter(item => item.method === "จัดห้องเรียน");
  const รูปแบบการสอน_card  = card.filter(item => item.method === "รูปแบบการสอน");

  return (
    <div className="md:p-4 bg-slate-50 dark:bg-black  ">
      {/* <div className="w-full bg-sky-400 text-center">เลือกหมวดหมู่</div> */}
      <Tabs defaultValue="ทั้งหมด" className=" p-4 md:p-0 md:container">
        <TabsList className="hidden md:block sticky top-20 z-50">
          <TabsTrigger value="ทั้งหมด">ทั้งหมด</TabsTrigger>
          <TabsTrigger value="ส่วนตัว"><Icons.star className="text-yellow-500 fill-yellow-500 mr-1 w-5 h-5" />ส่วนตัว</TabsTrigger>
          <TabsTrigger value="ภัยใกล้ตัว"><Icons.flame className="text-red-500 fill-red-500 mr-1 w-5 h-5" />ภัยใกล้ตัว</TabsTrigger>
          <TabsTrigger value="วิธีการสอน">วิธีการสอน ({วิธีการสอน_card.length})</TabsTrigger>
          <TabsTrigger value="เทคนิคการสอน">เทคนิคการสอน ({เทคนิคการสอน_card.length})</TabsTrigger>
          <TabsTrigger value="วัด/ประเมินผล">วัด/ประเมินผล ({วัดประเมินผล_card.length})</TabsTrigger>
          <TabsTrigger value="จัดห้องเรียน">จัดห้องเรียน ({จัดห้องเรียน_card.length})</TabsTrigger>
          <TabsTrigger value="รูปแบบการสอน">รูปแบบการสอน ({รูปแบบการสอน_card.length})</TabsTrigger>
          <TabsTrigger value="เด็กพิเศษ"><Icons.gift className="mr-1 w-5 h-5" />เด็กพิเศษ</TabsTrigger>
        </TabsList>
        <TabsContent value="ทั้งหมด">
        <div className="flex">
          <TeachingCard data={card} />
          <div className="hidden md:block right-0 min-w-[300px] pl-8 pt-0"><div className="sticky top-20 p-4 border-[1px] min-h-[500px] bg-white rounded-md">ddf</div></div>
        </div>
        </TabsContent>
        <TabsContent value="วิธีการสอน">
        <TeachingCard data={วิธีการสอน_card} />
        </TabsContent>
        <TabsContent value="เทคนิคการสอน">
        <TeachingCard data={เทคนิคการสอน_card} />
        </TabsContent>
        <TabsContent value="วัด/ประเมินผล">
        <TeachingCard data={วัดประเมินผล_card} />
        </TabsContent>
        <TabsContent value="จัดห้องเรียน">
        <TeachingCard data={จัดห้องเรียน_card} />
        </TabsContent>
        <TabsContent value="รูปแบบการสอน">
        <TeachingCard data={รูปแบบการสอน_card} />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div className="container ">
      </div>
    </div>
  );
};

export default Library;
