import { FaWhatsapp } from "react-icons/fa";

function Hero() {

  return (
    <main className="hero">
        <h1 className="hero__main-text">Uma igreja que vive a Palavra e ama pessoas</h1>

        <p className="hero__paragraph">Domingos às 18h | Quartas às 20h</p>

        <div className="hero__info">
          <a href="#" className="hero__link">Como Chegar?</a>
          <FaWhatsapp className="hero__icon"/>
        </div>
    </main>
  )
}

export default Hero;
