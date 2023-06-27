import { FC } from "react";
import Name from "./Components/Name";
import Genre from "./Components/Genre";
import Theatre from "./Components/Theatre";

export const MainFilter: FC = () => {
  return (
    <>
      <Name />
      <Genre />
      <Theatre />
    </>
  );
};
