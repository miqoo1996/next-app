import React from 'react'
import Footer from './../components/Footer/Footer';
import AboutWatchs from './../components/AboutWatchs/AboutWatchs';
import WatchSlider from './../components/watchSlider/WatchSlider';
import AboutContent from './../components/AboutContent/AboutContent';
import ColorMaster from './../components/ColorMaster/ColorMaster';
import PCBuild from './../components/PCBuild/PCBuild';
import Partners from './../components/Partners/Partners';
import Navbar from "../components/Navbar/Navbar";


function Index() {
    return (
        <div className='home'>
            <Navbar/>
            <WatchSlider/>
            <AboutWatchs/>
            <AboutContent/>
            <ColorMaster/>
            <PCBuild/>
            <Partners/>
            <Footer/>
        </div>
    )
}

export default Index
