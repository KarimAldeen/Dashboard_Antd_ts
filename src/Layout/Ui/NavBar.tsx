import { Badge } from 'antd';
import React from 'react'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";
import Image from '../../Components/Ui/Image';
import { GiWorld } from "react-icons/gi";
import { usePageState } from '../../zustand/state';

const NavBar = () => {
  const { isOpenSideBar, setIsOpenSideBar } = usePageState();
  const handleBarsIconClick = () => {
    setIsOpenSideBar();
  };

  return (
    <div className='NavBar'>
      <div className="Left">
        {!isOpenSideBar &&
        <div  onClick={handleBarsIconClick}>
        <HiOutlineBars3BottomLeft />
        </div>
        }
        
        <div>
          <GiWorld/>
          <h5>Browse Website</h5>
        </div>
      </div>
      <div className="Right">
      <Badge dot size='small'>
      <TbBellRingingFilled />
    </Badge>
    
    <Image src='../App/ErrorUser.svg' className='UserImage' />


      </div>
    </div>
  )
}

export default NavBar