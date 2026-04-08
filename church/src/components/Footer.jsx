function Footer() {
  const year = new Date();

  return (
    <footer className="footer">
      <h2 className="footer__title">Igreja Cristã</h2>
      <address>Rua Fictícia, 123 - Bairro Normal - Cidade Comum</address>
      <p>Domingo 09h ou 18h | Quarta 20h</p>

      <p>&copy; {year.getUTCFullYear()} Igreja Cristã - Todos direitos reservados</p>

    </footer>
  )
}

export default Footer;
