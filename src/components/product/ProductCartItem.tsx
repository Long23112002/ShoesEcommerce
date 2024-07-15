import { Link } from "react-router-dom";
import "../../styles/cart.css";

export default function ProductCartItem() {
  return (
    <div className="col-12 mt-4 d-flex px-3 cart-left justify-content-between num2">
                <div className="d-flex num3 w-100">
                  <img
                    className="image-cart__product"
                    src="https://via.placeholder.com/150"
                    alt="product"
                  />
                  <ul className="card-item-ul">
                    <li style={{ color: "black", fontWeight: "700" }}>
                      Nike Air Force 1'07
                    </li>
                    <li>Women's Shoes</li>
                    <li  className="mobie-none" >Phantom/Cement Grey/Black</li>
                    <li className="price-mobie-block">20000.0đ</li>
                    <li>
                      {" "}
                      Size <a>40</a> Quantity
                      <select className="mx-1 select-size">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </li>
                    <li>
                      <Link to={"#"} className="icon-cart">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          role="img"
                          width="24px"
                          height="24px"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                          ></path>
                        </svg>
                      </Link>

                      <Link to={"#"} className="icon-cart">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          role="img"
                          width="24px"
                          height="24px"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            stroke-miterlimit="10"
                            stroke-width="1.5"
                            d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="mt-3 mobie-none"
                  style={{
                    paddingRight: "30px",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  2,000,000 VND
                </div>
              </div>
  );
}





