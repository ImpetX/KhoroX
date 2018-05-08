import React from 'react';
import {Input} from 'reactstrap';

import './styles/FormInput';

const FormInput = (props) => {
    return (
        <Input
            className='FormInput'
            {...props} />);
};

export default FormInput;
