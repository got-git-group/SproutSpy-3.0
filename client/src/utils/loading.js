import React from "react";
import './index.scss';
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <p className='font'>GOT</p>
    <img src={loadingImg} alt="Loading..." />
    <p className='font'>GIT</p>
  </div>
);

export default Loading;