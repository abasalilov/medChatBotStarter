import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ style = {}, fill = '#000', className = '', viewBox = '0 0 25 25' }) => (
    <svg
        width={85}
        style={style}
        height={85}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ''}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            fill={fill}
            d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"
        />
    </svg>
);

export const Envelope = SVG;

SVG.propTypes = {
    fill: PropTypes.string,
    viewBox: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
