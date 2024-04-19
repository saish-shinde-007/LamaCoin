import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on X</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
