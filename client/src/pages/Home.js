/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";

import "../styles/home.css";

import categories from "../media/categoriesHome";

import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useContext(ProductsContext);
  // console.log(products);
  return (
    <main className='main-wrapper'>
      <div className='slider-container'>
        <Slider />
      </div>
      <h3 className='categories-home-title'>Special Categories</h3>
      <div className='categories-main'>
        {categories.slice(0, 5).map((category) => {
          return (
            <div className='category-home'>
              <Link className='link-category-home' to={category.link}>
                <div className='image-container'>
                  <img className='category-img' src={category.image} />
                </div>
                <p className='name-categories-home'>{category.title}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Popular products */}
      {/* <div className='popular-products'> */}
      <h3 className='categories-home-title'>Popular Products</h3>
      {/* </div> */}

      <div className='products-home'>
        {products.map((product) => {
          return <ProductCard props={product} />;
        })}
      </div>

      {/* <Banner />
      <Grid /> */}
    </main>
  );
}

export default Home;
