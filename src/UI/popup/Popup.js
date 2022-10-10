import "./Popup.scss";
import emptyCart from "../../assets/popupImgs/emptyCart.webp";

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-backdrop" onClick={props.onClose}></div>
      <div className="popup-content">
        <div className="popup-img">
          <img src={emptyCart} alt="emptycart" />
        </div>
        <h1>Your Cart is empty</h1>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
