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
                            <div>
                                <p>Tel: 112030-3985</p>
                                <a href="mailto:ventas.smartproductos@gmail.com">
                                    ventas.smartproductos@gmail.com
                                </a>
                            </div>
                            <div className='div__footer__mapa'>
                                <iframe width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Somellera%20515%20Adrogue+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
