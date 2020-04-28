import React from 'react';
import '../style/Home.css';
import Features from '../components/Features';
import Testimonials from './Testimonials';
import iphoneDog from "../assets/iphone6.png";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";


const Home =() => {
    return (
       <div>
        <Row className="splash splash-row">
            <div className="splash-header">
                <h1 className="splash-text">Meet new and interesting dogs nearby.
                </h1>
                <Button variant="light" className="first-dl-btn">Download</Button>
                <Button variant="light" className="second-dl-btn">Download</Button>
            </div>
            <div className="splash-image-side">
            <img src={iphoneDog} alt="iphone-mockup"/>
            </div>
        </Row>


        <Features />
        <Testimonials />
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