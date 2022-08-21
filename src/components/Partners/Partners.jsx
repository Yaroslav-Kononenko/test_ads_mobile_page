import './Partners.scss';
import partners from '../../images/partners.jpg'

export const Partners = () => {
  return(
    <section className="App__section Partners">
      <span className="Partners__title">
          Подарунки&nbsp;від&nbsp;партнерів
          <br /> 
          при&nbsp;кожному
          <br /> 
          продовженні&nbsp;передплати
      </span>

      <h3 className="Partners__text">
        Сертифікати на знижки від WOG, Сушія, Антошка, Єва та ін.
      </h3>

      <img src={partners} alt="partners" className="Partners__img" />
    </section>
  );
}
