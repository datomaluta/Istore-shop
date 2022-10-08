import { Link } from "react-router-dom";
import "./NewProductItem.scss";
import StartIcon from "../../../assets/genIcons/StarIcon";

const NewProductItem = (props) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__img-box">
          <img src={props.img} alt="newproduct pic" />
        </div>
        <div className="card__text-box">
          <p className="card__title">{props.name}</p>
          <p className="card__price">${props.price}</p>
          <div className="card__stars">
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
          <Link className="card__book--now card__book--now-big" to="/shop">
            Add To Cart
          </Link>
        </div>
      </div>

      <div className="card__side card__side--back">
        <p className="card__side--back-price">${props.price}</p>
        <Link className="card__side--back-seeAll" to={`/product/${props.id}`}>
          See Details
        </Link>
      </div>
    </div>
  );
};

export default NewProductItem;
