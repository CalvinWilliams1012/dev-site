import Head from "next/head";

const name = "Calvin Williams";
export const siteTitle = "Calvin Williams Dev";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fxaeberhard.github.io/handdrawn.css/handdrawn.css"/>
        <meta
          name="description"
          content="Calvin Williams - Software Engineer - Developer"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
          <h1>Calvin Williams</h1>
      </header>
      <main>{children}</main>
      <footer>{new Date().getFullYear()}</footer>
    </div>
  );
}
