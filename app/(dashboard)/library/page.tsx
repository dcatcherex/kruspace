'use client'

import React,{useState} from "react";
import TeachingCard from "@/components/teachingcard";
import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LibraryBucketContainer from "@/components/library/library-bucket-container";
import LibrarySheetChat from "@/components/library/library-sheet-chat";

const Library = () => {

  const [currentCard, setCurrentCard] = useState(1);
  

  const methodData = card.filter((item) => item.methodTH === "วิธีการสอน");
  const techniqueData = card.filter((item) => item.methodTH === "เทคนิคการสอน");
  const evaluationData = card.filter(
    (item) => item.methodTH === "วัด/ประเมินผล"
  );
  const arrangementData = card.filter(
    (item) => item.methodTH === "จัดห้องเรียน"
  );
  const frameworkData = card.filter((item) => item.methodTH === "รูปแบบการสอน");

  return (
    <div className="bg-slate-50 dark:bg-black md:p-4  ">

      <div className="container">df</div>
      {/* <div className="w-full bg-sky-400 text-center">เลือกหมวดหมู่</div> */}
      <LibrarySheetChat card={card} currentCard={1}/>
      <div className="container flex">
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
              <TeachingCard card={card} />
            </div>
          </TabsContent>
          <TabsContent value="วิธีการสอน">
            <TeachingCard card={methodData} />
          </TabsContent>
          <TabsContent value="เทคนิคการสอน">
            <TeachingCard card={techniqueData} />
          </TabsContent>
          <TabsContent value="วัด/ประเมินผล">
            <TeachingCard card={evaluationData} />
          </TabsContent>
          <TabsContent value="จัดห้องเรียน">
            <TeachingCard card={arrangementData} />
          </TabsContent>
          <TabsContent value="รูปแบบการสอน">
            <TeachingCard card={frameworkData} />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div className="sticky top-20 max-w-[300px] md:block">
          <LibraryBucketContainer card={card} currentCard={5} />
        </div>
      </div>
    </div>
  );
};

export default Library;
