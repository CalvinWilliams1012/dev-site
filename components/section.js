import Link from "next/link";
import { useEffect, useState } from "react";

export default function Section({ sectionData }) {
  const [contentHidden, setHidden] = useState(true);

  return (
    <section
      onClick={() => setHidden(!contentHidden)}
      className="hd-border main-section"
    >
      <div>
        <div>
          <i
            className={
              contentHidden ? "icon-chevron-down icon" : "icon-chevron-up icon"
            }
          ></i>
          <h1>{sectionData.title}</h1>
        </div>
        {contentHidden === false ? (
          <>
            <div className="content-div">
              {sectionData.blurb ? <p>{sectionData.blurb}</p> : null}
              {/* mailto contact link */}
              {sectionData.email ? (
                <a href={"mailto:" + sectionData.email}>{sectionData.email}</a>
              ) : null}
              {/* link to my github */}
              {sectionData.github ? (
                <a href={sectionData.github}>See my GitHub</a>
              ) : null}
              {/* print out all my technologies*/}
              {sectionData.tech ? (
                <>
                  <h3>Tech</h3>
                  <h4>Proficient:</h4>
                  <ul className="cloud">
                    {sectionData.tech.proficient.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <h4>Familiarity</h4>
                  <ul className="cloud">
                    {sectionData.tech.familiarity.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {/* print job data conditionally, only supports 1 job
      need to change md and below section to use map for more than one*/}
              {sectionData.jobs ? (
                <>
                  <h3>Work</h3>
                  <h4>
                    {sectionData.jobs.company} - {sectionData.jobs.title}
                  </h4>
                  <span>
                    {sectionData.jobs.startDate} -{" "}
                    {sectionData.jobs.endDate
                      ? sectionData.jobs.endDate
                      : "current"}
                  </span>
                </>
              ) : null}
              {/* print education data conditionally, only supports 1 education
      need to change md and below section to use map for more than one*/}
              {sectionData.education ? (
                <>
                  <h3>Education</h3>
                  <h4>
                    {sectionData.education.school} -{" "}
                    {sectionData.education.title}
                  </h4>
                  <span>
                    {sectionData.education.startDate} -{" "}
                    {sectionData.education.endDate
                      ? sectionData.education.endDate
                      : "current"}
                  </span>
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
