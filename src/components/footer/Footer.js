import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <footer>
        <div className="container-xxl bg-dark">
          <div className="row">
            <div className="col-12">sqwdefgy</div>
          </div>
        </div>
      </footer> */}
      {/* <footer>
        <div className="container-xxl bg-dark">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h4 className="text-white">Contact Us</h4>
              </div>
              <div>
                <h4 className="text-white">Information</h4>
              </div>
              <div>
                <h4 className="text-white">Account</h4>
              </div>
              <div>
                <h4 className="text-white">Quick Links</h4>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="bg-dark header1">
        <div className="container-xxl">
          <div className="row p-2">
            <div className="col-4">
              <div>
                <h4>Sign up for NewsLetter</h4>
              </div>
            </div>
            <div className="col-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                  aria-label="search"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="bg-dark text-white input-group-text"
                  id="basic-addon2"
                >
                  search
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h4>Contact Us</h4>
                <address>
                  H. No 2-12, Kasimkota, Visakhapatnam, <br /> Pincode:531031.
                </address>
                <p>
                  Call:{" "}
                  <a
                    className="text-white"
                    href="tel:+91 7702341208"
                    alt="call"
                  >
                    +91 7702341208
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="text-white" href="email" alt="email">
                    prasadtirri333@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4>Information</h4>
                <p>
                  <Link className="text-white" to="/">
                    Private Policy
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Refund Policy
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Shopping Policy
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Terms and Conditions
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Blogs
                  </Link>
                </p>
              </div>
              <div>
                <h4>Account</h4>
                <p>
                  <Link className="text-white" to="/">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    FAQ
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Contact
                  </Link>
                </p>
              </div>
              <div>
                <h4>Quick Links</h4>
                <p>
                  <Link className="text-white" to="/">
                    Laptops
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Headphones
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Tablets
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/">
                    Watch
                  </Link>
                </p>
              </div>
              <div>
                <h4>Our App</h4>
                <p>
                  Download our app and get 15% extra <br /> discount on your
                  first order...
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} ; Powered by Developer's
                Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
