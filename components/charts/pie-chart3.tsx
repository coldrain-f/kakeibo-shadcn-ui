"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    month: "January",
    desktop: 205651000,
    mobile: 25400000,
    notebook: 180251000,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  notebook: {
    label: "Notebook",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ExamplePieChart3() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-3xl">純資産</CardTitle>
        <CardDescription>180,251,000円</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[290px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 0)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(v: number) => {
                  return (
                    v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "円"
                  );
                }}
              />
              <LabelList
                position="inside"
                offset={8}
                className="fill-background dark:fill-white"
                fontSize={12}
                formatter={() => {
                  return "資產";
                }}
              />
            </Bar>
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground dark:fill-white"
                fontSize={12}
                formatter={(v: number) => {
                  return (
                    v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "円"
                  );
                }}
              />
              <LabelList
                position="inside"
                offset={8}
                className="fill-background dark:fill-white"
                fontSize={12}
                formatter={() => {
                  return "負債";
                }}
              />
            </Bar>
            <Bar dataKey="notebook" fill="var(--color-notebook)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground dark:fill-white"
                fontSize={12}
                formatter={(v: number) => {
                  return (
                    v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "円"
                  );
                }}
              />
              <LabelList
                position="inside"
                offset={8}
                className="fill-background dark:fill-white"
                fontSize={12}
                formatter={() => {
                  return "純資産";
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
