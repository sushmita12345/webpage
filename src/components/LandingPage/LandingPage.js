import './LandingPage.css';
import '../Footer/Footer.css';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <section className="main-section-wrap">
                <div className="main-section-subwrap">
                    <div className="main-sec-cont">
                        <div className="section-1">
                            <div className="section-1-a">
                                <h1 className="sec-1ah">Hi! <p className="sec-1as">I AM </p><button className="sec-1a-btn">UI/UX</button></h1>
                                <h1 className="sec-1ah">Gafarillo </h1>
                                <div className="sec-1ap-wrap">
                                    <p className="sec-1ap">UI/UX Designer with over 3 years of experience</p>
                                    <p className="sec-1ap"> with great product designing skills.</p>
                                </div>
                                <div className="sec-1a-cont">
                                    <button className="sec-1a-hire">Hire Me</button>
                                    <span className="sec-1a-email">Email Me</span>
                                </div>
                            </div>
                            <div className="section-1-b">
                                <div className="sec-1b-a">
                                    <p className="sec-1b-head">3 Years</p>
                                    <p className="sec-1b-para">Experience</p>
                                </div>
                                <div className="sec-1b-b">
                                    <div className="sec-1b-ba">
                                        <p className="sec-1b-head">40+</p>
                                        <p className="sec-1b-para">Projects</p>
                                    </div>
                                    <div className="sec-1b-bb">
                                        <p className="sec-1b-head">Los Angeles</p>
                                        <p className="sec-1b-para">Living Place</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <Footer />
                       
                    </div>
                    <div className="section-2">
                        <img src="./img/cover.jpg" className="section-img" alt="cover-img"/>
                        <div className="gradient-circle-1">
                            <div className="gradient-circle-2">
                            </div>
                        </div>
                        <div className="section-2-head">
                            <p>Bring Real Life Ideas Into <span className="section-2-design">DESIGN</span></p>
                            <p>Is My Passion</p>
                        </div>
                        <div className="section-1-a-resp">
                            <h1 className="sec-1ah">Hi! <p className="sec-1as">I AM </p><button className="sec-1a-btn">UI/UX</button></h1>
                            <h1 className="sec-1ah">Gafarillo </h1>
                            <div className="sec-1ap-wrap">
                                <p className="sec-1ap-resp">UI/UX Designer with over 3 years of experience</p>
                                <p className="sec-1ap-resp"> with great product designing skills.</p>
                            </div>
                            <div className="sec-1a-cont-resp">
                                <button className="sec-1a-hire-resp">Hire Me</button>
                                <span className="sec-1a-email">Email Me</span>
                            </div>
                        </div>
                        <div className="section-2-img-wrap">
                            <div className="section-2-cont-single">
                                <p className="section-2-img-head">24 Years</p>
                                <p>Age</p>
                            </div>
                            <div className="section-2-img-cont">
                                <div className="section-2-img-sub-cont">
                                    <p className="section-2-img-head">Harvard</p>
                                    <p>University</p>
                                </div>
                                <div>
                                    <p className="section-2-img-head">Photography</p>
                                    <p>Hobby</p>
                                </div>
                            </div>
                            <div className="section-2-img-cont">
                                <div>
                                    <p className="section-2-img-head">Los Angeles</p>
                                    <p>Living Place</p>
                                </div>
                                <div>
                                    <p className="section-2-img-head">4.0</p>
                                    <p>GPA</p>
                                </div>
                            </div>
                        </div>
                        <footer className="section-1-c-footer">
                            <div className="sec-1c-wrapper">
                                <div className="sec-1c-a">
                                    <h3 className="sec-1c-fa">Project case</h3>
                                    <h3 className="sec-1c-fa">Studies</h3>
                                    <div className="sec-1c-btn-cont">
                                        <button className="sec-1c-btn">View Behance</button>
                                    </div>
                                </div>
                                <div className="sec-1c-b">
                                    <p className="sec-1c-store">Sneakers Store</p>
                                    <p className="sec-1c-store">Flames Fitness</p>
                                    <p className="sec-1c-store">Thenx Store</p>
                                </div>
                            </div>
                        </footer>

                    </div>
                  
                </div>
               
            </section>
            
        </>
    )
}

export default LandingPage


                        