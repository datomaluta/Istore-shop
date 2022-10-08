import { useEffect, useState } from "react";
import NewProductItem from "../newProductItem/NewProductItem";
import "./NewProductList.scss";
import "../../../styles/typography.scss";

const NewProductList = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories/1/products"
      );
      const data = await response.json();
      const filteredData = data.filter(
        (product) => product.price > 0 && product.price < 1000
      );
      setNewProducts(filteredData);
    };
    fetchData();
  }, []);

  console.log(newProducts);

  return (
    <section className="products__section">
      <h1 className="heading-primary">New Products</h1>
      <div className="products__container">
        {newProducts.length > 0 &&
          newProducts.map((product, index) => {
            return (
              index < 3 && (
                <NewProductItem
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  img={product.images[0]}
                  price={product.price}
                />
              )
            );
          })}
      </div>
    </section>
  );
};

export default NewProductList;
