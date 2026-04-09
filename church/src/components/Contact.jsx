import { FaWhatsapp } from "react-icons/fa";

function Contact() {

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Fale Conosco</h2>
      <p className="contact__paragraph">WhatsApp: (11) 99999-9999</p>
      <p className="contact__paragraph">Email: contato@igreja.com</p> 
      <FaWhatsapp className="contact__icon"/>     
    </section>
  )
}

export default Contact;
