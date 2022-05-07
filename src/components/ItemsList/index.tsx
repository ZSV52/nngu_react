import React from 'react';
import Item from '../Item';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  return (
    <div className={style.items_list}>
      <p>Список товаров</p>
      <div>
        <Item />
      </div>
    </div>
  );
};

export default ItemsList;
