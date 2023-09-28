import Navbar from '../navbar'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Sect1 = () => {
    const [renderer, setRenderer] = useState(1);

    const handleNextOpretion = () => {
        if (renderer < 4) {
            setRenderer(prev => prev + 1);
        } else {
            setRenderer(1);
        }
    }

    const handlePrevOpretion = () => {
        if (renderer > 1) {
            setRenderer(prev => prev - 1);
        } else {
            setRenderer(4);
        }
    }


    //Animation Variables
    const ParentVar = {
        init: {
            opacity: 0.9
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.14
            }
        }
    }

    const slideUp = {
        init: {
          y: "100%",
          opacity: 0.6
        },
        finale: {
          y: 0,
          opacity: 1,
            transition: {
                type: "spring",
              damping: 30,
              stiffness: 200
            }
        }
    }

    const swipeRight = {
        init: {
            x: "-100%",
            opacity: 0
          },
          finale: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200
            }
        }
    }
    const swipeLeft = {
        init: {
            x: "100%",
            opacity: 0
          },
          finale: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200
            }
        }
    }

    const parentvarexit = {
        init: {
            opacity: 0.55
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: 0.3,
                when: "beforeChildren",
            }
        }
    }  
    
    const slideupExit = {
        init: {
            y: "100%",
            opacity: 0.6
            },
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }


    const smallswipe = {
        init: {
            x: "-40%",
            opacity: 0
            },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }
    
    

    return (
        <motion.section initial="init" animate="finale" variants={ParentVar} className="sect1-search">
            <Navbar/>
            <div className="seearchCarousel">
            <svg style={{display: "none"}}>
                <defs>
                <filter id="noise">
                    <feTurbulence baseFrequency="0.09,0.117" numOctaves="1" seed="0" type="fractalNoise" result='static'>
                        <animate attributeName='seed' values='0;200' dur="2500ms" repeatCount="indefinite"/>
                        <animate attributeName='baseFrequency' values='0.09,0.117;0.0,0.0' dur="4000ms" repeatCount="indefinite"/>
                    </feTurbulence>
                    <feDisplacementMap in='SourceGraphic' in2="static" scale="20"/>
                </filter>
                </defs>
            </svg>
                    
                        {renderer === 1 && (
                                <motion.div variants={parentvarexit} initial="init" animate="finale"  className="apodUnit">
                                    <img src="/search_1.jpg" alt="apodsection image" />
                                    <div className="overlaySectUnit">
                                        <div style={{overflow: "hidden"}}>
                                            <motion.h1 variants={slideupExit}>Astronomy Picture of The Day</motion.h1>
                                        </div>
                                        <div style={{overflow: "hidden"}}>
                                            <motion.p variants={slideupExit}>Browse through all the past astronomy pictures of the day, just input the day date and get to view that day&apos;s A.P.O.D.</motion.p>
                                        </div>
                                        <motion.div variants={smallswipe} style={{width: "max-content"}}>
                                            <Link href={"/search/apod"}>Get Started</Link>
                                        </motion.div>
                                        <img src="/search_abs_bot.webp" alt="apodSection robot image" />
                                    </div>
                                </motion.div>

    
                        )}
                    
                        { renderer === 2 && (
                                <motion.div variants={parentvarexit} initial="init" animate="finale"  className="apodUnit imgVidLibrary">
                                    <img src="/search_archive.jpg" alt="apodsection image" />
                                    <div className="overlaySectUnit">
                                        <div style={{overflow: "hidden"}}>
                                            <motion.h1 variants={slideupExit}>Image, Video and Audio Library</motion.h1>
                                        </div>
                                        <div style={{overflow: "hidden"}}>
                                            <motion.p variants={slideupExit}>Browse through a vast data of images and videos from NASA&apos;s images and videos library. By passing a search query, you gain acces to all corresponding image/video data in the NASA image database.</motion.p>
                                        </div>
                                        <motion.div variants={smallswipe} style={{width: "max-content"}}>
                                            <Link href={"/search/image_video_library"}>Get Started</Link>
                                        </motion.div>
                                    </div>
                                </motion.div>

                        )}

                        { renderer === 3 && (
                            <motion.div variants={parentvarexit} initial="init" animate="finale"  className="apodUnit planetQuery">
                                <img src="/search_2.jpg" alt="apodsection image" />
                                <div className="overlaySectUnit">
                                    <div style={{overflow: "hidden"}}>
                                        <motion.h1 variants={slideupExit}>Planet Query</motion.h1>
                                    </div>
                                    <div style={{overflow: "hidden"}}>
                                        <motion.p variants={slideupExit}>Get little details including planet's mass, host star's mass, host star temperature e.t.c. about any planet you search for. Search can also be made with provided filter options/query parameters.</motion.p>
                                    </div>
                                    <motion.div variants={smallswipe} style={{width: "max-content"}}>
                                        <Link href={"/search/planet_query"}>Get Started</Link>
                                    </motion.div>
                                    <img src="/search_abs_look.webp" alt="apodSection lookout image" />
                                </div>
                            </motion.div>

                        )}

                        {renderer === 4 &&  (
                            <motion.div variants={parentvarexit} initial="init" animate="finale"  className="apodUnit starQuest">
                                <img src="/search_3.webp" alt="apodsection image" />
                                <div className="overlaySectUnit">
                                    <div style={{overflow: "hidden"}}>
                                        <motion.h1 variants={slideupExit}>Star Quest</motion.h1>
                                    </div>
                                    <div style={{overflow: "hidden"}}>
                                        <motion.p variants={slideupExit}>Similar to our &quot;Planet Query&quot; search option but only gets you data about stars and their constellation.</motion.p>
                                    </div>
                                    <motion.div variants={smallswipe} style={{width: "max-content"}}>
                                        <Link href={"/search/star_quest"}>Get Started</Link>
                                    </motion.div>
                                    <img src="/search_abs_stand.webp" alt="apodSection standing sci-fi image" />
                                </div>
                            </motion.div>
                        )}


                <motion.button variants={swipeLeft} type="button" className='right' onClick={handleNextOpretion}><i className="icofont-dotted-right"></i></motion.button>
                <motion.button variants={swipeRight} type="button" className='left' onClick={handlePrevOpretion}><i className="icofont-dotted-left"></i></motion.button>

                <div style={{gridTemplateColumns: `${renderer === 1 ? "2fr 1fr 1fr 1fr": renderer === 2 ? "1fr 2fr 1fr 1fr": renderer === 3 ? "1fr 1fr 2fr 1fr": renderer === 4 ? "1fr 1fr 1fr 2fr": ""}`}} className="navigator-monitor">
                    <span onClick={() => {setRenderer(1)}}></span>
                    <span onClick={() => {setRenderer(2)}}></span>
                    <span onClick={() => {setRenderer(3)}}></span>
                    <span onClick={() => {setRenderer(4)}}></span>
                </div>
            </div>
        </motion.section>
    )
}

export default Sect1
