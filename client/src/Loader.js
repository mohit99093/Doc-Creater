import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import Loader from "react-loader";
import { Spinner } from "react-bootstrap";
import LoadingOverlay from "react-loading-overlay";
//import BounceLoader from "react-spinners/BounceLoader";

import styled, { css } from "styled-components";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${(props) =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

function Loader(props) {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    // visible true -> false
    if (loaded) {
      //setTimeout(() => setLoaded(true), 250); // 0.25초 뒤에 해제
      //debugger;
      setTimeout(() => setLoaded(0), 10000); // 10초 뒤에
    }

    //setLoaded(loaded);
  }, [loaded]);

  return (
    <>
      <div
        id="overlay"
        style={!loaded ? { display: "none" } : { display: "block" }}
      >
        <div className="spinner" />
        <br />
        Loading...
      </div>
      {props.children}
    </>
  );
}

export default Loader;
