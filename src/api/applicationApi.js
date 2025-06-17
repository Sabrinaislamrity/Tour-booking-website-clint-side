export const ApplicationsPromise = (email) => {
  return fetch(`https://server-site-drab.vercel.app/applications?email=${email}`).then(res => {
    if (!res.ok) throw new Error('Failed to fetch applications');
    return res.json();
  });
};
