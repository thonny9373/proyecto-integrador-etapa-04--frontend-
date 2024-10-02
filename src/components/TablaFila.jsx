import { useContext, useState } from 'react';
import './TablaFila.scss';
import ProductosContext from '../context/ProductosContext';

const TablaFila = ({ producto }) => {
  const { setProductoAEditar, eliminarProducto } = useContext(ProductosContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditar = (producto) => {
    setProductoAEditar(producto);
  };

  const handleBorrar = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      setIsDeleting(true);
      try {
        await eliminarProducto(id);
      } catch (error) {
        console.error('Error al eliminar el producto', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button 
          onClick={() => handleBorrar(producto.id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Borrando...' : 'Borrar'}
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
