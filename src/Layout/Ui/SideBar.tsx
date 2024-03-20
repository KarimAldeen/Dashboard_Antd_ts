import React, { useState } from 'react';
import { MdArrowBackIos, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../Routes';
import Image from '../../Components/Ui/Image';
import { usePageState } from '../../zustand/state';
import useResponsive from '../../Hooks/useResponsive';

const SideBar: React.FC = () => {
  const [t] = useTranslation();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const { isOpenSideBar, setIsOpenSideBar } = usePageState();
  const handleBarsIconClick = () => {
    setIsOpenSideBar();
  };

  const {} = useResponsive({
    initialState: isOpenSideBar,
    setIs: setIsOpenSideBar,
    widthThreshold: 1000,
  });
  

  return (
    <div className={isOpenSideBar ? "SideBar" : "SideBar ClosedSideBar"}>
      <div className='SideBar_Header'>
        <Image src='../App/Logo.svg' className='Logo' />
        <div onClick={handleBarsIconClick}>
          <MdArrowBackIos />
        </div>
      </div>
      <div className='SideBar_Body'>
        <nav className='LinkGroup'>
          {menuItems.map((item, index) => (
            <div key={index} className={`LinkWrapper${openDropdown === index ? ' open' : ''}`}>
              {item.title && <h1>{t(item.title)}</h1>}
              <div
                className={`Link${location.pathname === item.path ? ' active' : ''} ${item.dropdown ? 'has-dropdown' : ''}`}
                onClick={() => (item.dropdown ? handleDropdownToggle(index) : null)}
              >
                {item.dropdown ? (
                  <>
                    {item.icon}
                    <Link
                      key={index}
                      to={item.path || ''}
                      className={`Link ${location.pathname === item.path ? ' active' : ''}`}
                    >
                      {t(item.text)}
                    </Link>
                    <div className='DropDownIcon'>
                      {openDropdown === index ? (
                        <MdOutlineKeyboardArrowRight />
                      ) : (
                        <MdOutlineKeyboardArrowDown />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {item.icon}
                    <Link
                      key={index}
                      to={item.path || '/'}
                      className={`Link ${location.pathname === item.path ? ' active' : ''}`}
                    >
                      {t(item.text)}
                    </Link>
                  </>
                )}
              </div>
              {item.dropdown && openDropdown === index && (
                <div className='DropdownContent'>
                  {item.children &&
                    item.children.map((childItem, childIndex) => {
                      
                      return(
                        <Link
                          key={childIndex}
                          to={childItem.path || '/'}
                          className={`Link DropDownLink ${location.pathname === childItem.path ? 'active' : ''}`}
                        >
                          {t(childItem.text)}
                        </Link>
                      )
                    })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
