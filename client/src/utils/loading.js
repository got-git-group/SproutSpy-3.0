import React from "react";
import './index.scss';
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";
<link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"></link>
    
const Loading = () => (
  <div className="spinner">
    <p className='logo-1'>sprout</p>
    <img src={loadingImg} alt="Loading..." />
    <p className='logo-1'>spy</p>
  </div>
);

export default Loading;