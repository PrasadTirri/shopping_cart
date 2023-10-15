import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <>
      <section id="home-wrapper-1">
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
      <section className="home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className=" col-12 d-flex justify-content-between gap-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <img src="/images/service.png" alt="s1" />
                <div>
                  <h5 className="text-color">Free Shipping</h5>
                  <p className="text-color">From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <img src="/images/service-02.png" alt="s2" />
                <div>
                  <h5 className="text-color">Free Shipping</h5>
                  <p className="text-color">From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <img src="/images/service-03.png" alt="s3" />
                <div>
                  <h5 className="text-color">Free Shipping</h5>
                  <p className="text-color">From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <img src="/images/service-04.png" alt="s4" />
                <div>
                  <h5 className="text-color">Free Shipping</h5>
                  <p className="text-color">From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <img src="/images/service-05.png" alt="s5" />
                <div>
                  <h5 className="text-color">Free Shipping</h5>
                  <p className="text-color">From all orders over $5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center icon-hw-2">
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img className="image" src="/images/watch.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="cam" />
                </div>
                <div className=" d-flex align-items-center py-2 p-2">
                  <div>
                    <h5>Music Gaming</h5>
                    <p>10 Items</p>
                  </div>
                  <img className="image" src="/images/watch.jpg" alt="cam" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-images-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h5 style={{ marginLeft: "-80%", color: "black" }}>
                Our Latest Blogs
              </h5>
              <div className="d-flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-container">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marqu">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-02.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-03.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-04.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-05.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-06.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-07.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cards ">
        <div className="container-xxl text-center">
          <div className="row">
            <div className="col-12">
              <h5 style={{ marginLeft: "-80%" }}>Featured Collection</h5>
              <div className="d-flex">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
