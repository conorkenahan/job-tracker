import React, { useState } from 'react';
import styles from './NewJob.module.scss';

type NewJobProps = {
  onAddJob: (job: { title: string; url: string; company: string }) => void;
};

const NewJob: React.FC<NewJobProps> = ({ onAddJob }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '' || url.trim() === '' || company.trim() === '') return;

    onAddJob({
      title: title.trim(),
      url: url.trim(),
      company: company.trim(),
    });

    setTitle('');
    setUrl('');
    setCompany('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className={styles.input}
        type="url"
        placeholder="Job URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Add Job
      </button>
    </form>
  );
};

export default NewJob;
