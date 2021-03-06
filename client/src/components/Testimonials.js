import React from 'react';
import '../style/Testimonials.css';
import dogImage from "../assets/dog-img.jpg";

const Testimonials = () => {
    return (
    <section id="testimonials">
        <h2 id="quote">"I no longer have to sniff other dogs for love. I've found the most attractive Golden Doodle on TinDog. Woof."
        </h2>
        <img src={dogImage} alt="dog-profile"/>
        <em>Russell, New York</em>
    </section>

    )
}



export default Testimonials