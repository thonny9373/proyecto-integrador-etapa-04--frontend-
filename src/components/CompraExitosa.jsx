import React, { useEffect, useState } from 'react';
import './CompraExitosa.scss';

const CompraExitosa = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        
        const items = JSON.parse(localStorage.getItem('pedido')) || [];
        setOrderItems(items);
    }, []);

    return (
        <div className="compra-exitosa">
            <h1 className="compra-exitosa__titulo">¡Compra Exitosa!</h1>
            <p className="compra-exitosa__mensaje">Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
            <div className="compra-exitosa__resumen">
                <h2 className="compra-exitosa__subtitulo">Resumen de tu pedido</h2>
                {orderItems.length === 0 ? (
                    <p className="compra-exitosa__mensaje-vacio">No hay productos en tu pedido.</p>
                ) : (
                    <ul className="compra-exitosa__lista">
                        {orderItems.map((item, index) => (
                            <li key={index} className="compra-exitosa__item">
                                {item.cantidad} x {item.nombre} - ${item.precio * item.cantidad}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CompraExitosa;