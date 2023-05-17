import Slider from 'react-slick';
import styles from './carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

type carouselType = {
    image: string;
    mediumText?: string;
    smallText?: string;
    currentPrice?: string;
    originalPrice?: string;
};

type carouselMainDataType = {
    carouselData: carouselType[];
    singleCarousel: boolean;
};

type arrowDataType = {
    onClick?: () => void;
};

function NextArrow({ onClick }: arrowDataType): JSX.Element {
    return (
        <div
            className={`${styles.arrow} ${styles.right}`}
            onClick={onClick}
        >
            <AiOutlineRight  size= "90" />
        </div>
    );
}

function PrevArrow({ onClick }: arrowDataType): JSX.Element {
    return (
      <div className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
        <AiOutlineLeft size="90" />
      </div>
    );
}

export default function Carousel({ carouselData, singleCarousel }: carouselMainDataType): JSX.Element {

    const settings = {
        dots: singleCarousel,
        infinite: true,
        arrow: true,
        autoplay: singleCarousel,
        speed: 500,
        slidesToShow: singleCarousel ? 1 : 3,
        slidesToScroll: 1,
        initialSlide: 3,
        nextArrow: singleCarousel ? <></> : <NextArrow />,
        prevArrow: singleCarousel ? <></> : <PrevArrow />,
        responsive: singleCarousel ? [] : [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {carouselData.map((data: carouselType, i) =>
                    <div className={styles.carouselCard} key={i}>
                        <img src={data.image} alt="" />
                        {!singleCarousel && <>
                            {data.mediumText&&<div className={styles.mediumText}>{data.mediumText}</div>}
                            {data.smallText&&<div className={styles.smallText}>{data.smallText}</div>}
                            {data.currentPrice&&<div className={styles.priceCont}>
                                <div className={`${styles.currentPrice} ${styles.smallText}`}>{data.currentPrice}</div>
                                <div className={`${styles.originalPrice} ${styles.smallText}`}>{data.originalPrice}</div>
                            </div>}
                        </>}
                    </div>
                )}
            </Slider>
        </div>
    );
};