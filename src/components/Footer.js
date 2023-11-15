import './Footer.css';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper-container'>
                <div className='container'>
                    <div className='div__footer__container'>
                        <div className='div__footer__img'>
                            <img src={Logo} width={150} height={150}></img>
                        </div>
                        <div className='div__footer__links'>
                            <h4>Categorías</h4>
                            <ul>
                                <li><a href="#">Hogar, Muebles y Jardín</a></li>
                                <li><a href="#">Animales y Mascotas</a></li>
                                <li><a href="#">Industrias y Oficinas</a></li>
                                <li><a href="#">Herramientas</a></li>
                                <li><a href="#">Agro</a></li>
                                <li><a href="#">Accesorios para Vehículos</a></li>
                                <li><a href="#">Construcción</a></li>
                                <li><a href="#">Juegos y Juguetes</a></li>
                            </ul>
                        </div>

                        <div className='div__footer__contacto'>
                            <p>Tel: 112030-3985</p>
                            <p>ventas.smartproductos@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
