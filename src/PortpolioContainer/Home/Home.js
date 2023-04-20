import React from 'react'; 
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import { Resume } from '../Resume/Resume';
import { MainFooter } from '../MainFooter/MainFooter';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <Profile/>
            <Footer/>
            <AboutMe/>
            <Resume/>
            <MainFooter/>
        </div>
    );
}

export default Home;
