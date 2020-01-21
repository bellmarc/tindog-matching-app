import React from 'react';
import '../style/Testamonials.css';
import dogImage from "images/dog-img.jpg";

const Testamonials = () => {
    return (
    <section id="testimonials">
        <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
        <img src={dogImage} alt="dog-profile"/>
        <em>Pebbles, New York</em>
    </section>

    )
}



export default Testamonials