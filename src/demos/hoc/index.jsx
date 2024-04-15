/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { useEffect } from 'react';

// HOC is a function

const wrapComponent = (Component) => {
    return (props) => {
        useEffect(() => {
            console.log('Component mounted');
            return () => {
                console.log('Component unmounted');
            }
        }, [props]);

        if (!props.data) {
            return <div>Loading...</div>
        }

        return <Component {...props} />
    }
}

const dataWidget = ({ data }) => {
    return (
        <div>
            <h1>HOCDemo</h1>
            <p>{data}</p>
        </div>
    )
}

const HOCDemo = wrapComponent(dataWidget);

export default HOCDemo;