import Navigation from "./Navigation"
import { Context } from "../Context"
import { useContext, useEffect } from "react"

export default function Header() {
    const { cart } = useContext(Context)
    return (
        <header className="header">
            <div className="wrapper flex ">
                <div className="burger-div">
                    <button data-burger className="burger"></button>
                    <button data-close-menu className="close-menu btn hidden">+</button>
                </div>
                <div data-logo className="logo"></div>
                <div className="nav">
                    <Navigation />
                </div>
                <button data-cart-icon className="cart-icon">{cart.length ? <span>{cart.length}</span> : ''}</button>

            </div>
        </header>
    )
}