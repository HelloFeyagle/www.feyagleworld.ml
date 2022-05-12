import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../../config';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="googlebot" content="index" />
            <meta name="googlebot-news" content="snippet" />
            <meta name="robots" content="follow" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@xrqulivee" />
            <meta name="twitter:creator" content="@xrqulivee" />
            <meta name="description" content={config.meta.description} />
            <meta name="theme-color" content={config.meta.themeColor} />
            <link rel="canonical" href={config.meta.url} />
            <meta name="publisher" content="2022, Xrqu" />
            <meta name="author" content="me@xrqu-live.tk" />
            <link rel="icon" href={config.meta.image} type="image/x-icon" /> 
            <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
