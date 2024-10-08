import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Projects,
  Scrollup,
  Skills,
} from "../components";

const MainPage = () => {
  return (
    <div className="layout">
      <div className="main">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Scrollup />
      </div>
    </div>
  );
};

export default MainPage;
