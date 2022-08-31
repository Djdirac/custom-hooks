import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,       // (spread) mantenemos los valores de los campos o propiedades
            // Propiedades computadas de los objetos, name  sera la propiedad en el objeto
            // y value sera el nuevo valor del objeto
            [ name ]: value
        });
    }

    const onResetForm = ( ) => {

        setFormState(initialForm);
    };

    return{
            ...formState,   // se desestructura el formState 
            formState,      // valor del formulario
            onInputChange,   // funcion para realizar el cambio
            onResetForm
    }
}
