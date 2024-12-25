import { ExamplePieChart } from "@/components/charts/pie-chart";
import { ExamplePieChart2 } from "@/components/charts/pie-chart2";
import { ExamplePieChart3 } from "@/components/charts/pie-chart3";
import { ExamplePieChart4 } from "@/components/charts/pie-chart4";
import { Table1 } from "@/components/tables/tables";

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
      <div className="grid auto-rows-min gap-4 md:grid-cols-4"></div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Table1 />
      </div>
    </div>
  );
}
