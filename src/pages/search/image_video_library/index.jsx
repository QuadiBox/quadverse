import React, { useContext, useState, useEffect } from 'react';
import { handleToggles } from '../../../utilities/Randomizer';
import { themeContext } from '../../../../providers/ThemeProvider';
import TransitionPage from '../../../components/transitionPage';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Image_library_sect1 from '../../../components/search/image_library_sect1';
import Footer from '../../../components/footer';
import { motion } from 'framer-motion';
import Navbar from '../../../components/navbar';
import Head from 'next/head';

const Image_video_library = () => {
  const ctx = useContext(themeContext);
  const { setShowOtherPageLinks } = ctx;
  const [showExit, setShowExit] = useState(false);
  const router = useRouter();

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

  //animation variables
  const grandparentvar = {
    init: {
      opacity: 0.8,
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }


  return (
    <motion.div initial="init" animate="finale" variants={grandparentvar} className='imageVideoBasicPage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
      <Head>
          <title>Image & Video Library | QuadVerse</title>
          <meta property="og:title" content="Image & Video Library | QuadVerse"/>
          <meta property="og:description" content="Want to know what if feels like having access to the largest space archive database in the world?, search anything here and get to surf through NASA's image, video and audio archives."/>
      </Head>
      <Navbar/>
      <Image_library_sect1/>
      <Footer bg={"transparent"}/>

      <TransitionPage animateState={"initial"}/>
      <AnimatePresence mode='wait'>
          {!showExit && (
            <TransitionPage animateState={"exit"}/>
          )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Image_video_library
