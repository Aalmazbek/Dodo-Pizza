import './MainSlider.css'
import css from './MainSlider.module.css'
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




const PrevArrow = (props) => {
    return(
        <button className={props.className} onClick={props.onClick}>
            <div className={css.icon}></div>
        </button>
    )
}


const NextArrow = (props) => {
    return(
        <button className={props.className} onClick={props.onClick}>
            <div className={`${css.icon} ${css.iconReverse}`}></div>
        </button>
    )
}



const CustomSlide = (props) => {
    return(
        <div {...props} className={css.CustomSlide} >
            <div>
                <img src="https://picsum.photos/350/440" alt="" />
            </div>
        </div>
    )
}

    



const MainSlider = () => {
    const settings = {
        // className: "slider variable-width",
        // variableWidth: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 1228,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className={css.wrapper + " container"}>
            <Slider className={css.sliderContainer} {...settings}>
                <CustomSlide index={1}/>
                <CustomSlide index={2}/>
                <CustomSlide index={3}/>
                <CustomSlide index={4}/>
                <CustomSlide index={5}/>
                <CustomSlide index={6}/>
                <CustomSlide index={7}/>
                <CustomSlide index={8}/>
                <CustomSlide index={9}/>
                <CustomSlide index={10}/>
                <CustomSlide index={11}/>
                <CustomSlide index={12}/>
            </Slider>
        </div>
    );
}



export default MainSlider