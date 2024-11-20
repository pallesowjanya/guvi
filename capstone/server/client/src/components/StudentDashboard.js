import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch student applications
    const fetchApplications = async () => {
      const res = await axios.get('/api/students/:studentId/applications');
      setApplications(res.data);
    };
    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>
      {applications.map(app => (
        <div key={app._id} className="bg-white p-4 mb-4 rounded shadow-md">
          <p>Status: {app.applicationStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
