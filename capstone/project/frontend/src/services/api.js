import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend's deployed URL
});

export const fetchJobs = () => API.get('/companies/jobs');
export const fetchApplications = () => API.get('/applications');
export const submitApplication = (data) => API.post('/applications/submit', data);
export const fetchInterviews = () => API.get('/interviews');
export const scheduleInterview = (data) => API.post('/interviews/schedule', data);

export default API;
