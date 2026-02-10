import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4E0BAQGs7EmZ0yQMpQ/company-logo_200_200/company-logo_200_200/0/1661493099915?e=2147483647&v=beta&t=q1FaDtUzcTHCfhVD2ZOVUAonY0kXQeYW3k0PjSLw1Zg"
								alt="img"
								className="work-image"
							/>
							<div className="work-title">Internpe</div>
							<div className="work-subtitle">
								Web-Design Intern
							</div>
							<div className="work-duration">2024-May - 2024-June</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4D0BAQGahJkPfWKn2w/company-logo_200_200/company-logo_200_200/0/1631330235832?e=2147483647&v=beta&t=-EtjPjvbYmDwAu5jHjHmKNQce4A44B7idH6H9sFPiOA"
								alt="img"
								className="work-image"
							/>
							<div className="work-title">Brainybeam</div>
							<div className="work-subtitle">
								Web-Devlopment With MERN stack Intern
							</div>
							<div className="work-duration">2025-May - 2025-June</div>
						</div>
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPzIsOLkRme8O6yUVMJC9KbhjI4CLa3hzEw&s"
								alt="stackdot"
								className="work-image"
							/>
							<div className="work-title">StackDot</div>
							<div className="work-subtitle">
								Jr. MERN stack Developer
							</div>
							<div className="work-duration">2025-nov - present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
