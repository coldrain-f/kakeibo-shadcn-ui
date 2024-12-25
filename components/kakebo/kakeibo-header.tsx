"use client";

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/common/ModeToggle";

import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function KakeiboHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [locale, setLocale] = useState(params.locale as string);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">管理画面</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>資産の現況</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-start mr-5">
        <div className="flex">
          <a href="https://claude.ai/" target="_blank">
            <Button variant={"ghost"}>Claude</Button>
          </a>
          <Separator orientation="vertical" className="h-5 mt-2" />
          <a href="https://app.netlify.com/" target="_blank">
            <Button variant={"ghost"}>Netlify</Button>
          </a>
          <Separator orientation="vertical" className="h-5 mt-2" />
          <a href="https://ui.shadcn.com/" target="_blank">
            <Button variant={"ghost"}>Shadcn-UI</Button>
          </a>
          <Separator orientation="vertical" className="h-5 mt-2" />
          <a href="https://lucide.dev/icons/" target="_blank">
            <Button variant={"ghost"}>Lucide</Button>
          </a>
        </div>
        <div className="ms-10">
          <Select
            defaultValue={params.locale as string}
            value={locale}
            onValueChange={(newLocale) => {
              let href = pathname;

              // Todo:: 시스템 로케일을 전부 다 가져오는 방식으로 변경 필요
              const locales = ["/ja", "/kr"];
              for (let i = 0; i < locales.length; i++) {
                if (pathname.includes(locales[i])) {
                  href = pathname.split(locales[i]).join("");
                }
              }

              router.push(href, { locale: newLocale });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>다국어</SelectLabel>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="kr">한국어</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <ModeToggle />
      </div>
    </header>
  );
}
