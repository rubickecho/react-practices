import { useState } from 'react';
import './App.css';

// component
const ChildComponent = (props) => {
  let [count, setCount] = useState(props.defaultCount || 0);
  // element
  return (
    <div style={{ border: '1px solid red', padding: 8 }}>
      <p>
        hi {props.name}, count is {count}
      </p>
      <button onClick={() => setCount(count++)}>Click Me!</button>
    </div>
  );
};

function Discouraged() {
  let [visible, setVisible] = useState(true);

  // instance
  const childInstance1 = <ChildComponent name="Tom" defaultCount={1} />;
  const childInstance2 = <ChildComponent name="Jack" defaultCount={1} />;

  return (
    <>
      {childInstance1}
      {childInstance2}
      {/* discouraged!!! */}
      {ChildComponent({ name: 'test1', defaultCount: 1 })}
      {ChildComponent({ name: 'test2', defaultCount: 1 })}

      {visible ? ChildComponent({ name: 'test3', defaultCount: 1 }) : null}

      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hidden Test3' : 'Show Test3'}
      </button>
    </>
  );
}

export default Discouraged;
