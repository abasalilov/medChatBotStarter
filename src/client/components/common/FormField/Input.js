import React from 'react';
import { RegularInputField } from './RegularInputField';
import { MobileInput } from './MobileInput';

export const Input = (props) =>
    props.mobile ? <MobileInput {...props} /> : <RegularInputField {...props} />;
