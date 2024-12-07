import { AppSidebar } from "@/components/app-sidebar";
import { BarChart1 } from "@/components/charts/bar-chart";
import { ExamplePieChart } from "@/components/charts/pie-chart";
import { ExamplePieChart2 } from "@/components/charts/pie-chart2";
import { ExamplePieChart3 } from "@/components/charts/pie-chart3";
import { ExamplePieChart4 } from "@/components/charts/pie-chart4";
import { Table1 } from "@/components/tables/tables";
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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
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
          <div className="mr-5">
            <Select defaultValue="1">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>다국어</SelectLabel>
                  <SelectItem value="1">日本語</SelectItem>
                  <SelectItem value="2">한국어</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <ExamplePieChart />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <ExamplePieChart2 />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <ExamplePieChart3 />
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <ExamplePieChart4 />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart1 />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart1 />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart1 />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart1 />
            </div>
          </div>

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <Table1 />
          </div>

          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <BudgetDashboard />
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
