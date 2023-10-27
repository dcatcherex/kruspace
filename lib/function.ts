import { CardDataType } from "@/types/type";






export const toggleLanguage = (setLanguage:"TH" | "EN" | "JP" | "CN") => {
  setLanguage((prevLanguage:"TH" | "EN" | "JP" | "CN") => {
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

export const getContentByLanguage = (
  item: CardDataType,
  language: "TH" | "EN" | "JP" | "CN"
) => {
  switch (language) {
    case "TH":
      return {
        method: item.methodTH,
        title: item.titleTH,
      };
    case "EN":
      return {
        method: item.methodEN,
        title: item.titleEN,
      };
    case "JP":
      return {
        method: item.methodJP,
        title: item.titleJP,
      };
    default:
      return {
        method: item.methodEN,
        title: item.titleEN,
      };
  }
};
