"use client";

import { DeleteIcon, Eraser, FilePenLineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
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

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/kakebo/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  transactionDate: string;
  mainCategory: string;
  subCategory: string;
  incomeDescription: string;
  amount: number;
  note: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transactionDate",
    header: "날짜",
  },
  {
    accessorKey: "mainCategory",
    header: "대분류",
  },
  {
    accessorKey: "subCategory",
    header: "소분류",
  },
  {
    accessorKey: "incomeDescription",
    header: "수입 내역",
  },
  {
    accessorKey: "amount",
    header: "금액",
  },
  {
    accessorKey: "note",
    header: "메모",
  },
  {
    id: "actions",
    cell: () => {
      return (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <FilePenLineIcon />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-4">수입 수정</DialogTitle>
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
                <Button variant="default">수정</Button>
                <DialogClose asChild>
                  <Button variant="secondary">취소</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon">
            <Eraser />
          </Button>
        </>
      );
    },
  },
];
