import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {useWeb3React} from '@web3-react/core';
import { injected } from "../../wallet.js"

import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { BsArrowUpCircle } from 'react-icons/bs';
import { useState, useEffect, } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

import { contract_address } from '../../config';

import {useContract} from '../../hooks/useContract';

import PresaleABI from '../../services/abis/PRESALE.json';

import * as MovieAPI from '../../jsonAPI';

import Header from '../../components/header'
import Timedown from '../../components/timedown'

export default function Presale() {
    const {account, connector, chainId, activate, deactivate, error, active} = useWeb3React();

    const [balance, setBalance] = useState(50000000000000000);

    let presaleTime = new Date('2020-12-12T00:00:00');
    let currentTime = new Date();

    let flag = currentTime < presaleTime || account === undefined;

    const mediaContract = useContract(contract_address, PresaleABI);

    const showdata = () => {
      MovieAPI.getAll()
        .then((res) => {
          console.log(res)
        })
    }

    const buy = async () => {
      window.alert("We will send you NFT after the presale. We are saving your address to our database.");
      if(balance <= 0) {window.alert("Please Input Eth Balance."); return;}
      try {
        const purchase = await mediaContract.purchaseFor({from: account, value: String(balance)})
        MovieAPI.addWallet(account, balance)
        .then((res) => {
          console.log(res)
          window.alert("You successfully registered to our presale");
        })
      } catch(err) {
        console.log(err)
      }
    }

    return (
        <Box className="sminem">
        	<Header account={account} active={active} />
          <div className="wrap presale">
            <div className="presalebody">
              <h1 className="presaletitle" onClick={showdata}>Presale Starting in <Timedown startTime={presaleTime}/></h1>
              <div className="presaleItem">
                <input type='number' placeholder='Input Eth Balance.' value={balance} min='0' disabled />
              </div>
              <div className="presaleItem">
                <button variant="contained" onClick={() => buy()}  className="button" disabled={flag}>Buy</button>
              </div>
            </div>
          </div>
        </Box >
    );
}
