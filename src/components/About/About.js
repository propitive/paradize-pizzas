import tioSebasCooking from "../../images/featured/tioSebasCooking.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function About() {
  return (
    <>
      <Header />
      {/* <div className="about__header">
        <h1 className="about__title">Authentic. Delicious. Fresh.</h1>
        <p className="about__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="about__overlay"></div>
      </div> */}
      <div className="about__subsections">
        <section className="about__container">
          <img className="about__image" src={tioSebasCooking} />
          <div className="about__text">
            <h2 className="about__subheading">About Paradize Pizzas</h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </section>
        {/* <section className="about__container">
          <div className="about__text">
            <h2 className="about__subheading">Paradize Pizzas</h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <img className="about__image" src={tioSebasCooking} />
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default About;
