import React from 'react';
import Header from '../Header';
import ItemsList from '../ItemsList';
import style from './MainPage.module.scss';

const MainPage = () => {
  // =============================================

  //   const isTrue = false;
  //   const text1 = 'text1';
  //   const text2 = 'text2';

  //   return <div className={style.main_page}>{isTrue ? text1 : text2}</div>;

  // =============================================

  return (
    <>
      <Header />
      <ItemsList />;
    </>
  );
};

export default MainPage;
