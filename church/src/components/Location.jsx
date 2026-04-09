function Location() {

  return (
    <section className="location" id="location">
      <h2 className="location__title">Onde Estamos?</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32070.435112850922!2d-103.15711570471949!3d32.33899841999849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1775605436780!5m2!1spt-BR!2sbr" className="location__map"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <address className="location__paragraph">Endereço: Rua Fictícia, 123 - Bairro Normal - Cidade Comum</address>
    </section>
  )
}

export default Location;
