"use client";

import LibraryRecommend from "@/components/library/library-recommend";
import React, { useState } from "react";
import { CardDataType } from "@/types/type";

import card from "@/data/teaching.json";
import { Icons } from "@/components/icons";

const IdeaSetPage = () => {
  const [currentCard, setCurrentCard] = useState(1);

    const cardCopy = [...card];
    for (let i = cardCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardCopy[i], cardCopy[j]] = [cardCopy[j], cardCopy[i]];
      }

    const randomCards = cardCopy.slice(0, 5);

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
  return (
    <div className="container">
      <LibraryRecommend
        // bookmarkedItems={bookmarkedItems}
        card={randomCards}
        getContentByLanguage={getContentByLanguage}
        // handleBookmark={handleBookmark}
        // language={language}
        setCurrentCard={setCurrentCard}
      />
    </div>
  );
};
export default IdeaSetPage;
