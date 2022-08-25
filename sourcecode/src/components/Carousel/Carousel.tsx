import "./Carousel.scss";
import { useEffect, useState } from "react";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";
import { IAlbum } from "../../utils/interfaces";
import { clearInterval } from "timers";

const Carousel = () => {

    const [carouselItems, setCarouselItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const carouselItems = JSON.parse(localStorage.getItem("carouselItems")!);
        setCarouselItems(carouselItems);
    }, [])

    /**
     * function for carousel sliding when clicking the left arrow
     */
    const clickLeft = () => {
        if(currentIndex === 0) {
            return setCurrentIndex(carouselItems.length - 1);
        }
        return setCurrentIndex(currentIndex - 1);
    }

    /**
     * function for carousel sliding when clicking the right arrow
     */
    const clickRight = () => {
        if(currentIndex === carouselItems.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {clickRight()}, 3000);
        // clean up function
        return () => clearInterval(interval);
    });
    
    return (
        <div className="carousel">

            <img className="carousel__arrow" src={arrowleft} alt="arrow" onClick={clickLeft}/>

            {carouselItems.map((item : IAlbum, index: number) => {
                return <div className="carousel__item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
                        <div className="carousel__item__photo">
                            <img src={`${process.env.PUBLIC_URL}/${item.imageSource}`} alt={item.album} />
                            <div className="carousel__item__photo__details">
                                <p>{item.artist}</p>
                                <p>{item.album}</p>
                            </div>
                        </div>
                    </div>
            })}

            <img className="carousel__arrow" src={arrowright} alt="arrow" onClick={clickRight}/>
        </div>
    );
}

export default Carousel;