import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CartIconCard from "../../assets/cardIcons/CartIconCard";
import LoadingSpinner from "../../UI/spinner/LoadingSpinner";
import NewProductList from "../newProducts/newProductList/NewProductList";
import "./ProductDetails.scss";
import { cartActions } from "../../store/cart-slice";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        price: product.price,
        title: product.title,
        img: product.images[0],
        quantity: count,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${params.id}`
      );
      const data = await response.json();
      setIsLoading(false);
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  const countIncreaseHandler = () => {
    setCount((currCount) => currCount + 1);
  };

  const countDecreaseHandler = () => {
    if (count === 1) {
      return;
    } else {
      setCount((currCount) => currCount - 1);
    }
  };

  const countChangeHandler = (event) => {
    setCount(event.target.value);
  };

  return (
    <>
      <section className="detail-section">
        {isLoading && <LoadingSpinner />}
        {isLoading && <div className="for-loading"></div>}
        {product && !isLoading && (
          <div className="detail">
            <div className="detail-img-box">
              <img src={product.images[0]} alt="fash" />
            </div>
            <div className="detail-text-box">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h3>${product.price.toFixed(2)}</h3>
              <div className="detail-count-input">
                <button onClick={countDecreaseHandler}>-</button>
                <input value={count} onChange={countChangeHandler} />
                <button onClick={countIncreaseHandler}>+</button>
              </div>
              <button onClick={addToCartHandler} className="detail-add-cart">
                <span>Add To Cart</span>
                <span>
                  <CartIconCard />
                </span>
              </button>
            </div>
          </div>
        )}
      </section>
      <NewProductList />
    </>
  );
};

export default ProductDetails;
