import { DataType } from "@/interface";
import { createContext } from "react";
export const UserConext = createContext<{
  users?: DataType[];
  user?: DataType;
}>({ users: [] });
