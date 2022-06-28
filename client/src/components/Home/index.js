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

  // ZIPCODE INPUT
  let zipInput;
  let zoneResults;
  let getZip = '98052';

  const handleSubmit = (event) => {
    zipInput = document.querySelector('#zip');
    zoneResults = document.querySelector('.zoneResults');
    console.log('searchBtn clicked');
    event.preventDefault();
    console.log(zipInput.value);
    getZip = zipInput.value.trim();
    getAgZone(getZip);
  };
  
  // API to pull agricultural zone
  const getAgZone = function (getZipCode) {
    // stitch the zipcode into the API URL
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        'X-RapidAPI-Key': 'ae549cbaffmsh7d6fc2689fc82d0p126e42jsn26f834053a23'
      }
    };
    const agURL = `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${getZipCode}`;
    fetch(agURL, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        zoneResults.textContent = `You live in Zone ${data.hardiness_zone}!`;
      });
  };
  
  const init = function () {
    // initMap();
    // geocode({ address: getZip });
    getAgZone(getZip);
  };
  
  document.addEventListener('DOMContentLoaded', (e) => {
    init();
  });

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
          <div id="zipLookup">
            <form id="zipcodeInput" onSubmit={handleSubmit}>
                <label htmlFor="zip" id="text1">Don't know your zone? Enter your zipcode to find out!</label><br/>
                <input id="zip" name="zip" type="text" pattern="[0-9]*"/>
                <input type="submit" id="button1"/>
            </form>
            <h3 className="zoneResults"> </h3>
          </div>
      </div>
  )
};

export default Home;