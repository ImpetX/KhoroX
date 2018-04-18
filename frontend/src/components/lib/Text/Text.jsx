import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles/Text';

const Text = (props) => {
    const {label,
        fontSize} = props;
    
    const classes  = classNames({
        'Text--12px': fontSize === '12',
        'Text--14px': fontSize === '14',
        'Text--16px': fontSize === '16',
    });
    return <span className={classes}>{label}</span>
};

Text.propTypes = {
    label: PropTypes.string,
    fontSize: PropTypes.oneOf(['12', '14', '16'])
};

Text.defaultProps = {
    label: '',
    fontSize: '16'
};

export default Text;