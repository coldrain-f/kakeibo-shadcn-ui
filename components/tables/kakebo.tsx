import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SubCategory {
  name: string;
  amount: number;
}

interface MainCategory {
  name: string;
  amount: number;
}

interface CategoryMap {
  [key: string]: SubCategory[];
}

const BudgetDashboard: React.FC = () => {
  const totalBudget = 9685000;
  const plannedBudget = 9300000;
  const progress = (plannedBudget / totalBudget) * 100;

  const mainCategories: MainCategory[] = [
    { name: "월급", amount: 7500000 },
    { name: "상여", amount: 1500000 },
    { name: "수당", amount: 0 },
    { name: "기타", amount: 300000 },
  ];

  const subCategories: CategoryMap = {
    월급: [
      { name: "남편월급", amount: 3500000 },
      { name: "아내월급", amount: 4000000 },
    ],
    상여: [
      { name: "남편상여", amount: 500000 },
      { name: "아내상여", amount: 1285000 },
    ],
    수당: [
      { name: "남편수당", amount: 0 },
      { name: "아내수당", amount: 0 },
    ],
    기타: [
      { name: "부수입", amount: 100000 },
      { name: "기타소득", amount: 0 },
    ],
  };

  const getTargetDiff = (categoryName: string): string => {
    switch (categoryName) {
      case "상여":
        return "▲285,000 (-19%)";
      case "기타":
        return "▲100,000 (+33%)";
      default:
        return "0 (0%)";
    }
  };

  const getFourthWeek = (categoryName: string): string => {
    return categoryName === "기타" ? "100,000" : "-";
  };

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="bg-purple-600 text-white p-4">
        <CardTitle className="flex justify-between items-center">
          <span>수입 {totalBudget.toLocaleString()}원</span>
          <span className="text-sm">
            수입 목표 {plannedBudget.toLocaleString()}원 대비
          </span>
        </CardTitle>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">
                  대분류
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  목표
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  소분류
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  월별
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  결과
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  목표대비
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium">
                  4주차
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {mainCategories.map((category) => (
                <React.Fragment key={category.name}>
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <td
                      className="p-4"
                      rowSpan={subCategories[category.name].length || 1}
                    >
                      {category.name}
                    </td>
                    <td
                      className="p-4"
                      rowSpan={subCategories[category.name].length || 1}
                    >
                      {category.amount.toLocaleString()}
                    </td>
                    {subCategories[category.name].map(
                      (subCategory, index) =>
                        index === 0 && (
                          <>
                            <td className="p-4">{subCategory.name}</td>
                            <td className="p-4">
                              {subCategory.amount.toLocaleString()}
                            </td>
                            <td className="p-4">
                              {category.amount.toLocaleString()}
                            </td>
                            <td className="p-4 text-purple-600">
                              {getTargetDiff(category.name)}
                            </td>
                            <td className="p-4">
                              {getFourthWeek(category.name)}
                            </td>
                          </>
                        )
                    )}
                  </tr>
                  {subCategories[category.name].slice(1).map((subCategory) => (
                    <tr
                      key={subCategory.name}
                      className="border-b transition-colors hover:bg-muted/50"
                    >
                      <td className="p-4">{subCategory.name}</td>
                      <td className="p-4">
                        {subCategory.amount.toLocaleString()}
                      </td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr className="font-bold border-t">
                <td className="p-4">총계</td>
                <td className="p-4">{plannedBudget.toLocaleString()}</td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-4">{totalBudget.toLocaleString()}</td>
                <td className="p-4 text-purple-600">▲385,000</td>
                <td className="p-4">100,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetDashboard;
