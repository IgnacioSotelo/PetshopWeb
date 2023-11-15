import React, { useState } from 'react';
import axios from "axios";

export const ListaContext = React.createContext();

const ListaProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const calcularOffset = (x) => {
        return Number(parseInt(10 * x - 10));
      };

    const buscarProducto = (producto, offset = 0) => {
        const fetchData = async () => {
            let respuesta = await axios(
              "https://api.mercadolibre.com/sites/MLA/search?q=" +
                producto +
                "&offset=" +
                calcularOffset(offset) +
                "&limit=10"
            );

            setProductos(respuesta.data.results);
        };

        fetchData();
    };

    return (
        <ListaProvider.Provider
          value={{
            productos: productos,
            buscarProducto: buscarProducto,
          }}
        >
          {children}
        </ListaProvider.Provider>
      );
}

export default ListaProvider;