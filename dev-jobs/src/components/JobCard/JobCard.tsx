import { Link } from "react-router-dom";
import styles from "./JobCard.module.scss";
import JobListing from "../../types/JobListing";

interface JobCardProps {
  jobListing: JobListing;
}

function JobCard({ jobListing }: JobCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__logo} style={{ backgroundColor: jobListing.logoBackground }}>
        <img src={jobListing.logo} alt={jobListing.company} />
      </div>
      <div className={styles.card__details}>
        <p>{jobListing.postedAt}</p>
        <span className={styles.card__dot}></span>
        <p>{jobListing.contract}</p>
      </div>
      <Link className={styles.card__heading} to={`/listing/${jobListing.id}`}>
        {jobListing.position}
      </Link>
      <p className={styles.card__company}>{jobListing.company}</p>
      <p className={styles.card__location}>{jobListing.location}</p>
    </div>
  );
}

export default JobCard;
