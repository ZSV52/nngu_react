import React from 'react';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <ul>
        {sidebarConfig.map((menuItem) => {
          return <li key={menuItem.id}>{menuItem.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
