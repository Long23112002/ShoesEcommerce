import React from 'react';
import "../../styles/product.css";

export interface ProductInterface {
    id: number;
    productName: string;
    description: string;
    price: string;
    image: string;  
}

const ProductItem: React.FC<{ product: ProductInterface }> = ({ product }) => {
  return (
    <div className="container__product-item">
      <img className="image-product" src={product.image} alt={product.productName} />
      <div>
        <h4 className='text-heading-product__responsive'>{product.productName}</h4>
        <p className='text-description-product__responsive'>{product.description}</p>
        <p  className='text-description-price__responsive'>{product.price} đ</p>
      </div>
    </div>
  );
};

export default ProductItem;
