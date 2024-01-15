import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductDetails from '@/components/products/product-details';
import { config } from '@/utils/config';
import React from 'react'

export const generateMetadata = async ({ params }) => {
  const productId = params.id;
    if (!productId || isNaN(productId)) throw new Error("ProductId is invalid");
    const res = await fetch(`${config.apiURL}/products/${productId}`);
    const product = await res.json();
  
  return {
        title: product.title,
        description: product.description,
    };
};


const ProductDetailsPage = async({params}) => {

  const productId= params.id;
  if(!productId || isNaN(productId)) throw new Error("ProductId is invalid")

  const res= await fetch(`${config.apiURL}/products/${productId}`);
  const product =await res.json();
 

  return (
    <div>
      <PageHeader title={product.title}/>
      <Spacer height={50}/>
      <ProductDetails product={product}/>
      <Spacer/>
      </div>
  )
}

export default ProductDetailsPage