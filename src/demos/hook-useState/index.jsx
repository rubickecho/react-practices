import React, { useState } from 'react';

const initialState = () => {
    console.log('Initial state called...');
    return {
        name: 'John Doe',
        age: 25,
        likes: ['Reading', 'Swimming'],
        skills: ['React', 'Node', 'MongoDB']
    };
};

function MyComponent() {
    // 1. define a useState function state
    const [name, setName] = useState('John Doe');

    console.log('Component rendered...');

    // 2. define a useState function state
    const [userInfo, setUserInfo] = useState(() => initialState());

    return (
        <div>
            {/* Your component content here */}
            <h1>{name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setUserInfo({ ...userInfo, name })}>Change Name</button>
            <h2>Name: {userInfo.name}</h2>
            <h2>Age: {userInfo.age}</h2>
            <h3>Likes: {userInfo.likes.join(', ')}</h3>
            <h3>Skills: {userInfo.skills.join(', ')}</h3>
        </div>
    );
}

export default MyComponent;