import "./CartItem.scss";

const CartItem = (props) => {
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
          <button>-</button>
          <input defaultValue={1} />
          <button>+</button>
        </div>
        <div className="cartItem-totalPrice">
          <p>${1200}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
