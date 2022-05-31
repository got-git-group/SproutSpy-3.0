import React from "react";
import bg from '../../assets/images/glossary.jpg'
import './index.scss';
const glossaryData = require('./glossary.json');

const Glossary = () => {
    // can we make a conditional that if there are bullet values then they generate in the card?
    return (
        
        <div id="glossary">
            {glossaryData.map((item) => (
                <div className="glossCard" key={item.title}>
                    <h2 className="glossTitle">{item.title}</h2>
                    <img className="glossImage" src={item.image} alt={item.title}></img>
                    <p className="glossText">{item.text}</p>
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