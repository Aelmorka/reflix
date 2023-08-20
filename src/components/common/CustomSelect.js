import './CustomSelect.css'
import { useState, useEffect } from "react"
export default function CustomSelect({chosen, options}) {
    let [showOptions, setShowOptions] = useState(false)
    let [selectedIndex, setSelectedIndex] = useState(null)
    
    function handleClickOutside(e){
        if (
            !e.target.classList.contains("custom-select-option") &&
            !e.target.classList.contains("custom-select-text")
        ) {
            setShowOptions(false)
        }
    }
    function handleListDisplay() {
        setShowOptions(true)
    }
    function handleOptionClick(e) {
        let id = e.target.getAttribute("data-id")
        let index = options.findIndex(el => el.id === Number(id))
        setSelectedIndex(index)
        chosen(id)
        setShowOptions(false)
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            window.removeEventListener('keydown', handleClickOutside);
        }
    }, [])
    return (
        <div className="custom-select-container">
            <div className="custom-select-text"
                onClick={handleListDisplay}>
                {selectedIndex ? options[selectedIndex].name : "Select friend"}
            </div>
            {showOptions &&
                <ul className="custom-select-options">
                    {options.map(option => {
                        return (
                            <li className="custom-select-option"
                                data-name={option.name}
                                data-id={option.id}
                                key={option.id}
                                onClick={handleOptionClick}>
                                {option.name}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}