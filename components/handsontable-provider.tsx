'use client';

import { useEffect } from 'react';

import { registerLanguageDictionary, koKR } from 'handsontable/i18n';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';
import 'handsontable/styles/ht-theme-horizon.css';


// 명시적으로 셀 타입들 가져오기
import { registerCellType } from 'handsontable/cellTypes';
import { TextCellType } from 'handsontable/cellTypes/textType';
import { NumericCellType } from 'handsontable/cellTypes/numericType';
import { DropdownCellType } from 'handsontable/cellTypes/dropdownType';
import { DateCellType } from 'handsontable/cellTypes/dateType';
import { CheckboxCellType } from 'handsontable/cellTypes/checkboxType';

// 명시적으로 플러그인들 가져오기
import { registerPlugin } from 'handsontable/plugins';
import { ContextMenu } from 'handsontable/plugins/contextMenu';
import { DropdownMenu } from 'handsontable/plugins/dropdownMenu';
import { Filters } from 'handsontable/plugins/filters';
import { ColumnSummary } from 'handsontable/plugins/columnSummary';
import { NestedHeaders } from 'handsontable/plugins/nestedHeaders';
import { ManualRowMove } from 'handsontable/plugins/manualRowMove';

// 클라이언트 컴포넌트로 Handsontable 초기화를 담당
export default function HandsontableProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useEffect(() => {
    registerAllModules();
    registerLanguageDictionary(koKR);

    // 셀 타입 명시적 등록
    registerCellType(TextCellType);
    registerCellType(NumericCellType);
    registerCellType(DropdownCellType);
    registerCellType(DateCellType);
    registerCellType(CheckboxCellType);
    
    // 플러그인 명시적 등록
    registerPlugin(ContextMenu);
    registerPlugin(DropdownMenu);
    registerPlugin(Filters);
    registerPlugin(ColumnSummary);
    registerPlugin(NestedHeaders);
    registerPlugin(ManualRowMove);
  }, []);

  return <>{children}</>;
}