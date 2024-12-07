"use client";

import { Settings } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export function Table1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl flex justify-between">
          資産の現況
          <Button variant="outline">
            <Settings />
            資産の形態
          </Button>
        </CardTitle>
        <CardDescription>
          {/* ※ 소계 및 합계를 제외하고는 이름변경, 삭제, 추가 등 자유롭게 수정할 수
          있습니다. */}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center h-12">大分類</TableHead>
              <TableHead className="text-center h-12">小分類</TableHead>
              <TableHead className="text-center h-12">項目</TableHead>
              <TableHead className="text-center h-12">1月</TableHead>
              <TableHead className="text-center h-12">2月</TableHead>
              <TableHead className="text-center h-12">3月</TableHead>
              <TableHead className="text-center h-12">4月</TableHead>
              <TableHead className="text-center h-12">5月</TableHead>
              <TableHead className="text-center h-12">6月</TableHead>
              <TableHead className="text-center h-12">7月</TableHead>
              <TableHead className="text-center h-12">8月</TableHead>
              <TableHead className="text-center h-12">9月</TableHead>
              <TableHead className="text-center h-12">10月</TableHead>
              <TableHead className="text-center h-12">11月</TableHead>
              <TableHead className="text-center h-12">12月</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell
                className="text-center font-bold bg-stone-50 px-4"
                rowSpan={3}
              >
                流動資産
              </TableCell>
              <TableCell
                className="text-center font-semibold bg-stone-50 px-4"
                rowSpan={2}
              >
                不動産
              </TableCell>
              <TableCell className="text-center font-semibold bg-stone-50 p-4">
                アパート 1
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
              <TableCell className="text-right cursor-pointer hover:underline hover:text-sky-700 py-4">
                60,000,000
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-center font-semibold bg-stone-50 p-4">
                アパート 2
              </TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
              <TableCell className="text-right py-4">39,000,000</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-center font-bold bg-stone-50 p-4"
                colSpan={2}
              >
                小計
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold py-4">
                139,310,000
              </TableCell>
              <TableCell className="text-right bg-stone-50 font-semibold p-4">
                139,310,000
              </TableCell>
            </TableRow>

            {/* 2 */}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
