// react base component

import React, { useEffect, useState } from 'react';

// component
const HelloWorld = () => {
    const [name, setName] = useState('React');
    console.log('component render');

    useEffect(() => {
        console.log('effect run');

        return () => {
            console.log('effect clean up');
        }
    }, [name]);

  // element
  return (
    <div>
        <p>hi {name}, hello world</p>
        <input onChange={(e) => setName(e.target.value)}></input>
    </div>
    );
};

export default HelloWorld;