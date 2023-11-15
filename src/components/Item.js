import './Item.css';
import Button from './Button';

const Item = ({ datos, skeleton }) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    return (
        (<div className='div__item'>
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