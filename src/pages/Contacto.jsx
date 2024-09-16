import React from 'react';
import { useContactoFormulario } from '../hooks/useContactoFormulario';
import '../pages/Contacto.scss';

const FormularioContacto = () => {
    const {
        formData,
        nacionalidadesYPrefijos,
        nacionalidad,
        prefijo,
        telefono,
        setTelefono,
        handleSubmit,
        handleInputChange,
        handleNacionalidadChange
    } = useContactoFormulario();

    return (

        <>
        <h1>Formulario de contacto</h1>

<form className='formFormulario' onSubmit={handleSubmit}>
    <div>
        <label>Primer Nombre:</label>
        <input
            type="text"
            name="primerNombre"
            value={formData.primerNombre}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Segundo Nombre:</label>
        <input
            type="text"
            name="segundoNombre"
            value={formData.segundoNombre}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Primer Apellido:</label>
        <input
            type="text"
            name="primerApellido"
            value={formData.primerApellido}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Segundo Apellido:</label>
        <input
            type="text"
            name="segundoApellido"
            value={formData.segundoApellido}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Edad:</label>
        <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
        />
    </div>

    <div>
        <label>Sexo:</label>
        <select
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
        >
            <option value="">Selecciona</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
        </select>
    </div>

    <div>
        <label>Nacionalidad:</label>
        <select value={nacionalidadesYPrefijos.find(pais => pais.nombre === nacionalidad)?.codigo || ''} onChange={handleNacionalidadChange}>
            {nacionalidadesYPrefijos.map((pais) => (
                <option key={pais.codigo} value={pais.codigo}>
                    {pais.nombre}
                </option>
            ))}
        </select>
    </div>

    <div>
        <label>Prefijo:</label>
        <input type="text" value={prefijo} disabled />
    </div>

    <div>
        <label>Teléfono:</label>
        <input
            type="tel"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
        />
    </div>

    <button className='botonFormulario' type="submit">Enviar</button>
</form>
        </>
    );
};

export default FormularioContacto;