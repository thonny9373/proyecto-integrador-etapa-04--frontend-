import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const url = import.meta.env.VITE_BACKEND_CARRITOS;

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', []);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        setCartCount(totalProductos);
    }, [carrito]);

    function elProductoEstaEnElCarrito(producto) {
        console.log('Analizo si el producto está en el carrito');
        const nuevoArray = carrito.filter(prod => prod.id === producto.id);
        return nuevoArray.length;
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id);
    }

    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar del contexto', producto);
        let nuevoCarrito;

        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1;
            nuevoCarrito = [...carrito, producto];
            agregarAlCarrito(producto);
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto);
            productoDeCarrito.cantidad++;
            nuevoCarrito = [...carrito];
            window.localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        }

        setCartCount(cartCount + 1);
    };

    const eliminarProductoDelCarritoContext = (id) => {
        console.log(id);
        eliminarDelCarrito(id);
    };

    const limpiarCarritoContext = () => {
        limpiarCarrito();
    };

    const guardarCarritoContext = async () => {
        console.log(carrito);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carrito),
        };
        try {
            const losProductosEnElCarrito = await helperPeticionesHttp(url, options);
            console.log(losProductosEnElCarrito);

            limpiarCarritoContext();
        } catch (error) {
            console.error('[guardarCarritoContext]', error);
        }
    };

    const data = {
        carrito,
        cartCount,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext,
    };

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>;
};

export { CarritoProvider };
export default CarritoContext;