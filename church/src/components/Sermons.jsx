import sermon1 from "../assets/images/sermon1.png";
import sermon2 from "../assets/images/sermon2.png";
import sermon3 from "../assets/images/sermon3.png";

function Sermons() {

  return (
    <section className="sermons" id="sermons">
      <h2 className="sermons__title">Últimas mensagens</h2>

      <section className="sermons__box">
        <img src={sermon1} alt="Sermon thumb" className="sermons__media"/>
        <img src={sermon2} alt="Sermon thumb" className="sermons__media"/>
        <img src={sermon3} alt="Sermon thumb" className="sermons__media"/>
      </section>

      <button className="sermons__button">Ver todas</button>
      
    </section>
  )
}

export default Sermons;
