import { CardDataType } from "@/types/type";






export const toggleLanguage = (setLanguage: (lang: "TH" | "EN" | "JP" | "CN") => void, prevLanguage: "TH" | "EN" | "JP" | "CN") => {
  let newLanguage: "TH" | "EN" | "JP" | "CN";
  switch (prevLanguage) {
    case "TH":
      newLanguage = "EN";
      break;
    case "EN":
      newLanguage = "JP";
      break;
    case "JP":
      newLanguage = "TH";
      break;
    default:
      newLanguage = "EN";
  }
  setLanguage(newLanguage);
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
