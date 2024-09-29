import { useContext } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import '../pages/Carrito.scss'

const Inicio = () => {

  const { productos } = useContext(ProductosContext)

  useTitulo('Inicio')
  
  return (
    <main>
      <section className="section-cards">
      <header className="section-cards__header">
          <h1 className="h1-ofertas">Ofertas del Dia!</h1>
          <p className="p-marcas">Marcas Destacadas</p>
          <figure className="figure-marcas">
            <a href="https://www.lenovo.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/lenovo.webp" alt="LENOVO"/>
            </a>
            <a href="https://www.apple.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/apple.webp" alt="  APPLE"/>
            </a>
            <a href="https://www.lg.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/mobilecms_x_72_png (1).png" alt="LG"/>
            </a>
            <a href="https://www.sony.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/mobilecms_x_72_png (2).png" alt="SONY"/>
            </a>
            <a href="https://www.samsung.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/mobilecms_x_72_png.png" alte="SAMSUNG"/>
            </a>
            <a href="https://www.hp.com/" target="_blank">
              <img className="logo-marcas" src="imagenes/marcas/hp.png" alt="HP"/>
            </a>
          </figure>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map( (producto, idx) => (
              <Card key={producto.id+idx} producto={producto} />
            ))
          }
          
          
        </div>

      </section> 
    </main>
  )
}

export default Inicio