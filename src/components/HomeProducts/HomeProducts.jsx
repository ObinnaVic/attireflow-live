import React from 'react'
import { useGlobalContext } from '/src/controller/context';
import classes from "./HomeProduct.module.css";
import { Link } from 'react-router-dom';

function HomeProducts() {
    const { homeProducts } = useGlobalContext();
  return (
    <div className={classes.products}>
      {homeProducts.map((item) => {
        const { image, name, price, rate, id } = item;
        return (
          <div className={classes.product} key={id}>
            <div className={`${classes.product_img}`}>
              <img src={image} alt="product" />
              {/* <div className={classes.heart}>
                <box-icon name="heart" color="#085cb2"></box-icon>
              </div> */}
            </div>
            <p>{name}</p>
            <p>&#x20A6; {price}</p>

            <div className={classes.rates}>
              {Array.from([...Array(5)], (_, i) => {
                return (
                  <p>
                    <box-icon
                      name="star"
                      type="solid"
                      color="orange"
                    ></box-icon>
                  </p>
                );
              })
                .splice(0, rate)
                .concat(
                  [...Array(5 - rate)].map((_, i) => {
                    return (
                      <p>
                        <box-icon
                          name="star"
                          type="solid"
                          color="#D6EAFF"
                        ></box-icon>
                      </p>
                    );
                  })
                )}
            </div>
            <Link to="/products">
              <button className={classes.product_btn}>Shop Now</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomeProducts;