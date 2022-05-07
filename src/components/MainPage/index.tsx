import React from 'react';
import style from './MainPage.module.scss';

const MainPage = () => {
  const isTrue = false;
  const text1 = 'text1';
  const text2 = 'text2';

  return <div className={style.main_page}>{isTrue ? text1 : text2}</div>;
};

export default MainPage;
