import { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import LoadingSpinner from "../../../UI/spinner/LoadingSpinner";

import "./ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories/1/products"
      );
      const data = await response.json();
      setIsLoading(false);
      const filteredData = data.filter(
        (product) => product.price > 0 && product.price < 1000
      );
      setProducts(filteredData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const result = products.filter((__, idx) => idx < count);
      setInitialProducts(result);
    }
  }, [products, count]);

  const loadMoreHandler = () => {
    setCount((curCount) => curCount + 3);
    const res = products.filter((__, idx) => idx < count + 3);

    setInitialProducts(res);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isLoading && <div className="for-loading"></div>}
      {!isLoading && (
        <section className="section-products">
          <div className="products__container">
            {initialProducts.length > 0 &&
              initialProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.images[0]}
                  price={product.price}
                />
              ))}
          </div>
          <div>
            <button className="load-more" onClick={loadMoreHandler}>
              Load More...
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductList;
