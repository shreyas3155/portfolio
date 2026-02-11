import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/design.css";

// Import images
// import img1 from "../assets/MyDesign/Frame 2.png";
import img2 from "../assets/MyDesign/Instagram Meal Post.png";
import img3 from "../assets/MyDesign/Instagram post - 1 pizza.png";
import img4 from "../assets/MyDesign/Instagram post - 3 God.png";
import img5 from "../assets/MyDesign/Instagram post - 3.png";
import img6 from "../assets/MyDesign/Typo 1.png";

const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects") || { description: "My Design Portfolio", keywords: [] }; // Fallback to projects SEO or default

    const [selectedImage, setSelectedImage] = useState(null);

    // Configuration array for images - Easy to add new pics here
    const designs = [
        // { id: 1, src: img1, title: "Frame Design" },
        { id: 2, src: img2, title: "Social Media Post" },
        { id: 3, src: img3, title: "Food Promotion" },
        { id: 4, src: img4, title: "Divine Post" },
        { id: 5, src: img5, title: "Product Showcase" },
        { id: 6, src: img6, title: "Typography Art" },
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Design | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="design" />
                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="design-page">
                        <div className="title design-title">
                            My Designs
                        </div>

                        <div className="subtitle design-subtitle">
                            A collection of my creative works and visual experiments.
                        </div>

                        <div className="masonry-grid">
                            {designs.map((design) => (
                                <div
                                    key={design.id}
                                    className="masonry-item"
                                    onClick={() => openLightbox(design)}
                                >
                                    <img src={design.src} alt={design.title} loading="lazy" />
                                    <div className="item-overlay">
                                        <span className="item-title">{design.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <div
                className={`lightbox-modal ${selectedImage ? 'open' : ''}`}
                onClick={closeLightbox}
            >
                {selectedImage && (
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeLightbox}>&times;</button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="lightbox-image"
                        />
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Design;
