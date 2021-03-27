import Layout from "../components/layout";
import getSortedSectionData from "../lib/sections";
import Section from "../components/section";

export async function getStaticProps() {
  const allSectionsData = getSortedSectionData();
  return {
    props: {
      allSectionsData,
    },
  };
}

export default function Home({ allSectionsData }) {
  return (
    <Layout>
      {allSectionsData.map((key) => (
        <Section key={key.id} sectionData={key} />
      ))}
    </Layout>
  );
}
