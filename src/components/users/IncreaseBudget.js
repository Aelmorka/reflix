import { useState } from "react"
export default function IncreaseBudget({increase}) {
    let [cardNumber, setCardNumber] = useState('')
    let [sum, setSum] = useState('')
    function paymentHandler() {
        increase(sum)
        setSum('')
        setCardNumber('')
    }
    return (
        <div className="account__increase">
            <h3>Increase budget</h3>
            <label htmlFor="cardNumber">
                <span>Card number</span>
                <input value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    name="cardNumber" id="cardNumber"/>
            </label>
            <label htmlFor="sum">
                <span>Sum</span>
                <input value={sum} onChange={(e) => setSum(e.target.value)} name="sum" id="sum"/>
            </label>
            <button className="btn-prime" 
                onClick={paymentHandler}
                disabled={cardNumber === '' || sum === '' ? 'disabled' : ''}>
                    Add money
            </button>
        </div>
    )
}