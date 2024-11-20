import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobRes = await axios.get('/api/companies/jobs');
        const appRes = await axios.get('/api/applications');
        const intRes = await axios.get('/api/interviews');
        setJobs(jobRes.data);
        setApplications(appRes.data);
        setInterviews(intRes.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>

      <section>
        <h2>Available Jobs</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>My Applications</h2>
        <ul>
          {applications.map((app) => (
            <li key={app._id}>
              <p>Job Title: {app.jobTitle}</p>
              <p>Status: {app.status}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>My Interviews</h2>
        <ul>
          {interviews.map((interview) => (
            <li key={interview._id}>
              <p>Job Title: {interview.jobTitle}</p>
              <p>Date: {new Date(interview.date).toLocaleString()}</p>
              <p>Mode: {interview.mode}</p>
              {interview.link && <p>Link: <a href={interview.link}>{interview.link}</a></p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentDashboard;
