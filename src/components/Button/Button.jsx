import css from './Button.module.css'

const Button = ({title, variant, ...props}) => {
    return(
        <button 
            {...props} 
            className={
                `${css.wrapper} 
                ${variant === 'second' ? css.second : ""} 
                ${variant === 'third' ? css.third : ""} 
                ${variant === 'fourth' ? css.fourth : ""} 
                ${variant === 'disabled' ? css.disabled : ""}`
            }
        >
        {title}
        </button>
    )
}


export default Button