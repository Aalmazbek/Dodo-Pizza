
import css from './Header.module.css'
import logo from '../../assets/logo.svg'
import logoWhite from '../../assets/logo-white.svg'
import { Link } from 'react-router-dom'
// import headerStar from '../../assets/headerStar.svg'



const Header = ({  }) => {
    const deliverTime = 36
    const rate = 4.7
    const ratesCount = 817

    const openRatingModal = () => {
        const ratingModal = document.querySelector('.rating-modal')

        ratingModal.style.transform = 'translateY(0)'
        ratingModal.style.opacity = '1'
    }

    const closeRatingModal = () => {
        const ratingModal = document.querySelector('.rating-modal')

        ratingModal.style.transform = 'translateY(20%)'
        ratingModal.style.opacity = '0'
    }


    const personalsMouseEnter = (elem) => {
        const button = document.querySelector(elem)
        
        button.firstElementChild.style.marginBottom = '0px'
        button.firstElementChild.firstElementChild.style.fill = 'rgb(255, 105, 0)'
        
        button.lastElementChild.style.marginBottom = '5px'
        button.lastElementChild.style.color = 'rgb(255, 105, 0)'
    }
    
    const personalsMouseLeave = (elem) => {
        const button = document.querySelector(elem)
        
        button.firstElementChild.style.marginBottom = '-5px'
        button.firstElementChild.firstElementChild.style.fill = 'rgb(0, 0, 0)'

        button.lastElementChild.style.marginBottom = '0px'
        button.lastElementChild.style.color = 'rgb(0, 0, 0)'
    }


    let isHeaderMobileModalOpened = 0
    const toggleHeaderMobileModal = () => {
        let element = document.querySelector('#header-mobile-modal')

        if (isHeaderMobileModalOpened) {
            document.querySelector('body').style.overflow = 'overlay'
            element.classList.add('hide')
            isHeaderMobileModalOpened = 0
        }   else{
            document.querySelector('body').style.overflow = 'hidden'
            element.classList.remove('hide')
            isHeaderMobileModalOpened = 1
        }
    }


    const openHeaderMobileRatingModal = () => {
        const ratingModal = document.querySelector('.header-rating-modal')

        ratingModal.style.transform = 'translateY(0)'
        ratingModal.style.opacity = '1'
    }


    const closeHeaderMobileRatingModal = () => {
        const ratingModal = document.querySelector('.header-rating-modal')

        ratingModal.style.transform = 'translateY(20%)'
        ratingModal.style.opacity = '0'
    }


    


    return (
        <div className={css.wrapper + " container"}>
            <header>
                <div>
                    <Link to="/">
                        <img width={'250px'} src={logo} alt="" />
                    </Link>

                    <div className={css.rating} onMouseEnter={openRatingModal} onMouseLeave={closeRatingModal}>
                        <h2>Доставка пиццы Бишкек</h2>
                        <p>{`${deliverTime} мин · ${rate}`} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_16_svg__a"><stop offset={rate*20 + '%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_16_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg></p>
                    </div>

                    <div className={css.phone}>
                        <h2>0 (551) 550-550</h2>
                        <p>Звонок по телефону</p>
                    </div>


                    <div className={`rating-modal ${css.ratingModal}`}>
                        <div>
                            <h2>{deliverTime} минут</h2>
                            <p>{'Среднее время доставки'}</p>
                            <p>{'Если не успеем за 60 минут, вы получите сертификат на большую пиццу'}</p>
                        </div>

                        <div>
                            <div>
                                <h2>{rate}</h2>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_1_svg__a"><stop offset={rate < 1 ? (rate)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_1_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_2_svg__a"><stop offset={rate < 2 ? (rate-1)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_2_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_3_svg__a"><stop offset={rate < 3 ? (rate-2)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_3_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_4_svg__a"><stop offset={rate < 4 ? (rate-3)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_4_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_5_svg__a"><stop offset={rate < 5  ? (rate-4)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_5_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                            </div>

                            <p>{ratesCount} оценок</p>
                            <p>Оценить заказ можно в мобильном приложении</p>
                        </div>

                        <div>
                            <p>Данные за последние 7 дней в вашем городе</p>
                        </div>
                    </div>
                </div>

                <div className={css.personals}>
                    <Link id='dodoCoins' className={css.dodoCoins} onMouseEnter={() => personalsMouseEnter('#dodoCoins')} onMouseLeave={() => personalsMouseLeave('#dodoCoins')}>
                        <span className='icon'><svg viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 01-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 01.45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"></path></svg></span>
                        <p>Додокоины</p>
                    </Link>

                    <Link id='promotions' className={css.promotion} onMouseEnter={() => personalsMouseEnter('#promotions')} onMouseLeave={() => personalsMouseLeave('#promotions')}>
                        <span className="icon"><svg viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M15.8 5.15l.08.63 1.2.2c.8.15 1.45.26 1.98.4.55.14 1.04.33 1.47.66a4 4 0 011.42 2.02c.16.52.17 1.05.11 1.61-.05.54-.16 1.2-.3 1.99l-.78 4.41c-.14.8-.25 1.45-.4 1.98a4.1 4.1 0 01-.65 1.47 4 4 0 01-2.02 1.42c-.53.16-1.05.16-1.61.11-.54-.05-1.2-.16-2-.3l-2.44-.44c-.79-.14-1.44-.25-1.97-.39a4.09 4.09 0 01-1.47-.66A4.1 4.1 0 017 18.21h-.31c-.57 0-1.1-.05-1.6-.26a4 4 0 01-1.89-1.59 4.09 4.09 0 01-.53-1.52c-.09-.54-.15-1.2-.22-2l-.39-4.47a26.7 26.7 0 01-.13-2c0-.57.05-1.1.26-1.6a4 4 0 011.59-1.89c.46-.29.96-.43 1.52-.53.53-.09 1.2-.15 2-.22l2.47-.21c.8-.07 1.47-.13 2-.13.57 0 1.1.05 1.6.25a4 4 0 011.9 1.59c.28.46.43.97.52 1.52zM6.93 16.2h-.27c-.44 0-.66-.04-.83-.1a2 2 0 01-.94-.8c-.1-.15-.18-.36-.26-.8-.07-.44-.12-1.02-.2-1.88l-.38-4.38c-.08-.85-.13-1.43-.13-1.88 0-.44.04-.67.11-.84a2 2 0 01.8-.94c.14-.1.36-.18.8-.25.44-.08 1.02-.13 1.87-.2l2.4-.22c.85-.07 1.43-.12 1.88-.12.44 0 .67.04.83.1a2 2 0 01.95.8c.09.14.16.34.24.72 0 0-.44-.1-1.16-.16a4.09 4.09 0 00-1.6.12 4 4 0 00-2.03 1.41c-.33.44-.51.93-.66 1.48-.13.52-.25 1.18-.39 1.97l-.78 4.41c-.1.6-.2 1.11-.25 1.56zm13.1-6.55c.05.17.07.4.03.84-.04.45-.14 1.02-.29 1.86l-.76 4.34c-.15.84-.25 1.41-.37 1.85-.1.43-.21.64-.32.78a2 2 0 01-1.01.7c-.17.06-.4.08-.84.04-.45-.04-1.02-.14-1.86-.3l-2.37-.4a25.8 25.8 0 01-1.85-.37 2.16 2.16 0 01-.78-.32 2 2 0 01-.7-1.02c-.06-.16-.08-.4-.04-.83.04-.45.14-1.03.29-1.87l.76-4.33c.15-.85.25-1.42.37-1.86.11-.42.21-.63.32-.77a2 2 0 011.01-.71c.17-.05.4-.08.84-.04.45.05 1.02.15 1.87.3l2.36.41c.84.15 1.42.25 1.85.37.43.1.64.21.78.32a2 2 0 01.7 1z"></path></svg></span>
                        <p>Мои акции</p>
                    </Link>

                    <Link id='cabinet' className={css.cabinet} onMouseEnter={() => personalsMouseEnter('#cabinet')} onMouseLeave={() => personalsMouseLeave('#cabinet')}>
                        <span className="icon"><span className="icon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M16 30a14 14 0 100-28 14 14 0 000 28zm0-3a11 11 0 0010.98-11.62c-2 .15-4.42.1-6.79-.34-3.38-.62-6.93-2.07-8.86-5.06-2.14 1.62-4.24 3.3-6.29 5.04A11 11 0 0016 27z"></path><path d="M11.7 19.7a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4zm11 0a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4z" stroke="#000" strokeWidth="2"></path></svg></span></span>
                        <p>Кабинет</p>
                    </Link>
                </div>

                <div id='burger-menu' className={css.burgerMenu} onClick={toggleHeaderMobileModal} >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 16a1 1 0 100 2h14a1 1 0 100-2H5z" fill="#000"></path></svg>
                </div>
            </header>

            <div id='header-mobile-modal' className={`${css.headerMobileModal} hide`}>
                <div className={`${css.headerMobileTop} container`}>
                    <img width={'250px'} src={logoWhite} alt="" />
                    
                    <button className={`${css.closeButton}`} onClick={toggleHeaderMobileModal}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                    </button>   
                </div>

                <div className={css.headerMobileLocation}>
                    <span className={css.locationIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="" className="global-nav__link-icon global-nav__link-icon_location"><path fillRule="evenodd" clipRule="evenodd" d="M14.857 17.26C16.543 15.294 18 12.614 18 9.5c0-.925-.293-2.343-1.155-3.477C16.057 4.985 14.66 4 12 4c-2.66 0-4.057.985-4.845 2.023C6.293 7.157 6 8.575 6 9.5c0 3.113 1.457 5.793 3.144 7.76.828.967 1.775 1.882 2.856 2.565 1.08-.683 2.028-1.598 2.857-2.564zM12 22c1 0 8-5 8-12.5C20 7 18.5 2 12 2S4 7 4 9.5C4 17 11 22 12 22z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.387 9v2h1a1 1 0 100-2h-1zM9.933 7a.545.545 0 00-.546.545v4.91c0 .3.244.545.546.545h2.454a3 3 0 100-6H9.933z" fill="#fff"></path></svg>
                    </span>

                    <p>Бишкек</p>
                </div>

                <div className={css.headerMobileRating} onMouseEnter={openHeaderMobileRatingModal} onMouseLeave={closeHeaderMobileRatingModal}>
                    <p>{`${deliverTime} мин`}</p>

                    <div className={css.headerMobileRatingStars}>
                        <h2>{rate}</h2>
                        <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_1_svg__a"><stop offset={rate < 1 ? (rate)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_1_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                        <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_2_svg__a"><stop offset={rate < 2 ? (rate-1)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_2_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                        <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_3_svg__a"><stop offset={rate < 3 ? (rate-2)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_3_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                        <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_4_svg__a"><stop offset={rate < 4 ? (rate-3)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_4_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                        <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_5_svg__a"><stop offset={rate < 5  ? (rate-4)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_5_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                    </div>

                    <span className={css.infoIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="sc-1vtrxj7-2 fsByac"><path fillRule="evenodd" clipRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 11a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z" fill="#fff"></path><path d="M13.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#fff"></path></svg>
                    </span>
                </div>

                <div className={css.headerMobileLinks}>
                    <a href="#">Профиль</a>
                    <a href="#">Акции</a>
                    <a href="#">Контакты</a>
                    <a href="#">О нас</a>
                </div>


                <div className={`header-rating-modal ${css.headerMobileRatingModal}`}>
                        <div>
                            <h2>{deliverTime} минут</h2>
                            <p>{'Среднее время доставки'}</p>
                            <p>{'Если не успеем за 60 минут, вы получите сертификат на большую пиццу'}</p>
                        </div>

                        <div>
                            <div>
                                <h2>{rate}</h2>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_1_svg__a"><stop offset={rate < 1 ? (rate)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_1_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_2_svg__a"><stop offset={rate < 2 ? (rate-1)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_2_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_3_svg__a"><stop offset={rate < 3 ? (rate-2)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="50%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_3_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_4_svg__a"><stop offset={rate < 4 ? (rate-3)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_4_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                                <svg viewBox="0 0 16 16" fill="none" className="sc-1ohwd10-3 ecQPPY"><defs><linearGradient id="star_5_svg__a"><stop offset={rate < 5  ? (rate-4)*5*20 + '%' : '100%'} stopColor="#FFD200"></stop><stop offset="0%" stopColor="#999" stopOpacity="0.5"></stop></linearGradient></defs><path fill="url(#star_5_svg__a)" d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                            </div>

                            <p>{ratesCount} оценок</p>
                            <p>Оценить заказ можно в мобильном приложении</p>
                        </div>

                        <div>
                            <p>Данные за последние 7 дней в вашем городе</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}



export default Header