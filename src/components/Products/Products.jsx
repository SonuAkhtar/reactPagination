import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./products.css";
import PageButtons from "../PageButtons/PageButtons";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10 - 10}`
    );
    const data = await res.json();

    setTotalPages(Math.round(data.total / 10));
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="products__container">
      <h1>Product Pagination</h1>
      <div className="products__wrapper">
        {products.map((prod, i) => (
          <Card key={i} data={prod} />
        ))}
      </div>

      <PageButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
