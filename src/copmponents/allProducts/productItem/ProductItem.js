import classes from "./ProductItem.module.scss";
import StartIcon from "../../../assets/genIcons/StarIcon";
import { Link } from "react-router-dom";
import CartIconCard from "../../../assets/cardIcons/CartIconCard";

const ProductItem = (props) => {
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
        <button className={classes["card__book--now"]}>
          <span>Add To Cart</span>
          <span>
            <CartIconCard />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ProductItem;
