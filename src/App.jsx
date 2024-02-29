import { useState } from 'react';
import './App.css';

// component
const HelloWorld = (props) => {
  // element
  return <p>hi {props.name}, hello world</p>;
};

function App() {
  const [count, setCount] = useState(0);

  // instance
  const helloWorldInstance1 = <HelloWorld name="Tom" />;
  const helloWorldInstance2 = <HelloWorld name="Jack" />;

  console.log('helloWorldInstance1:', helloWorldInstance1);
  console.log('helloWorldInstance2:', helloWorldInstance2);

  return (
    <>
      {/* element */}
      <HelloWorld name="Lucy" />

      {/* render instance */}
      {helloWorldInstance1}
      {helloWorldInstance2}

      {/* discouraged!!! */}
      {HelloWorld({ name: 'test' })}
    </>
  );
}

export default App;
