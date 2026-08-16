import { landingAiEn, landingAiEs } from "./ai";
import { landingAutomationEn, landingAutomationEs } from "./automation";
import { landingCommonEn, landingCommonEs } from "./common";
import { landingDataEn, landingDataEs } from "./data";

export const landingEs = {
  common: landingCommonEs,
  ai: landingAiEs,
  automation: landingAutomationEs,
  data: landingDataEs,
} as const;

export const landingEn = {
  common: landingCommonEn,
  ai: landingAiEn,
  automation: landingAutomationEn,
  data: landingDataEn,
} as const;
