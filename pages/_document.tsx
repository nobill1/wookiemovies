import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>        
        <meta name="description" content="Movie library" />
        <link rel="icon" href="/favicon.svg" />
        <link href="https://api.fontshare.com/css?f[]=general-sans@201,300,400,700&display=swap" rel="stylesheet" />        
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