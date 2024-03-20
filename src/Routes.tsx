import { lazy } from 'react';
import Page from './Pages/Home/Page';
import { TMenuItem } from './types/App';
import { MdBorderAll, MdCategory, MdDashboard, MdOpenInFull, MdProductionQuantityLimits } from 'react-icons/md';
import { BsAlignCenter } from 'react-icons/bs';
import Products from './Pages/Products/Page';
import CreateProduct from './Pages/Products/Create/Page';
import EditProduct from './Pages/Products/Edit/Page';


export const menuItems: TMenuItem[] = [

  { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'home', path: '/', title: "ADMIN" },
  {
     icon: <MdProductionQuantityLimits />,
    text: 'Product',
    dropdown: true,
    children: [
      { header: "Home Page", element: <Products />, icon: <MdDashboard />, text: 'Products', path: '/products/list' },
      { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'option2', path: '/products/option' },
    ],
  },
  { header: "Home Page", element: <Page />, icon: <MdCategory />, text: 'categories', path: '/categories' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  {
     element: <Page />, icon: <MdDashboard />,
    text: 'dashboard',
    dropdown: true,
    children: [
      { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'option1', path: '/dashboard/option1' },
      { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'option2', path: '/dashboard/option2' },
    ],
  },
  { header: "Home Page", element: <Page />, icon: <MdBorderAll />, text: 'orders', path: '/orders' },

  {
   icon: <MdOpenInFull />,
    text: 'option',
   
    dropdown: true,
    children: [
      { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'option1', path: '/dashboard/option1' },
      { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'option2', path: '/dashboard/option2' },
    ],
  },
  { header: "Home Page", element: <Page />, icon: <MdDashboard />, text: 'home', path: '/home', title: "USERS" },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
  { header: "Home Page", element: <Page />, icon: <BsAlignCenter />, text: 'banner', path: '/banner' },
];

export const CrudRoute =[
  { header: "CreateProduct", element: <CreateProduct />, path: '/products/create' },
  { header: "EditProduct", element: <EditProduct />, path: '/products/:id' },

]


export const AppRoutes: Record<string, string> = Object.fromEntries(
  menuItems.map((route) => [route.path, route.header ? route.header : route.text])
);

export const CrudRoutes: Record<string, string> = Object.fromEntries(
  CrudRoute.map((route) => [route.path, route.header  ])
);