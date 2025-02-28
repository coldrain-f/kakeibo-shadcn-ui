'use client';


import { HotTable, HotColumn } from '@handsontable/react-wrapper';

import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import 'handsontable/styles/ht-theme-horizon.css';

import { Data3 } from '@/app/data3';

import { registerLanguageDictionary, koKR } from 'handsontable/i18n';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();
registerLanguageDictionary(koKR);


type GridProps = {
  data: Data3;
};

export default function Grid(props: GridProps) {
  return (
    <div className="ht-theme-main w-full h-full">
      <HotTable
        height="100%"
        width="100%"
        stretchH="all"
        language={koKR.languageCode}
        data={props.data}
        colWidths={[80, 150, 150, 150]}
        nestedHeaders={[
          [{ label: "고정 지출", colspan: 4 }],
          [
            '일',
            '지불방법',
            '금액(KRW)',
            '메모'
          ]
          
        ]}
        columnSummary={[
          {sourceColumn: 2, type: "sum", destinationRow: 9, destinationColumn: 1},
        ]}
        // fixedRowsBottom={11}
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
          [{row: 9, col: 1, rowspan: 1, colspan: 3}]
        }
        dropdownMenu={true} 
        contextMenu={true}
        filters={true}
        rowHeaders={true}
        manualRowMove={true}
        navigableHeaders={true}
        autoWrapRow={true}
        autoWrapCol={true}
        imeFastEdit={true}
        licenseKey="non-commercial-and-evaluation"
      >
        <HotColumn data={0} />
        <HotColumn data={1} type="dropdown" source={["현금", "체크카드 A", "체크카드 B", "신용카드 A", "신용카드 B", "신용카드 C", "신용카드 D"]} />
        <HotColumn data={2} type="numeric" />
        <HotColumn data={3} />
      </HotTable>
    </div>
  );
}
