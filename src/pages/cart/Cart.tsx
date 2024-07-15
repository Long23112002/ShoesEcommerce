import { useSelector } from "react-redux";
import NavBar from "../../components/navbar/NavBar";
import { RootState } from "../../redux/store";
import { UserDetail } from "../../types/userDetail";
import "../../styles/cart.css";
import ProductCartItem from "../../components/product/ProductCartItem";

export default function Cart() {
  const userDetail = useSelector<RootState>((state) => state.userDetail);

  return (
    <div>
      <NavBar userDetail={userDetail as UserDetail} />

      <div className="container container-cart">
        <h1>Bag</h1>
        <div>
          <div className="d-flex justify-content-between mt-3 num1">
            <div className="row">
              <ProductCartItem />
              <ProductCartItem />
              <ProductCartItem />
            </div>

            <div className="d-flex cart-salary" style={{ width: "40%" }}>
              <ul className="card-item-ul">
                <li className="sumnary">Summary</li>
                <li className="d-flex justify-content-between">
                  <span>Subtotal</span> 20000đ
                </li>
                <li className="d-flex justify-content-between">
                  {" "}
                  <span>Estimated Delivery & Handling</span> 20000đ
                </li>
                <hr />
                <li className="d-flex justify-content-between">
                  <span>Total</span> 30000đ
                </li>
                <hr />

                <li className="d-flex justify-content-between">
                  <button className="btn btn-dark w-100 btn-checkout">
                    Member Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
