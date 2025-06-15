import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyPostedTourList from '../MyPostedTourList/MyPostedTourList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const ManagePackeges = () => {
    const {user} = useAuth();
    return (
        <div>
          
            <Suspense>
                <MyPostedTourList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}>

                </MyPostedTourList>
            </Suspense>
        </div>
    );
};

export default ManagePackeges;