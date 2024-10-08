import { useEffect } from "react";

import "./scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp: HTMLElement | null = document.querySelector(".scrollup");
      if (scrollUp) {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
