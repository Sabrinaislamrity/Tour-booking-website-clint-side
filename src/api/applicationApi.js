export const ApplicationsPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`).then(res => {
    if (!res.ok) throw new Error('Failed to fetch applications');
    return res.json();
  });
};
