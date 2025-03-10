'use client';


import { HotTable, HotColumn } from '@handsontable/react-wrapper';

import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import 'handsontable/styles/ht-theme-horizon.css';

import { Data } from '@/app/data2';

import { koKR } from 'handsontable/i18n';
import { registerAllModules } from 'handsontable/registry';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

registerAllModules();

type GridProps = {
  data: Data;
};


export default function VariableExpensesGrid(props: GridProps) {

  const [isGridRendered, setIsGridRendered] = useState(false);
  return (
    <div className="ht-theme-main w-full h-full">
      {!isGridRendered && <Skeleton className="w-full h-full" />}
      <HotTable
        className='z-0'
        afterRender={() => {
          setIsGridRendered(true);
        }}
        height={isGridRendered ? "100%" : "0%"}
        width="100%"
        language={koKR.languageCode}
        data={props.data}
        viewportRowRenderingOffset={10} // 스크롤 시 10개 행을 사전 렌더링
        autoRowSize={false}
        colWidths={[80, 150, 150, 150, 150]}        
        stretchH="all"
        nestedHeaders={[
          [{ label: "변동 지출", colspan: 5 }],
          [
            '일',
            '카테고리',
            '지불방법',
            '금액(KRW)',
            '메모'
          ]
          
        ]}
        columnSummary={[
          {sourceColumn: 3, type: "sum", destinationRow: 9, destinationColumn: 1},
        ]}
        fixedRowsBottom={1}
        comments={false}
        cells={function(row, col) {
          const lastRowIndex = this.instance.countRows() - 1;
          if (row === lastRowIndex) {
            this.readOnly = true;
            this.type = "numeric";
            if (col === 0) {
              this.className = "!bg-stone-100 !text-black htCenter";
            } else {
              this.className = "!bg-stone-100 !text-black";
            }
            this.numericFormat = {
              pattern: '0,0',
              culture: "ko-KR",
            }
          }
          return this;
        }}
        mergeCells={
          [{row: 9, col: 1, rowspan: 1, colspan: 4}]
        }
        dropdownMenu={false} 
        contextMenu={true}
        filters={false}
        rowHeaders={false}
        manualRowMove={false}
        navigableHeaders={false}
        autoWrapRow={false}
        autoWrapCol={false}
        imeFastEdit={false}
        licenseKey="non-commercial-and-evaluation"
      >
        <HotColumn data={0} type="numeric" />
        <HotColumn data={1} type="dropdown" source={["식비", "간식비", "교통 / 통신비", "의류", "미용", "문화", "교육", "데이트", "여행", "선물"]} />
        <HotColumn data={2} type="dropdown" source={["현금", "체크카드 A", "체크카드 B", "신용카드 A", "신용카드 B", "신용카드 C", "신용카드 D"]} />
        <HotColumn data={3} type="numeric" />
        <HotColumn data={4} />
      </HotTable>
    </div>
  );
}
