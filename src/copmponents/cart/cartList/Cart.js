import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import "./Cart.scss";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  const totalPrice =
    cartProducts.length > 0
      ? cartProducts
          .map((product) => product.quantity * product.price)
          .reduce((pValue, cValue) => pValue + cValue)
      : 0;

  return (
    <section className="cartSection">
      <div className="headings">
        <div className="product">
          <p>Product</p>
        </div>

        <div className="priceAndQuantity">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      {cartProducts.length > 0 &&
        cartProducts.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            cartProducts={cartProducts}
          />
        ))}
      <div className="subTotal">
        <h2>SubTotal</h2>
        <h2>${totalPrice}</h2>
      </div>
      <div className="goCheckout">
        <button>Go To Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
