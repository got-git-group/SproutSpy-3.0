import './index.sass'
import './index.scss';
import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ZONES } from '../../utils/queries';

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_ZONES);
    console.log(data);
    if (!data) {
        return <p>Loading...</p>;
    }
    // I THINK AN AWAIT OR SOMETHING IS NEEDED HERE
    return (
        <div id="homePage">
            <form id="zoneSelect">
                <h1 id="welcome">Welcome!</h1>
                <h3 id="choose">Choose your grow zone to get started:</h3>
                <div class="dropdown">
                    <button class="dropbtn">Zones</button>
                    <div class="dropdown-content">
                        {data.zones.map((zone) => (
                            <a href="/results" {...data}>{zone.zoneName}</a>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home;