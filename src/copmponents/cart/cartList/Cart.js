import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import "./Cart.scss";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
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
          />
        ))}
    </section>
  );
};

export default Cart;
