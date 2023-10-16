import styles from "./JobListing.module.scss";
import { useParams } from "react-router-dom";
import JobListingT from "../../types/JobListing";
import { useEffect } from "react";

interface JobListingProps {
  getJobListingById: (id: number) => JobListingT | null;
}

function JobListing({ getJobListingById }: JobListingProps) {
  const { id } = useParams();
  const jobListing = getJobListingById(parseInt(id!));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (jobListing) {
    return (
      <section className={styles.listing}>
        <div className={styles.container}>
          <div className={styles.head}>
            <div className={styles.head__logo} style={{ backgroundColor: jobListing.logoBackground }}>
              <img src={jobListing.logo} alt={jobListing.company} />
            </div>
            <div className={styles.head__details}>
              <h1 className={styles.head__heading}>{jobListing.company}</h1>
              <p className={styles.head__url}>{jobListing.website.split("://")[1]}</p>
            </div>
            <a className={styles.head__cta} href="#">
              Company Site
            </a>
          </div>
          <div className={styles.main}>
            <div className={styles.main__head}>
              <div>
                <span className={styles.main__details}>
                  {jobListing.postedAt}
                  <span className={styles.main__dot}></span>
                  {jobListing.contract}
                </span>
                <h1 className={styles.main__position}>{jobListing.position}</h1>
                <p className={styles.main__location}>{jobListing.location}</p>
              </div>
              <a className={styles.main__apply} href="#">
                Apply Now
              </a>
            </div>
            <div className={styles.main__section}>
              <p className={styles.main__paragraph}>{jobListing.description}</p>
            </div>
            <div className={styles.main__section}>
              <h2 className={styles.main__heading}>Requirements</h2>
              <p className={styles.main__paragraph}>{jobListing.requirements.content}</p>
              <ul className={styles.main__list}>
                {jobListing.requirements.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className={styles.main__bullet}></span>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.main__section}>
              <h2 className={styles.main__heading}>What You Will Do</h2>
              <p className={styles.main__paragraph}>{jobListing.role.content}</p>
              <ul className={styles.main__list}>
                {jobListing.role.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className={styles.main__number}>{i + 1}</span>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.foot__inner}>
            <div className={styles.foot__details}>
              <h2 className={styles.foot__position}>{jobListing.position}</h2>
              <p className={styles.foot__company}>{jobListing.company}</p>
            </div>
            <a className={styles.foot__cta} href="#">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return <p className={styles.error}>We couldn't find that job listing 😔</p>;
  }
}

export default JobListing;
