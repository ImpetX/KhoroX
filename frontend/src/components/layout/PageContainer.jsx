import React from 'react';
import PropTypes from 'prop-types';

import './styles/PageContainer';

const PageContainer = ({children}) => {
    return (
        <div className='container-fluid PageContainer'>
            {children}
        </div>
    );
};

PageContainer.propTypes = {
    children: PropTypes.element.isRequired
};

export default PageContainer;