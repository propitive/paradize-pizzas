import tioSebasCooking from "../../images/featured/tioSebasCooking.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <img className="about__image" src={tioSebasCooking} />
        <div className="about__text">
          <h1 className="about__title">Paradize Pizzas</h1>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
