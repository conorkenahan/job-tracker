import React from "react";
import styles from "./JobItem.module.scss";

type JobItemProps = {
  title: string;
  desc: string;
  url: string;
};

const JobItem: React.FC<JobItemProps> = ({ title, desc, url }) => {
  return (
    <div className={styles.jobItem}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{url}</p>
    </div>
  );
};

export default JobItem;
