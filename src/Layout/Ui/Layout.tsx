import React from 'react'
import { usegetTitleFromRoute } from '../../Hooks/usegetTitleFromRoute'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const location = useLocation();
  
  return (

    <>
      <Helmet>
        <title>{usegetTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <div className='Layout'>
        <SideBar />
        <main className={`${className} Layout_Body`}>
          <NavBar />
          <div className='Layout_Children'>
          {children}
          </div>
        </main>
      </div>
    </>

  )
}

export default Layout