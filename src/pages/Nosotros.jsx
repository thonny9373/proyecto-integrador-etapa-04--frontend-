import useTitulo from "../hooks/useTitulo"
import '../pages/Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <div className="nosotros-main">
        <h1 className="nosotros-h1">¿Quiénes somos?</h1>
        <h3 className="nosotros-h3">SOBRE LAPTOZONE</h3>
        <img className="left-img" src="imagenes/marcas/imagen1.webp" width="500" height="220" alt="Sobre laptozone"/>
        <p className="nosotros-p">
            Laptozone es la compañía líder en España y Europa en la distribución de electrónica de consumo y servicios relacionados. Forma parte de Laptozone Retail Group, con más de 1.000 puntos de venta ubicados en 13 países, una plantilla de 50.000 personas y una facturación en 2021/22 de 21,8 billones €. En España, la compañía está formada por un equipo de 7.000 personas y está presente en todas las Comunidades Autónomas con 110 establecimientos, además de la tienda online. En 2021/22 Laptozone facturó en nuestro país 2.304 millones €.
        </p>
        <div className="clear"></div>

        <h3 className="nosotros-h3">MODELO DE NEGOCIO</h3>
        <img className="right-img" src="imagenes/marcas/imagen5.png" width="500" height="220" alt="modelo de negocio"/>
        <p className="nosotros-p">
            Estos más de 20 años han estado llenos de aprendizajes en los que nuestro modelo de negocio ha ido evolucionando en consonancia con los nuevos comportamientos y tendencias de consumo. Y siempre con un objetivo claro: ser la primera opción de nuestros clientes cuando piensen en electrónica de consumo y ser el mejor retailer omnicanal de nuestro país. Para ello, nos apoyamos en tres pilares estratégicos en los que construimos nuestra apuesta de futuro: nuestro equipo, nuestros clientes y dejar un legado a la sociedad.
        </p>
        <div className="clear"></div>

        <h3 className="nosotros-h3">EQUIPO</h3>
        <img className="left-img" src="imagenes/marcas/imagen3.jpg" width="500" height="220" alt="equipo"/>
        <p className="nosotros-p">
            Es nuestro principal activo y el valor diferencial de nuestra organización. Somos el único retailer en España que cuenta con un equipo de 7.000 especialistas en electrónica de consumo que ponen el foco en el cliente para hacer más fácil su relación con la tecnología. Estamos certificados como Great Place to Work y trabajamos día a día para ser la compañía donde las personas quieran trabajar.
        </p>
        <div className="clear"></div>

        <h3 className="nosotros-h3">CLIENTES</h3>
        <img className="right-img" src="imagenes/marcas/imagen4.jpg" width="500" height="220" alt="clientes"/>
        <p className="nosotros-p">
            Son nuestra razón de ser. Queremos ser su primera opción y ayudarles a sacar el máximo partido de los productos tecnológicos. Nuestro objetivo es mantener una relación duradera con ellos, por ello, nos esforzamos cada día para ser excelentes. Estamos inmersos en un proyecto de transformación muy ambicioso que sitúa al cliente en el centro de nuestra estrategia para buscar su conveniencia y ofrecerle la mejor experiencia de compra.
        </p>
        <div className="clear"></div>

        <h3 className="nosotros-h3">NUESTRO LEGADO EN LA SOCIEDAD</h3>
        <img className="left-img" src="imagenes/marcas/imagen6.jpg" width="500" height="220" alt="nuestro legado en la sociedad"/>
        <p className="nosotros-p">
            Tiene que ver con hacer más fácil el acceso a la tecnología a todas las personas, en especial a aquellos colectivos más desfavorecidos y con acceso más limitado. En cuanto a nuestro compromiso con el entorno, trabajamos cada día para ser un retailer más sostenible y respetuoso con el medioambiente.
        </p>
        <div className="clear"></div>

        <h3 className="nosotros-h3">NUESTRO COMPROMISO</h3>
        <img className="right-img" src="imagenes/marcas/imagen7.png" width="500" height="220" alt="nuestro compromiso"/>
        <p className="nosotros-p">
            En Laptozone queremos que sepas que estamos aquí por y para ti, nuestro objetivo es que tengas la mejor experiencia y que, de lo único que tengas que preocuparte, sea de disfrutar de la mejor tecnología. Sabemos que a veces escoger no es fácil y, por eso, queremos que conozcas todo lo que ponemos a tu disposición para hacerte las cosas más fáciles.
        </p>
        <div className="clear"></div>
    </div>
  )
}

export default Nosotros