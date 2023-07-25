import { Context } from "../Context"
import { useContext, useEffect, useState } from "react"

export default function OrderConfirmation() {

    const {setCart } = useContext(Context)

    const backHome = () => {
        setCart([])
        window.location.reload()
    }
    return (
        <div data-confirmation className="confirmation fader grid hidden ">
            <div className="container grid gap-300 ">
            <img src="./assets/checkout/icon-order-confirmation.svg" alt="Order confirmation"></img>
            <div className="grid gap-100">
                <h5>THANK YOU FOR<br/> YOUR ORDER</h5>
                <p>You will receive an email confirmation shortly.</p>
            </div>
            <a href="./#home" target="_self">
                <button data-home-btn className="btn1" onClick={backHome}>BACK TO HOME</button>
            </a>
            </div>
        </div>
    )
}