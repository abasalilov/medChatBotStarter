import React from 'react';
import PropTypes from 'prop-types';
import { RegLeftPanel } from './RegLeftPanel';
import { MobileLeftPanel } from './MobileLeftPanel';

const LeftPanelComponent = (props) => {
    const { mobile } = props;
    const panel = mobile ? <MobileLeftPanel {...props} /> : <RegLeftPanel {...props} />;
    return panel;
};

export const LeftPanel = LeftPanelComponent;

LeftPanelComponent.propTypes = {
    mobile: PropTypes.bool,
};
