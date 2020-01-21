import React from 'react';
import '../style/Home.css';
import iphoneDog from "../assets/iphone6.png";


const Home =() => {
    return (
       <div>
        <div>
            <h1>Meet new and interesting dogs nearby.</h1>
            <button type="button">Download</button>
            <button type="button">Download</button>
        </div>
        <div>
        <img src={iphoneDog} alt="iphone-mockup"/>
        </div>
    </div>
    )
}

export default Home