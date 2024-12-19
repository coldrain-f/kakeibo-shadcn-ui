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
import { DataTable2 } from "./data-table2";

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
      // ...
    ];
  }

  return (
    <Card className="ml-4 mr-4">
      <CardHeader>
        <CardTitle className="text-3xl">01 January</CardTitle>
        <CardDescription className="text-md">01.01 ~ 01.31</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-2xl font-bold mb-4">수입</h4>
            <DataTable columns={columns} data={data} />
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">수입 목표</h4>
            <DataTable2 columns={columns} data={data} />
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
