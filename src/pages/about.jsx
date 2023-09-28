import { useState, useEffect, useContext } from 'react';
import TransitionPage from '../components/transitionPage';
import { handleToggles } from '../utilities/Randomizer';
import { AnimatePresence, motion } from 'framer-motion';
import { themeContext } from '../../providers/ThemeProvider';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Link from 'next/link';
import Earth from '../components/globe';

const About = () => {
    const router = useRouter();
    const [showExit, setShowExit] = useState(false);
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks, setCursorTrailerMonitor } = ctx;

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

    useEffect(() => {
        setCursorTrailerMonitor(prev => !prev);
    }, []);

    //Animation Variables 
  const parentVar = {
    init: {
      opacity: 0.9
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.05,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  }

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%"
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 200,
      }
    }
  }

  return (
    <main className='solarsystemHomePage about' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
        <Navbar></Navbar>
      <motion.section initial="init" animate="finale" variants={parentVar} className={`solarSystem-Sect1`} style={{backgroundImage: `linear-gradient( 150deg, #130711e6, #130711b2, #1307115d), linear-gradient( to bottom, transparent, 80%,#241822ea), url(/about_bg.jpg)`}}>
          <div className="heroSect-1">
              <div className="details">
                <div style={{overflow: "hidden"}}>
                  <motion.h1 variants={slideUp}>About QuadVerse</motion.h1>
                </div>
              </div>

              <div className="valueByNumber">
                  <div className="unitVBN">
                    <p>Unus</p>
                    <div style={{overflow: "hidden"}}>
                      <motion.h3 variants={slideUp}>Educative</motion.h3>
                    </div>
                  </div>
                  <div className="unitVBN">
                      <p>Duo</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Immersive</motion.h3>
                      </div>
                  </div>
                  <div className="unitVBN">
                      <p>Tribus</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Narrative</motion.h3>
                      </div>
                  </div>
                  <div className="unitVBN">
                      <p>Quattuor</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Interactive</motion.h3>
                      </div>
                  </div>
              </div>
          </div>
      </motion.section>
      <section className='mainAboutSect'>
        <article className="firstAboutDiv">
            <p className='firstText'>QuadVerse is a space-education website dedicated to everything space-related. It provides articles on space news, detailed information on the solar system, planets, moons, dwarf planets, comets, asteroids, and beyond. Users can also explore the Solar System and exoplanets through a 3D interface powered by NASA&apos;s Eyes on the Solar System and Eyes on Exoplanets amongst many other 3d visulaization softwares, making for an engaging and educational experience.</p>

            <p>Quadverse is well-crafted to increase users&apos; passion and curiosity for;of space as well as their make the learning whilst making for a quite pleasing interfaces to make tge learning and exploration processes interesting and enjoyable.</p>

            <p>This digital playground is built to concentrate all the space-education features scattered all over different digital platforms ranging from space <Link href={"/solarsystem"}>topics</Link>;<Link href={"/articles"}>articles</Link>, <Link href={"/playground"}>3d visualizations softwares</Link>, a <Link href={"/glossary"}> glossary</Link>, a space event calendar ( <span>upcoming</span> ), a vast list of firsts, extremes, highs and lows of space events, phenomemnons and bodies ( <span>upcoming</span> ), an <Link href={"/search/apod"}>exciting daily astronomy picture;video</Link>, a <Link href={"/search/image_video_library"}>vast catalog of space;image;audio of space missions;bodies;events;e.t.c.</Link> from <a href="https://images.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA</a> archive amongst others into one well-designed compact digital space.</p>

            <p>In conclusion, QuadVerse is eminently built to quantify us as human in our beloved planet we all call home amongst the unquantifyable depth and reach of the universe. Quantification of astronomical time and distance also shows how much limited human comprehension is in comparison to the absolute physics that governs the mind-bending mechanics of our grand universe.</p>

            <p>So let&apos;s appreciate what we&apos;ve got here on Earth while we look up and explore into the depth of the skies and learn more about things the ones before us never got to know. For the beauty of knowledge can never over-quantified.</p>
        </article>

        <article className='secondAboutDiv'>
            <h2>About The Author</h2>

            <div className="flexsection">
                <div className="rightflexsect">
                    <p>QuadVerse is proudly built by a guy named Quadri, a passionate Frontend Web Developer with 1year+ programming experience in creating unique, well-crafted software masterpieces that solves specific problems. His skills in coding, design-thinking and problem solving have been honed over months of programming repititions, allowing him to create stunning, performant, optimized and valuable digital softwares. He&apos;s also an undergraduate studying Physiology in the University of Ibadan, Ibadan, Nigeria.</p>

                    <p><span>PS:</span> He needs a Frontend development job or an internship perhaps...</p>
                    <div className="contactList">
                        <p><i className="icofont-email"></i>:  oladojaabdquadridamilola@gmail.com</p>
                        <p><i className="icofont-phone"></i>:  +234-90-6369-9656</p>
                        <a href="https://twitter.com/Quadvox" target="_blank"><i class="icofont-twitter"></i></a>
                    </div>
                </div>
                <Earth></Earth>
            </div>
            
        </article>

        <article className="thirdAboutDiv">
            <h2>Attributions and References</h2>

            <p>Big thanks to the makers of amazing third-party APIs that made the completion this wonderful project come to be - NASA mmultiple APIs, <a href="https://en.wikipedia.org/wiki/Solar_System" target="_blank" rel="noopener noreferrer"></a> Wikipedia and <a href="https://api-ninjas.com/api" target="_blank" rel="noopener noreferrer">Api Ninja</a>. As a beginner in programming looking to broaden my knowledge of the beautiful craft, your APIs were and their documentations were very simple to understand and use.</p>

            <p>The API used for the APOD part of this project was gotten from a <a href="https://github.com/nasa/apod-api" target="_blank" rel="noopener noreferrer">NASA APOD API</a>. The Planet Query and Star quest pages were built around API Ninjas' <a href="https://api-ninjas.com/api/planets" target="_blank" rel="noopener noreferrer">planets</a> and <a href="https://api-ninjas.com/api/stars" target="_blank" rel="noopener noreferrer">stars</a> APIs.</p>

            <p>All texts from the 264 reading pages (Overview - excluding the facts sections; and Indepth) from Solar System to Cassini-Huygens were all copied from corresponding NASA and/or Wikipedia topic pages (I understand the concept of plagiarism in these sense but I&apos;ll never claim those well-crafted wordings were of my own. I will work to get them all replaced by wordings drafted by my own hands later but for now I hope I can work with that without extreme backlashes). Images and videos throughout the entirety of this project were gotten from <a href="https://solarsystem.nasa.gov/resources/all/" target="_blank" rel="noopener noreferrer">NASA's resources archive</a>, <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexel</a>, <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>, Wikipedia and some cool SVGs from <a href="https://mycolor.space/" target="_blank" rel="noopener noreferrer">MyColorSpace</a>.</p>

            <p>In addition to the reading pages, the 3D visualization interfaces and Playground 3D interface pages were rendered using HTML iframe embedding system and embeded softwares were gotten from <a href="https://eyes.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA eyes</a>. All the 1600+ words/meanings and relevances on the Glossary page were all generated using <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">OpenA&apos;'s ChatGPT3.5</a>.</p>
        </article>

        <article className="thirdAboutDiv">
            <h2>Appreciation</h2>

            <p>Big Ups to my all my dearest friends that kept me going on with the project through moments of hardships, depression and extreme demotivation. Starting from <span>Meroo</span>, <span>Emman</span>, <span>Maryam</span>, <span>Calypso</span>, <span>Wale</span>, <span>Zainab</span>, <span>Big Bro</span>, and every other person who showed their support while i was working on QuadVerse. You guys are real MVPs and I promise that if my dreams do not get squashed along the way, I will make you all proud and keep building more amazing and useful softwares.</p>

            <p>Big thanks to my mom too for not supporting my programming dream, you are the reason I get up to work everyday to be able to eventually show you that I can make through programming with or without your help. I will get a good programming job someday and I will make you proud too.</p>

            <p>An appreciation to myself for not giving up mid-way making QuadVerse an half-baked project. QuadVerse is an ongoing project and many more features will be added along the line, kindly visit often to checkout the new features.</p>

            <p className='lastlast'>That&apos;s a wrap for now ...</p>
        </article>

      </section>

      <Footer bg={"transparent"}/>
      

      <TransitionPage animateState={"initial"}/>
      <AnimatePresence mode='wait'>
          {!showExit && (
            <TransitionPage animateState={"exit"}/>
          )}
      </AnimatePresence>
    </main>
  )
}

export default About
