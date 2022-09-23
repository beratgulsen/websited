import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://cdn.discordapp.com/avatars/931685972733751337/4d7afb365c69106d7b674770012f432b.webp" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Moon Plus Bot: Kullanışlı Kayıt Ve Moderasyon Botu!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@MoonPlusBot" />
          <meta name="twitter:creator" content="@MoonPlusBot" />
          <meta property="og:url" content="https://moonplus.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Moon Plus" />
          <link
            rel="icon"
            href="https://cdn.discordapp.com/avatars/931685972733751337/4d7afb365c69106d7b674770012f432b.webp"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Moon Plus Bot: Kullanışlı Kayıt Ve Moderasyon Botu!"
          />
          <meta property="og:image" content="https://cdn.discordapp.com/avatars/931685972733751337/4d7afb365c69106d7b674770012f432b.webp" />
          <meta property="og:image:alt" content="Moon Plus Bot" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Moon Plus"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
