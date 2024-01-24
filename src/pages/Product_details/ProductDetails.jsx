import React from 'react'
import classes from "./ProductDetails.module.css";
import { useGlobalContext } from '/src/controller/context';
import { Link } from 'react-router-dom';
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import Carousel from 'components/ProductCarousel/Carousel';

function ProductDetails() {
  const { productDetails, selectAmount, addToCart } = useGlobalContext();

  if (productDetails.length === 0) {
    return (
      <div
        className={classes.details_section}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#085CB2", fontSize: "3rem" }}>
          Select A Product To See More Details
        </h1>
        <Link to="/products">
          <button className={classes.review_btn}>View Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.details_section}>
        <div className={classes.links}>
          <Link to="/">
            <p>Home </p>{" "}
          </Link>
          /
          <p>New in stock</p>
          
        </div>
        <div>
          {productDetails.map((product) => {
            const { image, price, name, rate, id, amount } = product;
            return (
              <section key={id}>
                <div className={classes.product_section}>
                  <div className={classes.img}>
                    <img src={image} alt="product" />
                  </div>
                  <div className={classes.details}>
                    <h1>{name}</h1>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h3>&#x20A6; {price} </h3>
                      {"  "}
                      <span> + Delivery</span>
                    </div>
                    <p style={{ marginTop: "20px" }}>Quantity</p>
                    <div>
                      <div className={classes.quantity}>
                        <select
                          className={classes.select}
                          onChange={(e) => selectAmount(e.target.value, id)}
                        >
                          <option className="text-black">{amount}</option>
                          <option className="text-black" value="2">
                            2
                          </option>
                          <option className="text-black" value="3">
                            3
                          </option>
                          <option className="text-black" value="4">
                            4
                          </option>
                          <option className="text-black" value="5">
                            5
                          </option>
                          <option className="text-black" value="6">
                            6
                          </option>
                          <option className="text-black" value="7">
                            7
                          </option>
                          <option className="text-black" value="8">
                            8
                          </option>
                          <option className="text-black" value="9">
                            9
                          </option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <span>In stock</span> .{" "}
                      <span>Delivery within 3 to 4 working days</span>
                    </div>
                    <div className={classes.details_buttons}>
                      <Link to="/checkout">
                        <button
                          className={classes.addToCartBtn}
                          onClick={addToCart}
                        >
                          <h1>Add to Cart</h1>
                        </button>
                      </Link>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        <Link to="/checkout" className={classes.checkoutBtn}>
                          <button>
                            <h1>Check Out</h1>
                          </button>
                        </Link>
                        <Link
                          to="/products"
                          className={classes.continueShoppingBtn}
                        >
                          <button>
                            {" "}
                            <h1>Continue Shopping</h1>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.review_section}>
                  <h3>Customer Review</h3>
                  <div className={classes.review_details}>
                    <div className={classes.review}>
                      <div className={classes.review_box}> </div>
                    </div>
                    <div className={classes.review}>
                      <Rating
                        initialRating={rate}
                        emptySymbol={<FaRegStar size="3rem" />}
                        fullSymbol={<FaStar size="3rem" />}
                      />
                      <p>Be the first to write a review</p>
                      <button className={classes.review_btn}>
                        Write a review
                      </button>
                    </div>
                  </div>
                </div>
                <div className={classes.other_collections}>
                  <h3>More from Collection</h3>
                  <Carousel />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails