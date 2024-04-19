import React from "react";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description } = props;
	const listItems = description.split(",");
	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-title">{title}</div>
					<div className="project-description">
						<ul>
							{
								listItems.map((item, index) => {
									return <li key={index}>{item}</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
