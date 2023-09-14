function MenuItem({ liClassName, key, image, isPopular, name, description }) {
  return (
    <li className={"menu-item__li " + liClassName} key={key}>
      <img className="menu-item__image" src={image} />
      <div className="menu-item__text">
        {isPopular === true ? (
          <button className="menu-item__popular">POPULAR</button>
        ) : undefined}
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
      </div>
    </li>
  );
}

export default MenuItem;
