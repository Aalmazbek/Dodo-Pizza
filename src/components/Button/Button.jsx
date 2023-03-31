import css from './Button.module.css'

const Button = ({title, variant}) => {
    return(
        <button className={`${css.wrapper} ${variant === 'second' ? css.second : ""} ${variant === 'third' ? css.third : ""} ${variant === 'disabled' ? css.disabled : ""}`}>{title}</button>
    )
}


export default Button