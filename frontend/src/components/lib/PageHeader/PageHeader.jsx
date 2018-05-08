import React from 'react';
import PropTypes from 'prop-types';

import './styles/PageHeader';

const PageHeader = (props) => {
    return <h2 className='PageHeader'>{props.label}</h2>
};

PageHeader.propTypes = {
    label: PropTypes.string.isRequired
};

export default PageHeader;
