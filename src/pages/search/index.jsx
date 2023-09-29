import React, { useState, useEffect, useContext } from 'react'
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Sect1 from '../../components/search/Sect1';
import Head from 'next/head';

const Index = () => {
  const [showExit, setShowExit] = useState(false);
  const router = useRouter();
  const ctx = useContext(themeContext);
  const { setShowOtherPageLinks } = ctx;

  useEffect(() => {
    const handleBeforeRouteChange = (url) => {
      // Do something before the route changes
      setShowExit(true);
    };

    // Subscribe to the router's "beforeHistoryChange" event
    router.events.on('beforeHistoryChange', handleBeforeRouteChange);

    // Unsubscribe from the event when the component is unmounted
    return () => {
      router.events.off('beforeHistoryChange', handleBeforeRouteChange);
    };
  }, [router.events]);

  return (
    <div className='searchsBasicPage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
      <Head>
        <title>Search | QuadVerse</title>
        <meta property="og:title" content="Search | QuadVerse"/>
        <meta property="og:description" content="Check out all four amazing search realated pages and features on Quadverse - the best space-education website. "/>
      </Head>
      <Sect1/>
      <TransitionPage animateState={"initial"}/>
      <AnimatePresence mode='wait'>
        {!showExit && (
          <TransitionPage animateState={"exit"}/>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Index
