import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="halloween">
      <Head>
      <link rel={"stylesheet"} href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Mukta&wght@300;400display=swap" rel="stylesheet"></link>
      <link rel={"stylesheet"} href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
      </Head>
      <body>
        <Main />
        <div id="backdrop-root"/>
        <div id="overlay-root"/>
        <NextScript />
      </body>
    </Html>
  )
}
