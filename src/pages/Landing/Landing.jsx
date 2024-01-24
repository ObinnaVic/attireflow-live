import classes from "./landing.module.css";
import { useGlobalContext } from "../../controller/context";
import shippingTruck from "assets/shipping_truck.svg";
import customerSupport from "assets/customer_support.svg";
import qualityTag from "assets/quality_tag.svg";
import paymentCard from "assets/payment_card.svg";
import reviewImg from "assets/review_image.png";
import HomeProducts from "components/HomeProducts/HomeProducts";

function Landing() {
  
  return (
    <main className={classes.home}>
      <div className="header-background">
        <div className={`${classes.hero_section}`}>
          <h1>
            Discover Your Heritage In <br /> Every Thread
          </h1>
          <p>
            Step into a world where tradition and <br />
            fashion unite. Our native attire collections <br /> celebrate
            culture with style.
          </p>
          <button className={classes.hero_btn}>Shop Now</button>
          <div className={classes.stats}>
            <div>
              <h2>75m+</h2>
              <p>Customers</p>
            </div>
            <hr />
            <div>
              <h2>20+</h2>
              <p>Stores</p>
            </div>
            <hr />
            <div>
              <h2>200K+</h2>
              <p>Monthly visits</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.collection_section}>
        <h3>
          Explore Our Unique Collection of Exclusive <br /> Categories
        </h3>
        <div className={classes.collections}>
          <div className={`${classes.collection_one}`}>
            <p>Cord Lace Attire</p>
            <p>200+</p>
          </div>
          <div className={`${classes.collection_two}`}>
            <p>Kampala Attire</p>
            <p>250+</p>
          </div>
        </div>
        <div className={classes.mid_collection}>
          <div className={`${classes.collection_three}`}>
            <p>Ankara Attire</p>
            <p>1000+</p>
          </div>
        </div>
        <div className={classes.collections}>
          <div className={`${classes.collection_four}`}>
            <p>Plain Cashmere Attire</p>
            <p>500+</p>
          </div>
          <div className={`${classes.collection_five}`}>
            <p>Checkers Cashmere Attire</p>
            <p>500+</p>
          </div>
        </div>
      </div>
      <div className={classes.product_section}>
        <h3>Several unique attires are new in stock</h3>
        <HomeProducts />
      </div>
      <div className={classes.services_section}>
        <h3>
          What Makes Us the Preferred <br /> Choice?
        </h3>
        <div className={classes.service_group}>
          <div className={classes.service}>
            <img src={shippingTruck} alt="shipping truck" />
            <h3>SECURE SHIPPING</h3>
          </div>
          <div className={classes.service}>
            <img src={paymentCard} alt="shipping truck" />
            <h3>EASY PAYMENT</h3>
          </div>
          <div className={classes.service}>
            <img src={qualityTag} alt="shipping truck" />
            <h3>QUALITY ATTIRES</h3>
          </div>
          <div className={classes.service}>
            <img src={customerSupport} alt="shipping truck" />
            <h3>24/7 SUPPORT</h3>
          </div>
        </div>
      </div>
      <div className={classes.review_section}>
        <h3>What Our Customers are Saying</h3>
        <div className={classes.reviews}>
          <h5>Customers Reviews</h5>
          <div className={classes.review}>
            <img src={reviewImg} alt="review" />
            <span>
              <p>
                I recently purchased some beautiful native attire from
                attireflow, and I couldn't be happier with my experience! The
                selection they offer is impressive, and I was able to find the
                perfect outfit for a special event. The quality of the attire
                exceeded my expectations, and it was evident that attention to
                detail and craftsmanship went into its creation.
              </p>
              <h6>Amanda Olaogun</h6>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.about_section}>
        <div className={classes.about_headers}>
          <h1>ABOUT US</h1>
          <h2>Who we are and what we stand for</h2>
        </div>
        <div className={classes.about_paragraph}>
          <p>
            At Attireflow, we are passionate about celebrating cultural
            diversity through fashion. Our mission is to provide authentic and
            high-quality native attire that honors traditions and craftsmanship
            from around the world. <br /> <br /> <br /> With a commitment to
            preserving heritage, we curate a collection that reflects the
            beauty, elegance, and uniqueness of each culture's attire. We take
            pride in delivering a seamless shopping experience, making it easy
            for you to explore and embrace the world's rich clothing traditions.{" "}
            <br /> <br /> <br /> Join us on this journey of cultural
            appreciation, and let us be your gateway to the global tapestry of
            fashion. <br /> <br /> <br />
            Thank you for choosing Attireflow as your destination for meaningful
            and stylish attire.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Landing;
