import React, { useState } from "react";
import "./App.scss";
import JobItem from "./components/JobItem/JobItem";
import NewJob from "./components/NewJob/NewJob";

type Job = {
  title: string;
  url: string;
  company: string;
};

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleAddJob = (job: Job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <NewJob onAddJob={handleAddJob} />
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            <JobItem title={job.title} desc={job.company} url={job.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
