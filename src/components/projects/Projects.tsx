import { useEffect, useRef, useState } from "react";
import "./projects.css";

import { IProduct } from "../../interface/product";
import { ITechnology } from "../../interface/technology";

const Projects = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "QLtask",
      image: "/images/qltask.png",
      description:
        "Task management website, which is built based on the Trello use Next.js 14, PostgreSQL and Prisma",
      link: "https://qltask.vercel.app/",
      linkGithub: "https://github.com/hoangbru/QLtask",
      technologies: [
        {
          id: 1,
          name: "TypeScript",
          tag: "typescript",
        },
        {
          id: 2,
          name: "Next.js",
          tag: "",
        },
        {
          id: 3,
          name: "Tailwind CSS",
          tag: "tailwind-css",
        },
        {
          id: 4,
          name: "PostgreSQL",
          tag: "postgresql",
        },
      ],
    },
    {
      id: 2,
      name: "easyFood",
      image: "/images/easyFood.png",
      description:
        "Graduation project with the participation of 7 team members, focusing on the development of an automated food ordering system named easyFood. The system enables automatic menu selection through QR codes. React + Typescript + Redux Toolkit is employed for the front-end, and PHP (Laravel framework) + MySQL is used for the back-end",
      link: "https://easyfood.firebbq.id.vn/",
      linkGithub: "",
      technologies: [
        {
          id: 1,
          name: "TypeScript",
          tag: "typescript",
        },
        {
          id: 2,
          name: "React",
          tag: "react",
        },
        {
          id: 3,
          name: "Redux",
          tag: "redux",
        },
        {
          id: 4,
          name: "PHP",
          tag: "php",
        },
      ],
    },
  ];

  const Paragraph = ({ text }: { text: string | undefined }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isLongText, setIsLongText] = useState(false);
    const textRef = useRef(null);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    useEffect(() => {
      if (textRef.current) {
        const { scrollHeight } = textRef.current;
        const lineHeight = parseFloat(
          getComputedStyle(textRef.current).lineHeight
        );
        const maxHeight = lineHeight * 2;
        setIsLongText(scrollHeight > maxHeight);
      }
    }, [text]);

    return (
      <div className="flex flex-col gap-[2px] justify-center mb-6">
        <p
          ref={textRef}
          className={`projects__description ${
            isReadMore ? "read-more" : "read-more expanded"
          }`}
        >
          {text}
        </p>
        {isLongText && (
          <span
            onClick={toggleReadMore}
            className="w-fit text-sm cursor-pointer text-blue-500 hover:underline"
          >
            {isReadMore ? " Read More" : " Show Less"}
          </span>
        )}
      </div>
    );
  };

  const Technologies = ({ techs }: { techs: ITechnology[] }) => {
    return (
      <div className="projects__tag">
        {techs.map((item: ITechnology) => {
          return (
            <div key={item.id}>
              {item.tag ? (
                <i className={`bx bxl-${item.tag} projects__tag-icon`}></i>
              ) : (
                <img
                  src="/images/nextjs-icon.png"
                  alt="nextjs"
                  className="projects__tag-icon project__tag-image"
                  style={{ color: "rgba(55, 159, 200, 1)" }}
                  width={45}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const ActionButton = ({
    link,
    linkGithub,
  }: {
    link: string | undefined;
    linkGithub: string | undefined;
  }) => {
    return (
      <div className="projects__button">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__button-demo"
        >
          <i className="bx bx-link-external"></i>
          Demo
        </a>
        {linkGithub && (
          <a
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__button-github"
          >
            <i className="bx bxl-github"></i>
            Github
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        The projects that I have completed
      </span>

      <div className="projects__container container grid projects__div">
        {products?.length == 0 ? (
          "No results."
        ) : (
          <>
            {products?.map((item: IProduct) => (
              <div className="projects__card" key={item.id}>
                <img
                  src={item.image}
                  alt={`projects-${item.name}`}
                  className="projects__img"
                />
                <div className="projects__content">
                  <h3 className="projects__title">{item.name}</h3>
                  <Paragraph text={item.description} />
                  <Technologies techs={item.technologies} />
                  <ActionButton link={item.link} linkGithub={item.linkGithub} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
