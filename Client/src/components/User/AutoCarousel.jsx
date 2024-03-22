import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishesComponent from './DishesComponent';

const AutoCarousel = ({ dishes }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 3000,
        cssEase: "linear"

    };

    return (
        <>
            <Slider {...settings}>

                {
                    dishes && dishes.map((currElem, index) => {
                        const { dishName, file, dishIngredients, dishDescription, dishPrice, type, category, _id } = currElem;
                        return (
                            <DishesComponent
                                file={file}
                                dishName={dishName}
                                type={type}
                                category={category}
                                key={index}
                                currElem={currElem}
                                _id={_id}
                            />
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default AutoCarousel
