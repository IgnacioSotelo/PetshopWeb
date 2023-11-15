import './Button.css';

const Button = ({children, href}) => {
    return (<button className='btn__button' onClick={()=>{
        window.open(href, '_blank');
    }}>{children}</button>);
}

export default Button;