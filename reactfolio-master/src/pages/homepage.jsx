import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import MyPhoto3 from "../assets/My photo3.png";

import "./styles/homepage.css";
import { motion } from "framer-motion";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<motion.div
								className="homepage-first-area-left-side"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
							>
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</motion.div>

							<motion.div
								className="homepage-first-area-right-side"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.8,
									ease: "easeOut",
									delay: 0.2,
								}}
							>
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={MyPhoto3}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</motion.div>
						</div>

						<motion.div
							className="homepage-socials"
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.2,
										delayChildren: 0.5,
									},
								},
							}}
						>
							{[
								{
									icon: faGithub,
									link: INFO.socials.github,
								},
								{
									icon: faLinkedin,
									link: INFO.socials.linkedin,
								},
								{
									icon: faInstagram,
									link: INFO.socials.instagram,
								},
								{
									icon: faMailBulk,
									link: `mailto:${INFO.main.email}`,
								},
							].map((social, index) => (
								<motion.a
									key={index}
									href={social.link}
									target="_blank"
									rel="noreferrer"
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0 },
									}}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<FontAwesomeIcon
										icon={social.icon}
										className="homepage-social-icon"
									/>
								</motion.a>
							))}
						</motion.div>

						<motion.a
							href="/resume_main (5).pdf"
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: "none" }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.5 }}
						>
							<motion.button
								className="button"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span>Download</span>
							</motion.button>
						</motion.a>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
