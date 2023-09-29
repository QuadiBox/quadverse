import { useState, useEffect } from 'react';
// import Globe from 'react-globe.gl';
import dynamic from 'next/dynamic';




const Earth = () => {
    const globeOptions = {
        globeMaterial: {
          color: '#a706f1', // Set the color of the globe
        },
    };
    const [showLoader, setShowLoader] = useState(true);
    const [windowWidth, setWindowWith] = useState(1200);

    useEffect(() => {
        setWindowWith(window.innerWidth);
    }, []);

    const World = () => {
        const Globe = dynamic(import('react-globe.gl'), { ssr: false });
        const [countries, setCountries] = useState({ features: []});
        const [places, setPlaces] = useState([{
            latitude: 7.524926,
            longitude: 3.915185,
            name: "Oyo State, Nigeria.",
            size: 3,
            rad: 1
        }]);
    
        useEffect(() => {
            // load data
            fetch('/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
        }, []);
    
        const gData = [{
            lat: 7.524926,
            lng: 3.915185,
            maxR: 25,
            propagationSpeed: 5,
            repeatPeriod: 1200
        }];
        
    
        return (
                    <Globe
                        globeImageUrl="/dark_map.jpg"
                        bumpImageUrl='/topo.png'
                        width={600}
                        height={windowWidth <= 520 ? 500 : 600}
                        animateIn={true}
                        backgroundColor='#42273f00'
                        hexPolygonsData={countries.features}
                        hexPolygonResolution={3}
                        hexPolygonMargin={0.3}
                        hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
                        hexPolygonLabel={({ properties: d }) => `
                            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                            Population: <i>${d.POP_EST.toLocaleString()}</i>
                        `}
                        showAtmosphere={false}
                        atmosphereColor='#a706f1'
                        ringsData={gData}
                        ringColor={() => '#f9d9f9'}
                        ringMaxRadius="maxR"
                        ringPropagationSpeed="propagationSpeed"
                        ringRepeatPeriod="repeatPeriod"
                        labelsData={places}
                        labelLat={d => d.latitude}
                        labelLng={d => d.longitude}
                        labelText={d => d.name}
                        labelSize={d => d.size}
                        labelDotRadius={d => d.rad}
                        labelColor={() => '#f9d9f9'}
                        labelResolution={2}
                        onGlobeReady={() => {setShowLoader(prev => !prev); }}
                    />
    
        ) 
    };
    
    
    return (
        <div className='leftFlexSect'>
                {
                    typeof window !== undefined ?
                        <World></World>
                :
                    null
                }
                {
                    showLoader && (
                        <div className="globeLoader">
                            <h4>Loading Globe</h4>
                            <div className="loaderBar"></div>
                        </div>
                    )
                }
        </div>
    );
}

export default Earth
