import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	const openWebsite = (text) => {
		window.open(text, '_blank');
	};

	const handleCopy = () => {
		navigator.clipboard.writeText("best");
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46}/>
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							How to Buy $LAMA on DEX?
						</div>
							<div
								className="bubble-element Group baTaLaMz bubble-r-container flex column"
								style={{
									padding: "0px",
									border: "0px",
									font: "inherit",
									verticalAlign: "baseline",
									WebkitFontSmoothing: "antialiased",
									WebkitTapHighlightColor: "transparent",
									boxSizing: "border-box",
									display: "flex",
									alignContent: "stretch",
									position: "relative",
									flexFlow: "wrap",
									overflow: "visible",
									gap: "0px 40px",
									borderRadius: "0px",
									margin: "0px",
									justifyContent: "center",
									opacity: 1,
									alignSelf: "flex-start",
									minWidth: "280px",
									order: 5,
									minHeight: "60px",
									flexGrow: 1,
									height: "max-content",
									zIndex: 12,
								}}
							>
								<div
									id="raydium"
									className="bubble-element Group baTaLaNaB bubble-r-container flex row"
									style={{
										font: "inherit",
										verticalAlign: "baseline",
										WebkitFontSmoothing: "antialiased",
										WebkitTapHighlightColor: "transparent",
										boxSizing: "border-box",
										display: "flex",
										alignContent: "stretch",
										position: "relative",
										flexFlow: "column",
										overflow: "visible",
										padding: "10px",
										margin: "20px 0px",
										justifyContent: "flex-start",
										rowGap: "20px",
										opacity: 1,
										alignSelf: "flex-start",
										minWidth: "280px",
										maxWidth: "300px",
										order: 1,
										flexGrow: 1,
										height: "max-content",
										minHeight: "254px",
										zIndex: 11,
										boxShadow: "rgb(218, 46, 239) 0px 0px 20px 1px",
										background:
											"linear-gradient(140deg, rgb(23, 44, 102), rgb(24, 30, 90), rgb(25, 19, 78)) padding-box padding-box, linear-gradient(rgb(54, 186, 225), rgb(218, 46, 239)) border-box border-box",
										borderRadius: "20px",
										border: "2px solid transparent",
									}}
								>
									<div
										className="bubble-element Image baTaLaNaF"
										style={{
											padding: "0px",
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											overflow: "hidden",
											display: "flex",
											flexDirection: "row",
											alignItems: "stretch",
											position: "relative",
											borderRadius: "0px",
											margin: "0px",
											opacity: 1,
											alignSelf: "center",
											minWidth: "120px",
											maxWidth: "120px",
											order: 1,
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "120px",
											zIndex: 2,
										}}
									>
										<div
											className="aspect-ratio"
											style={{
												margin: "0px",
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												boxSizing: "inherit",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												position: "relative",
												height: "0px",
												paddingTop: "26.6667%",
											}}
										/>
										<img
											src="https://9a50db0b3595b86c5d95b1fc53a02746.cdn.bubble.io/f1711682256890x460579306728667460/logo-with-text.svg"
											style={{
												margin: "0px",
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												boxSizing: "inherit",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												borderRadius: "0px",
												top: "0px",
												left: "0px",
												display: "block",
												width: "100%",
												height: "100%",
												position: "absolute",
											}}
										/>
									</div>
									<div
										className="bubble-element Text baTaLaNaG bubble-r-vertical-center"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											boxSizing: "border-box",
											overflowWrap: "break-word",
											position: "relative",
											whiteSpace: "pre-wrap",
											overflow: "visible",
											padding: "0px 20px",
											borderRadius: "0px",
											margin: "0px",
											fontFamily: "Heebo, sans-serif",
											fontSize: "12px",
											fontWeight: 400,
											color: "rgb(255, 255, 255)",
											textAlign: "center",
											lineHeight: 1.4,
											opacity: 1,
											alignSelf: "flex-start",
											minWidth: "0px",
											order: 2,
											minHeight: "36px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 3,
										}}
									>
										<div
											style={{
												margin: "0px",
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												boxSizing: "inherit",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
											}}
										>
											Copy contract address, paste in Raydium's output address field.
										</div>
									</div>
									<div
										className="bubble-element Group baTaLaNaH bubble-r-container flex row"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											display: "flex",
											alignContent: "stretch",
											position: "relative",
											flexFlow: "wrap",
											overflow: "visible",
											gap: "0px 10px",
											borderStyle: "solid",
											borderWidth: "1px",
											borderColor: "rgb(107, 107, 107)",
											borderRadius: "100px",
											padding: "10px 10px 10px 16px",
											margin: "0px",
											justifyContent: "flex-start",
											opacity: 1,
											alignSelf: "center",
											minWidth: "260px",
											order: 3,
											minHeight: "0px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 3,
											backgroundColor: "rgba(223, 223, 223, 0.07)",
										}}
									>
										<div
											className="bubble-element Group baTaLaNaM bubble-r-container flex column"
											style={{
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												boxSizing: "border-box",
												display: "flex",
												alignContent: "stretch",
												position: "relative",
												flexFlow: "column",
												overflow: "visible",
												borderRadius: "0px",
												margin: "0px",
												justifyContent: "flex-start",
												opacity: 1,
												alignSelf: "flex-start",
												minWidth: "0px",
												maxWidth: "250px",
												order: 3,
												minHeight: "0px",
												width: "0px",
												flexGrow: 1,
												height: "max-content",
												zIndex: 5,
											}}
										>
											<div
												onClick={handleCopy}
												className="bubble-element Text baTaLaNaN"
												style={{
													padding: "0px",
													border: "0px",
													font: "inherit",
													verticalAlign: "baseline",
													WebkitFontSmoothing: "antialiased",
													WebkitTapHighlightColor: "transparent",
													boxSizing: "border-box",
													overflowWrap: "break-word",
													position: "relative",
													whiteSpace: "pre-wrap",
													overflow: "visible",
													borderRadius: "0px",
													margin: "0px",
													fontFamily: "Heebo, sans-serif",
													fontSize: "10px",
													fontWeight: 400,
													color: "rgb(255, 255, 255)",
													lineHeight: 1.4,
													opacity: 1,
													alignSelf: "flex-start",
													minWidth: "200px",
													maxWidth: "200px",
													order: 1,
													minHeight: "0px",
													height: "max-content",
													flexGrow: 0,
													flexShrink: 0,
													width: "200px",
													zIndex: 4,
													backgroundColor: "transparent"
												}}
											>
												7GCbw4ipnXLVWs7aHpZForaUnoejNnLaPS6koWmEWVZi
											</div>
										</div>
									</div>
									<div
										className="clickable-element bubble-element Group baTaLaNaS bubble-r-container flex column"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											outline: "transparent dotted 0px",
											touchAction: "manipulation",
											display: "flex",
											alignContent: "stretch",
											position: "relative",
											flexFlow: "column",
											overflow: "visible",
											borderRadius: "20px",
											padding: "6px 16px",
											margin: "0px",
											justifyContent: "flex-start",
											opacity: 0.8,
											cursor: "pointer",
											alignSelf: "center",
											minWidth: "0px",
											order: 5,
											minHeight: "0px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 4,
											background:
												"linear-gradient(140deg, rgb(44, 94, 230) 0%, rgb(225, 0, 255) 100%)",
											boxShadow: "rgb(149, 145, 151) 0px 0px 17px 1px",
										}}
									>
										<div
											className="bubble-element Text baTaLaNaT bubble-r-vertical-center"
											style={{
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												boxSizing: "border-box",
												overflowWrap: "break-word",
												position: "relative",
												whiteSpace: "pre-wrap",
												overflow: "visible",
												borderRadius: "0px",
												margin: "0px",
												fontFamily: "Heebo, sans-serif",
												fontSize: "14px",
												fontWeight: 700,
												color: "rgb(255, 255, 255)",
												lineHeight: 1.4,
												opacity: 1,
												alignSelf: "flex-start",
												minWidth: "0px",
												order: 2,
												minHeight: "36px",
												height: "max-content",
												flexGrow: 0,
												flexShrink: 0,
												width: "auto",
												zIndex: 3,
											}}
										>
											<div
												onClick={() => openWebsite("https://raydium.io/swap/?inputCurrency=7GCbw4ipnXLVWs7aHpZForaUnoejNnLaPS6koWmEWVZi&outputCurrency=sol&fixed=in")}
												style={{
													margin: "0px",
													padding: "0px",
													border: "0px",
													font: "inherit",
													verticalAlign: "baseline",
													boxSizing: "inherit",
													WebkitFontSmoothing: "antialiased",
													WebkitTapHighlightColor: "transparent",
													backgroundColor: "transparent",
													color: "#FFFFFF"
												}}
											>
												GO TO RAYDIUM
											</div>
										</div>
									</div>
								</div>
								<div
									id="jupiter"
									className="bubble-element Group baTaLaNaX bubble-r-container flex column"
									style={{
										font: "inherit",
										verticalAlign: "baseline",
										WebkitFontSmoothing: "antialiased",
										WebkitTapHighlightColor: "transparent",
										boxSizing: "border-box",
										display: "flex",
										alignContent: "stretch",
										position: "relative",
										flexFlow: "column",
										overflow: "visible",
										borderRadius: "20px",
										padding: "10px",
										margin: "20px 0px",
										justifyContent: "flex-start",
										rowGap: "20px",
										opacity: 1,
										alignSelf: "flex-start",
										minWidth: "280px",
										maxWidth: "300px",
										order: 2,
										flexGrow: 1,
										height: "max-content",
										minHeight: "254px",
										zIndex: 11,
										border: "1px solid rgb(157, 191, 21)",
										backgroundColor: "rgb(48, 66, 86)",
										boxShadow:
											"rgba(186, 238, 186, 0.6) -3px -3px 15px 0px, rgba(242, 192, 23, 0.6) 3px 3px 15px 0px, rgba(55, 205, 210, 0.6) 3px 3px 15px 0px",
									}}
								>
									<div
										className="bubble-element Group baTaLaNaY bubble-r-container flex row"
										style={{
											padding: "0px",
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											display: "flex",
											alignContent: "stretch",
											position: "relative",
											flexFlow: "wrap",
											overflow: "visible",
											gap: "0px 6px",
											borderRadius: "0px",
											margin: "0px",
											justifyContent: "flex-start",
											opacity: 1,
											alignSelf: "center",
											minWidth: "0px",
											order: 2,
											minHeight: "0px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 5,
										}}
									>
										<div
											className="bubble-element Text baTaLaNd bubble-r-vertical-center"
											style={{
												padding: "0px",
												border: "0px",
												verticalAlign: "baseline",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												boxSizing: "border-box",
												overflowWrap: "break-word",
												position: "relative",
												whiteSpace: "pre-wrap",
												overflow: "visible",
												borderRadius: "0px",
												margin: "0px",
												fontFamily: "Heebo, sans-serif",
												fontSize: "14px",
												fontWeight: 700,
												color: "rgb(254, 254, 255)",
												lineHeight: 1.4,
												opacity: 1,
												alignSelf: "center",
												minWidth: "0px",
												order: 2,
												minHeight: "0px",
												width: "max-content",
												flexGrow: 0,
												height: "max-content",
												zIndex: 3,
											}}
										>
											<div
												style={{
													margin: "0px",
													padding: "0px",
													border: "0px",
													font: "inherit",
													verticalAlign: "baseline",
													boxSizing: "inherit",
													WebkitFontSmoothing: "antialiased",
													WebkitTapHighlightColor: "transparent",
												}}
											>
												Jupiter
											</div>
										</div>
									</div>
									<div
										className="bubble-element Text baTaLaNe bubble-r-vertical-center"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											boxSizing: "border-box",
											overflowWrap: "break-word",
											position: "relative",
											whiteSpace: "pre-wrap",
											overflow: "visible",
											padding: "0px 20px",
											borderRadius: "0px",
											margin: "0px",
											fontFamily: "Heebo, sans-serif",
											fontSize: "12px",
											fontWeight: 400,
											color: "rgb(255, 255, 255)",
											textAlign: "center",
											lineHeight: 1.4,
											opacity: 1,
											alignSelf: "flex-start",
											minWidth: "0px",
											order: 3,
											minHeight: "36px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 3,
										}}
									>
										<div
											style={{
												margin: "0px",
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												boxSizing: "inherit",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
											}}
										>
											Copy contract address, paste in Jupiter's output address field.
										</div>
									</div>
									<div
										className="bubble-element Group baTaLaNf bubble-r-container flex row"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											display: "flex",
											alignContent: "stretch",
											position: "relative",
											flexFlow: "wrap",
											overflow: "visible",
											gap: "0px 10px",
											borderStyle: "solid",
											borderWidth: "1px",
											borderColor: "rgb(107, 107, 107)",
											borderRadius: "100px",
											padding: "10px 10px 10px 16px",
											margin: "0px",
											justifyContent: "flex-start",
											opacity: 1,
											alignSelf: "center",
											minWidth: "260px",
											order: 4,
											minHeight: "0px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 3,
											backgroundColor: "rgba(223, 223, 223, 0.07)",
										}}
									>
										<div
											className="bubble-element Group baTaLaNk bubble-r-container flex column"
											style={{
												padding: "0px",
												border: "0px",
												font: "inherit",
												verticalAlign: "baseline",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												boxSizing: "border-box",
												display: "flex",
												alignContent: "stretch",
												position: "relative",
												flexFlow: "column",
												overflow: "visible",
												borderRadius: "0px",
												margin: "0px",
												justifyContent: "flex-start",
												opacity: 1,
												alignSelf: "flex-start",
												minWidth: "0px",
												maxWidth: "250px",
												order: 3,
												minHeight: "0px",
												width: "0px",
												flexGrow: 1,
												height: "max-content",
												zIndex: 5,
											}}
										>
											<div
												className="bubble-element Text baTaLaNl"
												style={{
													padding: "0px",
													border: "0px",
													font: "inherit",
													verticalAlign: "baseline",
													WebkitFontSmoothing: "antialiased",
													WebkitTapHighlightColor: "transparent",
													boxSizing: "border-box",
													overflowWrap: "break-word",
													position: "relative",
													whiteSpace: "pre-wrap",
													overflow: "visible",
													borderRadius: "0px",
													margin: "0px",
													fontFamily: "Heebo, sans-serif",
													fontSize: "10px",
													fontWeight: 400,
													color: "rgb(255, 255, 255)",
													lineHeight: 1.4,
													opacity: 1,
													alignSelf: "flex-start",
													minWidth: "200px",
													maxWidth: "200px",
													order: 1,
													minHeight: "0px",
													height: "max-content",
													flexGrow: 0,
													flexShrink: 0,
													width: "200px",
													zIndex: 4,
												}}
											>
												7GCbw4ipnXLVWs7aHpZForaUnoejNnLaPS6koWmEWVZi
											</div>
										</div>
									</div>
									<div
										className="clickable-element bubble-element Group baTaLaNq bubble-r-container flex column"
										style={{
											border: "0px",
											font: "inherit",
											verticalAlign: "baseline",
											WebkitFontSmoothing: "antialiased",
											WebkitTapHighlightColor: "transparent",
											boxSizing: "border-box",
											outline: "transparent dotted 0px",
											touchAction: "manipulation",
											display: "flex",
											alignContent: "stretch",
											position: "relative",
											flexFlow: "column",
											overflow: "visible",
											borderRadius: "20px",
											padding: "6px 16px",
											margin: "0px",
											justifyContent: "flex-start",
											opacity: 0.8,
											cursor: "pointer",
											alignSelf: "center",
											minWidth: "0px",
											order: 6,
											minHeight: "0px",
											height: "max-content",
											flexGrow: 0,
											flexShrink: 0,
											width: "auto",
											zIndex: 4,
											background:
												"linear-gradient(60deg, rgb(55, 205, 210) 0%, rgb(186, 238, 138) 100%)",
											boxShadow: "rgb(149, 145, 151) 0px 0px 17px 1px",
										}}
									>
										<div
											className="bubble-element Text baTaLaNr bubble-r-vertical-center"
											style={{
												padding: "0px",
												border: "0px",
												fontFamily: "Heebo, sans-serif",
												verticalAlign: "baseline",
												WebkitFontSmoothing: "antialiased",
												WebkitTapHighlightColor: "transparent",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												boxSizing: "border-box",
												overflowWrap: "break-word",
												position: "relative",
												whiteSpace: "pre-wrap",
												overflow: "visible",
												borderRadius: "0px",
												margin: "0px",
												fontSize: "14px",
												fontWeight: 700,
												color: "rgb(255, 255, 255)",
												lineHeight: 1.4,
												opacity: 1,
												alignSelf: "flex-start",
												minWidth: "0px",
												order: 2,
												minHeight: "36px",
												height: "max-content",
												flexGrow: 0,
												flexShrink: 0,
												width: "auto",
												zIndex: 3,
											}}
										>
											<div
												onClick={() => openWebsite("https://jup.ag/swap/SOL-7GCbw4ipnXLVWs7aHpZForaUnoejNnLaPS6koWmEWVZi")}
												style={{
													margin: "0px",
													padding: "0px",
													border: "0px",
													font: "inherit",
													verticalAlign: "baseline",
													boxSizing: "inherit",
													WebkitFontSmoothing: "antialiased",
													WebkitTapHighlightColor: "transparent",
													backgroundColor: "transparent",
													color: "#FFFFFF"
												}}
											>GO TO JUPITER
											</div>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
