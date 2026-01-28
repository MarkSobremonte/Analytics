"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    feature: "low",
    mobile: 0,
    desktop: 0,
    max: 0,
  },
  {
    feature: "high",
    mobile: 0,
    desktop:0,
    max: 0,
  },
];

export const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Total Disolve solid
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
            <PolarRadiusAxis angle={0} domain={[0, 0]} />
            <Radar
              name="low"
              dataKey="mobile"
              stroke="#18181b"
              fill="#18181b"
              fillOpacity={0}
            />
            <Radar
              name="High"
              dataKey="desktop"
              stroke="#5b21b6"
              fill="#5b21b6"
              fillOpacity={0}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
