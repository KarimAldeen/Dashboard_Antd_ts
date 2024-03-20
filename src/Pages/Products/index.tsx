import { Table } from 'antd';
import { useColumns } from './useTableColumns';
import { PaginationOptions, useTableOnChange } from '../../Layout/Dashboard/PaginationOptions';
import { useGetDynamicWPagination } from '../../api/Route/useGetPagination';
import { useAddKeyToData } from '../../Hooks/useAddKeyToData';
import { ExpandedRow } from './ExpandedRow';




export {
    Table,
useColumns,
PaginationOptions,
useGetDynamicWPagination,
useAddKeyToData,
ExpandedRow,
useTableOnChange
}