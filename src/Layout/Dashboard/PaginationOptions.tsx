import { TableProps } from "antd";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const PaginationOptions = (dataWpagination: any) => {
  return useMemo(() => {
    if (!dataWpagination || !dataWpagination.data.pagination) return {};
    return {
      pageSize: dataWpagination?.data?.pagination.per_page,
      current: dataWpagination?.data?.pagination.current_page,
      total: dataWpagination?.data?.pagination.total_items,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ['4', '6', '10', '15', '20'],
      showTotal: (total: any, range: any) => `Showing ${range[0]}-${range[1]} of ${total} items`, // Added showTotal
    };
  }, [dataWpagination]);
};

export   const useTableOnChange = () => {
    const navigate = useNavigate();

    return (pagination: any, _filters: any, _sorter: any, _extra: any) => {
      if (pagination) {
        navigate(`?page=${pagination.current}&per_page=${pagination.pageSize}`, { replace: true });
      }
    };
  };