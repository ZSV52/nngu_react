import React from 'react';
import style from './Item.module.scss';

const Item = () => {
  return (
    <div className={style.item_container}>
      <p>Ботинки</p>
      <p>Описание:</p>
      <p>Смотрите, какие потрясающие ботинки</p>
    </div>
  );
};

export default Item;
