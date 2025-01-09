import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/kakebo/date-picker";

export default async function MonthlyLedger() {
  const data = await getData();

  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        transactionDate: "01/05(Thu)",
        mainCategory: "상여",
        subCategory: "아내상여",
        incomeDescription: "",
        amount: 1285000,
        note: "",
      },
      {
        id: "728ed52d",
        transactionDate: "01/05(Thu)",
        mainCategory: "상여",
        subCategory: "남편상여",
        incomeDescription: "",
        amount: 2485000,
        note: "",
      },
      // ...
    ];
  }

  return (
    <Card className="ml-4 mr-4">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            01 January
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
        <CardDescription className="text-md">01.01 ~ 01.31</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-12">
          {" "}
          <Card>
            <CardHeader>
              <CardTitle>수입</CardTitle>
              <CardDescription>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">
                  9,685,000원
                </h4>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>저축</CardTitle>
              <CardDescription>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">
                  800,000원
                </h4>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>지출</CardTitle>
              <CardDescription>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">
                  3,332,525원
                </h4>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>저축률</CardTitle>
              <CardDescription>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-white">
                  65.6%
                </h4>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between">
              <h4 className="text-2xl font-bold mb-4">수입</h4>
              <div className="flex justify-start gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">등록</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-4">수입 등록</DialogTitle>
                      <DialogDescription>
                        <div className="grid w-full items-center gap-3">
                          <Label htmlFor="e">날짜</Label>
                          <DatePicker />

                          <div className="flex justify-start gap-2">
                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor="b">대분류</Label>

                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="선택" />
                                </SelectTrigger>

                                <SelectContent>
                                  <SelectItem value="1">월급</SelectItem>
                                  <SelectItem value="2">상여</SelectItem>
                                  <SelectItem value="3">수당</SelectItem>
                                  <SelectItem value="4">기타</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="grid w-full items-center gap-2">
                              <Label htmlFor="c">소분류</Label>

                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="선택" />
                                </SelectTrigger>

                                <SelectContent>
                                  <SelectItem value="1">아내상여</SelectItem>
                                  <SelectItem value="2">남편상여</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <Label htmlFor="d">수입내역</Label>
                          <Input id="d" />

                          <Label htmlFor="f">금액</Label>
                          <Input id="f" type="number" />

                          <Label htmlFor="message-2">메모</Label>
                          <Textarea id="message-2" />
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="default">등록</Button>
                      <DialogClose asChild>
                        <Button variant="secondary">취소</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <DataTable columns={columns} data={data} />
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">수입 목표</h4>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
