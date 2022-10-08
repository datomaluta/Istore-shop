import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon cart-icon"
      viewBox="0 0 512 512"
    >
      <title>Cart</title>
      <circle fill="#4E4E4E" cx="176" cy="416" r="32" />
      <circle fill="#4E4E4E" cx="400" cy="416" r="32" />
      <path
        fill="#4E4E4E"
        d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z"
      />
    </svg>
  );
};

export default CartIcon;
