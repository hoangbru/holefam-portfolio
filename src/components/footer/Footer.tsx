import "./footer.css";

const Footer = () => {
  const social = [
    { href: "https://www.facebook.com/tinhlinhxanh/", icon: "bxl-facebook" },
    { href: "https://www.instagram.com/tinhlinhxanh/", icon: "bxl-instagram" },
    { href: "https://www.linkedin.com/in/viethoangdev/", icon: "bxl-linkedin" },
    { href: "https://web.telegram.org/k/@plousdolby", icon: "bxl-telegram" },
    { href: "https://x.com/tinhlinh_xanh", icon: "bxl-twitter" },
    { href: "https://discord.gg/T5tzGZ6Uhg", icon: "bxl-discord-alt" },
    { href: "https://www.figma.com/@hoangbru", icon: "bxl-figma" },
  ];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__external">
          {social.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              className="footer__external-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>
        <p className="footer__copy">
          &copy; 2024 Made & design by{" "}
          <span>
            <a href="/#home">.holefam</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
