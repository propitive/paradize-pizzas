import tioSebasCooking from "../../images/featured/tioSebasCooking.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { aboutInfoCards } from "../../utils/constants";

function About() {
  return (
    <>
      <Header />
      {/* <div className="about__subsections">
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
      </div> */}
      <div className="about">
        <div className="about__header">
          <p className="about__header__subtitle">
            Disrupting the overpriced catering industry with{" "}
            <a className="about__header__subtitle__emphasis">radically fair</a>{" "}
            prices and{" "}
            <a className="about__header__subtitle__emphasis">quality</a> pizza.
          </p>
        </div>
        <div className="about__showcase">
          <h2 className="about__showcase-header">
            <a className="about__header__subtitle__emphasis">Simplifying</a> The
            Catering Experience
          </h2>
          <div className="about__showcase-items">
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">28</h3>
              <p className="about__showcase-item__subtitle">Clients</p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">24</h3>
              <p className="about__showcase-item__subtitle">
                Years of Experience
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">20</h3>
              <p className="about__showcase-item__subtitle">
                Kitchens Installed
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">4</h3>
              <p className="about__showcase-item__subtitle">Vinyl Projects</p>
            </div>
          </div>
        </div>
        <div className="about__what">
          {aboutInfoCards.map((info) => {
            return (
              <div className="about__what-card">
                <img className="about__what-card__icon" src={info.icon} />
                <p className="about__what-card__paragraph">{info.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
