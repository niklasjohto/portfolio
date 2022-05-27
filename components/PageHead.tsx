import Head from "next/head";

interface PageHeadProps {
  title?: string;
}

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <Head>
      <title>niklasjohto {title ? `/ ${title}` : null}</title>
      <meta
        name="description"
        content="A site about niklasjohto and his projects"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#252525" />
    </Head>
  );
};

export default PageHead;
