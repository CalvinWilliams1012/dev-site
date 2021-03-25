import Link from "next/link";

export default function Section({ sectionData }) {
  return (
    <section>
      <h1>{sectionData.title}</h1>
      {JSON.stringify(sectionData)}
      {sectionData.email ? (
        <a href={"mailto:" + sectionData.email}>{sectionData.email}</a>
      ) : null}
    </section>
  );
}
