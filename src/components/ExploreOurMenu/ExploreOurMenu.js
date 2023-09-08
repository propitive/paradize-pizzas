import { explorePhotos } from "../../utils/constants";

function ExploreOurMenu() {
  console.log(explorePhotos);
  return (
    <section className="explore">
      {explorePhotos.map((item, i) => {
        {
          console.log(item);
        }
        <div className="explore__item" key={i}>
          <img className="explore__image" src={item.image} />
          <h2 className="explore__title"> {item.title} </h2>
        </div>;
      })}
    </section>
  );
}

export default ExploreOurMenu;
