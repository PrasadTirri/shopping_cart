import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProducts = () => {
  return (
    <div className="container-xxl special-product-card">
      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-between">
            <div>
              <img
                className="img-special-container"
                src="/images/watch.jpg"
                alt="watch"
              />
            </div>
            <div>
              <h5>Havels</h5>
              <p>Samsung Galaxy Note 10+ Mobile Phone...</p>
              <ReactStars count={5} size={24} value="3" edit={false} />
              <p>
                $100{" "}
                <span>
                  <strike>$200</strike>
                </span>
              </p>
              <div className="d-flex align-items-center">
                <p>5 days</p>
                <div className="d-flex align-items-center">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>
                </div>
              </div>
              <div>
                <p>Products: 5</p>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="2"
                  style={{ width: "25%" }}
                  aria-valuemax="100"
                ></div>
              </div>
              <button
                className="bg-secondary text-white m-2 py-1"
                style={{ borderRadius: "8px" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
