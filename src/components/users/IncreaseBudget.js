import { useRef } from "react"
export default function IncreaseBudget({increase}) {
    let cardNumberRef = useRef(null)
    let sumRef = useRef(null)
    function paymentHandler() {
        increase(sumRef.current.value)
    }
    return (
        <div>
            <input ref={cardNumberRef} name="cardNumber" id="cardNumber"/>
            <input ref={sumRef} name="sum" id="sum"/>
            <button onClick={paymentHandler}>Add money</button>
        </div>
    )
}