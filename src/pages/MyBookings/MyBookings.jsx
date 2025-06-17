import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ApplicationsPromise } from '../../api/applicationApi';
import SendBook from '../SendBook/SendBook';

const MyBookings = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    ApplicationsPromise(user.email)
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <p className="text-center py-10">Loading bookings...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return <SendBook applications={applications} setApplications={setApplications} />;
};

export default MyBookings;
