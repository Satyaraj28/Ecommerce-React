import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Fetch products
        const productRes = await fetch("http://localhost:5120/api/products/");
        const productData = await productRes.json();
        setProducts(productData);
        setFilter(productData);
        console.log("Fetched Products:", productData);  // Log product data

        // Fetch categories
        const categoryRes = await fetch("http://localhost:5120/api/products/category");
        const categoryData = await categoryRes.json();
        console.log("Fetched Categories:", categoryData);  // Log category data
        setCategories(["All", ...categoryData]);  // Assuming categoryData is an array of category names
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === "All") {
      setFilter(products);  // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.category.name === category  // Assuming category is an object with 'name' field
      );
      console.log("Filtered Products:", filtered);  // Log filtered products
      setFilter(filtered);  // Update state with filtered products
    }
  };

  const Loading = () => (
    <div className="row">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="col-md-4 col-sm-6 mb-4" key={index}>
          <Skeleton height={400} />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-3">
        {categories.map((category) => (
          <button
            key={category}
            className="btn btn-outline-dark btn-sm mx-2"
            onClick={() => filterProducts(category)}  // Filter products by category
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => {
          const { id, title, description, price, image, rating, category } = product;

          return (
            <div className="col-md-4 col-sm-6 col-xs-8 mb-4" key={id}>
              <div className="card text-center h-100 shadow-sm">
                <img
                  className="card-img-top p-3"
                  src={image}
                  alt={title}
                  height={250}
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {title.length > 20 ? `${title.substring(0, 20)}...` : title}
                  </h5>
                  <p className="card-text text-muted">
                    {description.length > 60
                      ? `${description.substring(0, 60)}...`
                      : description}
                  </p>
                  <span className="badge bg-primary mb-2">{category.name}</span>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="text-warning me-2">
                      {"★".repeat(Math.round(rating.rate))}
                      {"☆".repeat(5 - Math.round(rating.rate))}
                    </span>
                    <small className="text-muted">({rating.count} reviews)</small>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {price.toFixed(2)}</li>
                </ul>
                <div className="card-body">
                  <Link to={`/product/${id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-outline-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="display-5">Explore Our Latest Products</h2>
          <p className="text-muted">Find everything you need, from electronics to clothing.</p>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
