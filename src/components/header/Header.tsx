import "./header.css";
import br_flag from "../../assets/brazilian_flag.svg";
import eng_flag from "../../assets/english_flag.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="nav__menu">
        <ul className="nav__list">
          <div className="nav__nav">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills & Tools
              </a>
            </li>
          </div>

          <div className="nav__flag">
            <li className="lang__flags">
              <img
                src={br_flag}
                alt="Brazilian flag"
                className="flag"
              />
              <img
                src={eng_flag}
                alt="English flag"
                className="flag"
              />
            </li>
          </div>

        </ul>
      </div>
    </header>
  );
};

export default Header;
