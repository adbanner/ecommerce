import { Context } from "../Context"
import { useContext, useEffect } from "react"
import { useState } from "react"

import Counter from "../home/Counter"

export default function (props) {
   
    const { addToCart, setRnd } = useContext(Context)
    const [count, setCount] = useState(1)

    const onAddClick = () =>{
        addToCart(props.id, count)
        
    }

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    return (
        <div className="product-detail grid gap-main">

            <div className="product-preview">
                <img src={props.categoryImage.mobile} alt={props.name}></img>

                <div className="container grid gap-200 " >
                    {props.new ? <span>NEW PRODUCT</span> : false}
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p data-price className="price">{USDollar.format(props.price)}</p>
                    <div className="flex flex-start gap-200">
                        <Counter setCount={setCount} count={count} />
                        <button data-add-to-cart className="btn1 btn" onClick={onAddClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className="product-info-section grid gap-main">
                <div className="product-features grid gap-500">
                    <h6>FEATURES</h6>
                    <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                </div>

                <div className="product-includes grid gap-500">
                    <h6>IN THE BOX</h6>
                    <div>
                        {props.includes.map((obj, id) =>
                            <p key={id}><span>{obj.quantity + "x"}</span>{obj.item}</p>
                        )}
                    </div>
                </div>

            </div>

            <div className="product-gallery grid gap-200">
                <div className="container grid gap-200" >
                    <img src={props.gallery.first.mobile}></img>
                    <img src={props.gallery.second.mobile}></img>
                </div>
                <img src={props.gallery.third.mobile}></img>
            </div>


        </div>
    )
}
