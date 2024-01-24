import React, { useState } from "react";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGlobalContext } from "/src/controller/context";
import classes from "./Carousel.module.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function Carousel() {
  const { homeProducts, addToProductDetails } = useGlobalContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const items = homeProducts.map((product) => {
    const { image, name, id, price, rate } = product;
    return (
      <div className={classes.card}>
        <div className={classes.img}>
          <span
            className={classes.icon}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <MdFavorite size="1.5rem" />
            ) : (
              <MdFavoriteBorder size="1.5rem" />
            )}
          </span>
          <img src={image} alt="products" />
        </div>
        <div>
          <p>{name}</p>
          <p>
            <span>N</span>
            {price}
          </p>
          <Rating
            initialRating={rate}
            emptySymbol={<FaRegStar size="1.5rem" />}
            fullSymbol={<FaStar size="1.5rem" />}
          />
          <Link to="/product-details" style={{ textDecoration: "none" }}>
            <Button variant="outline" onClick={() => addToProductDetails(id)}>
              View
            </Button>
          </Link>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    800: {
      items: 3,
      itemsFit: "contain",
    },
  };

  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={900}
        animationDuration={3000}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </>
  );
}

export default Carousel;
