import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemConteiner from "./components/ItemContainer";
import Background1 from './assets/background1.png';
import Titulo from './components/Titulo';
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar/>

            <div className='wrapper-container'>
                <div className='container'>
                    <img className="img__background" src={Background1} alt='background' width={"100%"}></img>
                </div>
            </div>
        
            <div className="wrapper-container">
                <div className="container">
                    <Titulo texto="Productos Destacados"/>
                    <ItemConteiner destacados={true} />
                    <Titulo texto="Producto para perros"/>
                    <ItemConteiner destacados={false} filtro="perro" altura={655}/>
                    <Titulo texto="Producto para Gatos"/>
                    <ItemConteiner destacados={false} filtro="gato" altura={655}/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
