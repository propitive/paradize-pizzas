import { explorePhotos } from "../../utils/constants";

function ExploreOurMenu() {
  console.log(explorePhotos);
  return (
    <section className="explore">
      <h2 className="explore__header">EXPLORE OUR MENU</h2>
      <div className="explore__items">
        {explorePhotos.map((item, i) => {
          return (
            <div className="explore__item" key={i}>
              <div className="explore__image-wrapper">
                <img className="explore__image" src={item.image} />
              </div>
              <h2 className="explore__title"> {item.title} </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExploreOurMenu;
