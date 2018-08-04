import React from 'react';

import './styles.css';

const Button = ({ children, loading }) => (
    <button className="button" disabled={loading}>
        {loading ? 'Loading...' : children}
    </button>
);

Button.defaultProps = {
    loading: false,
};

export default Button;
