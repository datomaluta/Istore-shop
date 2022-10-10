import { useDispatch, useSelector } from "react-redux";
import "./CartItem.scss";
import { cartActions } from "../../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const certainProduct = cartProducts.find(
    (product) => product.id === props.id
  );

  const countIncreaseHandler = () => {
    dispatch(cartActions.addQuantity({ id: props.id }));
  };

  const countDecreaseHandler = () => {
    dispatch(cartActions.removeFromCart({ id: props.id }));
  };

  return (
    <div className="cartItem">
      <div className="cartItem-product">
        <div className="cartItem-img">
          <img src={props.img} alt="cart" />
        </div>
        <div className="cartItem-title">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="cartItem-price-count">
        <div className="cartItem-price">
          <p>${props.price}</p>
        </div>
        <div className="cartItem-quantity">
          <button onClick={countDecreaseHandler}>-</button>
          {/* <input
            onChange={countChangeHandler}
            disabled
            defaultValue={certainProduct.quantity}
          /> */}
          <div>{certainProduct.quantity}</div>
          <button onClick={countIncreaseHandler}>+</button>
        </div>
        <div className="cartItem-totalPrice">
          <p>${certainProduct.quantity * props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
