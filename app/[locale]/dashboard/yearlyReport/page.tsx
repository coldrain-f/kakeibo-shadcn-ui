import { data } from '@/app/data2';
import { data3 } from '@/app/data3';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import FixedExpensesGrid from "@/components/grid/FixedExpensesGrid";
import VariableExpensesGrid from "@/components/grid/VariableExpensesGrid";
import ExpenseGoalsGrid from '@/components/grid/ExpenseGoalsGrid';
import { Textarea } from '@/components/ui/textarea';

export default function YearlyReport() {
  return <div className="mb-4">
    <Card className="ml-4 mr-4 h-full">
      <CardHeader className="mr-4 mb-6">
        <CardTitle className="flex justify-between">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            <span className="text-slate-500 mr-2">01</span>
            <span className="text-slate-700">JANUARY</span>
          </h2>

          <div className="flex justify-start gap-2">
            <Select defaultValue="2024">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>년도</SelectLabel>
                  <SelectItem value="2023">2023년</SelectItem>
                  <SelectItem value="2024">2024년</SelectItem>
                  <SelectItem value="2025">2025년</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select defaultValue="1">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1월</SelectItem>
                <SelectItem value="2">2월</SelectItem>
                <SelectItem value="3">3월</SelectItem>
                <SelectItem value="4">4월</SelectItem>
                <SelectItem value="5">5월</SelectItem>
                <SelectItem value="6">6월</SelectItem>
                <SelectItem value="7">7월</SelectItem>
                <SelectItem value="8">8월</SelectItem>
                <SelectItem value="9">9월</SelectItem>
                <SelectItem value="10">10월</SelectItem>
                <SelectItem value="11">11월</SelectItem>
                <SelectItem value="12">12월</SelectItem>
              </SelectContent>
            </Select>
            <Button>이동</Button>
          </div>
        </CardTitle>
        <CardDescription>PLAN AND SUMMARY</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="account">지출 관리</TabsTrigger>
            <TabsTrigger value="account2">수입 관리</TabsTrigger>
          </TabsList>

          {/* <Separator className="mb-12" /> */}
          <TabsContent value="account">
            <div className="grid grid-cols-2 gap-4 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>메모장</CardTitle>
                  <CardDescription>
                    이번 달 특이사항이나 메모할 내용을 자유롭게 작성해주세요. <br />
                    (특이사항, 기억할 내용 등)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea className="mt-4 h-[100px]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>회고</CardTitle>
                  <CardDescription>
                    이번 달 재정을 되돌아보며 KPT로 작성해주세요. <br />
                    Keep: 잘한 소비/습관, Problem: 개선이 필요한 지출, Try: 다음 달
                    목표
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea className="mt-4 h-[100px]" />
                </CardContent>
            </Card>
          </div>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {/* 변동 지출 Grid */}
              <div className="h-[362px]">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mb-4">
                  <span className="text-slate-700">변동 지출</span>
                </h2>
                <VariableExpensesGrid data={data} />
              </div>
              
              {/* 고정 지출 Grid */}
              <div className="h-[362px]">
                <div className="flex justify-between">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mb-4">
                    <span className="text-slate-700">고정 지출</span>
                  </h2>
                  <Button variant={"outline"}>템플릿 불러오기</Button>
                </div>
                <FixedExpensesGrid data={data} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="account2"></TabsContent>
        </Tabs>
      </CardContent>
    </Card>
     
  </div>;
}
