import { Html, Head, Main, NextScript } from 'next/document';

import labels from '@shared/labels';
import { fontFamilyVariantsMapping } from '@shared/theme';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content={labels['pages._document.metaDescription']}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href={fontFamilyVariantsMapping.family.url} rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
