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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    month: "1月",
    desktop: 18000,
    mobile: 2800,
    notebook: 15200,
  },
  {
    month: "2月",
    desktop: 18500,
    mobile: 2820,
    notebook: 15680,
  },
  {
    month: "3月",
    desktop: 19000,
    mobile: 2850,
    notebook: 16150,
  },
  {
    month: "4月",
    desktop: 19500,
    mobile: 2880,
    notebook: 16620,
  },
  {
    month: "5月",
    desktop: 20000,
    mobile: 2900,
    notebook: 17100,
  },
  {
    month: "6月",
    desktop: 20500,
    mobile: 2920,
    notebook: 17580,
  },
  {
    month: "7月",
    desktop: 21000,
    mobile: 2950,
    notebook: 18050,
  },
  {
    month: "8月",
    desktop: 21500,
    mobile: 2980,
    notebook: 18520,
  },
  {
    month: "9月",
    desktop: 22000,
    mobile: 3000,
    notebook: 19000,
  },
  {
    month: "10月",
    desktop: 22500,
    mobile: 3020,
    notebook: 19480,
  },
  {
    month: "11月",
    desktop: 23000,
    mobile: 3050,
    notebook: 19950,
  },
  {
    month: "12月",
    desktop: 23500,
    mobile: 3080,
    notebook: 20420,
  },
];

const chartConfig = {
  desktop: {
    label: "資產",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "負債",
    color: "hsl(var(--chart-2))",
  },
  notebook: {
    label: "純資産",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ExamplePieChart4() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl flex justify-between">
          <span>資產の流れ</span>
          <Select defaultValue="1">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>카테고리</SelectLabel>
                <SelectItem value="1">월별 표시</SelectItem>
                <SelectItem value="2">분기별 표시</SelectItem>
                <SelectItem value="3">짝수 달 표시</SelectItem>
                <SelectItem value="4">홀수 달 표시</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardTitle>
        <CardDescription>2024年 資產の流れ チャート</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[300px] w-full"
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
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
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
            </Bar>
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}>
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
            </Bar>
            <Bar dataKey="notebook" fill="var(--color-notebook)" radius={4}>
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
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
