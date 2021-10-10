import React from 'react';
import Button from 'elements/Button';
import propTypes from 'prop-types';

function Breadcrumb (props) {

    return(
        <nav className="breadcrumb">
            <ol className={className.join(" ")}>
                {props.data.map((item, index)=> {
                    return (
                        <li
                        key={`breadcrumb-${index}`}
                        className={`breadcrumb-item${
                            index === props.data.length - 1 ? "active" : ""
                        }`}
                        >
                            
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}