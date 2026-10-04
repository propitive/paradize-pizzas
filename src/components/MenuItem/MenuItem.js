import { useState } from "react";
import MenuImageModal from "../MenuImageModal/MenuImageModal";

function MenuItem({
  liClassName,
  keyValue,
  image,
  isPopular,
  isSpecialRequest,
  name,
  description,
}) {
  const [imageTrigger, setImageTrigger] = useState(null);
  return (
    <li className={"menu-item__li " + liClassName} key={keyValue}>
      <button type="button" className="menu-item__image-button"
        aria-label={`View ${name} photo`} aria-haspopup="dialog"
        onClick={(event) => setImageTrigger(event.currentTarget)}>
        <img className="menu-item__image" src={image} alt={name} />
      </button>
      <div className="menu-item__text">
        <div className="menu-item__buttons">
          {isPopular === true ? (
            <button className="menu-item__popular">POPULAR</button>
          ) : undefined}
          {isSpecialRequest === true ? (
            <button className="menu-item__popular">SPECIAL REQUEST</button>
          ) : undefined}
        </div>
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
      </div>
      {imageTrigger && <MenuImageModal image={image} name={name}
        trigger={imageTrigger} onClose={() => setImageTrigger(null)} />}
    </li>
  );
}

export default MenuItem;
