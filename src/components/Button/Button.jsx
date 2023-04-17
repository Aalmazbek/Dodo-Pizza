import css from './Button.module.css'

const Button = ({title, variant, totalAmount, ...props}) => {

    const handleMouseEnter = (e) => {
        console.log(e);
        
        const amount = document.querySelector('.total-amount')
        const arrow = document.querySelector('.cart-button-arrow')

        if (amount && arrow) {
            amount.style.transform = 'translateX(10px)'
            amount.style.opacity = '0'
            arrow.style.transform = 'translateX(5px)'   
            arrow.style.opacity = '1'
        }
    }

    const handleMouseLeave = (e) => {
        console.log(e);
        const amount = document.querySelector('.total-amount')
        const arrow = document.querySelector('.cart-button-arrow')

        if (amount && arrow) {
            amount.style.transform = 'translateX(0px)'
            amount.style.opacity = '1'
            arrow.style.transform = 'translateX(0px)'
            arrow.style.opacity = '0'
        }
    }


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
            onMouseEnter={totalAmount ? handleMouseEnter : null}
            onMouseLeave={totalAmount ? handleMouseLeave : null}
        >
        {totalAmount ? (
            <>
                <p>{title}</p>
                <hr />
                <p className='total-amount'>{totalAmount}</p>
                <div className={`cart-button-arrow ${css.arrow}`}>
                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" className="xlo7eb-9 ijMcBz"><path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </>
        ) : title}
        </button>
    )
}


export default Button