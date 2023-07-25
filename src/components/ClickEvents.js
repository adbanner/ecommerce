import { Context } from "./Context"
import { useContext, useEffect } from "react"
import { useState } from "react"

export default function ClickEvents() {
   const { setPage, setCategory, category } = useContext(Context)
   const { product, setProduct } = useContext(Context)
   const { setCart } = useContext(Context)


   useEffect(() => {
      document.addEventListener("click", onClick)
   }, [])


   const onClick = (e) => {
      $("[data-fader]").classList.remove("active")

      console.log( e.target)

      // Logo
      if (e.target.matches("[data-logo]")) {
         window.location.href="/home"
      }

      // Logo
      if (e.target.matches("[data-menu]")) {
         window.location.href="/"+e.target.dataset.menu
         if (e.target.dataset.category) {
            setCategory(e.target.dataset.category)
            window.location.href="/category/"+e.target.dataset.category
         }
      }

      // Product
      // if (e.target.matches("[data-product-btn]")) {
      //    setProduct(e.target.dataset.productBtn)
      //    setPage("product-page")
      // }

      // Burger button
      if (e.target.matches("[data-burger]")) {
         $("[data-burger]").style.display = "none"
         $("[data-close-menu]").style.display = "block"
         $("[data-close-menu]").classList.add("active")

         $("[data-mob-menu]").classList.add("active")
         $("[data-fader]").classList.add("active")
      } else {
         $("[data-mob-menu]").classList.remove("active")
         $("[data-burger]").style.display = "block"
         $("[data-close-menu]").style.display = "none"
         $("[data-close-menu]").classList.remove("active")
      }






      //

      // Hide cart
      if (!e.target.closest("[data-cart-bg]") && $("[data-cart].active")) {
         $("[data-cart]").classList.remove("active")
      }
      // Show Cart
      if (e.target.matches("[data-cart-icon]") || e.target.matches("[data-add-to-cart]")) {
         $("[data-cart]").classList.toggle("active")
         $("[data-fader]").classList.toggle("active")
         $("[data-cart-icon]").style.pointerEvents = "none"
      }
      else {
         $("[data-cart-icon]").style.pointerEvents = "all"
      }

      if (e.target.matches("[data-cart-icon].active")) {
         console.log("cart")
         $("[data-cart]").classList.remove("active")
         $("[data-fader]").classList.remove("active")
      }


      // Remove all from cart
      if (e.target.matches("[data-remove-all]")) {
         setCart([])
      }


      //Checkout
      if (e.target.matches("[data-checkout-btn]")) {
         window.location.href="/checkout"
         $("[data-cart]").classList.remove("active")
         $("[data-fader]").classList.remove("active")
      }

      if(e.target.closest("[data-cart-bg]")){
         $("[data-fader]").classList.add("active")
      }


   }



   function $(obj) {
      return document.querySelector(obj)
   }

   return (
      <></>
   )
}