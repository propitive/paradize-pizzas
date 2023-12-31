import { useState } from "react";
import { Link } from "react-router-dom";
import { explorePhotos } from "../../utils/constants";

function ExploreOurMenu() {
  return (
    <section className="explore">
      <h2 className="explore__header">EXPLORE OUR MENU</h2>
      <div className="explore__items">
        {explorePhotos.map((item, i) => {
          return (
            <Link
              to={item.path}
              style={{ textDecoration: "none", alignSelf: "center" }}
              key={i}
            >
              <div className="explore__item">
                <div className="explore__image-wrapper">
                  <img className="explore__image" src={item.image} />
                </div>
                <h2 className="explore__title">{item.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ExploreOurMenu;
