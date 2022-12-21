import React from 'react';
import PropTypes from 'prop-types';

const DarkMode = ({isDark, count}) => {
    return (
        <div>
            {
                isDark ? "this is dark theme" : "this is light theme"
            }
            {count}
        </div>
    );
};

DarkMode.propTypes = {
    isDark: PropTypes.bool,
    count: PropTypes.number.isRequired
};

export default DarkMode;