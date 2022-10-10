import classes from "./ProductItem.module.scss";
import StartIcon from "../../../assets/genIcons/StarIcon";
import { Link } from "react-router-dom";
import CartIconCard from "../../../assets/cardIcons/CartIconCard";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = (props) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        img: props.img,
        quantity: 1,
      })
    );
  };

  console.log(cartProducts);

  return (
    <div className={classes["card"]}>
      <Link className={classes["card__link"]} to={`/product/${props.id}`}>
        <div className={classes["card__img-box"]}>
          <img src={props.img} alt="product pic" />
        </div>
        <p className={classes["card__title"]}>{props.title}</p>
        <p className={classes["card__price"]}>${props.price.toFixed(2)}</p>
        <div className={classes["card__stars"]}>
          <StartIcon />
          <StartIcon />
          <StartIcon />
          <StartIcon />
          <StartIcon />
        </div>
      </Link>
      <button onClick={addToCartHandler} className={classes["card__book--now"]}>
        <span>Add To Cart</span>
        <span>
          <CartIconCard />
        </span>
      </button>
    </div>
  );
};

export default ProductItem;
