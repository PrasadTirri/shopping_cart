import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3 blog-card">
      <div className="wishList position-relative">
        <div className="d-flex justify-content-end">
          <img src="/images/wish.svg" alt="wl" />
        </div>
        <div className="cart-options position-obsolute">
          <div className=" d-flex flex-column gap-15 ">
            <Link>
              <img src="/images/prodcompare.svg" alt="wl" />
            </Link>
            <Link>
              <img src="/images/view.svg" alt="wl" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="wl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="product-image">
        <img className="blog-img" src="/images/watch.jpg" alt="" />
        <img
          className="blog-img text-align-center"
          src="/images/tv.jpg"
          alt=""
        />
      </div>
      <div>
        <p>Watch</p>
        <h5>A beautiful saturday morning</h5>
        <ReactStars count={5} size={24} value="3" edit={false} />
        <p>Rate : 12$</p>
        <Link to="/">Buy Now</Link>
      </div>
    </div>
  );
};

export default ProductCard;
