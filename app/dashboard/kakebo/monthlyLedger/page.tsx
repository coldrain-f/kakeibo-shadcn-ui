import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MonthlyLedger() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const weeks = [
    ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7"],
    ["1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14"],
    ["1/15", "1/16", "1/17", "1/18", "1/19", "1/20", "1/21"],
    ["1/22", "1/23", "1/24", "1/25", "1/26", "1/27", "1/28"],
    ["1/29", "1/30", "1/31", "", "", "", ""],
  ];

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
        <div>
          <Card className="w-full max-w-4xl mt-4">
            <CardHeader className="bg-violet-400 rounded-t-lg">
              <div className="flex justify-between items-center text-white">
                <CardTitle className="text-center flex-grow">
                  무지출 달력
                </CardTitle>
                {/* <Badge variant="outline" className="bg-white text-violet-400">31일</Badge> */}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    {days.map((day, index) => (
                      <TableHead
                        key={day}
                        className={`text-center h-10 
                    ${index === 5 ? "text-blue-600" : ""}
                    ${index === 6 ? "text-red-600" : ""}`}
                      >
                        {day}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weeks.map((week, weekIndex) => (
                    <TableRow key={weekIndex}>
                      {week.map((date, dateIndex) => (
                        <TableCell
                          key={`${weekIndex}-${dateIndex}`}
                          className={`text-center h-16 align-top pt-2
                      ${dateIndex === 5 ? "text-blue-600" : ""}
                      ${dateIndex === 6 ? "text-red-600" : ""}`}
                        >
                          {date && (
                            <>
                              <div>{date}</div>
                              <div className="text-sm text-gray-500">
                                무지출
                              </div>
                            </>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
