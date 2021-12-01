import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#f6ba44" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="copyright" content="Penumbra Design" />

          <meta name="robots" content="index,follow" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* WEB APP */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
