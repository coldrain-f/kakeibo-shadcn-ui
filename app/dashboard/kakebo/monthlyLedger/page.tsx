import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MonthlyLedger() {
  return (
    <Card className="ml-4 mr-4">
      <CardHeader>
        <CardTitle className="text-3xl">01 January</CardTitle>
        <CardDescription className="text-md">01.01 ~ 01.31</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">수입</CardTitle>
              <CardDescription className="text-md">986,500円</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">저축</CardTitle>
              <CardDescription className="text-md">80,000円</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">지출</CardTitle>
              <CardDescription className="text-md">333,252円</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">저축률</CardTitle>
              <CardDescription className="text-md">65.6%</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
