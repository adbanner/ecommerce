import { useEffect, useState } from "react"

export default function Counter(props) {
  let [count, setCount] = useState(props.count)

  useEffect(()=>{
    setCount(props.count)
  },[props.count])

  // Plus
  const onPlusClick = (e) => {
    if (count < 100) {
      setCount(++count)
      props.setCount(count)
    }
  }

  //Minus
  const onMinusClick = (e) => {
    if (count > 1) {
      setCount(--count)
      props.setCount(count)
    } else {
      if (props.counter) { props.deleteItem() }
    }

  }

  return (
    <div className="counter">
      <button onClick={onMinusClick}>-</button>
      <p data-count>{count}</p>
      <button onClick={onPlusClick}>+</button>
    </div>
  )
}
