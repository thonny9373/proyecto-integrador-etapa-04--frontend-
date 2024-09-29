import './Tabla.scss'
import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <table className="tabla-alta">
      <thead>
        <tr>
          <th className='nombre'>Nombre</th>
          <th className='precio'>Precio</th>
          <th className='stock'>Stock</th>
          <th className='marca'>Marca</th>
          <th className='categoria'>Categoría</th>
          <th className='detalle'>Detalles</th>
          <th className='foto'>Foto</th>
          <th className='envio'>Envío</th>
          <th className='acciones'>Acciones</th>
        </tr>
      </thead>
      <tbody>

        {
          productos && productos.map( (producto, idx) => (
            <TablaFila key={producto.id+idx} producto={producto} />
          ))

        }

      </tbody>

    </table>
  )
}

export default Tabla