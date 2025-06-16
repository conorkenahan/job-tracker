import React from "react";
import styles from "./JobItem.module.scss";

type JobItemProps = {
  title: string;
  desc: string;
  url: string;
  onDelete: () => void; // 👈 New prop
};

const JobItem: React.FC<JobItemProps> = ({ title, desc, url, onDelete }) => {
  return (
    <div className={styles.jobItem}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{url}</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default JobItem;
