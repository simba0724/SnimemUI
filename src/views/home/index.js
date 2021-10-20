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

import Header from '../../components/header'

function getWindowDimensions() {
    let width, height;
    if (typeof window !== "undefined") {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Home() {
    const screenWidth = useWindowDimensions().width;
    const [isMobile, setIsMobile] = useState(-1);
    const [currentSlide, setCurrentSlide] = useState(5);

    const {account, connector, chainId, activate, deactivate, error, active} = useWeb3React();

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

    useEffect(() => {
        if (screenWidth >= 1300) {
            if (isMobile === -1) setCurrentSlide(5);
            setIsMobile(3);
        }
        else {
            if (isMobile === -1) setCurrentSlide(2);
            setIsMobile(2);
        }
    }, [screenWidth]);

    useEffect(() => {
        myfunc();
    }, [isMobile]);

    useEffect(() => {
        myfunc();
    }, [currentSlide]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 3000 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 3000, min: 1300 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 1300, min: 0 },
            items: 1,
        },
    };

    function myfunc() {
        const left = (currentSlide - 1) % 5, right = (currentSlide + isMobile) % 5;
        let l = document.getElementsByName("carousel" + left), r = document.getElementsByName("carousel" + right);
        for (let i = 0; i < 5; i++) {
            const temp = document.getElementsByName("carousel" + i);
            for (let j = 0; j < temp.length; j++)
                temp.item(j).style.opacity = "100%"
        }
        for (let i = 0; i < l.length; i++)
            l.item(i).style.opacity = "20%"
        for (let i = 0; i < r.length; i++)
            r.item(i).style.opacity = "20%"
    }

    const carousels = ["carousel1.png", "carousel2.png", "carousel3.png", "carousel4.png", "carousel5.png"]

    return (
        <Box className="sminem">
        	<Header account={account} active={active} />
            <Box className="welcomebody">
                <Box sx={{ paddingLeft: "6%" }}>
                    <RText_WG className="welcome">
                        <Box >Welcome to <span style={{ color: '#5DCB29' }}>Sminem</span></Box>
                    </RText_WG>
                    <RText_WG className="club">Space Club</RText_WG>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box className="curvearrow"><img src="curvearrow.svg" /></Box>
                    <Box className="welcomedetail">
                        <Box className="arrowtext">
                            Sminem is glorified by the whole crypto community Associated with the euphoric feeling of reaching financial freedom through disconnection from parasitical centralized mafia ponzi.
                        </Box>
                        <Box className="righttoken">
                            <Box>
                          		{active ?
										            (
										              <button className="connect topright1" onClick={disconnect}>Connected</button>
										            ):(
										              <button className="connect topright1" onClick={connect}>Connect Button</button>
										            )
										          }
                          	</Box>
                            <Box className="tokeninfo"><Link to='/presale' style={{textDecoration: 'none', color: 'white'}}>Presale Page</Link></Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="planet"><img src="planet.svg" /></Box>
                <Box className="astronat">
                    <img src="astronat.svg" />
                </Box>
            </Box>
            <Box className="first">
                <RText_WG className="whois">
                    <Box>Who is <span style={{ color: '#5DCB29' }}>Sminem</span>?</Box>
                </RText_WG>
                <img src="dog.svg" className="dog" />
                <Box className="sminemtexts">
                    <Box className="sminemtext">Sminem is the saviour of the market by slaying all the bears. He is the hero we don't deserve but <span style={{ color: "#5DCB29" }}>definitely need.</span></Box>
                    <br />
                    <Box className="sminemtext">
                        <Box className="sminemtextsmall">You can now become a bull yourself and save the market by rocking a Sminem avatar everywhere.</Box>
                    </Box>
                </Box>
            </Box>
            <Box className="fairbody">
                <img src="analytic.svg" className="analytic" />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box className="fairmodel">
                        <Box sx={{ textAlign: "left" }}>FAIR DISTRIBUTION</Box>
                        <Box sx={{ textAlign: "right" }} className="fairm">MODEL</Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box className="fair">
                        <Box sx={{ paddingLeft: "10%" }} >The <span style={{ color: "#5DCB29" }}>Sminem</span></Box>
                        <Box sx={{ paddingLeft: "20%", color: "#5DCB29" }}> collection</Box>
                        <Box sx={{ paddingLeft: "22%" }} >consists of</Box>
                        <Box sx={{ width: "calc(100% + 50px)", paddingLeft: "22%" }}>abloom <span style={{ color: "#FFCB00" }}>young gentlemen</span></Box>
                    </Box>
                    <Box className="seven"><img src="7777.svg" /></Box>
                </Box>
                <Box className="generate">
                    generated by a network of retail investors, known for taming the bear market and releasing the bulls.
                </Box>
                <Box className="threemanbody">
                    <Box className="threedetail">Sminem was ironically the critical saviour of crypto because he defeated both shorters and scammers.</Box>
                    <img src="threeman.svg" className="threeman" />
                </Box>
            </Box>
            <Box className="second">
                <Box className="secondbody">
                    <Box className="arrow"><img src="arrow.svg" /></Box>
                    <Box className="greedy">
                        <Box sx={{ display: "flex" }}>
                            <Box>Greedy bankers are trying to <span style={{ color: "#5DCB29" }}>leave every small trader</span> <span style={{ color: "red" }}> bleeding</span> <span style={{ color: "#5DCB29" }}>and dry,</span></Box>
                            <Box><img src="sad.svg" /></Box>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>Sminem is here to <span style={{ color: "#FFCB00" }}>stop this tyranny</span> and counter with justice.</Box>
                    </Box>
                </Box>
            </Box>
            <Box className="preselbody">
                <img src="presel.svg" className="presel" />
            </Box>
            <Box sx={{ display: "flex", paddingLeft: "30%", flexWrap: "wrap" }}>
                <RText_WG className="presale">PRESALE</RText_WG>
                <img src="smileman.svg" className="smileman" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                <Box className="arrow1"><img src="arrow.svg" /></Box>
                <Box className="secure">
                    <Box>Make sure you <span style={{ color: "#4100FB" }}>secure</span> your</Box>
                    <Box sx={{ display: "flex" }}>
                        <Box><img src="face.svg" className="face" /></Box>
                        <Box><span style={{ color: "#FFCB00" }}>Sminem NFT </span>by participating the presale</Box>
                    </Box>
                    {active ?
					            (
					              <button className="connect nftimg" onClick={disconnect}>Connected</button>
					            ):(
					              <button className="connect nftimg" onClick={connect}>Connect Button</button>
					            )
					          }
                </Box>
            </Box>
            <Box className="tman1">
                <Box className="man1">
                    <img src="man1.svg" />
                </Box>
                <Box sx={{ width: "752px" }}>
                    <Box className="mantext1">The old system is based on market control and greed. Sminem will not allow this by releasing the bulls.</Box>
                    <Box className="mantext2">Sminem is an open-community in contrast to a secret society optimistic to save the crypto markets from any bearish sentiment.</Box>
                </Box>
            </Box>
            <Box className="tman2">
                <Box sx={{ width: "752px" }}>
                    <Box sx={{ paddingLeft: "24px" }} className="mantext1">The only way to stop elite financial mafia from garnishing the wages of underpaid employers is to escape the old system.</Box>
                    <Box sx={{ paddingLeft: "24px" }} className="mantext2">Sminem wants to save the markets from depression and bring optimism and euphoria for all investors.</Box>
                </Box>
                <Box className="man2">
                    <img src="man2.svg" />
                </Box>
            </Box>
            <Box className="tman1">
                <Box className="man1">
                    <img src="man3.svg" />
                </Box>
                <Box sx={{ width: "752px" }}>
                    <Box className="mantext1">Sminem uses cryptocurrency <br />to embolden his own strength.</Box>
                    <Box className="mantext2">While extremely powerful when exposed to the full flux of a decentralized system, this can be seen during the beginning of the Bogdanoff Twins arc, where he accumulated most of his crypto-powers during the activation <br className="while" style={{ display: "none" }} />of CRAB-17</Box>
                </Box>
            </Box>
            <Box className="stop">
                <Box className="stoptext">
                    <RText_WG>STOP <span style={{ color: "#4100FB" }}>LETTING THE BEARS </span><span style={{ color: "red" }}>CONTROL </span><br className="market" />THE MARKET</RText_WG>
                </Box>
                <Box className="stopimg">
                    <img src="stop.svg" />
                </Box>
            </Box>
            <Box className="third">
                <Box className="thirdbody">
                    <Box className="boysave">
                        <Box className="boy">
                            <Box><span style={{ color: "#4100FB" }}>THE BOY </span>WHO</Box>
                            <Box className="shinyman"><img src="shinyman.svg" /></Box>
                        </Box>
                        <Box className="save">
                            SAVED <span style={{ color: "#5DCB29" }}>CRYPTO</span>
                        </Box>
                    </Box>
                    <img src="cryptoarrow.svg" className="cryptoarrow" />
                </Box>
                <Box className="carouselbody">
                    <Carousel infinite={true} swipeable={false} responsive={responsive} centerMode={true}
                        afterChange={(previousSlide, { currentSlide, onMove }) => {
                            setCurrentSlide(currentSlide);
                        }}>
                        {carousels.map((data, index) => {
                            return <img src={data} name={"carousel" + index} key={index} className="carousel" />;
                        })}
                    </Carousel>
                </Box>
            </Box>
            <Box className="earthbody">
                <Box onClick={() => { window.open("https://twitter.com/SminemNFT", "_blink1"); }}><img src="twitter.svg" className="twitter" /></Box>
                <Box onClick={() => { window.open("https://discord.gg/MxrGqJ26Hf", "_blink2"); }}><img src="discord.svg" className="discord" /></Box>
                <Box><img src="earth.svg" className="earth" /></Box>
                <RText_WG className="join">JOIN THE CLUB</RText_WG>
            </Box>
            <Box className="bottombody">
                <img src="logo.svg" className="bottomlogo" />
                <Box className="bottommenu">
                    <Box sx={{ paddingBottom: "30px" }}>Home</Box>
                    <Box sx={{ paddingBottom: "30px" }}>About Sminem</Box>
                    <Box sx={{ paddingBottom: "30px" }}>Fair Distribution Model</Box>
                    <Box sx={{ paddingBottom: "30px" }}>Presale</Box>
                    <Box sx={{ paddingBottom: "30px" }}>Contact us</Box>
                </Box>
                <Box sx={{ fontSize: "50px", paddingRight: "10px", color: "#FFCB00" }}><BsArrowUpCircle onClick={() => { window.scroll({ top: 0, behavior: 'smooth' }) }} /></Box>
            </Box>
        </Box >
    );
}

const RText_WG = styled(Box)
    `
font-weight: bold;

/* identical to box height */

letter-spacing: -0.02em;
text-transform: uppercase;

/* wgite */

color: #FFFFFF;

transform: rotate(-4deg);
`