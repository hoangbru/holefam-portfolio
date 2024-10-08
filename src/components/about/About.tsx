import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Some infomation about me</span>

      <div className="about__container container grid">
        <img src="/images/me.jpeg" alt="" className="about__img" />

        <div className="about__data">
          <div className="about__info grid">
            <div className="about__box">
              <i className="bx bx-user-circle about__icon"></i>
              <h3 className="about__title">Full name</h3>
              <span className="about__subtitle">Phạm Việt Hoàng</span>
            </div>

            <div className="about__box">
              <i className="bx bxs-graduation about__icon"></i>
              <h3 className="about__title">Education</h3>
              <span className="about__subtitle">
                University of Transport and Communitications
              </span>
            </div>

            <div className="about__box">
              <i className="bx bx-map about__icon"></i>
              <h3 className="about__title">Location</h3>
              <span className="about__subtitle">Cau Giay, Hanoi, Vietnam</span>
            </div>
          </div>
          <div className="about__description">
            As a Front-end Web Developer with hands-on experience in building
            professional web applications, I have a strong foundation in HTML,
            CSS, JavaScript, and modern front-end frameworks such as React and
            Vue.js. I am an active communicator with experience in teamwork and
            problem-solving skills.
          </div>
          <a href="#contact" className="button button--flex about__talk">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
