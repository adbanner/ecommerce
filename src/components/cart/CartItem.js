import { useEffect, useState } from "react"
import { Context } from "../Context"
import { useContext } from "react"
import Counter from "../home/Counter"

export default function CartItem(props) {
    const { cart, setCart, updateState } = useContext(Context)
    const [count, setCount] = useState(props.count)
    
    // Renew item info
    useEffect(() => {
        let itemIndex = cart.findIndex((el)=> el.id == props.id)
        cart[itemIndex].count = Number(count)
        updateState(Math.random())
        
        console.log("count: "+count)
    }, [cart, count])
    
    // Delete item from cart
    const deleteItem = () => {
        if(cart.length==1){window.open("./#home", "_self");}
        setCart(cart.filter((el)=> el.id!=props.id))
    }

    return (
        <div className="cart-item">
             <a href={"./#product-page/"+ props.slug }>
                <img src={props.image} alt={props.name}></img>
            </a>
            <div className="cart-item-info">
                <p>{props.name}</p>
                <span>$ {props.price}</span>
            </div>

            {!props.checkout ? 
                        <Counter setCount={setCount} count={props.count} counter={true} deleteItem={deleteItem}/> :
                        <p data-count className="count">x<span>{props.count}</span></p>
            }
        </div>
    )
}