import React, { useState, useEffect } from "react";
import Axios from "axios";
import Item from './components/Item';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemConteiner from "./components/ItemContainer";
import Background1 from './assets/background1.png';
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "https://api.mercadolibre.com/sites/MLA/search?seller_id=80348659",
        });

        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [setList]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='wrapper-container'>
        <div className='container'>
          <img className="img__background"  src={Background1} alt='background' width={"100%"}></img>
        </div>
      </div>
      <div className="wrapper-container">
        <div className="container">
          <ItemConteiner>
            {
              typeof (list.results) !== 'undefined' && list.results.map(item => {
                return (<Item datos={item} key={item.id}></Item>)
              })
            }
          </ItemConteiner>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;