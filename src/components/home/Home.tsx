import { Tooltip } from "antd";

import "./home.css";

const Home = () => {
  // tooltip
  const text = <span className="tooltip-resume">Download CV</span>;

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href={`mailto:viethoangpham25@gmail.com`}
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href={`https://github.com/hoangbru`}
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div
            className="home__img bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/hi.jpeg)`,
            }}
          ></div>

          <div className="home__data">
            <h1 className="home__title">.holefam</h1>
            <p className="home__description">Front-end web dev from Hanoi</p>
            <Tooltip
              placement="top"
              color="rgba(51,51,51,0.7)"
              overlayClassName="ant-tooltip-inner"
              title={text}
            >
              <a
                href="/CV_Pham_Viet_Hoang.pdf"
                download="CV-Pham-Viet-Hoang.pdf"
                className="button button--flex resume"
              >
                My Resume
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="home__scroll">
        <a href="#about" className="nav__link">
          <i className="uil uil-angle-double-down home__scroll-down"></i>
          To scroll down for more
        </a>
      </div>
    </section>
  );
};

export default Home;
