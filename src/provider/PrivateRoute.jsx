import React from 'react';

const PrivateRoute = ({children}) => {
    return (
        <div>
            <h2>this is from privet</h2>
            {children}
            
        </div>
    );
};

export default PrivateRoute;