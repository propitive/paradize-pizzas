function MenuItem({
  liClassName,
  keyValue,
  image,
  isPopular,
  isSpecialRequest,
  name,
  description,
}) {
  return (
    <li className={"menu-item__li " + liClassName} key={keyValue}>
      <img className="menu-item__image" src={image} />
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
    </li>
  );
}

export default MenuItem;
