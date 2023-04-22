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
                <div className={css.image} style={{backgroundImage: `url(${props.image})`}}>

                </div>
            </div>
        </div>
    )
}

    



const MainSlider = () => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
              }
            },
            {
              breakpoint: 1200,
              settings: {
              }
            },
            {
              breakpoint: 1075,
              settings: {
              }
            },
            {
              breakpoint: 992,
              settings: {
              }
            },
            {
              breakpoint: 576,
              settings: {
              }
            }
          ]
    };
    return (
        <div className={css.wrapper + " container"}>
            <Slider className={css.sliderContainer} {...settings}>
                <CustomSlide index={1} style={{ width: 200, height: 250}} image='https://cdn.inappstory.com/story/xj3/vlp/vvn/n6wwl1vplztiwzlmhmfhvkd/custom_cover/logo-350x440.jpg?v=1677755749'/>
                <CustomSlide index={2} image='https://cdn.inappstory.com/story/zxo/hwn/ioa/zcge6fzhsizjzwzlbcpcbuh/custom_cover/logo-350x440.jpg?v=1677755402'/>
                <CustomSlide index={3} image='https://cdn.inappstory.com/story/asy/5ei/gjt/txba6apkocdyfg09njqxekg/custom_cover/logo-350x440.jpg?v=1680274751'/>
                <CustomSlide index={4} image='https://cdn.inappstory.com/story/trk/dhv/vfv/lvxhprztx7os3cjfnj14e9o/custom_cover/logo-350x440.jpg?v=1679291641'/>
                <CustomSlide index={5} image='https://cdn.inappstory.com/story/a1m/6fm/f6k/0jqhrleogoqn5twqow7afg3/custom_cover/logo-350x440.jpg?v=1675356813'/>
                <CustomSlide index={6} image='https://cdn.inappstory.com/story/vxp/0op/pyj/eaxaldsys3rwssa6qptgw1x/custom_cover/logo-350x440.jpg?v=1675357131'/>
                <CustomSlide index={7} image='https://cdn.inappstory.com/story/v5h/bqf/nlf/h4xvpnpeqwqziv4zxll1kmj/custom_cover/logo-350x440.jpg?v=1675357139'/>
                <CustomSlide index={8} image='https://cdn.inappstory.com/story/2yt/hge/s5e/0psdbtctopuph5my38jknyb/custom_cover/logo-350x440.jpg?v=1668483834'/>
                <CustomSlide index={9} image='https://cdn.inappstory.com/story/kn1/ft6/all/5b9m2lrxqdk5anqjr3ylbmt/custom_cover/logo-350x440.jpg?v=1675357152'/>
                <CustomSlide index={10} image='https://cdn.inappstory.com/story/gio/mne/xuf/o3vbldczhdx4dwames9uaaf/custom_cover/logo-350x440.jpg?v=1675357161'/>
                <CustomSlide index={11} image='https://cdn.inappstory.com/story/vvj/0ui/9hq/h1c6cadsdmtdipbifbwysi5/custom_cover/logo-350x440.jpg?v=1675357189'/>
                <CustomSlide index={12} image='https://cdn.inappstory.com/story/ssw/y97/qqi/mgqzaa3lmow6clasjej15nu/custom_cover/logo-350x440.jpg?v=1679563597'/>
            </Slider>
        </div>
    );
}



export default MainSlider