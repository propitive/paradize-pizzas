import { galleryCards } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Gallery() {
  return (
    <>
      <Header />
      <section className="gallery">
        <ul className="gallery__container">
          {galleryCards.map((card) => {
            return (
              <li className="gallery__card" key={card.id}>
                <img className="gallery__image" src={card.image} />
                <div className="gallery__description">
                  <h3 className="gallery__title">{card.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
}
export default Gallery;
