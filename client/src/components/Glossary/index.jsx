import React from "react";
import './index.scss';
import Image from './glossary.json';
const glossaryData = require('./glossary.json');

const Glossary = () => {
    // can we make a conditional that if there are bullet values then they generate in the card?
    return (

        <div className="glossary">
            {glossaryData.map((item) => (
                <div class="glossCard">
                    <h2 class="glossTitle"><li key={item.title}></li>
                    </h2>
                    <Image to={item.image} alt={item.title}>
                        <li key={item.image}></li>
                    </Image>
                    <p class="glossText"><li key={item.text}></li></p>
                </div>
                    // {/* <ul>
                        // <li>{item.bullet1}</li>
                        // <li>{item.bullet2}</li>
                        // <li>{item.bullet3}</li>
                        // <li>{item.bullet4}</li>
                    // </ul> */}
                ))}
        </div>
    )
}

export default Glossary