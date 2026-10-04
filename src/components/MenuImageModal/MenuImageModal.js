import { useEffect, useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./MenuImageModal.css";

function MenuImageModal({ image, name, trigger, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => () => {
    if (trigger?.isConnected) trigger.focus();
  }, [trigger]);

  return createPortal(
    <dialog ref={dialogRef} className="menu-image-modal" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="menu-image-modal__content">
        <button type="button" className="menu-image-modal__close"
          aria-label="Close photo" onClick={onClose}>×</button>
        <figure className="menu-image-modal__figure">
          <img className="menu-image-modal__image" src={image} alt={name} />
          <figcaption><h2 id={titleId}>{name}</h2></figcaption>
        </figure>
      </div>
    </dialog>, document.body
  );
}

export default MenuImageModal;
