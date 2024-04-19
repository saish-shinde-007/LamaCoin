import React from "react";
import INFO from "../../data/user";
import "./style/allProjects.css";

const BuyStepsDex = () => {
	return (
		<div className="all-projects-container">
			{INFO.buyStepsDex.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<React.Fragment>
						<div className="project">
							<div className="project-container">
								<div className="project-title" style={{color: "darkBlue"}}>{project.title}</div>
								<div className="project-description">
									<ul>
										{
											project.description.split(";").map((item, index) => {
												return <li key={index}>{item}</li>
											})
										}
									</ul>
								</div>
							</div>
						</div>
					</React.Fragment>
				</div>
			))}
		</div>
	);
};

export default BuyStepsDex;
