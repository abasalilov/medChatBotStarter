import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable */

export const LinkButton = (props) => {
    const { className, to, label } = props;
    return (
        <div>
            <Link to={to}>
                <h4 className={className}>
                    <strong>{label}</strong>
                </h4>
            </Link>
        </div>
    );
};
