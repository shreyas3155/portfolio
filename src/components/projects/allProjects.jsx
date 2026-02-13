import React from "react";
import { motion } from "framer-motion"; // Import motion

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	// Animation variants for the container to stagger children
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Stagger each project by 0.2s
			},
		},
	};

	// Animation variants for each project item
	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="all-projects-container"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
			variants={containerVariants}
		>
			{INFO.projects.map((project, index) => (
				<motion.div
					className="all-projects-project"
					key={index}
					variants={itemVariants}
				>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</motion.div>
			))}
		</motion.div>
	);
};

export default AllProjects;
