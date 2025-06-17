export const jobsCreatedByPromise = email =>{
    return fetch(`https://server-site-drab.vercel.app/jobs?email=${email}`).then(res => res.json())
}