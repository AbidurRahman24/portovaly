import React from "react"
import cate1 from '../../assets/top2.jpg'
const Catg = () => {
  const data = [
    {
      cateImg: cate1,
      cateName: "Apple",
    },
    {
      cateImg: cate1,
      cateName: "Samasung",
    },
    {
      cateImg: cate1,
      cateName: "Oppo",
    },
    {
      cateImg: cate1,
      cateName: "Vivo",
    },
    {
      cateImg: cate1,
      cateName: "Redimi",
    },
    {
      cateImg: cate1,
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg