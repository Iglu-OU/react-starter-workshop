import React from 'react';
import './toggle.css';

const Toggle = (props) => {

    const onChange = (event) =>  {
        const checked = event.target.value;

        props.onChange(checked);
    };

    return (
        <label htmlFor={props.id} className="toggle">
            <input id={props.id} type="checkbox" checked={props.checked} onChange={onChange} />
            <span className="slider round" />
            {props.children}
        </label>
);
}

export default Toggle;
