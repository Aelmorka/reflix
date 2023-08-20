import { useRef } from "react"
export default function IncreaseBudget({increase}) {
    let cardNumberRef = useRef(null)
    let sumRef = useRef(null)
    function paymentHandler() {
        increase(sumRef.current.value)
    }
    return (
        <div className="account__increase">
            <h3>Increase budget</h3>
            <label htmlFor="cardNumber">
                <span>Card number</span>
                <input ref={cardNumberRef} name="cardNumber" id="cardNumber"/>
            </label>
            <label htmlFor="sum">
                <span>Sum</span>
                <input ref={sumRef} name="sum" id="sum"/>
            </label>
            <button className="btn-prime" onClick={paymentHandler}>Add money</button>
        </div>
    )
}