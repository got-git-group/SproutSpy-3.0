import React from "react";
import './index.scss';

const Glossary = () => {
    return (

        <>
        <div className="glossaryImage" id='imageGloss'>
            <div className="rows">
                <div className="col">
                    <div className="card">
                        <img src="https://www.mygardenlife.com/uploads/2020/02/lead_pilea%20starts_shutterstock_1203955741.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Starts/Cuttings:</b></h5>
                            <p className="card-text">Juvenile plants, typically purchased from a nursery or garden
                                store. A nursery has already done the work of getting the seeds to sprout in a greenhouse and getting the
                                plant old enough to survive being planted outside in your garden.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://mobileimages.lowes.com/marketingimages/713a0fb4-2107-467c-a96d-85d6d74cfe8a/DP18-127272-NPC-HT-ST-Step4.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Transplant:</b></h5>
                            <p className="card-text">
                                When you take your start (obtained either from the store or from a
                                seed you grew yourself) and remove it from it's smaller container and plant it in the garden bed.  
                                Place your start into the hole, being careful not to smash the roots.
                                the hole it will go in and make sure it is a little deeper than the pot your start came in. While holding
                                your start over your hole, turn the start upside down and gently shake or squeeze the pot to coax the
                                start out. Any nutrient and fertilizer-rich soil will drop down into the hole where that plant can still
                                benefit from it! Place your start into the hole, being careful not to smash the roots. Use soil to fill
                                in around the plant, adding a bit more around the stem (fresh soil often compacts when watered so it is a
                                good idea to bring the soil a little higher around the plant than it was before).</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://morningchores.com/wp-content/uploads/2020/04/potatoes-with-plenty-of-plant-spacing-800x529.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Spacing:</b></h5>
                            <p className="card-text">Refers to the space a plant needs when full grown. Seeds and starts are
                                small but often grow into mighty plants! You should consider planting your starts with as much space
                                between them and other plants as is suggested.</p>
                        </div>
                    </div>
                </div>
                <div className="rows">
                    <div className="card">
                        <img src="https://www.finegardening.com/app/uploads/assets/uploads/posts/3510/kg20-thinning-seedlings-01.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Thinning:</b></h5>
                            <p className="card-text">The process of pulling the less-healthy sprouts around the healthier
                                sprouts. Ultimately you want your sprouts that stay to have the recommended spacing for a fully grown
                                plant.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://www.thespruce.com/thmb/Is2OIMBQ2u-DompLBBTR5qHePAQ=/2121x1193/smart/filters:no_upscale()/GettyImages-953232226-5c3e2dd6c9e77c000195b625.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Sowing:</b></h5>
                            <p className="card-text">The process of pulling the less-healthy sprouts around the healthier
                                sprouts. Ultimately you want your sprouts that stay to have the recommended spacing for a fully grown
                                plant.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://thepracticalplanter.com/wp-content/uploads/2019/06/Plant-in-Sunlight.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>Sun:</b></h5>
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">

                                <p><b>Full Sun: </b>6 or more hours of direct sun per day.</p>

                                <p><b>Part Sun: </b>4 to 6 hours of direct sun per day, including some afternoon sun.</p>

                                <p><b>Part Shade: </b>4 to 6 hours of sun per day, mostly before midday</p>

                                <p><b>Full Shade: </b>Less than 4 hours of direct sun per day.</p>
                            </div>
                            <p className="card-text">Different plants require different amounts of light during the day to grow.
                                Here is a breakdown of what you might see, keep in mind these times refer to the time sun is shining
                                directly on that plant, not how many hours of daylight you have!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Glossary;