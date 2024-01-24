import Button from "components/Button/Button";
import classes from "./product-card.module.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { useGlobalContext } from "/src/controller/context";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { image, name, price, rate, id } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToProductDetails } = useGlobalContext();

  
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
}

export default ProductCard;
