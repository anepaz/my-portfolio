import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home">Home</i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-user-following">Contact Me</i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="icon-book-open">Skills & Tools</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
