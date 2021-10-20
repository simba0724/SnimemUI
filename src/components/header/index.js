import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { useState, useEffect, } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

import { useWeb3React } from '@web3-react/core';
import { injected } from "../../wallet.js"

export default function Header({account, active}) {
  const [show, setShow] = useState(false);
  const {connector, chainId, activate, deactivate, error} = useWeb3React();

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log("ex", ex)
    }
  }

  return (
    <Box>
      <Box sx={{ background: show ? "#180A3F" : "#0E0034" }} className="menu">
        <Box className="topmenu">
          {show ? <CgClose onClick={() => { setShow(!show) }} className="bars" /> :
            <FaBars onClick={() => { setShow(!show) }} className="bars" />}
          <Link to='/'><img src="logo.svg" className="logo" /></Link>
          <Box className="menus">
            <Link to='/'><Box>Home</Box></Link>
            <Link to='/'><Box>About Sminem</Box></Link>
            <Link to='/'><Box>Fair Distribution Model</Box></Link>
            <Link to='/presale'><Box>Presale</Box></Link>
            <Link to='/'><Box>Contact us</Box></Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          {active ?
            (
              <button className="connect" onClick={disconnect}>Connected</button>
            ):(
              <button className="connect" onClick={connect}>Connect Button</button>
            )
          }
        </Box>
      </Box>
      {!show ? "" : (
        <Box className="navmenus">
          <Link to='/'><Box className="menuitem2">HOME</Box></Link>
          <hr className="menuitem1" />
          <Link to='/'><Box className="menuitem2">ABOUT SMINEM</Box></Link>
          <hr className="menuitem1" />
          <Link to='/'><Box className="menuitem2">FAIR DISTRIBUTION MODEL</Box></Link>
          <hr className="menuitem1" />
          <Link to='/presale'><Box className="menuitem2">PRESALE</Box></Link>
          <hr className="menuitem1" />
          <Link to='/'><Box className="menuitem2">CONTACT US</Box></Link>
        </Box>
      )}
    </Box >
  );
}
