import React from 'react'
import Annocument from '../components/annocument/Annocument'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpages/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/Wrapper/Wrapper'

const Pages = ({productItems, addToCart, CartItem, shopItems}) => {
  return (
    <div>
        <Home  CartItem={CartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annocument />
        <Wrapper />
    </div>
  )
}

export default Pages