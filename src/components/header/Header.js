import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header1 bg-dark">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white">Free Shopping</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotel:{" "}
                <a href="tel:+91 7702341208" alt="mobile">
                  +91 7702341208
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header2 header1 bg-dark">
        <div className="container-xxl">
          <div className="row d-flex">
            <div className="col-2">
              <h4>
                <Link className="text-white">DevDeveloper</Link>
              </h4>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type to Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex text-white align-items-center ">
                    <img
                      style={{ width: "25px" }}
                      src="/images/compare.svg"
                      alt=""
                    />
                    <p className="headerText">
                      Compare <br /> Items
                    </p>
                  </Link>
                </div>

                <div>
                  <Link className="d-flex text-white align-items-center ">
                    <img
                      style={{ width: "25px" }}
                      src="/images/wishlist.svg"
                      alt=""
                    />
                    <p className="headerText">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex text-white align-items-center ">
                    <img
                      style={{ width: "25px" }}
                      src="/images/user.svg"
                      alt=""
                    />
                    <p className="headerText">
                      Login <br /> Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex justify-content-between gap-10">
                    <img
                      style={{ width: "25px" }}
                      src="/images/cart.svg"
                      alt=""
                    />
                    <div
                      style={{
                        borderRadius: "10%",
                        padding: "2px",
                        textAlign: "center",
                      }}
                      className="bg-white"
                    >
                      <p className="text-end">0</p>
                    </div>
                  </Link>
                  <p className="text-white">$ 500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="bg-dark p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-start">
              <div className="pl-2">
                <div className="dropdown toggle">
                  <button
                    className="btn btn-dark dropdown-toggle me-5 gap-5 "
                    href="#"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img className="me-2" src="/images/menu.svg" alt="" />
                    <span className="me-5 d-inline-block">SHOP CATEGORIES</span>
                  </button>

                  <ul
                    className="dropdown-menu header-dropdown"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item options" href="@">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item options" href="@">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item options" href="@">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <Link to="" className="header-navItems me-3">
                  HOME
                </Link>
                <Link to="" className="header-navItems me-3">
                  OUR STORE
                </Link>
                <Link to="" className="header-navItems me-3">
                  BLOGS
                </Link>
                <Link to="" className="header-navItems me-3">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
