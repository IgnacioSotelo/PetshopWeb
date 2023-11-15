import './ItemContainer.css';

const ItemConteiner = ({children}) => {
    return (
        <section className='section__itemContainer'>{children}</section>
    );
}

export default ItemConteiner;