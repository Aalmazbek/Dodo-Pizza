import css from './Button.module.css'

const Button = ({title, variant, handleSubmit, ...props}) => {
    return(
        <button 
            {...props} 
            className={
                `${css.wrapper} 
                ${variant === 'second' ? css.second : ""} 
                ${variant === 'third' ? css.third : ""} 
                ${variant === 'disabled' ? css.disabled : ""}`
            }
            onClick={handleSubmit}
            >
            {title}
            </button>
    )
}


export default Button