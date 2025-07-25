import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;