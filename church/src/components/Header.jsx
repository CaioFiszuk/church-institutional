import logo from "../assets/logo.png";

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
          <li className="header__list-item">Início</li>
          <li className="header__list-item">Sobre</li>
          <li className="header__list-item">Cultos</li>
          <li className="header__list-item">Mensagens</li>
          <li className="header__list-item">Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
