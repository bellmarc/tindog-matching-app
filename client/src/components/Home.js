import React from 'react';
import '../style/Home.css';
import Features from '../components/Features';
import Testamonials from '../components/Testamonials';
import iphoneDog from "../assets/iphone6.png";


const Home =() => {
    return (
       <div>
        <div>
            <h1>Meet new and interesting dogs nearby.
            </h1>
            <button type="button">Download</button>
            <button type="button">Download</button>
        </div>
        <div>
        <img src={iphoneDog} alt="iphone-mockup"/>
        </div>
        <Features />
        <Testamonials />
        <section id="cta">
            <h3>Find the True Love of Your Dog's Life Today.</h3>
            <button type="button">Download</button>
            <button type="button">Download</button>
        </section>
        <p>© Copyright 2018 TinDog</p>
    </div>
    )
}

export default Home