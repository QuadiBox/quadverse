import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import { linksData } from '../../utilities/PathlinkData';
import Sect1 from '../../components/solarSystem/Sect1';
import Footer from '../../components/footer';
import MainSect from '../../components/solarSystem/MainSect';
import Link from 'next/link';
import ScrollButton from '../../components/ScrollButton';
import SearchBoxInterface from '../../components/SearchBoxInterface';
import Head from 'next/head';


const Home = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;
    const [ navOption, setNavOptions ] = useState("overview");
    const [ inview, setInview ] = useState(true);

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
        <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Head>
                <title>Solar System | QuadVerse</title>
                <meta property="og:title" content="Solar System | QuadVerse"/>
                <meta property="og:description" content="Do you know Planet Earth is one of the eight planet in our Solar System?. To know more about our Solar System, check this out."/>
            </Head>
            <Navbar/>
            <Sect1 data={data} setInview={setInview}/>
            <div className="navigationSelect">
                <div className="navOptionsCntn">
                    <p
                        onClick={() => {setNavOptions("overview")}}
                        className={navOption === "overview" ? 'activeNavOption' : ""}
                    >
                        Overview
                        {
                            navOption === "overview" && (
                                <motion.span layoutId="pointer" className="navMarker"></motion.span>
                            ) 
                        }
                    </p>
                    <p 
                        onClick={() => {setNavOptions("indepth")}}
                        className={navOption === "indepth" ? 'activeNavOption' : ""}
                    >
                        In Depth
                        {
                            navOption === "indepth" && (
                                <motion.span layoutId="pointer" className="navMarker"></motion.span>
                            ) 
                        }
                    </p>
                    <p 
                        onClick={() => {setNavOptions("summary")}}
                        className={navOption === "summary" ? 'activeNavOption' : ""}
                    >
                        Quick Jots
                        {
                            navOption === "summary" && (
                                <motion.span layoutId="pointer" className="navMarker"></motion.span>
                            ) 
                        }
                    </p>
                </div>
            </div>

            <MainSect data={data} navOption={navOption} factor={6}/>

            <div className="nextPrevSect">
                {
                    data?.prev && (
                        <Link href={data?.prev.value} className="nextPrev navPrev">
                            <p>Prev</p>
                            <h3>{data?.prev.key}</h3>
                        </Link>
                    )
                }
                {
                    data.next && (
                        <Link href={data?.next.value} className="nextPrev navNext">
                            <p>Next</p>
                            <h3>{data?.next.key}</h3>
                        </Link>
                    )
                }
            </div>

            <Footer bg={"transparent"}/>

            <AnimatePresence mode='wait'>
                {
                    navOption === "indepth" && !inview && (
                        <>
                            <SearchBoxInterface/>
                            <ScrollButton/>   
                        </>
                    )
                }
            </AnimatePresence>

            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                    <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Home

export async function getServerSideProps ( ) {
    const linksDat = linksData;

    return {
        props: {
            data: linksDat.solarsystem.solarsystem
        }
    }
}
