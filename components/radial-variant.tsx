import {
  RadialBar,
  RadialBarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { formatCurrency, formatPercentage } from "@/lib/utils";
import { CategoryTooltip } from "./category-tooltip";

const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

type Props = {
  data?: {
    value: number;
    name: string | null;
  }[];
};

export const RadialVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadialBarChart
        cx="50%"
        cy="40%"
        barSize={10}
        innerRadius="90%"
        outerRadius="20%"
        data={data?.map((entry, index) => ({
          ...entry,
          fill: COLORS[index % COLORS.length],
        }))}
      >
        <RadialBar
          label={{
            position: "insideStart",
            fill: "#fff",
            fontSize: "12px",
          }}
          background
          dataKey="value"
        />
        <Legend
          layout="vertical"
          align="left"
          iconType="circle"
          content={({ payload }: any) => {
            return (
              <ul className="flex flex-col space-y-2">
                {payload?.map((entry: any, index: number) => (
                  <li
                    key={`item-${index}`}
                    className="flex items-center space-x-2"
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{
                        backgroundColor: entry.color,
                      }}
                    />
                    <div className="space-x-1">
                      <span className="text-sm text-muted-foreground">
                        {entry.value}
                      </span>
                      <span className="text-sm">
                        {formatCurrency(entry.payload.value)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
