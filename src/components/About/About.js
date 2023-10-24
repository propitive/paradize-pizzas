import tioSebasCooking from "../../images/featured/tioSebasCooking.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="about__subsections">
        <section className="about__container">
          <img className="about__image" src={tioSebasCooking} />
          <div className="about__text">
            <h2 className="about__subheading">About Paradize Pizzas</h2>
            <p className="about__paragraph">
              Enjoy fresh wood oven pizzas made onsite; let us cater your next
              event!
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
