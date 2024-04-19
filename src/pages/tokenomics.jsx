import React from "react";
import {Chart} from "react-google-charts";
import "./styles/tokenomics.css";
import NavBar from "../components/common/navBar";

const data = [
    ["Task", "Hours per Day"],
    ["Marketing", 40],
    ["Airdrop", 2],
    ["Developers", 10],
    ["CEX Liquidity", 30],
    ["DEX Liquidity", 18],
];

const options = {
    is3D: true,
};

const Tokenomics = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="tokenomics"/>
                <div className="content-wrapper">
                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="project-title">Tokenomics</div>
                                <div className="project-description">Token Supply: 412,000,000</div>
                                <Chart
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                    width={"80%"}
                                    height={"400px"}
                                />
                                <div className="project-description">No Taxes, No Bullshit. It’s that simple.</div>
                                <div className="project-description">LP tokens will be burnt.</div>
                                <div className="project-description">Developers token locked for 1000 days.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Tokenomics;
