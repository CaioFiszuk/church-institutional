import logo from "../assets/images/logo.png";

function Header() {

  return (
    <header className="header">
      <img 
        src={logo} 
        alt="Igreja Cristã"
        className="header__logo" 
      />

      <nav>
        <ul className="header__list">
          <li>
            <a href="#hero" className="header__list-item__link">Início</a>
          </li>
          <li>
            <a href="#services" className="header__list-item__link">Programação</a>
          </li>
          <li>
            <a href="#about" className="header__list-item__link">Sobre</a>
          </li>
          <li>
            <a href="#sermons" className="header__list-item__link">Mensagens</a>
          </li>
          <li>
            <a href="#location" className="header__list-item__link">Como chegar</a>
          </li>
          <li>
            <a href="#contact" className="header__list-item__link">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
