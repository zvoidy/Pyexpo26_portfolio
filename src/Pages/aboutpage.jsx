const AboutPage = () => {
  return (
      <div className="container-xxl py-5" id="About">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-5">
            <h1 className="about-main-title">ABOUT</h1>
          </div>

          <div className="row g-5 align-items-center">
            {/* Image Grid */}
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s">
                  <div className="about-experience rounded">
                    <img src="/img/About/laptop.png" alt="Experience Image" />
                  </div>
                </div>

                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="about-experience color-4 rounded">
                    <img 
                      className="img-fluid rounded" 
                      src="/img/About/ipswhite.png" 
                      alt="IPS Logo" 
                      loading="lazy" 
                      onLoad={(e) => e.target.parentNode.classList.add('loaded')}
                    />
                  </div>
                </div>

                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="about-experience color-3 rounded">
                    <img 
                      className="img-fluid rounded" 
                      src="/img/About/kite.png" 
                      alt="KITE Logo" 
                      loading="lazy" 
                      onLoad={(e) => e.target.parentNode.classList.add('loaded')}
                    />
                  </div>
                </div>

                <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="about-experience color-2 rounded">
                    <img 
                      className="img-fluid rounded" 
                      src="/img/About/python.png" 
                      alt="Python Logo" 
                      loading="lazy" 
                      onLoad={(e) => e.target.parentNode.classList.add('loaded')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <div className="about-content">
                {/* <h2 className="about-section-title">ABOUT PYEXPO 25</h2> */}
                
                <p className="about-text">
                  <strong>PYEXPO</strong>, is an exclusive hackathon event conducted at KGISL Institute of Technology. 
                  Organized by the IPS Tech Community, this event provides first-year students with an exciting opportunity 
                  to explore the world of hackathons - an experience that many have never encountered before. 
                  The IPS Tech Community is committed to empowering students by fostering innovation, collaboration, and technical growth.
                </p>

                <h3 className="purpose-title">PURPOSE OF PYEXPO</h3>
                <p className="about-text">
                  The primary goal of PyExpo is to introduce first-year students to the collaborative, 
                  problem-solving nature of hackathons. It offers them a platform to nurture their technical skills, 
                  promote innovative thinking, and encourage teamwork. By participating in PyExpo, 
                  students gain hands-on experience in real-world problem-solving while being guided 
                  and mentored by seniors and experienced faculty members.
                </p>

                {/* Video Trigger */}
                <div className="video-section">
                  <div className="video-content">
                    <div className="video-button">
                      <a
                        href="https://youtu.be/CCljjhGUaFc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                      >
                        <div className="play-icon">
                          <span>▶</span>
                        </div>
                      </a>
                    </div>
                    <div className="video-text">
                      <h4>Experience the Excitement of PyExpo'24</h4>
                      <p>Hit Play and Dive In!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default AboutPage;
