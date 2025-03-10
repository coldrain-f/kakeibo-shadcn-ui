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


export default function ExpenseGoalsGrid(props: GridProps) {

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
        colWidths={[150, 150, 150, 150, 150]}        
        stretchH="all"
        nestedHeaders={[
          [{ label: "지출 목표", colspan: 4 }],
          [
            '카테고리',
            '목표',
            '지출금액(KRW)',
            '목표대비',
          ]
          
        ]}
        columnSummary={[
          {sourceColumn: 3, type: "sum", destinationRow: 10, destinationColumn: 1},
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
          [{row: 10, col: 1, rowspan: 1, colspan: 4}]
        }
        dropdownMenu={false} 
        contextMenu={false}
        filters={false}
        rowHeaders={false}
        manualRowMove={false}
        navigableHeaders={false}
        autoWrapRow={false}
        autoWrapCol={false}
        imeFastEdit={false}
        licenseKey="non-commercial-and-evaluation"
      >
        <HotColumn readOnly={true} data={0} type="dropdown" source={["식비", "간식비", "교통 / 통신비", "의류", "미용", "문화", "교육", "데이트", "여행", "선물"]} />
        <HotColumn data={1} type="numeric" />
        <HotColumn readOnly={true} data={2} type="numeric" />
        <HotColumn readOnly={true} data={3} />
      </HotTable>
    </div>
  );
}
