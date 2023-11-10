"use client";

import React, { useState } from "react";
import TeachingCard from "@/components/teachingcard";
import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";
import { toast } from "sonner";
import { CardDataType } from "@/types/type";

import { handleBookmark } from "@/lib/bookmarkHandler";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LibraryBucketContainer from "@/components/library/library-bucket-container";
import LibrarySheetChat from "@/components/library/library-sheet-chat";
import { Button } from "@/components/ui/button";
import LibraryRecommend from "@/components/library/library-recommend";

const Library = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  const [language, setLanguage] = useState<"TH" | "EN" | "JP">("TH");

  // Add the bookmarked item to the list
  const handleBookmark = (itemId: number) => {
    if (bookmarkedItems.includes(itemId)) {
      setBookmarkedItems(bookmarkedItems.filter((id) => id !== itemId).sort());
    } else {
      setBookmarkedItems([...bookmarkedItems, itemId].sort());
      toast("Set Bookmark");
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      switch (prevLanguage) {
        case "TH":
          return "EN";
        case "EN":
          return "JP";
        case "JP":
          return "TH";
        default:
          return "EN";
      }
    });
  };

  function getContentByLanguage(
    item: CardDataType,
    language: "TH" | "EN" | "JP" | "CN"
  ) {
    switch (language) {
      case "TH":
        return {
          method: item.methodTH,
          title: item.titleTH,
          content: item.contentTH,
        };
      case "EN":
        return {
          method: item.methodEN,
          title: item.titleEN,
          content: item.contentEN,
        };
      case "JP":
        return {
          method: item.methodJP,
          title: item.titleJP,
          content: item.contentJP,
        };
      default:
        return {
          method: item.methodEN,
          title: item.titleEN,
          content: item.contentEN,
        };
    }
  }

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
      <div className="container"></div>
      {/* <h3>bookmarked: {bookmarkedItems.join(" ,")}</h3> */}
      <Button onClick={toggleLanguage} className="fixed">
        {language}
      </Button>
      {/* <Button onClick={() => toast("This is a sonner toast")}>
        toast Language
      </Button> */}
      {/* <div>currentCard: {currentCard}</div> */}
      {/* <div className="w-full bg-sky-400 text-center">เลือกหมวดหมู่</div> */}
      <LibrarySheetChat card={card} currentCard={currentCard} />

      <div className="container relative flex">
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
            {/* <LibraryRecommend
              bookmarkedItems={bookmarkedItems}
              card={card.slice(0, 5)}
              getContentByLanguage={getContentByLanguage}
              handleBookmark={handleBookmark}
              language={language}
              setCurrentCard={setCurrentCard}
            /> */}
            <div className="flex">
              <TeachingCard
                card={card}
                bookmarkedItems={bookmarkedItems}
                handleBookmark={handleBookmark}
                setBookmarkedItems={setBookmarkedItems}
                setCurrentCard={setCurrentCard}
                getContentByLanguage={getContentByLanguage}
                language={language}
              />
            </div>
          </TabsContent>
          <TabsContent value="วิธีการสอน">
            <TeachingCard
              card={methodData}
              bookmarkedItems={bookmarkedItems}
              handleBookmark={handleBookmark}
              setBookmarkedItems={setBookmarkedItems}
              setCurrentCard={setCurrentCard}
              getContentByLanguage={getContentByLanguage}
              language={language}
            />
          </TabsContent>
          <TabsContent value="เทคนิคการสอน">
            <TeachingCard
              card={techniqueData}
              bookmarkedItems={bookmarkedItems}
              handleBookmark={handleBookmark}
              setBookmarkedItems={setBookmarkedItems}
              setCurrentCard={setCurrentCard}
              getContentByLanguage={getContentByLanguage}
              language={language}
            />
          </TabsContent>
          <TabsContent value="วัด/ประเมินผล">
            <TeachingCard
              card={evaluationData}
              bookmarkedItems={bookmarkedItems}
              handleBookmark={handleBookmark}
              setBookmarkedItems={setBookmarkedItems}
              setCurrentCard={setCurrentCard}
              getContentByLanguage={getContentByLanguage}
              language={language}
            />
          </TabsContent>
          <TabsContent value="จัดห้องเรียน">
            <TeachingCard
              card={arrangementData}
              bookmarkedItems={bookmarkedItems}
              handleBookmark={handleBookmark}
              setBookmarkedItems={setBookmarkedItems}
              setCurrentCard={setCurrentCard}
              getContentByLanguage={getContentByLanguage}
              language={language}
            />
          </TabsContent>
          <TabsContent value="รูปแบบการสอน">
            <TeachingCard
              card={frameworkData}
              bookmarkedItems={bookmarkedItems}
              handleBookmark={handleBookmark}
              setBookmarkedItems={setBookmarkedItems}
              setCurrentCard={setCurrentCard}
              getContentByLanguage={getContentByLanguage}
              language={language}
            />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div className=" max-w-[300px] md:block">
          <LibraryBucketContainer card={card} currentCard={currentCard - 1} />
        </div>
      </div>
    </div>
  );
};

export default Library;
