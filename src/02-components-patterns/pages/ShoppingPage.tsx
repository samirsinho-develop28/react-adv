import {  ProductCard } from '../components/ProductCard';
import { ProductButtons } from "../components/ProductButtons";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }} >
          <ProductCard product ={ product } >            
            <ProductImage  />
            <ProductTitle title={'Hola mundo'} />
            <ProductButtons />
          </ProductCard>          

          {/* <ProductCard product ={ product } >            
            <ProductCard.Image  />
            <ProductCard.Title  />
            <ProductCard.Buttons />
          </ProductCard> */}


        </div>

    </div>
  )
}
