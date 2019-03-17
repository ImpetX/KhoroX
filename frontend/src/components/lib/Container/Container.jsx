import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles/Container';

const Container = props => {
    const {maxWidth,
        align,
        children} = props;

    const classes = classNames({
        'Container--center': align === 'center',
    });

    return (
        <div className={classes}
            style={{maxWidth}}>
            {children}
        </div>
    );
};

Container.propTypes = {
    maxWidth: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center']),
    children: PropTypes.node.isRequired,
};

Container.defaultProps = {
    maxWidth: 'auto',
    align:  'left',
};

export default Container;
