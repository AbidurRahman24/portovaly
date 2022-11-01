import React from "react"
import annu1 from '../../assets/annn1.jpg'
import annu3 from '../../assets/annu3.jpg'
const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src={annu3} width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src={annu1} width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument