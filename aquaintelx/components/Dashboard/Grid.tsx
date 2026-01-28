import React from "react";
import { StatCards } from "./StatCard";
import { PHLevel } from "./PHLevel";
import { UsageRadar } from "./UsageRadar";


export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <PHLevel />
      <UsageRadar />
    </div>
  );
};
