import React from "react";
import TeachingCard from "@/components/teachingcard";
import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Library = () => {

  const วิธีการสอน_card  = card.filter(item => item.method === "วิธีการสอน");
  const เทคนิคการสอน_card  = card.filter(item => item.method === "เทคนิคการสอน");
  const วัดประเมินผล_card  = card.filter(item => item.method === "วัด/ประเมินผล");
  const จัดห้องเรียน_card  = card.filter(item => item.method === "จัดห้องเรียน");
  const รูปแบบการสอน_card  = card.filter(item => item.method === "รูปแบบการสอน");

  return (
    <div className="p-4 bg-slate-50 dark:bg-black  ">
           

      <Tabs defaultValue="ทั้งหมด" className="container">
        <TabsList>
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
        <TeachingCard data={card} />
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
