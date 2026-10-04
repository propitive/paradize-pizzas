import { useState } from "react";
import { galleryCards } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuImageModal from "../MenuImageModal/MenuImageModal";

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
      <Header />
      <section className="gallery">
        <ul className="gallery__container">
          {galleryCards.map((card) => {
            return (
              <li className="gallery__card" key={card.id}>
                <button type="button" className="gallery__photo-button"
                  aria-label={`View ${card.title} photo`} aria-haspopup="dialog"
                  onClick={(event) => setSelectedPhoto({ card, trigger: event.currentTarget })}>
                  <img className="gallery__image" src={card.image} alt={card.title} />
                  <span className="gallery__description">
                    <span className="gallery__title">{card.title}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      {selectedPhoto && <MenuImageModal image={selectedPhoto.card.image}
        name={selectedPhoto.card.title} trigger={selectedPhoto.trigger}
        onClose={() => setSelectedPhoto(null)} />}
      <Footer />
    </>
  );
}
export default Gallery;
