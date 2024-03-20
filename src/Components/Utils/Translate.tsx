import React, { memo } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next'
const Translate: React.FC = () => {
  const { currentLanguage, changeLanguage } = useChangeLanguage();
  const { t } = useTranslation();

  const EnLanguage = memo(() => (
    <div className="MenuChange" onClick={EnLanguageClickHandler}>
       <img alt='' src='../Layout/En.svg' width={20} height={20} /> 
      {t('En')}
    </div>
  ));
  
  const ArLanguage = memo(() => (
    <div  className="MenuChange" onClick={ArLanguageClickHandler}>
      <img alt='' src='../Layout/Ar.svg' width={20} height={20} /> 
      {t('Ar')}
    </div>
  ));

  
  const EnLanguageClickHandler = React.useCallback(() => {
    changeLanguage('en');
  }, [changeLanguage]);
  
  const ArLanguageClickHandler = React.useCallback(() => {
    changeLanguage('ar');
  }, [changeLanguage]);
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <EnLanguage />,
    },
    {
      key: '2',
      label: <ArLanguage />,
    },
  ];

  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        <Button disabled>{currentLanguage === 'en' ? <EnLanguage /> : <ArLanguage />}</Button>
      </Dropdown>
    </Space>
  );
};

export default Translate;
