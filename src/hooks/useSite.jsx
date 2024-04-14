import { useContext } from "react";
import { SiteContext } from "@/providers/SiteProvider";

export const useSite = () => useContext(SiteContext);