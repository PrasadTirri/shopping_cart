import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div className="container-xxl py-5">
          <div className="row">
            <div className="col-5">
              <div className="main position-relative">
                <img
                  className="image-home "
                  src="images/main-banner-1.jpg"
                  alt="banner1"
                />
                <div className="content position-absolute">
                  <h5 className="text-color">Super Charged fr Pros.</h5>
                  <h6 className="text-color">ipad $13+ pro.</h6>
                  <p className="text-color">From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className=" d-flex flex-column justify-content-between align-items-center">
                <div className="d-flex justify-content-between item">
                  <div className="position-relative">
                    <img
                      className="images-home "
                      src="images/catbanner-01.jpg"
                      alt="banner1"
                    />
                    <div className="content position-absolute">
                      <h5 className="text-color">Super Charged fr Pros.</h5>
                      <h6 className="text-color">ipad $13+ pro.</h6>
                      <p className="text-color">From $999.00 or $41.62/mo.</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                  <div className="left-image position-relative">
                    <img
                      className="images-home "
                      src="images/catbanner-02.jpg"
                      alt="banner1"
                    />
                    <div className="content position-absolute">
                      <h5 className="text-color">Super Charged fr Pros.</h5>
                      <h6 className="text-color">ipad $13+ pro.</h6>
                      <p className="text-color">From $999.00 or $41.62/mo.</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="position-relative">
                    <img
                      className="images-home "
                      src="images/catbanner-03.jpg"
                      alt="banner1"
                    />
                    <div className="content position-absolute">
                      <h5 className="text-color">Super Charged fr Pros.</h5>
                      <h6 className="text-color">ipad $13+ pro.</h6>
                      <p className="text-color">From $999.00 or $41.62/mo.</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                  <div className="left-image position-relative">
                    <img
                      className="images-home "
                      src="images/catbanner-04.jpg"
                      alt="banner1"
                    />
                    <div className="content position-absolute">
                      <h5 className="text-color">Super Charged fr Pros.</h5>
                      <h6 className="text-color">ipad $13+ pro.</h6>
                      <p className="text-color">From $999.00 or $41.62/mo.</p>
                      <Link className="button">BUY NOW</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
