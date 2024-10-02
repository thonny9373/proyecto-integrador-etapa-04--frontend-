import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS;
    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState(null);

    useEffect(() => {
        getAllProductos();
    }, []);

    const getAllProductos = async () => {
        try {
            const prods = await helperPeticionesHttp(url, {});
            setProductos(prods);
        } catch (error) {
            console.error('[getAllProductos]', error);
        }
    };

    const crearProductoContext = async (nuevoProducto) => {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoProducto)
            };

            const newProducto = await helperPeticionesHttp(url, options);
            console.log(newProducto);
            setProductos([...productos, newProducto]);
        } catch (error) {
            console.error('[crearProductoContext]', error);
            throw error; // Lanza el error para manejarlo en el formulario
        }
    };

    const actualizarProductoContext = async (productoEditado) => {
        try {
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productoEditado)
            };

            const urlEdicion = `${url}/${productoEditado.id}`;
            const editedProduct = await helperPeticionesHttp(urlEdicion, options);

            const nuevoEstadoProductos = productos.map(
                producto => producto.id === editedProduct.id ? editedProduct : producto
            );
            setProductos(nuevoEstadoProductos);
        } catch (error) {
            console.error('[actualizarProductoContext]', error);
        }
    };

    // Función para eliminar un producto
    const eliminarProductoContext = async (id) => {
        try {
            const options = {
                method: 'DELETE'
            };

            const urlEliminacion = `${url}/${id}`;
            await helperPeticionesHttp(urlEliminacion, options);
            setProductos(productos.filter(producto => producto.id !== id));
        } catch (error) {
            console.error('[eliminarProductoContext]', error);
        }
    };

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProducto: eliminarProductoContext, // Asegúrate de que esto esté definido
        productoAEditar,
        setProductoAEditar
    };

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>;
};

export { ProductosProvider };
export default ProductosContext;
