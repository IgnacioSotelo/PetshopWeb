import './Navbar.css';
import '../App.css';
import Logo from '../assets/logo.png';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.querySelector("nav").classList.add("blur")
            } else {
                document.querySelector("nav").classList.remove("blur")
            }
        }
    }, []);

    return (<nav className="wrapper-container">
        <div className='container flex'>
            <div className="div__nav__contenido">
                <img src={Logo} width='80' alt="logo"></img>
                <label>
                    <div className='div__input__busqueda'>
                        <input type='text' placeholder='Buscar'></input>
                        <span>
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </span>
                    </div>
                </label>
                <div>
                    <div className='div__numeromail'>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                            112030-3985
                        </span>
                        <span>
                            <i className="fa-regular fa-envelope"></i>
                            <a href="mailto:ventas.smartproductos@gmail.com">
                            ventas.smartproductos@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </nav>);
}

export default Navbar;
