import { createContext } from "react";
import { DataContextProps } from "./DataContext.types";

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);
