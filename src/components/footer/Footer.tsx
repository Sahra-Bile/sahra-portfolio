export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact__info">
        <a
          className="contact__info__item__link"
          href="milto:info@tegelconsulting.se"
        >
          info at tegelconsulting.se
        </a>
        <p className="contact__info__item">070-123 456 78</p>
      </div>

      <div className="contact__info">
        <div className="social">
          <i id="icon" className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
