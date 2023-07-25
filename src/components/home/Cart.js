import { Context } from "../Context"
import { useContext, useEffect, useState } from "react"
import CartItem from "../cart/CartItem"

export default function Cart() {

  const { data, cart, setCart } = useContext(Context)
  const [total, setTotal ] = useState()

  useEffect(() => {
    let newTotal = 0
    cart.forEach(el => {
      newTotal += el.price * el.count
    })
    setTotal(newTotal)
  })


  //console.log(data.find(el => el.slug == cart[0].slug))
  

  return (
    <div data-cart className="cart grid hidden-">
      <div className="wrapper">
       { cart.length ? 
       
        <div data-cart-bg className="container">

          <div className="cart-header flex">
            <p>CART (<span>{cart.length}</span>)</p>
            <button data-remove-all>Remove all</button>
          </div>

          <div className="cart-items grid ">


            {/* <!-- Cart Item --> */}
            {cart.map((obj, id) =>
              <CartItem key={id} {...obj} />
            )}


          </div>
          <div className="cart-footer">
            <div className="total-div">
              <p>TOTAL</p>
              <span>$ {total}</span>
            </div>
            <button data-checkout-btn>CHECKOUT</button>
          </div>
        </div> :
        <div className="container">Cart is empty</div>
        
      }
      </div>
    </div>
  )
}