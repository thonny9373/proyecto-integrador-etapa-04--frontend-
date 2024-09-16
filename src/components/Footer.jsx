import './Footer.scss'

const Footer = () => {
  return (


    <>
    
    <footer className="footer-footer">
  
  <div className="footer-column figure-footer">
    <h3 className="footer-title">Síguenos en</h3>
    <figure>
      <a href="https://www.facebook.com/" target="_blank">
        <img src="facebook.svg" width="25" height="25" alt="facebook"/>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="instagram.svg" width="25" height="25" alt="instagram"/>
      </a>
      <a href="https://twitter.com/" target="_blank">
        <img src="x-twitter.svg" width="25" height="25" alt="X"/>
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <img src="youtube.svg" width="25" height="25" alt="youtube"/>
      </a>
    </figure>
  </div>

  
  <div className="footer-column">
    <h3 className="footer-title">Información Legal</h3>
    <ul className="footer-links">
      <li><a href="#">Términos y Condiciones</a></li>
      <li><a href="#">Política de Privacidad</a></li>
      <li><a href="#">Aviso Legal</a></li>
      <li><a href="#">Envíos y Devoluciones</a></li>
    </ul>
  </div>

  
  <div className="footer-column">
    <h3 className="footer-title">Métodos de pago</h3>
    <div className="payment-methods">
      <a href="https://www.mastercard.com/" target="_blank">
        <img src="cc-mastercard.svg" width="40" height="40" alt="MasterCard"/>
      </a>
      <a href="https://www.mercadopago.com.ar/" target="_blank">
        <img src="handshake-solid.svg" width="40" height="40" alt="Mercado pago"/>
      </a>
      <a href="https://www.paypal.com/" target="_blank">
        <img  src="paypal.svg" width="40" height="40" alt="PayPal"/>
      </a>
      <a href="https://www.visa.com/" target="_blank">
        <img src="cc-visa.svg" width="40" height="40" alt="Visa"/>
      </a>
    </div>
  </div>

  
  <div className="footer-column">
    <h3 className="footer-title">Descárgate nuestra APP</h3>
    <div className="app-download">
      <a href="https://www.apple.com/" target="_blank">
        <img className=".descarga-app" src="cc-apple-pay.svg" width="130" height="60" alt="Apple Store"/>
      </a>
      <a href="https://play.google.com/" target="_blank">
        <img className=".descarga-app" src="google-play.svg" width="130" height="60" alt="Google Play Store"/>
      </a>
    </div>
  </div> 

  



</footer>

<div className="texto-final">
    <p><strong>Precios exclusivos para compras en línea. Verifica los precios vigentes en las tiendas Laptozone en la Península y Baleares. Envíos disponibles únicamente a Península y Baleares.</strong></p>
    <p>Promociones y ofertas aplicables únicamente a productos vendidos por Laptozone.</p>
    <p>Algunos productos podrían tener una clasificación especial debido a promociones o campañas publicitarias. La clasificación de los resultados de búsqueda se basa en la coincidencia con el término buscado, la popularidad, disponibilidad, relevancia de la categoría y novedad del producto.</p>
    <p><strong>PUBLICIDAD:</strong></p>
    <ul>
        <li>La Tarjeta Laptozone Club Card VISA es emitida por CaixaBank Payments & Consumer, E.F.C., E.P., S.A.U., sujeta a autorización. Los fondos recibidos están protegidos mediante depósito en una cuenta bancaria separada en CaixaBank, S.A. Consulta sobre la tarjeta con pago aplazado (revolving) en <a href="www.caixabankpc.com/es/productos">www.caixabankpc.com/es/productos</a>.</li>
        <li><strong>Servicios exclusivos para titulares de la Tarjeta Laptozone Club Card.</strong> Descubre más en la app Laptozone Club y participa en la "Ruleta de Premios" y "Compra y Gana". Puedes participar desde las 00:01 horas del día de la compra hasta las 23:59, hora peninsular, del día 20 de cada mes. Condiciones en <a href="www.laptozone.es/es/specials/financiacion/LaptozoneClubCard">www.laptozone.es/es/specials/financiacion/LaptozoneClubCard</a>.</li>
        <li>Financiación a través de la Tarjeta Laptozone Club Card Visa, emitida por CaixaBank Payments & Consumer, E.F.C., E.P., S.A.U., sujeta a autorización. Los fondos recibidos están protegidos mediante depósito en una cuenta bancaria separada en CaixaBank, S.A. TIN 0% TAE 0%. Financiación disponible en 3, 6, 10, 12, 18, 20 y 24 meses sin intereses. Importe mínimo para financiar: 299€. Ejemplo: para una compra financiada en 24 meses de 654€, 24 cuotas de 27,25€. Precio total e importe adeudado: 654€. Coste total del crédito e intereses: 0€. Sistema de amortización francés. Intereses subvencionados por Laptozone. Financiación al 0% en TV Neo, QLED y OLED desde el 20/05/2024 9:00h hasta el 09/06/2024 23:59h en nuestras tiendas y en laptozone.es, no acumulable con otras promociones.</li>
    </ul>
</div>

<p className="footer-copy">
  &copy; 2024 LaptopZone. Todos los derechos reservados.
</p>
    
    </>



  )
}

export default Footer