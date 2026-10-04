import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import iconPhone from "../../images/icons/iconPhone.png";

function ContactForm({ handleVisibleReset }) {
  return (
    <>
      <Header handleVisibleReset={handleVisibleReset} />
      <h1 className="contact-form__header">Request a Quote</h1>
      <div className="contact-form__intro">
        <p>Tell us a little about your event. Estimates are welcome.</p>
        <BookOnlineButton className="contact-form__quote-button" />
      </div>
      <div className="contact-form__seperator-container">
        <hr className="contact-form__seperator" />
        <h2 className="contact-form__seperator-text">OR</h2>
      </div>
      <div className="contact-form__number-container">
        <img className="contact-form__number-image" src={iconPhone} alt="Icon of a phone" />
        <a className="contact-form__number" href="tel:4696058089">(469) 605-8089</a>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
