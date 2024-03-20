import { ReactElement, LazyExoticComponent, ReactNode } from 'react';

  export type Tchildren = {
    children: ReactNode;
  };



  type TMenuItemBase = {
    icon: JSX.Element;
    text: string;
    children?: TMenuItem[];
    header?: string;
    title?: string;
    withOutLayout?: boolean;
  };
  
  type TMenuItemWithDropdown = TMenuItemBase & {
    dropdown: true;
    path?: string;
    element?: ReactElement | LazyExoticComponent<any>;

  };
  
  type TMenuItemWithoutDropdown = TMenuItemBase & {
    dropdown?: false;
    path: string;
    element: ReactElement | LazyExoticComponent<any>;

  };
  
 export type TMenuItem = TMenuItemWithDropdown | TMenuItemWithoutDropdown;
  

 export interface CardData {
  title: string;
  value: string;
  subTitle: string;
  percentage: number;
  Good?: boolean;
}