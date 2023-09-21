import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ModalContactForm({ handleCloseModal, isOpen }) {
  return (
    <ModalTemplate
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={"Coming right up!"}
      buttonText={"SEE GALLERY"}
      link={"/gallery"}
    >
      <p className="modal-submit__paragraph">
        Thank you for reaching out to us, we will reach back out to you as soon
        as possible. In the meantime, check out our mouth-watering gallery!
      </p>
    </ModalTemplate>
  );
}

export default ModalContactForm;
