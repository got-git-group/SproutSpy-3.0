import React from "react";
import './index.scss';
const glossaryData = require('./glossary.json');

const Glossary = () => {
    // can we make a conditional that if there are bullet values then they generate in the card?
    return (
        <div id="glossary">
            {glossaryData.map((item) => (
                <div class="glossCard">
                    <h2 class="glossTitle">{item.title}</h2>
                    <img class="glossImage" src={item.image} alt={item.title}></img>
                    <p class="glossText">{item.text}</p>
                    {/* <ul>
                        <li>{item.bullet1}</li>
                        <li>{item.bullet2}</li>
                        <li>{item.bullet3}</li>
                        <li>{item.bullet4}</li>
                    </ul> */}
                </div>
            ))}
        </div>
    )
}

export default Glossary;