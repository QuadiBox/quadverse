import {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PageNotFound = () => {
  const [millisec, setMilliSec] = useState(10);
  const [sec, setSec] = useState(20);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sec === 1) {
        router.push("/");
      } else if (sec === 0 || sec < 0) {
        setSec(0);
      }

      if (millisec > 0){
        setMilliSec(prev => prev - 1);
      } else if(millisec === 0) {
        setMilliSec(10);
        setSec(prev => prev - 1);
      } 

    }, 100);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [millisec]);

  return (
    <section className='pageNotfound'>
      <Head>
        <title>404 - Lost In Space | QuadVerse</title>
        <meta property="og:description" content="The page you searched for can not be found. Search for another page."/>
      </Head>
      <svg style={{display: "none"}}>
          <defs>
          <filter id="noise">
              <feTurbulence baseFrequency="0.0,0.0" seed="0" type='fractalNoise' result='static'>
                  <animate attributeName='seed' values='10;300' dur="5000ms" repeatCount="indefinite"/>
                  <animate attributeName='baseFrequency' values='0.0,0.0;0.8,0.77' dur="4000ms" repeatCount="indefinite"/>
              </feTurbulence>
              <feDisplacementMap in='SourceGraphic' in2="static" scale="20"/>
          </filter>
          </defs>
      </svg>
      <img className='bg_web' src="/404_bg.webp" alt="" />
      <div className="pnf_overlay">
        <div className="leftElems">
            <h1>404 <span> | </span> LOST IN SPACE</h1>
            <div className="chat1 arrowParent">
              <p className="nameHighligh left">TravelerX</p>
              <p className='spaceText'>HOUSTON, WE HAVE A PROBLEM!</p>
            </div>
            <div className="chat2">
              <p className="nameHighligh right">HOUSTON</p>
              <p className='spaceText'>We hear you TravelerX.</p>
            </div>
            <div className="chat2 arrowParentleft">
              <p className='spaceText2'>ETA is in - <span>{sec < 10 ? `0${sec}` : sec}</span><span className='blinker'>:</span><span>{millisec < 10 ? `0${millisec}` : millisec}</span></p>
            </div>
            <Link href={"/"} className='afterHover'>GO HOME</Link>
        </div>
        <span className='utilVL'></span>
        <div className="rightElems">
          <img src="/png_404_3.png" alt="astronaut" />
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
