import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact Me
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">Skills & Tools
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
