import './Description.scss';

export const Description = () => {
  return (
    <section className="App__section Description">
      <div className="Top">
        <h3 className="Top__text">
          Передплата
        </h3>

        <h1 className="Top__title">
          Оптимальна
        </h1>
      </div>

      <div className="MainDescription">
        <h1 className="MainDescription__title">
          10000&nbsp;фільмів 
          <br /> 
          та&nbsp;160+&nbsp;каналів
        </h1>

        <h3 className="MainDescription__text">
          Голлівудська класика та свіжі кіно-новинки за підпискою, прямі футбольні трансляції та понад 160 каналів
        </h3>
      </div>

      <div className="Subscribe">
        <h2 className="Subscribe__price">
          від 1 ГРН
        </h2>

        <a href="/" className="Subscribe__link">
          Спробувати
        </a>

        <h3 className="Subscribe__description">
          Перші 14 днів за 1 грн.
          <br /> 
          Далі – 97 грн/міс.
        </h3>

        <a href="/" className="Subscribe__details">
          Детальніше
        </a>
      </div>
    </section>
  );
}
