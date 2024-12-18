import { ExamplePieChart } from "@/components/charts/pie-chart";
import { ExamplePieChart2 } from "@/components/charts/pie-chart2";
import { ExamplePieChart3 } from "@/components/charts/pie-chart3";
import { ExamplePieChart4 } from "@/components/charts/pie-chart4";
import { Table1 } from "@/components/tables/tables";
// import { BarChart1 } from "@/components/charts/bar-chart";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AssetDashboard() {
  return (
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
        {/* <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">流動資産</TabsTrigger>
            <TabsTrigger value="password">유동자산</TabsTrigger>
            <TabsTrigger value="password2">부채</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="aspect-video rounded-xl bg-muted/50">
              <BarChart1 />
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs> */}
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Table1 />
      </div>

      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <BudgetDashboard />
          </div> */}
    </div>
  );
}
