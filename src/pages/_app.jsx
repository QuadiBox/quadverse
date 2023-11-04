import '../styles/globals.css';
import '../styles/home.css';
import "../styles/search.css";
import "../styles/solarsystem.css";
import "../styles/playground.css";
import "../styles/glossary.css";
import "../styles/404.css";
import "../styles/about.css";
import Head from "next/head";
import { Alegreya } from "next/font/google";
import { useState, useRef, useEffect } from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import { AnimatePresence } from 'framer-motion';
import { themeContext } from '../../providers/ThemeProvider';
import { useRouter } from 'next/router';



const alegreya = Alegreya({ subsets: ['latin'] })
 
export default function App({ Component, pageProps }) {
  const [cursorValues, setCursorValues] = useState({
    x: 0,
    y: 0,
  });
  const [location, setlocation] = useState("");
  const router = useRouter();


  useEffect(() => {
    setlocation(window.location.pathname);
    console.log(window.location.pathname);
  }, [router.pathname]);


  const cursorRef = useRef(null);

  const handleCursorTrailer = (e) => {
    if (location !== "/about") {
      cursorRef.current.style.opacity = 1;
      setCursorValues({x: e.clientX, y: e.clientY});
      const x = e.clientX - cursorRef.current.offsetWidth/2;
      const y = e.clientY - cursorRef.current.offsetHeight/2;
  
      const keyframes = {
        transform: `translate(${x}px, ${y}px)`
      }
  
      cursorRef.current.animate(keyframes, {
        duration: 250,
        fill: "forwards"
      });
    }
  }

  const handleCursorOn = () => {
    if (location !== "/about") {
      cursorRef.current.style.opacity = 1;
    } else {
      cursorRef.current.style.opacity = 0;
    }
  }

  const handleCursorOff = () => {
    cursorRef.current.style.opacity = 0;
  }



  return (
    <ThemeProvider>
      <AnimatePresence mode='wait'>
        <main onMouseMove={handleCursorTrailer} onMouseEnter={handleCursorOn} onMouseLeave={handleCursorOff}>
          <Head>
            <title>QuadVerse</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color"/>
            <link rel="icon" href="/IconVerseLarge.png"/>
            <link rel="apple-touch-icon" href="/IconVerse.png"/>
            <link rel="stylesheet" href="/icofont/icofont.min.css"/>
            <meta property="og:title" content="QuadVerse"/>
            <meta property="og:description" content="A finely designed website for all space enthusiast and explorer to learn and find more about our solar system and the universe at large."/>
            <meta property="og:image" content="/IconVerse.png"/>
            <meta name="twitter:title" content="QuadVerse" />
            <meta name="twitter:card" content="/QuadVerse_Sc.jpg" />
            <meta name="twitter:description" content="A finely designed website for all space enthusiast and explorer to learn and find more about our solar system and the universe at large." />
            <meta name="twitter:image" content="/QuadVerse_sc2.png" />
          </Head>
          <div ref={cursorRef} className='cursorTrailer'></div>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  ) 
}
