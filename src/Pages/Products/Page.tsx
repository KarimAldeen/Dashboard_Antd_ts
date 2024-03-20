import React from 'react'
import SearchBar from '../../Components/Ui/SearchBar/SearchBar'
import { Button } from 'antd'
import { FaPlus } from "react-icons/fa";
import TablePage from './TablePage';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../Layout/Dashboard/PageHeader';

const Products = () => {

  return (
    <div className='Products'>
      <PageHeader />
      <TablePage />
    </div>
  )
}

export default Products