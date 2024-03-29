import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang='en'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="theme-color"/>
        <link rel="icon" href="/IconVerseLarge.png"/>
        <link rel="apple-touch-icon" href="/IconVerse.png"/>
        <link rel="stylesheet" href="/icofont/icofont.min.css"/>
        <meta property="og:title" content="QuadVerse"/>
        <meta property="og:description" content="A finely designed website for all space enthusiast and explorer to learn and find more about our solar system and the universe at large. It is a personal project."/>
        <meta property="og:image" content="/IconVerse.png"/>
        <meta name="twitter:title" content="QuadVerse" />
        <meta name="twitter:card" content="/QuadVerse_Sc.jpg" />
        <meta name="twitter:description" content="A finely designed website for all space enthusiast and explorer to learn and find more about our solar system and the universe at large." />
        <meta name="twitter:image" content="/QuadVerse_sc2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Handjet:wght@200;300;400;500;600;700;800;900&family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;0,700;1,500;1,600&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Metrophobic&family=Unica+One&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}