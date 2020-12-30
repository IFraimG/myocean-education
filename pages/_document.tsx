import Document, { Head, Html, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/pupil/logo192.png" sizes="16x16" />
          <meta name="author" content="Александр Кулагин" />
          <meta name="copyright" content="MyOcean" />

          <meta property="og:locale" content="ru_RU"/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content="MyOcean Education"/>
          <meta property="og:description" content="Платформа для обучения IT-технологиям"/>
          <meta property="og:image" content="/pupil/logo192.png"/>
          <meta property="og:url" content="http://localhost:3000"/>
          <meta property="og:site_name" content="MyOcean Education"/>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="IFramex" />
          <meta name="twitter:title" content="MyOcean Education" />
          <meta name="twitter:description" content="Платформа для обучения IT-технологиям" />
          <meta name="twitter:image" content="/pupil/logo192.png" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}