import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="無限進步 | Promotion"
          />
          <meta property="og:site_name" content="gallery.felixchen.top" />
          <meta
            property="og:description"
            content="無限進步 | Promotion"
          />
          <meta property="og:title" content="Felix.Chen's Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Felix.Chen's Gallery" />
          <meta
            name="twitter:description"
            content="無限進步 | Promotion"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
