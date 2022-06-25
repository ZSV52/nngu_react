import React, { createContext, useMemo } from 'react';

const UseContext = () => {
    const myUsers = useMemo(
        () => [
        {
            id: 1,
            name: 'Vasya',
        },
        {
            id: 2,
            name: 'Petya',
        },
        {
            id: 3,
            name: 'Masha',
        },
    ],
    []
    );

    const UsersContext = createContext(myUsers)
  return (

  )
};

export default UseContext;
