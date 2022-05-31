import './index.scss';
import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ZONES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  let username = '';
  const { isAuthenticated, user } = useAuth0();
  const loggedIn = isAuthenticated;
  if ( loggedIn ) {
     username = user.nickname;
  }

    const { loading, error, data } = useQuery(QUERY_ZONES);
    if (!data) {
        return <p>Loading...</p>;
    };
    
    return (
        <div id="homePage">
            <form id="zoneSelect">
                <h1 id="welcome">Welcome {username}!</h1>
                <h3 id="choose">Choose your grow zone to get started:</h3>
                <div className="dropdown">
                    <button className="dropbtn">Zones</button>
                    <div className="dropdown-content">
                        {data.zones.map((zone) => (
                            <Link key={zone._id} to={{
                                pathname: `/results/${zone._id}`,
                            }}>{zone.zoneName}</Link>
                            // <a href="/results">
                            // {zone.zoneName}</a>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Home;