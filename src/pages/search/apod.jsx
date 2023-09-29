import React, { useContext, useState, useEffect } from 'react';
import { handleToggles } from '../../utilities/Randomizer';
import { themeContext } from '../../../providers/ThemeProvider';
import TransitionPage from '../../components/transitionPage';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Sect1 from '../../components/search/A_P_O_D';
import Apod_Sect2 from '../../components/search/Apod_Sect2';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import Head from 'next/head';



const Apod = () => {
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks, setShowImageViewer, setActiveImageViwerData, showImageViewer, activeImageViewerData } = ctx;
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const [apodDisplay, setApodDisplay] = useState({});
    const [ LSData , setLSData ] = useState([]);



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

    const parentVarSpec = {
        init: {
            y: "10%",
            opacity: 0.75
        }, 
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.25,
            }
        },
        exit: {
            y: "30%",
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 0.3,
            }
        },
    }

    const scaleUpSpec = {
        init: {
            scale: 0.9,
            opacity: 0.85
        }, 
        finale: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.25,
            }
        },
        exit: {
            scale: "30%",
            opacity: 0.5,
            transition: {
                ease: "easeOut",
                duration: 0.1,
            }
        },
    }
    const swipeSpec = {
        init: {
            x: 10,
            opacity: 0
        }, 
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            }
        },
        exit: {
            x: 10,
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 0.1,
            }
        },
    }

    


    return (
        <motion.div initial="init" animate="finale" variants={grandparentvar} className='apodBasicPage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Head>
                <title>Astronomy Picture of The Day | QuadVerse</title>
                <meta property="og:title" content="Astronomy Picture of The Day | QuadVerse"/>
                <meta property="og:description" content="You like HD space-themed pictures, check this out!!!. "/>
            </Head>
            <Navbar/>
            <Sect1 apodDisplay={apodDisplay} setApodDisplay={setApodDisplay} LSData={LSData} setLSData={setLSData} setShowImageViewer={setShowImageViewer} setActiveImageViwerData={setActiveImageViwerData} />
            <Apod_Sect2 apodDisplay={apodDisplay} setApodDisplay={setApodDisplay} LSData={LSData} setLSData={setLSData}/>
            <Footer bg={"transparent"}/>
            <AnimatePresence mode='wait'>
                {
                    showImageViewer && (
                        <motion.div initial="init" animate="finale" exit="exit" variants={parentVarSpec} className="imageViewer">
                            <motion.div variants={scaleUpSpec} className="largeImageDisplayer" style={{backgroundImage: `url(${activeImageViewerData.content ? activeImageViewerData.content : activeImageViewerData?.hdurl || activeImageViewerData?.url})`}}>
                                {/* <img src={activeImageViewerData.content} alt={activeImageViewerData.content.replace("/.jpg|.webp|.gif|.jpeg/gi", "")} /> */}
                            </motion.div>
                            <div className="largeImageDescription">
                                <div className='textCntn'>
                                    <h3>Description :</h3>
                                    <p>{activeImageViewerData.content_description ? activeImageViewerData.content_description : activeImageViewerData?.explanation}</p>
                                </div>
                            </div>

                            <motion.button variants={swipeSpec} type='button' className="closeBtnImgViewwer" onClick={() => {setShowImageViewer(prev => !prev)}}><i className="icofont-close-squared-alt"></i></motion.button>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Apod
