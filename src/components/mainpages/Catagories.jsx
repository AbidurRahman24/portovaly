import React from 'react'

const Catagories = () => {
  const data = [
    {
      id:1,
      cateImg: <i class="fa-solid fa-shirt"></i>,
      cateName: "Fashion",
    },
    {
      id:2,
      cateImg: <i class="fa-duotone fa-laptop-medical"></i>,
      cateName: "Electronic",
    },
    {
      id:3,
      cateImg: <i class="fa-duotone fa-car"></i>,
      cateName: "Cars",
    },
    {
      id:4,
      cateImg: <i class="fa-sharp fa-solid fa-house-tree"></i>,
      cateName: "Home & Garden",
    },
    {
      id:5,
      cateImg: <i class="fa-duotone fa-gift"></i>,
      cateName: "Gifts",
    },
    {
      id:6,
      cateImg: <i class="fa-duotone fa-music"></i>,
      cateName: "Music",
    },
    {
      id:7,
      cateImg: <i class="fa-duotone fa-notes-medical"></i>,
      cateName: "Health & Beauty",
    },
    {
      id:8,
      cateImg: <i class="fa-solid fa-paw-claws"></i>,
      cateName: "Pets",
    },
  ]
  return (
    <>
    <div className='category'>
        {data.map((value) => {
          return (
            <div className='box f_flex' key={value.id}>
              {/* <span className='img'>{value.cateImg}</span> */}
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catagories