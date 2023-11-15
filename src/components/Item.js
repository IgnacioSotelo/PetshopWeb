import './Item.css';
import Button from './Button';

const Item = ({ datos, destacado }) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        (<div className='div__item'>
            { destacado && <div className='div__span__destacado'><span>
                <i className="fa-solid fa-star"></i>
                </span></div>}

            <div className='div__item__imgcontainer'>
                <img src={datos.thumbnail} alt="#"></img>
            </div>
            <div className='div__item__infocontainer'>
                <span className='span__item__precio'>{formatter.format(datos.price)}</span>
                <span className='span__item__titulo'>{datos.title}</span>
                {datos.shipping.free_shipping && <p><span className="span__llegagratism">Envío gratis</span></p>}
            </div>
            <div className="div__item__btn">
                <Button href={datos.permalink}>Mas informacion</Button>
            </div>
        </div>)
    );
}

export default Item;