import './Total.scss';

export const Total = () => {
  return(
    <section className="App__section Total">
      <h2 className="Total__title">
        Підключіть передплату
        <br />
        за 1 грн та отримуйте:
      </h2>

      <div className="Total__textContainer">
        <div className="Textbox">
          <span className="Textbox__title">
            ТВ-архів  
          </span>
          <br />
          <span className="Textbox__text">
            телепередач
            <br />
            до 14 днів
          </span>
        </div>

        <div className="Textbox">
          <span className="Textbox__title">
            Full HD 
          </span>
          <br />
          <span className="Textbox__text">
            якість&nbsp;тільки
            <br />
            за&nbsp;передплатою
          </span>
        </div>

        <div className="Textbox">
          <span className="Textbox__title">
            10%&nbsp;знижка 
          </span>
          <br />
          <span className="Textbox__text">
            на прем'єри
          </span>
        </div>

        <div className="Textbox">
          <span className="Textbox__title">
            5 пристроїв 
          </span>
          <br />
          <span className="Textbox__text">
            в одній передплаті
          </span>
        </div>

        <div className="Textbox">
          <span className="Textbox__title">
            Без реклами 
          </span>
          <br />
          <span className="Textbox__text">
            на всіх фільмах
            <br />
            та мультфільмах
          </span>
        </div>
      </div>

      <a href="/" className="Total__link">
        Підключити
      </a>
    </section> 
  );
}