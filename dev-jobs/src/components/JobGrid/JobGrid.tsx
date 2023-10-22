import styles from "./JobGrid.module.scss";
import JobListing from "../../types/JobListing";
import FormState from "../../types/FormState";
import FormAction from "../../types/FormAction";
import JobCard from "../JobCard/JobCard";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

interface JobGridProps {
  jobListings: JobListing[];
  appliedFilter: FormState;
  filterDispatch: React.Dispatch<FormAction>;
}

function JobGrid({ jobListings, appliedFilter, filterDispatch }: JobGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.results}>Job Listings ({jobListings.length})</p>
        {appliedFilter.title && (
          <div className={styles.clear}>
            <img src="/images/desktop/icon-search.svg" alt="" />
            {appliedFilter.title}
            <button
              onClick={() => {
                filterDispatch({ type: "SET_TITLE", payload: "" });
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        )}
        {appliedFilter.location && (
          <div className={`${styles.clear} ${styles["clear--location"]}`}>
            <img src="/images/desktop/icon-location.svg" alt="" />
            {appliedFilter.location}
            <button
              onClick={() => {
                filterDispatch({ type: "SET_LOCATION", payload: "" });
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        )}

        {appliedFilter.fullTime && (
          <div className={`${styles.clear} `}>
            <img src="/images/desktop/icon-contract.svg" alt="" />
            Full Time
            <button
              onClick={() => {
                filterDispatch({ type: "SET_FULL_TIME", payload: false });
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>
      {jobListings.length > 0 ? (
        <div className={styles.grid}>
          {jobListings.map((job) => {
            return <JobCard key={job.id} jobListing={job} />;
          })}
        </div>
      ) : (
        <p className={styles.error}>Sorry, we couldn't find any job listings ☹️</p>
      )}
    </div>
  );
}

export default JobGrid;
