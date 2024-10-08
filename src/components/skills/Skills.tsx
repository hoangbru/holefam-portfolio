import { Fragment } from "react";
import "./skills.css";
import { ITechnology } from "../../interface/technology";

const Skills = () => {
  const technologies: ITechnology[] = [
    {
      id: 1,
      name: "HTML5",
      tag: "html5",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      id: 2,
      name: "CSS3",
      tag: "css3",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      id: 3,
      name: "JavaScript",
      tag: "javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      name: "TypeScript",
      tag: "typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      id: 5,
      name: "React",
      tag: "react",
      link: "https://reactjs.org/",
    },
    {
      id: 6,
      name: "Next.js",
      tag: "",
      link: "https://nextjs.org/",
    },
    {
      id: 7,
      name: "Vue.js",
      tag: "vuejs",
      link: "https://vuejs.org/",
    },
    {
      id: 8,
      name: "Angular",
      tag: "angular",
      link: "https://angular.io/",
    },
    {
      id: 9,
      name: "Node.js",
      tag: "nodejs",
      link: "https://nodejs.org/",
    },
    {
      id: 10,
      name: "Tailwind CSS",
      tag: "tailwind-css",
      link: "https://tailwindcss.com/",
    },
    {
      id: 11,
      name: "Bootstrap",
      tag: "bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      id: 12,
      name: "MongoDB",
      tag: "mongodb",
      link: "https://www.mongodb.com/",
    },
    {
      id: 13,
      name: "Git",
      tag: "git",
      link: "https://git-scm.com/",
    },
    {
      id: 14,
      name: "Github",
      tag: "github",
      link: "https://github.com/",
    },
    {
      id: 15,
      name: "Docker",
      tag: "docker",
      link: "https://www.docker.com/",
    },
  ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My skills</h2>
      <span className="section__subtitle">
        These are the tools, languages, and technologies that I use to make my
        product everyday
      </span>

      <div className="skills__container container">
        <div className="skills__content">
          <div className="skills__box">
            {technologies.length === 0 ? (
              "No results."
            ) : (
              <Fragment>
                {technologies.map((item: ITechnology) => {
                  return (
                    <div
                      className="skills__data flex flex-col justify-center items-center"
                      key={item.id}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.tag ? (
                          <i className={`bx bxl-${item.tag} skills__icon`}></i>
                        ) : (
                          <img
                            src="/images/nextjs-icon.png"
                            alt="nextjs"
                            className="skills__icon image flex justify-center items-center"
                            width={56}
                            height="auto"
                          />
                        )}
                      </a>
                      <h3 className="skills__name">{item.name}</h3>
                    </div>
                  );
                })}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
