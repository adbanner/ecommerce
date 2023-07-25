import { Context } from "./Context"
import { useContext, useEffect, useState } from "react"
import CartItem from "./cart/CartItem"
import GoBackBtn from "./buttons/GoBackBtn"
import CheckInputs from "./functions/CheckInputs"

export default function Checkout() {
  const { data, cart, setCart } = useContext(Context)
  const [total, setTotal ] = useState()
  const [payment , setPaymnet] = useState("eMoney")
  const VAT = 20
  const shipping = 50
  


  useEffect(() => {
    let newTotal = 0
    cart.forEach(el => {
      newTotal += el.price * el.count
    })
    setTotal(newTotal)
  })

  const selectPeyment1 = (e) => {
    setPaymnet("eMoney")
    document.getElementById("eMoney").checked="checked"
  }
  const selectPeyment2 = (e) => {
    setPaymnet("cash")
    document.getElementById("cash").checked="checked"
  }

  const resetCart = () => {
    console.log("reset")
  }

  return (
    <section data-checkout className="checkout grid hidden- ">
      <div className="wrapper">
        <GoBackBtn/>
        <div className="container grid gap-400">
          <div className="content">
            <h5>CHECKOUT</h5>
            <div className="grid gap-700">

              {/* <!-- BILLING DETAILS --> */}
              <div className=" grid gap-200">
                <p className="input-section-title">Billing details</p>
                <div className="grid gap-300">

                  <div className="col-2">
                    <div className="input-div">
                      <p>Name</p>
                      <input data-input="name" className="input" placeholder="e.g. John Dows"></input>
                    </div>
                    <div className="input-div">
                      <p>Email Address</p>
                      <input data-input="email" className="input" placeholder="e.g john@email.com"></input>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-div">
                      <p>Phone Number</p>
                      <input data-input="phone" className="input" placeholder="e.g +1 202-555-0136"></input>

                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- SHIPPING INFO --> */}
              <div className=" grid gap-200">
                <p className="input-section-title">Shipping info</p>
                <div className="grid gap-300">

                  <div className="col-1">
                    <div className="input-div">
                      <p>Your Address</p>
                      <input data-input="address" className="input" placeholder="e.g. John Dows"></input>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-div">
                      <p>ZIP Code</p>
                      <input data-input="zip" className="input" placeholder="e.g. 10001"></input>
                    </div>
                    <div className="input-div">
                      <p>City</p>
                      <input data-input="city" className="input" placeholder="e.g. New York"></input>
                    </div>
                  </div>

                </div>
              </div>


              {/* <!-- PAYMENT DETAILS --> */}
              <div className=" grid gap-200">
                <p className="input-section-title">payment details</p>
                <div className="grid gap-300">

                  <div className="col-2">

                    <div className="input-div">
                      <p>Payment Method</p>

                    </div>
                    <div className="input-div grid ">
                      <div className="grid gap-200">

                        <div className="payment-method input btn" onClick={selectPeyment1} >
                          <input id="eMoney" name="radio" type="radio" defaultChecked="checked"></input>
                          <label htmlFor="eMoney" className="radio-label" >e-Money</label>
                        </div>
                        <div className="payment-method input  btn" onClick={selectPeyment2}>
                          <input id="cash" name="radio" type="radio"></input>
                          <label htmlFor="cash" className="radio-label">Cash in Delivery</label>
                        </div>





                      </div>
                    </div>
                  </div>

                  <div className="col-2" style={{display: payment=="eMoney"? "grid": "none"}}>

                   <div className="input-div" >
                      <p>e-Money Number</p>
                      <input data-input="zip" className="input" placeholder="e.g. 238521993"></input> 
                    </div>
                    <div className="input-div">
                      <p>e-Money PIN</p>
                      <input data-input="city" className="input" type="password" placeholder="e.g. 6891"></input>
                    </div>
                  </div> 

                  <div className="cash-on-delivery" style={{display: payment=="cash"? "flex": "none"}}>
                    <img src="./assets/checkout/icon-cash-on-delivery.svg" alt="Cash on delivery" className="img"></img>
                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at
                      your residence. Just make sure your address is correct so that your order will not be cancelled.
                    </p>
                  </div>

                </div>
              </div>


            </div>
          </div>

          {/* <!-- SUMMARY--> */}
          <div className=" grid">
            <div className="summary content">

              <div className="cart-header flex">
                <p>SUMMARY</p>

              </div>
              <div className="cart-items grid ">
                {/* <!-- Cart Item --> */}
                {cart.map((obj, id) =>
                  <CartItem key={id} {...obj} checkout={true}/>
                )}


              </div>
              <div className="cart-footer">
                <div className="grid gap-200">
                  <div className="grid gap-0">

                    <div className="total-div">
                      <p>TOTAL</p>
                      <span data-total>$ {total}</span>
                    </div>
                    <div className="total-div">
                      <p>SHIPPING</p>
                      <span data-shipping>$ {shipping}</span>
                    </div>
                    <div className="total-div">
                      <p>VAT (INCLUDED)</p>
                      <span data-vat>$ {Math.round(total/100*VAT)}</span>
                    </div>


                  </div>
                  <div className="total-div">
                    <p>GRAND TOTAL</p>
                    <span data-grand-total class="clr-main">$ {total+shipping+Math.round(total/100*VAT)}</span>
                  </div>
                </div>

                <button data-confirm className="btn1" onClick={CheckInputs}>CONTINUE & PAY</button>
                <span id="input_alert" className="error-clr"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}