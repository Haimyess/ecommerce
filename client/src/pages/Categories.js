/** @format */
import React from "react";

function Categories() {
  return (
    <div>
      <h1>Categories</h1>

      <div className='grid-wrapper'>
        <div className='category-grid fruits'>
          <span className=''>Fruits</span>
        </div>
        <div className='category-grid cereals'>
          <span>Cereals</span>
        </div>
        <div className='category-grid grains'>
          <span>Grains</span>
        </div>
        <div className='category-grid alcohol'>Alcohol</div>
        <div className='category-grid vegan'>
          <span>Vegan</span>
        </div>
        <div className='category-grid drinks'>
          <span>Drinks</span>
        </div>
        <div className='category-grid meat'>
          <span>Meat</span>
        </div>
        <div className='category-grid dairy'>
          <span>Dairy</span>
        </div>
        <div className='category-grid vegetables'>
          <span>Vegetables</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
