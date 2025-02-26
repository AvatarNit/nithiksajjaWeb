import React from 'react'
import webBanner from "../assets/websiteBanner.png"

const Home = () => {
  return (
    <>
        <section className="pt-3 bannerBg">
            <img src={webBanner} className="img-fluid d-block mx-auto" height="50%" width="50%"></img>
        </section>
        <section className="pt-5">
            <div className="container homeDiv">
                <div className="row">
                    <div className="col-lg-4">
                        <i className="bi bi-link-45deg iconClass darkBlueText"></i>
                        <h2><b>Links</b></h2>
                        <p>Social platforms <br /> YouTube, GitHub, and More</p>
                        <p><a className="btn darkBlueBg iconBlue" href="/links" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-laptop iconClass darkGreenText"></i>
                        <h2><b>Websites</b></h2>
                        <p>Websites That I Have Created <br /> That Are Open to View</p>
                        <p><a className="btn darkGreenBg iconGreen" href="/websites" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-envelope iconClass darkBlueText"></i>
                        <h2><b>Contact Me</b></h2>
                        <p>Contact Me With <br />Questions, Inqueries, or Feedback</p>
                        <p><a className="btn darkBlueBg iconBlue" href="/contact" role="button">View details &raquo;</a></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home