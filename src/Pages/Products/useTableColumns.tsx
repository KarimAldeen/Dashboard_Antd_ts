import { Popconfirm, Space, TableColumnsType, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import ColumnsSwitch from "../../Components/Columns/ColumnsSwitch";
import { usePostDynamic } from "../../api/Route/Post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteDynamic } from "../../api/Route/Delete";
import { Table } from 'antd';

export const useColumns = () => {
  const [value, setvalue] = useState('')
  const { mutate } = useDeleteDynamic("products", `products`);
  const { mutate: mutateStatus } = usePostDynamic("products", `products/status`);
  const navigete = useNavigate()

  const columns: TableColumnsType<any> = [
    Table.EXPAND_COLUMN,
    {
      title: "Name",
      dataIndex: 'Name',
      key: "Name",
      render: (text, record) => {
        return (
          <div className="ImageWname ">
            <ColumnsImage src={record?.image} />
            <span className="maxWidth150">
              {record?.name}
              <strong>
                # {record?.id}
              </strong>
            </span>
          </div>
        )
      }
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: "price",
      sorter: (a, b) =>{
        return  a.price - b.price
      }
    },
    {
      title: 'categories',
      dataIndex: ['categories', 'name'],
      key: "categories",
      filters: [
        {
          text: 'categories1',
          value: 'categories1',
        },
        {
          text: 'categories2',
          value: 'categories2',
        },
      ],
      onFilter: (value: any, record) => record?.categories?.name?.startsWith(value),
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: "description",
      className:"maxWidth200",
      
    },
    {
      title: "is_published",
      dataIndex: 'is_published',
      key: "is_published",
      sorter: (a, b) => a.is_published - b.is_published,
      render: (text, record: any) => {
        const handleChange = () => {
          mutateStatus({ id: record.id, is_published: !record?.is_published ? 1 : 0 });
        };

        return (
          <ColumnsSwitch onChange={() => handleChange()} Null Checked={(record?.is_published === 1) ? true : false
          } />
        )
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => {


        const handleEdit = (record: any) => {
          console.log('Edit action for record:', record);
          navigete(`/products/${record?.id}`)
        };

        const handleDelete = (record: any) => {
          console.log('Delete action for record:', record);

        };
        const confirm = (e: any) => {
          console.log(e);
          mutate({ id: record?.id })


        };

        const cancel = (e: any) => {
          console.log(e);
          message.error('Delete Canceled');
        };

        return (
          <Space size="middle">
            <EditOutlined style={{ color: '#1890ff' }} onClick={() => handleEdit(record)} />
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined style={{ color: '#ff4d4f' }} />
            </Popconfirm>
          </Space>
        )
      },
    },
  ];

  return columns;
};
