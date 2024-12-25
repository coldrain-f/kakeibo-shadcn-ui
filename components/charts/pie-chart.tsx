"use client";

import * as React from "react";
import { LabelList, Pie, PieChart } from "recharts";
import { useTranslations } from "next-intl";

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
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 1253252, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 249142, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 497334, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 2056425, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190211, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "老後/年金", // 노후/연금
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "子女", // 자녀
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "貯蓄/投資", // 저축 투자
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "不動産", // 부동산
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "その他", // 기타
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ExamplePieChart() {
  const id = "pie-interactive";
  const t = useTranslations("assetDashboard");

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="pb-0">
        <CardTitle className="text-3xl">{t("assets")}</CardTitle>
        <CardDescription className="">
          205,651,000{t("currency")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="aspect-square max-h-[290px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              // innerRadius={60}
              strokeWidth={1}
              // label
              labelLine={true}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.visitors
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + t("currency")}
                  </text>
                );
              }}
            >
              <LabelList
                dataKey="browser"
                className="fill-background dark:fill-white"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
}
