import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									Once upon a time, in the vast landscape of the internet, there lived a curious and
									whimsical creature known as the Lama. This charming animal, with its fluffy fur and
									endearing smile, captured the hearts of netizens worldwide. Memes featuring the Lama
									began to spread like wildfire, bringing joy and laughter to all who encountered
									them.
								</div>
								<div className="subtitle about-subtitle">
									As the popularity of Lama memes soared, a group of crypto enthusiasts saw an
									opportunity to harness the power of this internet sensation and create something
									truly remarkable – the Lama meme coin.
								</div>
								<div className="subtitle about-subtitle">
									The idea was simple yet ingenious: to create a cryptocurrency that celebrated the
									spirit of the Lama and provided a platform for the community to express their
									creativity through memes and artwork.
								</div>
								<div className="subtitle about-subtitle">
									And thus, LamaCoin was born.
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
