import Document, { Head, Html, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Александр Кулагин" />
          <meta name="copyright" content="MyOcean" />
          <link rel="icon" href="/pupil/logo192.png" sizes="16x16" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}