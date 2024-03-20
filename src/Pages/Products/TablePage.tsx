import { TProduct } from '../../types/Product';
import {useGetDynamicWPagination ,useAddKeyToData,useColumns ,Table,useTableOnChange,PaginationOptions,ExpandedRow}from './'



const App: React.FC = () => {
  
  const { data: dataWpagination, isLoading } = useGetDynamicWPagination("products","products");
  const dataSource = useAddKeyToData(dataWpagination?.data?.data); 
  const columns = useColumns();

  return (
    <Table<TProduct>
      columns={columns}
      dataSource={dataSource}
      onChange={useTableOnChange()}
      loading={isLoading}
      pagination={PaginationOptions(dataWpagination)}
      expandable={{ expandedRowRender: (record) => <ExpandedRow key={record.id}  record={record} />}}
    />
  );
}

export default App;
