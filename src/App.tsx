import React, { useState, useEffect } from "react";
import "./App.scss";
import JobItem from "./components/JobItem/JobItem";
import NewJob from "./components/NewJob/NewJob";

type Job = {
  title: string;
  url: string;
  company: string;
};

function App() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Save jobs to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job: Job) => {
    setJobs((prevJobs) => [job, ...prevJobs]);
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <NewJob onAddJob={addJob} />
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            <JobItem
              title={job.title}
              desc={job.company}
              url={job.url}
              onDelete={() => {
                setJobs((prev) => prev.filter((_, index) => index !== i));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
