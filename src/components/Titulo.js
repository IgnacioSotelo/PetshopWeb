import './Titulo.css';

const Titulo = ({ texto }) => {
    return (
        <div className='div__titulo'>
            <h1>{texto}</h1>
        </div>
    );
}

export default Titulo;