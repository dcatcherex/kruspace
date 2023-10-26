import React from "react";
import TeachingCard from "@/components/teachingcard";
import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";




const Library = () => {
  const methodData = card.filter((item) => item.method === "วิธีการสอน");
  const techniqueData = card.filter((item) => item.method === "เทคนิคการสอน");
  const evaluationData = card.filter((item) => item.method === "วัด/ประเมินผล");
  const arrangementData = card.filter((item) => item.method === "จัดห้องเรียน");
  const frameworkData = card.filter((item) => item.method === "รูปแบบการสอน");

  return (
    <div className="bg-slate-50 dark:bg-black md:p-4  ">
      {/* <div className="w-full bg-sky-400 text-center">เลือกหมวดหมู่</div> */}
      <Tabs defaultValue="ทั้งหมด" className=" p-4 md:container md:p-0">
        <TabsList className="sticky top-20 z-50 hidden md:block">
          <TabsTrigger value="ทั้งหมด">ทั้งหมด</TabsTrigger>
          <TabsTrigger value="ส่วนตัว">
            <Icons.star className="mr-1 h-5 w-5 fill-yellow-500 text-yellow-500" />
            ส่วนตัว
          </TabsTrigger>
          <TabsTrigger value="ภัยใกล้ตัว">
            <Icons.flame className="mr-1 h-5 w-5 fill-red-500 text-red-500" />
            ภัยใกล้ตัว
          </TabsTrigger>
          <TabsTrigger value="วิธีการสอน">
            วิธีการสอน ({methodData.length})
          </TabsTrigger>
          <TabsTrigger value="เทคนิคการสอน">
            เทคนิคการสอน ({techniqueData.length})
          </TabsTrigger>
          <TabsTrigger value="วัด/ประเมินผล">
            วัด/ประเมินผล ({evaluationData.length})
          </TabsTrigger>
          <TabsTrigger value="จัดห้องเรียน">
            จัดห้องเรียน ({arrangementData.length})
          </TabsTrigger>
          <TabsTrigger value="รูปแบบการสอน">
            รูปแบบการสอน ({frameworkData.length})
          </TabsTrigger>
          <TabsTrigger value="เด็กพิเศษ">
            <Icons.gift className="mr-1 h-5 w-5" />
            เด็กพิเศษ
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ทั้งหมด">
          <div className="flex">
            <TeachingCard data={card} />
            <div className="right-0 hidden min-w-[300px] pl-8 pt-0 md:block">
              <div className="sticky top-20 min-h-[500px] rounded-md border-[1px] bg-white p-4">
                ddf
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="วิธีการสอน">
          <TeachingCard data={methodData} />
        </TabsContent>
        <TabsContent value="เทคนิคการสอน">
          <TeachingCard data={techniqueData} />
        </TabsContent>
        <TabsContent value="วัด/ประเมินผล">
          <TeachingCard data={evaluationData} />
        </TabsContent>
        <TabsContent value="จัดห้องเรียน">
          <TeachingCard data={arrangementData} />
        </TabsContent>
        <TabsContent value="รูปแบบการสอน">
          <TeachingCard data={frameworkData} />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div className="container "></div>
    </div>
  );
};

export default Library;
