import React, { useState, useEffect } from "react";
import Axios from "axios";
import Item from '../components/Item';
import './ItemContainer.css';
import Spinner from '../components/Spinner';

// url: "https://api.mercadolibre.com/sites/" + filtro && ("q" + filtro) + "MLA/search?seller_id=80348659",


const ItemConteiner = ({filtro, altura, scroll, destacados}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    url: typeof(filtro) === "undefined" ? "https://api.mercadolibre.com/sites/MLA/search?seller_id=80348659":
                                                          "https://api.mercadolibre.com/sites/MLA/search?seller_id=80348659&q=" + filtro
                });

                setList(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [setList]);
    return (
        <section className='section__itemContainer' style={{height: altura, overflow: !scroll && 'hidden'}}>
            {
                
                (typeof (list.results) !== 'undefined' ? list.results.map(item => {
                    return !destacados ? (<Item datos={item} key={item.id} destacado={item.sold_quantity > 100 && true}></Item>):(
                        item.sold_quantity > 100 && <Item datos={item} key={item.id} destacado></Item>
                    )
                }):
                <Spinner />)
            }
            </section>
    );
}

export default ItemConteiner;