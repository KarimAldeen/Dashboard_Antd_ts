import React from 'react'
import SearchBar from '../../Components/Ui/SearchBar/SearchBar'
import { Button } from 'antd'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const PageHeader = () => {
    const navigate = useNavigate()
    const handelCreate = () =>{
        navigate("/products/create")
      }
    return (
        <div className='PageHeader'>
            <h5 className='fw-bold'>Product List</h5>
            <div>
                <span>
                    {/* <SearchBar /> */}
                </span>
                <Button onClick={handelCreate} type="primary" icon={<FaPlus />} size={"large"}>
                    Add products
                </Button>
            </div>

        </div>)
}

export default PageHeader