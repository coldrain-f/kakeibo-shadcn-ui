import Grid from "@/components/tables/Grid";
import Grid2 from "@/components/tables/Grid2";

import { data } from '@/app/data2';
import { data3 } from '@/app/data3';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function YearlyReport() {
  return <div>
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
        
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Grid 1 */}
          <div className="h-[362px] col-span-1">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mb-4">
              <span className="text-slate-700">변동 지출</span>
            </h2>
            <Grid data={data} />
          </div>

          {/* Grid 2 */}
          <div className="h-[500px] col-span-1">
            <div className="flex justify-between">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mb-4">
                <span className="text-slate-700">고정 지출</span>
              </h2>
              <Button variant={"outline"}>템플릿 불러오기</Button>
            </div>
            <Grid2 data={data3} />
          </div>

          {/* Grid 3 */}
          <div className="h-[362px]">
            <div className="flex justify-between">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 mb-4">
                <span className="text-slate-700">고정 지출</span>
              </h2>
              <Button variant={"outline"}>템플릿 불러오기</Button>
            </div>
            <Grid2 data={data3} />
          </div>
        </div>

        
        
      </CardContent>
    </Card>
     
  </div>;
}
