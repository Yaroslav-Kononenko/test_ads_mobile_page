import menu_logo from '../../images/Menu.svg';
import scroll_arrow from '../../images/scroll_arrow.svg';
import './Header.scss';

export const Header = () => {
  return(
    <header className="App__section header">
      <nav className="Nav">
        <img 
          src={menu_logo} 
          alt="nav_img" 
          className="Nav__menu"
        />
      </nav>

      <div className="container">
        <h1 className="header__title">
          Дивіться ТБ та кіно без реклами в єдиній передплаті
        </h1>

        <h3 className="header__text">
          Популярні телеканали та величезна бібліотека фільмів,серіалів, мультфільмів, трансляцій у єдиній передплаті.
        </h3>
      </div>

      <a href="#WithoutInternet" className="header__scroll">
          <img src={scroll_arrow} alt="" />
      </a>
    </header>
  );
}
