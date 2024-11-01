import { FC } from "react";

import { ChildrenProps } from "../../common/types/types";
import { BottomAppBar } from "./components/BottomAppBar/BottomAppBar";
import { TopAppBar } from "./components/TopAppBar/TopAppBar";

export const BlogLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <TopAppBar />
      {children}
      <BottomAppBar />
    </>
  );
};
