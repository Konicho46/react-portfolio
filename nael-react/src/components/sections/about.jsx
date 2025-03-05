import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiInstagramLine, RiBehanceLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/foto-profil.png"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Nicholas Nathanael Suhendar</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/nicholassuhendar/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/Konicho46"><i><RiGithubLine size={20} /></i></a></li>
                                        <li><a href="https://www.instagram.com/konicho.46/"><i><RiInstagramLine size={20} /></i></a></li>
                                        <li><a href="https://www.behance.net/nicholasuhendar"><i><RiBehanceLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Nicholas N. Suhendar, <span>Web Developer</span> and UX / UI Designer
                                    Based in Indonesia.
                                </h2>
                                <div className="hero-btns">
                                    <a href="https://drive.google.com/file/d/126aSbNvt94aj-7VvhjWJTLOYwcQUfOJK/view" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Photography</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Video Editing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Graphic Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> UI/UX Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Data Analyst</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About